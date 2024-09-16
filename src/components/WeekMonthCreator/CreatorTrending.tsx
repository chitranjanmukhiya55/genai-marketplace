'use client'
import NcImage from '@/shared/NcImage/NcImage'
import axios from 'axios';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const CreatorTrending = () => {
  const [a, setAA] = useState([])
  useEffect(() => {
    const getModule = async () => {

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-creator`,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      setAA(response.data.creators)

    }
    getModule()
  }, [])
  return (
    <>

      <h2 className='text-xs text-gray-600 font-semibold mb-3'>Top Creators</h2>
      <div className='flex flex-col gap-5'>
        {a && a.length > 0 ? a.map((item: any, i: any) => {
          return <div className={`nc-CardNFT relative flex gap-2 group items-center `} key={i}>
            <div className="relative flex-shrink-0 ">
              <div className="flex w-12 h-12  rounded-full  overflow-hidden z-0">

                <NcImage
                  containerClassName="flex w-12 h-12 overflow-hidden z-0"
                  src={`https://assets.promptbase.com/DALLE_IMAGES%2FGkp5VTBnF8hCPj8vJcakF0ni0Uq1%2Fresized%2F1685728812128_150x150.webp?alt=media&token=94002a27-45b2-4ee6-a20c-edded2529a25`}
                  className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                />

              </div>

              <div className="absolute top-3 inset-x-3 flex"></div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className={`text-xs  text-gray-600  `}>{item.user_name}</h2>
              <h2 className={`text-xs text-gray-600 m-0 p-0 flex items-center gap-1`}>{item.user_count}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>

              </h2>
            </div>

            {/* <Link href={`/collection`} className="absolute inset-0"></Link> */}
          </div>
        }) :

          [1, 1, 1, 1, 1].map((item, indx) => (
            <div className={`nc-CardNFT relative flex gap-2 group items-center `} key={indx}>
              <div className="relative flex-shrink-0 ">
                <div className="flex w-12 h-12  rounded-full animate-fade overflow-hidden z-0">

                  <NcImage
                    containerClassName="flex w-12 h-12 overflow-hidden z-0"
                    src="https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder1-1024x1024-570x321.png" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
                  />

                </div>

                <div className="absolute top-3 inset-x-3 flex"></div>
              </div>

              <div className="flex flex-col gap-1 animate-fade">
                <h2 className={`text-xs  text-gray-600 animate-fade `}> </h2>
                <h2 className={`text-xs text-gray-600 m-0 p-0 flex items-center gap-1 animate-fade`}>


                </h2>
              </div>

              {/* <Link href={`/collection`} className="absolute inset-0"></Link> */}
            </div>

          ))
        }</div>


    </>
  )
}


export default CreatorTrending