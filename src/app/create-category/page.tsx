"use client";

import React, { FC, useEffect, useState } from "react";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import FormItem from "@/components/FormItem";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface FormData {
    name: string,
    description: string,


}

const PageUploadItem = ({ }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',

    });
    const router = useRouter()

    const [categoryType, setCategoryType] = useState('')
    const [open, setOpen] = useState(false)

    //const [images, setImages] = useState({ name: '' })
    const [images, setImages] = useState<File | undefined>(undefined);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!images) {

            return;
        }
        const NewformData = new FormData()

        images && NewformData.append('images', images);
        //const [images, setImages] = useState<File | null>(null);

        NewformData.append("name", formData.name)
        NewformData.append('description', formData.description);


        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/create-category`, NewformData, {
            headers: {
                "Content-Type": "multipart/form-data",
                // Authorization: `Bearer ${getToken()}`
            }
        })
        if (response.data.success) {
            toast("Item Created Successfully!")
            router.push(`/create-item`)
        }
    };

    const handleLogoChange = (e: any) => {

        setImages(e.target.files[0]);



    }

    const handleSubmitType = async (e: any) => {
        e.preventDefault();


        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/create-type`, { type_name: categoryType })
        console.log(response)
        if (response.data.success) {
            //   toast("Item  Successfully!")
            setOpen(true)
        }
    }

    return (
        <div className={`PageCreateItem`}>
            <div className="container">
                <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">

                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-semibold">
                            Create Category
                        </h2>

                    </div>

                    <hr className="w-full border-t-2 border-neutral-100 dark:border-neutral-700" />

                    {!open ? <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
                        <FormItem label="Type">
                            <Input defaultValue="type_name" id="type_name" placeholder="text, code, image" name="type_name" type="text" value={categoryType} onChange={(e) => setCategoryType(e.target.value)} />
                        </FormItem>

                        <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">

                            <button onClick={(e: any) => handleSubmitType(e)} className="nc-Button relative h-auto inline-flex items-center justify-center rounded-xl transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Create</button>
                        </div>
                    </div>
                        :
                        <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">


                            <FormItem label="Name">
                                <Input defaultValue="Name" id="name" name="name" placeholder="Writing, Summerization" type="text" value={formData.name} onChange={handleChange} />
                            </FormItem>


                            <FormItem
                                label="Description"
                            // desc={
                            //     <div>
                            //         {`The description will be included on the item's detail page   underneath its image.`}{" "}
                            //         <span className="text-green-500">Markdown</span> syntax is
                            //         supported.
                            //     </div>
                            // }

                            >
                                <Textarea rows={6} className="mt-1.5" placeholder="..." id="description" name="description" value={formData.description} onChange={handleChange} />
                            </FormItem>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Logo
                                    {/* , Video, Audio, or 3D Model */}
                                </h3>
                                <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                                    File types supported: JPG, PNG,
                                    {/* GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF.  */}
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
                                                    htmlFor="images"
                                                    className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input

                                                        type="file"
                                                        className="sr-only" name="images" id="images" onChange={handleLogoChange}
                                                    />

                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                {images ? images.name : " PNG, JPG, GIF up to 10MB"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">

                                <button onClick={(e: any) => handleSubmit(e)} className="nc-Button relative h-auto inline-flex items-center justify-center rounded-xl transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">Create</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};



export default PageUploadItem;
