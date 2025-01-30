import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) return <h1>Not Logged In</h1>
  return (
    <div>Profile : {user.username}</div>
  )
}

export default Profile