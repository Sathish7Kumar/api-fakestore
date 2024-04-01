import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SelectUser = () => {
    const [userDetail, setuserDetail] = useState(null)
    const {id}= useParams()
    const fetchData = async() => {
       const resp = await axios.get(`https://660a981cccda4cbc75db4a8f.mockapi.io/api/v1/todo/${id}`)
       setuserDetail(resp.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
    <h1>Name :{userDetail?.username}</h1>
    <h3>Email : {userDetail?.emailId} </h3>
    <h3>Mobile Number :{userDetail?.mobileNo} </h3>
    </>
  )
}

export default SelectUser