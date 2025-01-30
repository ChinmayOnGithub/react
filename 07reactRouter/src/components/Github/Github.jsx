// import {
//   useEffect,
//   useState
// } from 'react'
import { useLoaderData } from "react-router";

function Github() {


  // preloading and preprocessing of the data
  const data = useLoaderData();
  // console.log(data);

  // simple fetching instead using the loader now

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/chinmayongithub')
  //     .then((res) => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])



  return (
    <div className="bg-gray-600 text-white text-4xl p-6 m-2 text-center">Github followers: {data.followers}
      <img src={data.avatar_url} alt="" className='w-32 m-4 rounded-md' />
    </div>
  )
}

export default Github

// whatever you want to fetch will be here
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/chinmayongithub');
  return response.json();
}