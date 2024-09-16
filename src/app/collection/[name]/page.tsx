
"use client"
import React,{FC,useState, useEffect} from "react";
import NcImage from "@/shared/NcImage/NcImage"; 
import Card from "@/components/Card";
import TabFilters from "@/components/TabFilters"; 
import { useParams } from 'next/navigation'
import axios from "axios";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import SectionTrending from "@/components/SectionSliderCategories/SectionTrending";
 
export interface CardListingProps {
  
  name:string
}
const PageCollection:FC = () => { 

  const params = useParams<{ name: string; }>()
   const {  trendingList  } = useAppSelector((state) => state.auth);
console.log(params,"category name list")
    
    const [categoryList, setCategoryList] = useState([])
    
   
     useEffect(() => {
        const getModule = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/modules/${params.name}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
          setCategoryList(response.data.data) 
        }

           const getTrending = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-favorite`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            setCategoryList(response.data.data)

        }

        const getNewest = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-by-created-at`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            setCategoryList(response.data.data)

        }
        const getFeatured = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-details-count`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
           setCategoryList(response.data.data)

        }
 
        if(params.name==="trending"){
            getTrending()
        }else if(params.name === 'newest'){
             getNewest()
        }else if(params.name === 'featured'){
           getFeatured()
        }else{
             getModule()
        }
      
     
       

     
    }, [params])
  ///modules/filter/:categories
  return (
    <div className={`PageCollectionName`}>
     
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={"https://c1.wallpaperflare.com/path/652/531/737/wood-aerial-background-beverage-1f3a98ab1a7d84e3d9fde190733d4c1c.jpg"}
            className="object-cover"
            fill
            sizes="100vw"
          />
        </div>
        
      </div>
   
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-20 lg:space-y-28">
      {categoryList ?  <main>
          <TabFilters moduleList={categoryList}/>
           <div className="w-full border-b border-neutral-200/70 dark:border-neutral-700 my-5"></div>
           
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4  mt-8 lg:mt-10">
            {categoryList &&  categoryList!== undefined && categoryList.length>0 ? categoryList.map((item:any, index:any) => (
              <Card key={index} item={item}/>
            )):
            "No result found"}
          </div>

         
        </main>:

         <main>
          
          

          <div className="grid  w-full grid-cols-1 gap-2  mt-8 lg:mt-10">
           No result found ! 
           <Link href={"/"} className="text-blue-600">Go Home</Link>
          </div>

         
        </main>
        }
 
        <div className="relative  ">
          <SectionTrending title="Trending Prompt" moduleList={trendingList} type="trending" />
       {/* <SectionSliderCardNftVideo title="Newest Prompt" /> */}
       </div>

        {/* <SectionBecomeAnAuthor /> */}
      </div>
    </div>
  );
};

export default PageCollection;
