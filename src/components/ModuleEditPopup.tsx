"use client";

import React, { FC, useEffect, useState } from "react";
import Label from "@/components/Label/Label";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import FormItem from "@/components/FormItem";
import { RadioGroup } from "@headlessui/react";
import { nftsImgs } from "@/contains/fakeData";
import MySwitch from "@/components/MySwitch";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import NcImage from "@/shared/NcImage/NcImage";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  name: string,
  description: string,
  category_module_id: number,
  short_description: string,
  external_link: string,
  support_email: string,
  website: string,
  model: string,
  engine_name: string,
  token_size: string,
  example_input: string,
  example_output: string,
  timeline: string,
  user_id: number,
  type_id: number,
  price: number

}



export interface CardNFTProps {
  id:any
}

const ModuleEditPopup: FC<CardNFTProps> = ({any }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    category_module_id: 0,
    short_description: '',
    external_link: '',
    support_email: '',
    website: '', 
    model: '',
    engine_name: '',
    token_size: '',
    example_input: '',
    example_output: '',
    timeline: '',
    user_id: 0,
    type_id: 0,
    price: 0
   
  });

  const [thumbnail, setThumbnail] = useState({ name: '' })

  const [logo, setLogo] = useState({ name: '' })

  const [screenShot, setScreenShot] = useState({ name: '' })
  const [homeList, setHomeList] = useState([])
  const [typeList, setTypeList] = useState([])

  const [video, setVideo] = useState({ name: '' })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getCategoryList = async () => {

    try {

      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-category-modules`;
      const response = await axios.get(apiUrl, {
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
      const response = await axios.get(apiUrl, {
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

  console.log(formData.type_id,"type   ")


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const NewformData = new FormData()

    logo && NewformData.append('logo', logo);
    thumbnail && NewformData.append('thumbnail', thumbnail);
    // video && NewformData.append('video', video);
    // logo && NewformData.append('logo', logo);


    NewformData.append("name", formData.name)
    NewformData.append('description', formData.description);
    NewformData.append('category_module_id', formData.category_module_id);
    NewformData.append('short_description', formData.short_description);
    NewformData.append('external_link', formData.external_link);
    NewformData.append('support_email', formData.support_email);
    NewformData.append('website', formData.website); 
    NewformData.append('model', formData.model);
    NewformData.append('engine_name', formData.engine_name);
    NewformData.append('token_size', formData.token_size);
    NewformData.append('example_input', formData.example_input);
    NewformData.append('example_output', formData.example_output);
    NewformData.append('timeline', formData.timeline);
    NewformData.append('user_id', 6);
    NewformData.append('type_id', formData.type_id);
    NewformData.append('price', formData.price); 


    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/create-modules`, NewformData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${getToken()}`
      }
    })
    if (response.data.success) {
      toast("Item Created Successfully!")
    }
  };
  const handleThumbnailChange = (e: any) => {

    setThumbnail(e.target.files[0])
  }
  const handleLogoChange = (e: any) => {

    setLogo(e.target.files[0]);



  }
  const handleScreenShotChange = (e: any) => {
    setScreenShot(e.target.files[0])
  } 

    return (
     <div className={`nc-PageUploadItem absolute top-1/2 left/1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] shadow z-[99] bg-white h-[600px] overflow-y-auto`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Create New Item
            </h2>

          </div>

          <hr className="w-full border-t-2 border-neutral-100 dark:border-neutral-700" />

          <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">

           <FormItem label="Category Type">
              <select
                defaultValue="Category Type"
                id="type_id"
                name="type_id"
                value={formData.type_id}
                onChange={handleChange}
                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded text-sm font-normal h-11 px-4 py-3 "
              >
                {typeList && typeList.map((item: any, i: any) => {
                  return <option value={item.id} key={i}>{item.type_name}</option>
                })}

              </select>
            </FormItem>
            <FormItem label="Category">
              <select
                defaultValue="Category"
                id="category_module_id"
                name="category_module_id"
                value={formData.category_module_id}
                onChange={handleChange}
                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded text-sm font-normal h-11 px-4 py-3 "
              >
                {homeList && homeList.map((item: any, i: any) => {
                  return <option value={item.id} key={i}>{item.name}</option>
                })}

              </select>
            </FormItem>
            {/* ---- */}
            <FormItem label="Name">
              <Input defaultValue="Name" placeholder="prompt" id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
            </FormItem>
            <FormItem label="Model Name">
              <Input defaultValue="Model Name" placeholder="OpenAI, Amazon BedRock" id="model" name="model" type="text" value={formData.model} onChange={handleChange} />
            </FormItem>
              <FormItem label="Engine Name">
              <Input defaultValue="Engine Name" placeholder="gpt-3.5-turbo, stability.stable-diffusion-xl-v0" id="engine_name" name="engine_name" type="text" value={formData.engine_name} onChange={handleChange} />
            </FormItem>


            <FormItem
              label="Description"
            

            >
              <Textarea rows={6} className="mt-1.5" placeholder="Add description here..." id="description" name="description" value={formData.description} onChange={handleChange} />
            </FormItem>
            <FormItem
              label="Short Description"
              // desc={
              //   <div>
              //     {`The description will be included on the item's detail page
              //     underneath its image.`}{" "}
              //     <span className="text-green-500">Markdown</span> syntax is
              //     supported.
              //   </div>
              // }

            >
              <Textarea rows={6} className="mt-1.5" placeholder="Add description here..." id="short_description" name="short_description" value={formData.short_description} onChange={handleChange} />
            </FormItem>
         

 
            <FormItem
              label="External link"
            // desc="Zen AI will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
            >
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  https://
                </span>
                <Input className="!rounded-l-none" placeholder="abc.com" id="external_link" name="external_link" type="text" value={formData.external_link} onChange={handleChange} />
              </div>
            </FormItem>
            <FormItem
              label="Support Email"
            //   desc="Zen AI will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
            >
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  https://
                </span>
                <Input className="!rounded-l-none" placeholder="abc.com" id="support_email" name="support_email" type="text" value={formData.support_email} onChange={handleChange} />
              </div>
            </FormItem>
             <FormItem
              label="Website"
            //   desc="Zen AI will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
            >
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  https://
                </span>
                <Input className="!rounded-l-none" placeholder="abc.com" id="website" name="website" type="text" value={formData.website} onChange={handleChange} />
              </div>
            </FormItem>

            <FormItem label="Price">
              <Input defaultValue="Price" placeholder="$0.00" id="price" name="price" type="text" value={formData.price} onChange={handleChange} />
            </FormItem>
           <FormItem label="Time">
              <Input defaultValue="0" placeholder="00.00" id="timeline" name="timeline" type="time" value={formData.timeline} onChange={handleChange} />
            </FormItem>

            <FormItem label="Token Size">
              <Input defaultValue="0" placeholder="$0.00" id="token_size" name="token_size" type="text" value={formData.token_size} onChange={handleChange} />
            </FormItem>

             <FormItem
              label="Example Input"  >
              <Textarea rows={6} className="mt-1.5" placeholder="Add input here..." id="example_input" name="example_input" value={formData.example_input} onChange={handleChange} />
            </FormItem>
               <FormItem
              label="Example Output"  >
              <Textarea rows={6} className="mt-1.5" placeholder="Add output here..." id="example_output" name="example_output" value={formData.example_output} onChange={handleChange} />
            </FormItem>

            <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
         
           
            <div>
              <h3 className="text-lg font-semibold">
                Logo
                {/* , Video, Audio, or 3D Model */}
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG
                
                Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="logo"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="logo" id="logo" onChange={handleLogoChange}
                        />

                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {logo ? logo.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Thumbnail
                {/* , Video, Audio, or 3D Model */}
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG
                
                Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="thumbnail"
                        className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="thumbnail" id="thumbnail" onChange={handleThumbnailChange}
                        />

                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {thumbnail ? thumbnail.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">
              {/* <ButtonPrimary href="/nft-detail" className="flex-1">
                Upload item
              </ButtonPrimary>
              <ButtonSecondary href="/nft-detail" className="flex-1">
                Preview item
              </ButtonSecondary> */}
              <button onClick={(e: any) => handleSubmit(e)} className="nc-Button relative h-auto inline-flex items-center justify-center rounded-xl transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};



export default ModuleEditPopup;
