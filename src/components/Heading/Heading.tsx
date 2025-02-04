"use client";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import NextPrev, { NextPrevProps } from "@/shared/NextPrev/NextPrev";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export interface HeadingProps extends NextPrevProps {
  fontClass?: string;
  rightPopoverText?: ReactNode;
  rightPopoverOptions?: typeof solutions;
  desc?: ReactNode;
  children: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
}

const solutions = [
  {
    name: "Last 24 hours",
    href: "##",
  },
  {
    name: "Last 7 days",
    href: "##",
  },
  {
    name: "Last 30 days",
    href: "##",
  },
];

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = "",
  className = "mb-3 mx-1.5 lg:mb-3 text-neutral-900 dark:text-neutral-50 cursor-pointer",
  isCenter = false,
  hasNextPrev = false,
  fontClass = "text-xl font-semibold gap-2",
  rightPopoverText,
  rightPopoverOptions = solutions,
  ...args
}) => {
  const [value, setValue] = useState(rightPopoverOptions[0].name);

  useEffect(() => {
    setValue(rightPopoverOptions[0].name);
  }, [rightPopoverOptions]);

  const renderRightPopoverText = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              as="h3"
              className="text-green-500 flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75"
            >
              {value}
              <ChevronDownIcon className="h-6 w-6 ml-2" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 w-screen max-w-[240px] mt-3 -translate-x-1/2 left-1/2">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white dark:bg-neutral-800 px-3 py-3.5">
                    {rightPopoverOptions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setValue(item.name);
                          close();
                        }}
                        className="flex items-center -my-1 p-3 rounded-2xl transition duration-150 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <p className="font-medium text-base">{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={
          isCenter
            ? "flex flex-col items-center text-center w-full max-w-2xl mx-auto"
            : "max-w-2xl"
        }
      >
        <h2
          className={`flex items-center  flex-wrap ${
            isCenter ? "justify-center" : ""
          } ${fontClass}`}
        >
          {children || `Section Heading`}
          {rightPopoverText && (
            <>
              <span className="block w-2">{` `}</span>
              {renderRightPopoverText()}
            </>
          )}
        </h2>
        {!!desc && (
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
      {hasNextPrev && !isCenter && (
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <NextPrev {...args} />
        </div>
      )}
    </div>
  );
};

export default Heading;
