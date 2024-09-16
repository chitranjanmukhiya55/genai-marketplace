"use client";

import React, { FC, Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonThird from "@/shared/Button/ButtonThird";
import ButtonClose from "@/shared/ButtonClose/ButtonClose";
import Checkbox from "@/shared/Checkbox/Checkbox";
import Slider from "rc-slider";
import Radio from "@/shared/Radio/Radio";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useDispatch } from "react-redux"
import { setModuleList } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { BulbIcon } from "@/icons";
import authFetch from "@/utils/interceptor";

interface SelectedCategories {
  categories: string[]; // Define the type of categories array
  type: string[];
  model: string;
}
// DEMO DATA
const typeOfSales = [
  {
    name: "Buy now",
  },
  {
    name: "On Auction",
  },
  {
    name: "New",
  },
  {
    name: "Has Offers",
  },
];

const fileTypes = [
  {
    name: "Image",
  },
  {
    name: "Video",
  },
  {
    name: "Audio",
  },
];

const sortOrderRadios = [
  { name: "Recently listed", id: "Recently-listed" },
  // { name: "Ending soon", id: "Ending-soon" },
  // { name: "Price low - hight", id: "Price-low-hight" },
  // { name: "Price hight - low", id: "Price-hight-low" },
  { name: "Most favorited", id: "Most-favorited" },
];

export interface TabFiltersProps {

  moduleList: any
}


