import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import '../css/UserCss.css'





function UserList() {

    const [users,setUsers]=useState([])
    const caglar = async ()=>{
    const response= await axios.get('https://randomuser.me/api/?results=5')
    setUsers(response.data.results)
    

    }
    useEffect(()=>{
        caglar()
    },[]
       ) 
    
  return (
    
    <div className='user-list'>
        {users.map((user,id)=>(
          
            <User user={user} key={id}/>
           
        

        ) ) }
        </div>

    
    )

  
}

export default UserList