"use client"
import React, { FC, useEffect, useState } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode/SwitchDarkMode";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Navigation from "@/shared/Navigation/Navigation";
import Link from "next/link";
import SearchBoxList from "./SearchBoxList";
import axios from "axios";
import { CartIcon } from "@/icons";
import { SearchIcon } from "@/icons/search";
import Badge from "@/shared/Badge/Badge";
import CartSidebar from "./CartSidebar";
import { useAppSelector } from "@/redux/hooks";

export interface MainNav2LoggedProps { }

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const { items } = useAppSelector((state) => state.cart);
  const [openSearchBox, setOpenSearchBox] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [openCartSide, setOpenCartSide] = useState(false)
  // let handleSearchSubmit:any;
const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const query = event.target.value;
  setSearchQuery(query);

  if (query.trim().length > 0) {
    setOpenSearchBox(true);
  } else {
    setOpenSearchBox(false);
    setSearchList([]); // Clear the search list when the input is empty
  }
};

  // useEffect(() => {
  //   const handleSearchSubmit = async () => {


  //     if (searchQuery === "text") {
  //       setOpenSearchBox(false)
  //       setSearchList([])
  //     } else {
  //       setOpenSearchBox(true)
  //       try {

  //         const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/${searchQuery}`;
  //         const response = await axios.get(apiUrl, {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });


  //         setSearchList(response.data.data)

  //       } catch (error) {
  //         console.error("Error making API call:", error);
  //       }

  //     }




  //   };

  //   handleSearchSubmit()
  // }, [searchQuery])

  useEffect(() => {
  const handleSearchSubmit = async () => {
    if (searchQuery.trim().length === 0) {
      setOpenSearchBox(false);
      setSearchList([]);
      return;
    }

    setOpenSearchBox(true);
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/${searchQuery}`;
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSearchList(response.data.data);
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  const delayDebounce = setTimeout(() => {
    handleSearchSubmit();
  }, 300); // Debounce time of 300ms

  return () => clearTimeout(delayDebounce);
}, [searchQuery]);


  const [totalItem, setTotalItem] = useState([]);

  const getItem = async () => {
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

      setTotalItem(response.data.data)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <div className={`nc-MainNav2Logged relative z-10`}>
        <div className="container">
          <div className="h-20 flex justify-between space-x-4 xl:space-x-8">
            <div className="self-center flex justify-start flex-grow space-x-3 sm:space-x-8 lg:space-x-10">
              <Logo />
              <div className="hidden sm:block flex-grow">
                <div className="relative ">
                  <Input
                    type="search"
                    placeholder="Search items"
                    className="pr-10 w-full"
                    sizeClass="h-[42px] pl-4 py-3"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />{/** this is my input for search item how to do this */}
                  <Link href={"/search"} className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-500"
                  // onClick={()=> { 
                  //                handleSearchSubmit()}}
                  >
                    <SearchIcon />
                  </Link>
                  <input type="submit" hidden value="" />
                  {openSearchBox &&
                    <SearchBoxList setOpenSearchBox={setOpenSearchBox} searchList={searchList} />

                  }
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center  justify-end text-neutral-700 dark:text-neutral-100 ">
              <div className="hidden xl:flex space-x-1">

                <Link href="/module-list" className="nc-Button relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-100 text-gray-600 self-center  ">Marketplace</Link>
                <Link href="/create-item" className="nc-Button relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-100 text-gray-600 self-center  ">Create</Link>
                {/* <Link href="/"     className="nc-Button relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-100 text-gray-600 self-center  ">Hire</Link>
              <Link href="/"     className="nc-Button relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-100 text-gray-600 self-center  ">Sell</Link> */}
                <div onClick={() => setOpenCartSide(true)} className="nc-Button cursor-pointer relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-100 text-gray-600 self-center  ">

                  <CartIcon />
                  {totalItem ? <Badge name={totalItem.length} className="absolute top-0 right-2 text-[8px] h-5 w-6 bg-primary-6000 text-white  flex items-center justify-center" /> : 0}
                </div>

                <AvatarDropdown />

              </div>
              <div className="flex items-center space-x-1 xl:hidden">
                <div onClick={() => setOpenCartSide(true)} className="nc-Button cursor-pointer relative h-auto inline-flex items-center justify-center rounded transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-70  hover:bg-primary-100 text-gray-600 self-center  ">
           <Link href={"/search"} className="mr-5"
                 
                  >
                    <SearchIcon />
                  </Link>
                  <CartIcon />
                  {totalItem ? <Badge name={totalItem.length} className="absolute top-0 right-2 text-[8px] h-5 w-6 bg-primary-6000 text-white flex items-center justify-center" /> : 0}
                </div>
                
                <MenuBar />
              </div>
            </div>
          </div>
        </div>

      </div>
      {openSearchBox &&
        <div
          className="absolute top-0 w-full h-[100vh] left-0  bottom-0 z-[9] bg-sky-900 bg-opacity-30   flex items-center justify-center"
          onClick={() => setOpenSearchBox(false)}
        ></div>

      }

      {openCartSide && <CartSidebar setOpenCartSide={setOpenCartSide} />}
      {openCartSide && <div
        className="absolute top-0 w-full h-[100vh] left-0  bottom-0 z-[9] bg-sky-900 bg-opacity-30   flex items-center justify-center"
        onClick={() => setOpenCartSide(false)}
      ></div>}

    </>
  );
};

export default MainNav2Logged;