const TabFilters: FC<TabFiltersProps> = ({ moduleList }) => {

  const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false);

  const [isVerifiedCreator, setIsVerifiedCreator] = useState(true);
  const [rangePrices, setRangePrices] = useState([0.01, 10]);
  const [fileTypesState, setfileTypesState] = useState<string[]>([]);
  const [sortOrderStates, setSortOrderStates] = useState<string>("");
  const [clearAll, setClearAll] = useState<string>("");

  const closeModalMoreFilter = () => setisOpenMoreFilter(false);
  const openModalMoreFilter = () => setisOpenMoreFilter(true);
  const dispatch = useDispatch()
  const [homeList, setHomeList] = useState([])
  const [typeList, setTypeList] = useState([])

  const getCategoryList = async () => {

    try {

      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-category-modules`;
      const response = await authFetch.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("marketplacegenaitoken")
        },
      });

      setHomeList(response.data.data)



    } catch (error) {
      console.error("Error making API call:", error);
    }
  }

  const getTypeList = async () => {

    try {

      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-type-modules`;
      const response = await authFetch.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("marketplacegenaitoken")
        },
      });

      setTypeList(response.data.data)



    } catch (error) {
      console.error("Error making API call:", error);
    }
  }

  useEffect(() => {
    getCategoryList()
    getTypeList()

  }, [])



  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories>({
    categories: [],
    type: [],
    model: ""
  });


  const handleChangeCategoryTypes = (checked: boolean, category: string, listType: 'categories' | 'type') => {

    setSelectedCategories((prevCategories) => {
      const updatedList = checked
        ? Array.from(new Set([...prevCategories[listType], category])) // Convert Set back to Array
        : prevCategories[listType].filter((item) => item !== category);

      return {
        ...prevCategories,
        [listType]: updatedList,
      };
    });
  };


  const handleApplyButtonClick = async () => {
    const formattedCategories = selectedCategories.categories.join(',') as string;
    const formattedTypes = selectedCategories.type.join(',');

    const dataToSubmit = {
      categories: formattedCategories,
      type: formattedTypes,
      //model: selectedCategories.model, // This seems to be empty or not handled in your current implementation
    };

    try {

      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/modules/filter`;
      const response = await axios.post(apiUrl, dataToSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setModuleList(response.data.data))

    } catch (error) {
      console.error("Error making API call:", error);
    }
  };


  // const handleClearCategory = (indexToRemove:any) => {
  // const updatedCategories = [...selectedCategories];
  // updatedCategories.splice(indexToRemove, 1);
  // setSelectedCategories(updatedCategories);
  // handleApplyButtonClick()


  const renderXClear = () => {
    return (
      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  };


  const renderTabsCategory = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm  rounded-xl border focus:outline-none
               ${open
                  ? "!border-primary-500 "
                  : "border-neutral-300 dark:border-neutral-700"
                }
               
                  "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
               
                `}
            >
              {/* <BulbIcon/> */}

              <span className="ml-2">Category</span>
              <ChevronDownIcon className="w-4 h-4 ml-3" />
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
              <Popover.Panel className="absolute z-40 w-80 px-4 mt-3 left-0 sm:px-0 ">
                <div className="overflow-hidden rounded shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex text-xs flex-col px-5 py-6 space-y-2">
                    {/* <div className="capitalize text-sm">
                        <Checkbox
                          name={"all"}
                          label={"all"}
                          onChange={(checked) =>   setSelectedCategories()}
                          className="text-sm"
                        />
                      </div> */}
                    {homeList && homeList.length > 0 && homeList.map((item: any) => {

                      return <div key={item.name} className="capitalize text-xs">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={selectedCategories.categories.includes(item.name)}

                          onChange={(checked) => handleChangeCategoryTypes(checked, item.name, 'categories')}
                          className="text-xs"
                        />
                      </div>
                    })}
                  </div>
                  <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />
                  <div className="p-3 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setSelectedCategories({
                          categories: [],
                          type: [],
                          model: ""
                        });


                        handleApplyButtonClick();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        handleApplyButtonClick();
                        close();
                        // setSelectedCategories([]);
                      }}

                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>

          </>
        )}
      </Popover>
    );
  };


  const renderTabsType = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm  rounded-xl border focus:outline-none
               ${open
                  ? "!border-primary-500 "
                  : "border-neutral-300 dark:border-neutral-700"
                }
               "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
                
                `}
            >
              {/* <BulbIcon/> */}

              <span className="ml-2">Type</span>
              <ChevronDownIcon className="w-4 h-4 ml-3" />
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
              <Popover.Panel className="absolute z-40  w-80 px-4 mt-3 left-0 sm:px-0 ">
                <div className="overflow-hidden rounded shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex text-xs flex-col px-5 py-6 space-y-2">
                    {/* <div className="capitalize text-sm">
                        {/* <Checkbox
                          name={"all"}
                          label={"all"}
                        //  onChange={(checked) =>   setSelectedCategories(['all'])}
                          className="text-sm"
                        />
                      </div> */}
                    {typeList && typeList.length > 0 && typeList.map((item: any) => {

                      return <div key={item.id} className="capitalize text-xs">
                        <Checkbox
                          name={item.type_name}
                          label={item.type_name}
                          defaultChecked={selectedCategories.type.includes(item.type_name)}

                          // onChange={(checked) => handleChangeCategoryType(checked, item.type_name)}
                          onChange={(checked) => handleChangeCategoryTypes(checked, item.type_name, 'type')}
                          className="text-xs"
                        />
                      </div>
                    })}
                  </div>
                  <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />
                  <div className="p-3 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        close();
                        setSelectedCategories({
                          categories: [],
                          type: [],
                          model: ""
                        });


                        handleApplyButtonClick();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        handleApplyButtonClick();
                        close();
                      }}

                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>

          </>
        )}
      </Popover>
    );
  };




  // FOR RESPONSIVE MOBILE
  const renderTabMobileFilter = () => {
    function renderMoreFilterItem(typeOfSales: { name: string; }[]): React.ReactNode {
      throw new Error("Function not implemented.");
    }

    return (
      <div className="flex-shrink-0">
        <div
          className={`flex flex-shrink-0 items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none cursor-pointer`}
          onClick={openModalMoreFilter}
        >
          <span>
            <span className="hidden sm:inline">NFTs</span> filters (3)
          </span>
          {renderXClear()}
        </div>

        <Transition appear show={isOpenMoreFilter} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModalMoreFilter}
          >
            <div className="min-h-screen text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                className="inline-block py-8 h-screen w-full"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      NFTs filters
                    </Dialog.Title>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalMoreFilter} />
                    </span>
                  </div>

                  <div className="flex-grow overflow-y-auto">
                    <div className="px-8 md:px-10 divide-y divide-neutral-200 dark:divide-neutral-800">
                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Sale Types</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(typeOfSales)}
                        </div>
                      </div>
                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">File Types</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(fileTypes)}
                        </div>
                      </div>

                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Range Prices</h3>
                        <div className="mt-6 relative ">
                          <div className="relative flex flex-col space-y-8">
                            <div className="space-y-5">
                              <Slider
                                range
                                className="text-red-400"
                                min={0}
                                max={2000}
                                defaultValue={[0, 1000]}
                                allowCross={false}
                                onChange={(_input: number | number[]) =>
                                  setRangePrices(_input as number[])
                                }
                              />
                            </div>

                            <div className="flex justify-between space-x-5">
                              <div>
                                <label
                                  htmlFor="minPrice"
                                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                >
                                  Min price
                                </label>
                                <div className="mt-1 relative rounded-md">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-neutral-500 sm:text-sm">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    name="minPrice"
                                    disabled
                                    id="minPrice"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                    value={rangePrices[0]}
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="maxPrice"
                                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                >
                                  Max price
                                </label>
                                <div className="mt-1 relative rounded-md">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-neutral-500 sm:text-sm">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    disabled
                                    name="maxPrice"
                                    id="maxPrice"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                    value={rangePrices[1]}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* --------- */}
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Sort Order</h3>
                        <div className="mt-6 relative ">
                          <div className="relative flex flex-col space-y-5">
                            {sortOrderRadios.map((item) => (
                              <Radio
                                id={item.id}
                                key={item.id}
                                name="radioNameSort"
                                label={item.name}
                                defaultChecked={sortOrderStates === item.id}
                                onChange={setSortOrderStates}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={() => {
                        setRangePrices([0.01, 10]);
                        // setSelectedCategories(["all"]);
                        setfileTypesState([]);
                        setSortOrderStates("");
                        closeModalMoreFilter();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  };

  return (
    <div className="flex   flex-col gap-3">

      <div className="lg:flex space-x-4">
        {renderTabsCategory()}
        {renderTabsType()}

      </div>


    </div>
  );
};

export default TabFilters;
