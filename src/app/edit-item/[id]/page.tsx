"use client"
import React, { FC, useEffect, useState } from "react"; 
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import FormItem from "@/components/FormItem"; 
import axios from "axios";
import { toast } from "react-toastify";

import { useParams } from 'next/navigation'
import { UploadIcon } from "@/icons";
import NcImage from "@/shared/NcImage/NcImage";
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
  type_id: string,
  price: number

}
 
const PageCollection = () => { 
  
  const params = useParams<{ id: string; }>()
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
    timeline: '00.00',
    user_id: 0,
    type_id: '1',
    price: 0
   
  });

  const [thumbnail, setThumbnail] = useState<File | undefined>()

  const [logo, setLogo] = useState<File | undefined>()

  const [screenShot, setScreenShot] = useState <File[]>([])
  const [homeList, setHomeList] = useState([])
  const [typeList, setTypeList] = useState([])

  const [thumbnail1, setThumbnail1] = useState()

  const [logo1, setLogo1] = useState()

  const [screenShot1, setScreenShot1] = useState([])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 

   useEffect(() => {
    const getModule = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-details/${JSON.parse(params.id)}`,
        { 
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          }
        }
      )  
      console.log(response.data.data, "response.data.data")
      setFormData(response.data.data[0]) 

      setThumbnail1(response.data.data[0].thumbnail)
      setLogo1(response.data.data[0].logo)
      setScreenShot1(response.data.data[0].imageUrls)
    }
      
    getModule()
  }, [])
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
console.log( screenShot1)
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

  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const NewformData = new FormData()

    logo && NewformData.append('logo', logo);
    thumbnail && NewformData.append('thumbnail', thumbnail);
    screenShot.forEach((file, index) => { 
      NewformData.append('images_gallery', file);
    
    });


    NewformData.append("name", formData.name)
    NewformData.append('description', formData.description);
    NewformData.append('category_module_id', formData.category_module_id.toString());
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
    NewformData.append('user_id', "6");
    NewformData.append('type_id', formData.type_id);
    NewformData.append('price', formData.price.toString()); 


    const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/edit-modules/${JSON.parse(params.id)}`, NewformData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${getToken()}`
      }
    })
    if (response.data.success) {
      toast("Item Updated Successfully!")
    }
  };
  const handleThumbnailChange = (e: any) => {

    setThumbnail(e.target.files[0])
  }
  const handleLogoChange = (e: any) => {

    setLogo(e.target.files[0]);



  }
const handleScreenShotChange = (e: any) => { 
  const newFile = e.target.files[0];

  if (newFile) { 
    setScreenShot(prevFiles => [...prevFiles, newFile]);
 
  }
}
 console.log(formData.type_id,"formData.type_id")
  return (
   <div className={`PageEditItem`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Edit Item
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
            

            >
              <Textarea rows={6} className="mt-1.5" placeholder="Add description here..." id="short_description" name="short_description" value={formData.short_description} onChange={handleChange} />
            </FormItem>
         

 
            <FormItem
              label="External link"
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

            {formData.type_id !=="2" && <FormItem
              label="Example Input"  >
              <Textarea rows={6} className="mt-1.5" placeholder="Add input here..." id="example_input" name="example_input" value={formData.example_input} onChange={handleChange} />
            </FormItem>}
            {formData.type_id !=="2" &&   <FormItem
              label="Example Output"  >
              <Textarea rows={6} className="mt-1.5" placeholder="Add output here..." id="example_output" name="example_output" value={formData.example_output} onChange={handleChange} />
            </FormItem>}

            <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
         
                <div>
              <h3 className="text-lg font-semibold">
                Logo
                
              </h3>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG  Max size: 100 MB
              </span>
              <div className="mt-5 ">
                <div className="mt-1 flex justify-start  border-2   border-neutral-300 dark:border-neutral-6000 border-dashed rounded">
                  <div className="flex items-center  w-full gap-5">
                   <UploadIcon className="border-r-2 w-[65px] p-[6px]"/>
                    <div className="flex text-sm px-2 pt-3 pb-3 flex-col w-full justify-center items-center text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="logo"
                        className="relative cursor-pointer  text-center   rounded-md font-medium text-primary-6000 hover:text-primary-500  "
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="logo" id="logo" onChange={handleLogoChange}
                        />
                    <p className="text-xs text-neutral-500  text-center  dark:text-neutral-400">
                      {logo ? logo.name : " PNG, JPG, GIF up to 10MB"}
                    </p>
                      </label>
                      {/* <p className="pl-1">or drag and drop</p> */}
               
                    </div>
                   
                  </div>
                </div>  
               {!logo &&   <p className="flex gap-1 mt-2">    {logo1 && 
                     <NcImage 
                    containerClassName=" w-12 h-12 relative"
                    className="absolute inset-0 border border-gray-100 shadow object-cover  rounded  "
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/logo/${logo1}`}
                    alt={"logo"}
                    
                  /> }</p> }
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Thumbnail
               
              </h3>
             
              <div className="mt-5 ">
                <div className="mt-1 flex justify-start  border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded">
                  <div className="flex items-center  w-full gap-5">
                    <UploadIcon className="border-r-2 w-[65px] p-[6px]"/>
                    <div className="flex text-sm flex-col px-2 pt-3 pb-3 text-center w-full justify-center items-center text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="thumbnail"
                        className="relative cursor-pointer text-center  rounded-md font-medium text-primary-6000 hover:text-primary-500  "
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="thumbnail" id="thumbnail" onChange={handleThumbnailChange}
                        />
                    <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                      {thumbnail ? thumbnail.name  : " PNG, JPG, GIF up to 10MB"}
                    </p>
                      </label>
                      {/* <p className="pl-1">or drag and drop</p> */}
                   
                    </div>
                   
                  </div>
                </div> 
               {!thumbnail &&   <p className="flex gap-1 mt-2">     {thumbnail1 && 
                     <NcImage 
                    containerClassName=" w-12 h-12 relative"
                    className="absolute inset-0 object-cover border border-gray-100 shadow rounded  "
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thumbnail/${thumbnail1}`}
                    alt={"logo"}
                    
                  />
                
                      }</p> }
              </div>
            </div>
         
              {formData.type_id === "2"  &&    <div>
              <h3 className="text-lg font-semibold">
                Upload Multiple Image 
              </h3>
               
              <div className="mt-5 ">
                <div className="mt-1 flex justify-start  border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded">
                  <div className="flex items-center  w-full gap-5">
                   <UploadIcon className="border-r-2 w-[65px] p-[6px]"/>
                    <div className="flex text-sm  px-6 pt-6 pb-6 flex-col text-center w-full justify-center items-center text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="screenShot"
                        className="relative cursor-pointer text-center  rounded-md font-medium text-primary-6000 hover:text-primary-500  "
                      >
                        <span>Upload a file</span>
                        <input

                          type="file"
                          className="sr-only" name="screenShot" id="screenShot" onChange={handleScreenShotChange}
                        />
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {screenShot.length > 0 
                          ? screenShot.map(file => file.name).join(', ') 
                          : "PNG, JPG, GIF up to 10MB"
                        }
                    </p>
                      </label>
                      {/* <p className="pl-1">or drag and drop</p> */}
                 
                    </div>
                   
                  </div> 
                 
                </div> 
              {screenShot.length<1 &&  <p className="flex gap-1 mt-2">
                    {  screenShot1 && screenShot1.map((screen: any, index: any) => {
                   return screen.type==="images_gallery" && screen.url.map((it:any,i:any)=>{
                    return <NcImage key={index}
                    containerClassName="w-12 h-12 relative"
                    className="absolute inset-0 object-cover border shadow border-gray-100 rounded  "
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${it}`}
                    alt={"title"}
                    sizes="(max-width: 768px) 100vw, 840px"
                  />
                  }) 
                })}</p>}
              </div>


            </div>}
 

            <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">
              
              <button onClick={(e: any) => handleSubmit(e)} className="nc-Button relative h-auto inline-flex items-center justify-center rounded-xl transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
