"use client"
import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { CloseEye, CloseIcon } from '@/icons';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import NcImage from '@/shared/NcImage/NcImage';
import axios from 'axios';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

export interface MainNav2LoggedProps { 
    setOpenCartSide:any
}

const CartSidebar: FC<MainNav2LoggedProps> = ({setOpenCartSide}) => {
    const [hoverIndex, setHoverIndex] = useState();
    

    const [moduleList, setModuleList] = useState<any[]>([]);
   
    const getModule = async () => {
    try {
         const userId = localStorage.getItem("id")
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart`, { userId:userId },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          },
        }
      );
      
      setModuleList(response.data.data)
     
      setHoverIndex(response.data.totalPrice)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

   useEffect(() => {
    getModule();
  }, []); 

    return (
        <>
            <div className={`cartSidebar absolute right-0 w-[400px] top-0   bg-white shadow z-10 `}>
               
                    <div className=" flex justify-between w-full  ">
                        <div className="flex-shrink-0 w-full relative flex items-center justify-end text-neutral-700 dark:text-neutral-100 ">
                            <div className="flex flex-col w-full">
                               <div className='flex justify-between border-b pb-5 p-5'>
                                <h1 className='font-semibold text-gray-600'>My Cart  
                               {moduleList && <span className='font-semibold ml-2 text-blue-600'>({moduleList.length})</span>}
                                </h1>
                              
                                <CloseIcon onClick={()=> setOpenCartSide(false)} className='h-6 w-6'/>
                                </div>
                                <div className='h-[100vh] overflow-y-auto flex flex-col gap-3 pt-5 p-5'>

                                    {moduleList && moduleList.map((cartItem,i)=>{
                                        return  <div className={`nc-CardNFT relative flex w-full flex-col group  border-b border-gray-300 pb-4`} key={i}>
                                        <div className="relative flex-shrink-0 flex gap-2 items-center">
                                            <div className="flex w-36 h-20 rounded overflow-hidden z-0 shadow">
                                            
                                              
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
                                          <div className='flex flex-col cursor-pointer '>
                                            <h2 className=" z-10 text-xs  text-gary-800 font-medium  capitalize ">{cartItem && cartItem.name}</h2>
                                            <p className=" z-10 text-xs  text-gray-700 truncate  w-[150px]">{cartItem && cartItem.short_description}</p>
                                            <div className=" inset-x-3 text-xs font-semibold flex text-blue-700">$ {cartItem.price}</div>
                                        </div>
                                          <CloseIcon className='absolute right-0 top-0'/>
                                        </div>
                                      
                                      
                                        {cartItem &&  <Link href={`/collection/${cartItem.name}/${cartItem.cart_item_id}`} className="absolute inset-0 hover:shadow  rounded"></Link>}
                                        </div>
                                    })}
                                    
                                </div>
                                <div className='flex justify-between'>Total: <span className='font-semibold text-xl text-blue-600'>(${hoverIndex})</span> </div>
                                <div className='fixed bottom-10 lg:w-[20%] w-[40%] h-[70px] flex flex-col justify-center items-center p-5 gap-2'>
                                <div className='flex justify-between w-full'>Total: <span className='font-semibold text-2xl text-blue-600'>${hoverIndex}</span> </div>
                               <div className='flex gap-5 w-full'>
                                <ButtonSecondary href='/cart' className='w-full'>Go to Cart</ButtonSecondary> 
                                <ButtonPrimary href='/checkout' onClick={console.log('checkout')} className='w-full'>Checkout</ButtonPrimary>
                              </div>   
                               </div>
                            </div>
                        </div>
                   
                </div>
            </div>
        </>
    );
};

export default CartSidebar;



 