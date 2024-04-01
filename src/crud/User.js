import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const [user, setuser] = useState([])
    const nav = useNavigate()
    const fetchData = async() => {
       const resp = await axios.get("https://660a981cccda4cbc75db4a8f.mockapi.io/api/v1/todo")
       setuser(resp.data);
    }
    useEffect(()=>{
        fetchData()
    },[])
    const handleuser = (id) =>{
        nav(`/users/${id}`)
    }
    const handleDel = (id) =>{
        axios.delete(`https://660a981cccda4cbc75db4a8f.mockapi.io/api/v1/todo/${id}`)
        alert("userDeleted")
        fetchData()
    }
  return (
    <>
    <h1>User Data</h1>
    <button>Create User</button>
    <hr/>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Mobile Number</th>
            <th>Email ID</th>
            <th>Options</th>
        </tr>
        </thead>
        <tbody>
        {user.map((e,i)=>{
            return(
                <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.mobileNo}</td>
                    <td>{e.emailId}</td>
                    <td>
                        <button onClick={()=>handleuser(e.id)}>View</button>
                        <button>Update</button>
                        <button onClick={()=>handleDel(e.id)}>Delete</button>
                    </td>
                </tr>
            )
        })}
        </tbody>
    </table>
    </>
  )
}

export default User
