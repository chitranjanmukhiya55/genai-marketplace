"use client"

import React, { FC, useState, useEffect } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"
import axios from "axios";
import { toast } from "react-toastify"

import { getCookie, setCookie } from "@/utils/itemConfig"
import { useAppDispatch } from "@/redux/hooks";

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin = () => {
  const dispatch = useAppDispatch()
 const [inputs, setInputs] = useState({ email: "", enteredOTP: "" })
  const [errors, setErrors] = useState({ email: "", enteredOTP: "" })
  const [loading, setLoading] = useState(false)
  const [companyLogoSrc, setCompanyLogoSrc] = useState("/logo.png") // Default image source
  const [companyName, setCompanyName] = useState("")
  const [isOTP, setIsOTP] = useState(false)
  const [msg, setMsg] = useState("")
  const { push } = useRouter() 
  const initialTime = 120 // 2 minutes in seconds
  const [time, setTime] = useState(initialTime)
  const [timerExpired, setTimerExpired] = useState(false)
  const [color, setColor] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        } else {
          clearInterval(interval)
          // Timer has reached zero, you can perform any action here
          setTimerExpired(true)
          return 0
        }
      })
    }, 1000)

    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, [])

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
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

    if (!emailRegex.test(inputs.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid email address"
      }))
    }

    if (inputs.enteredOTP.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        enteredOTP: "OTP must be at least 6 characters"
      }))
    }

    setLoading(true)
    try {
      const signin = await axios.post(
        !inputs.enteredOTP
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`
          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verfy-otp`,
        inputs
      )
      console.log(signin.data, "signindatasignindata")
      if (signin.data.status === true) {
        if (signin.data.Step === 1) {
          setMsg(signin.data.message)
          // dispatch(setEmailAuth(signin.data.email))
          // push("/two-way-authentication")
          setLoading(false)
          setIsOTP(true)
          setColor(true)
        } else if (signin.data.Step === 2) {
          setColor(true)
          console.log(signin)
          toast("SignIn Successful!")
          if (signin.data.data.accessToken)
            setCookie("accessToken", signin.data.data.accessToken, 8000, "/")
          if (signin.data.data.refreshToken)
            setCookie(
              "refreshToken",
              signin.data.data.refreshToken,
              864000,
              "/"
            )
          push(`/`)
          setLoading(false)
        } else {
          setMsg(signin.data.message)
          setLoading(false)
          setColor(false)
        }
      } else if (signin.data.status === false) {
        setMsg(signin.data.message)
        setLoading(false)
      } else {
        setMsg(signin.data.message)
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
        const companyName = getCompany.data.data.company_name
        setCompanyName(companyName)
        // const getCompanyLogo = await axios.get(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/organization_logo/${companyLogo}`,
        //   { responseType: 'arraybuffer' }
        // );

        // const imageDataUrl = `data:image/jpeg;base64,${Buffer.from(getCompanyLogo.data, 'binary').toString('base64')}`;

        // setCompanyLogoSrc(imageDataUrl);
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setMsg("")
    }, 1000)
  }, [msg])

  return (
    <div className={`PageLogin`} data-nc-id="PageLogin">
      
       


         <div className="flex flex-col xl:flex-row min-h-screen">
        <div className="flex flex-col justify-center flex-grow xl:p-[60px] sm:p-[60px] p-[30px] items-center">
          <div className="rounded-lg mx-9  xl:mx-auto sm:mx-6 bg-white p-8 xl:w-[580px] w-full border border-[#e5e7eb]">
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
                Sign In to your account
              </h3>
              <p className="pb-5 pt-2">
                Not a member yet?{" "}
                <a href="/signup" className="text-blue-600 hover:text-blue-700">
                  Sign Up
                </a>
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
                      className={`w-full border-gray-300 rounded-md py-3 px-4 border  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  ${
                        errors.email && "border-red-600"
                      }`}
                      placeholder="Enter your email"
                      name="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  {isOTP && (
                    <>
                      <div>
                        <label
                          htmlFor="enteredOTP"
                          className="block text-base font-semibold text-gray-700 mb-[0.75rem]"
                        >
                          Enter OTP
                        </label>
                        <div className="mt-1">
                          <input
                            id="enteredOTP"
                            type="enteredOTP"
                            className={`w-full border-gray-300 rounded-md py-3 px-4  border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  ${
                              errors.enteredOTP && "border-red-600"
                            }`}
                            placeholder="6 digit OTP "
                            value={inputs.enteredOTP || ""}
                            name="enteredOTP"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {isOTP && !timerExpired && (
                    <div className="absolute left-[45%] bottom-[45px] text-xs font-semibold text-blue-500 mb-3">
                      {String(minutes).padStart(2, "0")}:
                      {String(seconds).padStart(2, "0")}
                    </div>
                  )}
                  {isOTP && timerExpired && !msg && (
                    <div className="absolute right-[45%] bottom-[45px] text-xs font-semibold text-blue-500 mb-3">
                      <button
                        className="flex justify-center w-full border-[#dad3c8] rounded items-center m-0 p-0 text-blue-500 gap-3 "
                        onClick={(e) => handleSubmit(e)}
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}
                </div>
                <div className="">
                  <button
                    className="w-full mt-4 mb-[40px] text-lg flex justify-center items-center gap-4 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={loading && true}
                    onClick={(e) => handleSubmit(e)}
                  >
                    {loading && <div className="loader"></div>}
                    {!isOTP ? "Get OTP" : "Sign In"}
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-[58px] w-full text-center">
                {msg && (
                  <div
                    className={`text-sm ${
                      color ? "bg-green-200" : "bg-red-200"
                    }   p-3  text-center   rounded`}
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
    </div>
  );
};

export default PageLogin;
