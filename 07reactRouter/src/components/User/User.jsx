import { useParams } from 'react-router'


function User() {
  const { userId } = useParams(); // hooks can only be used in side the function
  return (
    <div className='bg-blue-300 text-center text-4xl p-4'>User : {userId}</div>
  )
}

export default User