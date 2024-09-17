"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation" 
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css" 

const PageSignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [msg, setMsg] = useState("")
  const [companyLogoSrc, setCompanyLogoSrc] = useState("/logo.png") // Default image source
  const { push } = useRouter()
  const [color, setColor] = useState(false)

  const handleChange = (e: any) => {
    setMsg("")
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
    setErrors((prevState) => ({ ...prevState, [name]: "" }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Validate email
    if (!emailRegex.test(inputs.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid email address"
      }))
    }

    // Validate password
    if (inputs.password.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password must be at least 6 characters"
      }))
    }

    // Validate confirm password
    if (inputs.password !== inputs.confirmpassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmpassword: "Passwords do not match"
      }))
    }

    // If there are errors, stop the submission
    if (Object.values(errors).some((error) => error !== "")) {
      return
    }

    setLoading(true)

    try {
      const signup = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create_user`,
        inputs
      )

      if (signup.data.status === true) {
        setMsg(
          "Signup successful! Please verify your email; we have sent an email. "
        )
        setColor(true)
        toast(
          "Signup successful! Please verify your email; we have sent an email. "
        )
        // Reset form fields and clear errors on success
        setInputs({ email: "", password: "", confirmpassword: "" })
        setErrors({ email: "", password: "", confirmpassword: "" })
        setLoading(false)
        setTimeout(() => {
          push(`/signin`)
        }, 2000)
      } else {
        setMsg(signup.data.message)
        setColor(false)
        setLoading(false)
      }

      // Handle successful signup
    } catch (error) {
      console.error("Error during signup:", error)
    }
  }

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCompany = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get_organization`
        )
        const companyLogo = getCompany.data.data.company_logo

        // const getCompanyLogo = await axios.get(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/organization_logo/${companyLogo}`,
        //   { responseType: "arraybuffer" }
        // )

        // const imageDataUrl = `data:image/jpeg;base64,${Buffer.from(
        //   getCompanyLogo.data,
        //   "binary"
        // ).toString("base64")}`

        // setCompanyLogoSrc(imageDataUrl)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {/* <div className="absolute max-w-3xl xl:w-[500px] sm:w-[500px] w-[300px] lg:p-8 p-2 pb-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg border-transparent border-2">
        <div className=" flex flex-col gap-1 justify-center items-center">
          <Image
            src={companyLogoSrc}
            alt="zen ai"
            width={500}
            height={500}
            className="h-full w-[100px]"
          />
          <p className="lg:text-3xl text-xl text-gray-700 font-bold leading-7 tracking-wide">
            Sign Up{" "}
          </p>
        </div>
        <form className="flex flex-col gap-5 justify-center items-center mt-10 relative">
          <div className="flex flex-col gap-3 w-full px-5 ">
            <div className="relative flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={inputs.email || ""}
                onChange={handleChange}
                className={`flex items-start self-stretch px-5 py-2.5 rounded text-sm  border-[1.25px] border-solid border-gray-200 outline-none focus:ring-[#a03f30] bg-transparent ${errors.email && "border-red-600"
                  }`}
              />
            </div>

          
          </div>
          {msg && (
            <div className={`text-sm ${color ? 'bg-green-200':'bg-red-200'} absolute p-2 -bottom-[38px] text-center w-[80%] rounded`}>
              {msg}
            </div>
          )}
          <div className="flex flex-col gap-3 justify-center items-center w-full px-5 ">
            <button
              className="bg-[#a03f30] flex justify-center w-full border-[#dad3c8] items-center rounded  px-[16px] py-[10px]  text-white  gap-3"
              disabled={loading && true}
              onClick={(e) => handleSubmit(e)}
            >
              {loading && <div className="loader"></div>} Sign Up
            </button>

            <p className="text-gray-700 text-sm  leading-6">
              Already have an account?{" "}
              <span className="text-[#a03f30] text-sm font-semibold leading-6  ">
                <Link href={"/signin"}>Sign In</Link>
              </span>
            </p>
          </div>
        </form>
      </div> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex flex-col xl:flex-row min-h-screen">
        <div className="flex flex-col justify-center flex-grow xl:p-[60px] sm:p-[60px] p-[30px]  items-center">
          <div className="rounded-lg mx-9 xl:mx-auto  sm:mx-6 bg-white p-8 xl:w-[580px] w-full border border-[#e5e7eb]">
            <div className="text-center pb-5">
               <div className="mb-5">
                <Link href="/" className="flex justify-center">
                  <img
                    src={"/logoNew.png"}
                    alt="zen ai"
                    className="h-[full] w-[100px]"
                  />
                </Link>
              </div>
              <h3 className="xl:text-3xl text-xl mb-2 text-col font-bold leading-[1.6] ">
                Sign Up to your account
              </h3>
              <p className="pb-5 pt-2">
                Already a member?{" "}
                <Link
                  href="/signin"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Sign In
                </Link>
                .
              </p>
            </div>
            <form className="relative">
              <div className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-700 mb-[0.75rem]"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      className={`w-full border-gray-300 rounded-md py-3 px-4   focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  ${
                        errors.email && "border-red-600"
                      }`}
                      placeholder="Enter your email"
                      name="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    className="w-full mt-4 mb-[40px] text-lg flex justify-center items-center gap-4 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={loading && true}
                    onClick={(e) => handleSubmit(e)}
                  >
                    {loading && <div className="loader"></div>} Sign Up
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-[58px] w-full text-center">
                {msg && (
                  <div
                    className={`text-sm ${
                      color ? "bg-green-200" : "bg-red-200"
                    }   p-3  text-center  rounded`}
                  >
                    {msg}
                  </div>
                )}
              </div>
            </form>

            {/* <div className="pt-4 text-center">
              <div className="bg-white px-2 inline-block uppercase text-xs">
                or login with
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
               Login With Google
              </button>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col bg-gradientlng  text-white xl:w-[660px] w-full flex-initial xl:p-[60px] sm:p-[60px] p-[30px] items-center">
          <div className="mx-0 xl:mx-auto xl:my-auto">
            <div className="px-4 py-6">
              <div className="flex items-center   justify-center mb-5 w-16 h-16 rounded-full bg-blue-400 text-white">
                <span className="text-[5rem] mt-8"> &#8220;</span>
              </div>
              <h1 className="xl:text-5xl text-2xl font-bold  leading-[1.35] mb-[1.875rem]">
                Your Gateway to a Smarter Experience!
              </h1>
              <div className="ml-0 sm:ml-5">
                <div>
                  <p className="text-sm  leading-[1.55]">
                    As you embark on a journey into the future, our AI-powered
                    authentication ensures a seamless and secure entry into a
                    world of innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageSignUp
