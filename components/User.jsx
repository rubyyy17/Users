import React from 'react'
import '../css/UserCss.css'

function User({user}) {
  return (
    <div className='singleuser'>
        <img src={user.picture.large} alt=''/>
        <div className='user-info'>

            <h3>{user.name.first} {user.name.last}</h3>
            <div className='mail'>
                {user.email}
            </div>
            <div>
                {user.location.country} | {user.location.city}
            </div>

        </div>
        

    </div>
  )
}

export default User