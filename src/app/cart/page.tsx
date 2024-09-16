"use client";

import NcImage from "@/shared/NcImage/NcImage";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CartItem {
  imageUrls: { type: string; url: string }[];
  name: string;
  thumbnail: string;
  price: string;
}

const PageCart = ({ }) => {
  const [showModal, setShowModal] = useState(false);
  const [moduleList, setModuleList] = useState<CartItem[]>([]);

  //const [moduleList, setModuleList] = useState([]);
  const getModule = async () => {
    try {
      const userId = localStorage.getItem("id")
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart`, { userId: userId },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          },
        }
      );

      setModuleList(response.data.data)


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getModule();
  }, []);

  return (
    <div className={`PageCart`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24    space-y-8 sm:space-y-10">

          <div className=" ">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Cart Page
            </h2>

          </div>

          <hr className="w-full border-t-2 border-neutral-100 dark:border-neutral-700" />

          <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div className="space-y-3">
              {moduleList && moduleList.map((cartItem, i) => {
                return <div className={`Cart relative flex w-full flex-col group `} key={i}>
                  <div className="relative flex-shrink-0 flex gap-5">
                    <div className="flex w-36 h-20 rounded overflow-hidden z-0">


                      {cartItem && cartItem.imageUrls ? cartItem.imageUrls.map((ite: any, i: any) => {

                        return ite.type === "thumbnail" && <NcImage
                          containerClassName="flex w-36 h-20 rounded overflow-hidden z-0"
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${ite.url}`}
                          className="object-cover  w-36 h-20 group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                        />
                      }) :
                        <NcImage
                          containerClassName="flex  w-36 h-20 rounded-3xl overflow-hidden z-0"
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thumbnail/${cartItem.thumbnail}`}
                          className="object-cover  w-36 h-20 group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                        />
                      }

                    </div>
                    <div className='flex flex-col gap-3'>
                      <h2 className=" z-10 text-xs p-1 text-black   ">{cartItem && cartItem.name}</h2>
                      <div className=" inset-x-3 flex text-black">{cartItem.price}</div>
                    </div>
                  </div>


                </div>
              })}
            </div>


          </div>
        </div>
      </div>


    </div>
  );
};

export default PageCart;
