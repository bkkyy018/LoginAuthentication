import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

function Profile() {
    const {user,email,password}=useContext(UserContext)
  return (
    <div>
        <h1 >Name : {user}</h1>
        <h1>Email : {email}</h1>
        <h1>Passwors : {password}</h1>
    </div>
  )
}

export default Profile
