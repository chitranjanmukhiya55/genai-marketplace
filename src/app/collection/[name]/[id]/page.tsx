// "use client"
// import DetailPage from '@/components/Detail/page'
// import React, {FC, useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
// import axios from 'axios'
// import authFetch from '@/utils/interceptor'
 
// export interface CardDetailProps {
 
//   id: number;
//   name:string
// }

// const PageDetail: FC<CardDetailProps> = ({id,name}) => { 
//   const params = useParams<{ id:string;name: string; }>()
 
//    const [moduleDetail, setModuleDetail] = useState()
  
//   const ids= JSON.parse(params.id) || params.id
//   console.log(JSON.parse(params.id) , params.id)

//     useEffect(() => {
//     const getModule = async () => {
//     const userid=  localStorage.getItem("id")
//       const response = await authFetch.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-details`,
//         { module_id:ids,
//        user_id:userid
// }
//         ,
//         { 
//           headers: {
//             "Content-Type": "application/json",
//             // Authorization: `Bearer ${getToken()}`
//           }
//         }
//       )  
//       console.log(response.data.data)
 
//       setModuleDetail(response.data.data) 
//     }
      
//     getModule()
//   }, [])
 
//   return (
//    <DetailPage moduleDetail={moduleDetail} />
//   )
// }

// export default PageDetail

"use client"
import DetailPage from '@/components/Detail/page'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import authFetch from '@/utils/interceptor'
 
export interface CardDetailProps {
  id: number;
  name: string;
}

const PageDetail: FC = () => { 
  const params = useParams<{ id: string; name: string }>()
  const [moduleDetail, setModuleDetail] = useState<any>(null)
  
  const ids = JSON.parse(params.id) || params.id
  console.log(JSON.parse(params.id), params.id)

  useEffect(() => {
    const getModule = async () => {
      const userid = localStorage.getItem("id")
      const response = await authFetch.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-details`,
        { 
          module_id: ids,
          user_id: userid
        },
        { 
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${getToken()}`
          }
        }
      )  
      console.log(response.data.data)
      setModuleDetail(response.data.data) 
    }
      
    getModule()
  }, [])
 
  return (
    <DetailPage moduleDetail={moduleDetail} />
  )
}

export default PageDetail
