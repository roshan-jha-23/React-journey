import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data=useLoaderData();
    
//     const [data,setData]=useState([]);
//   useEffect(()=>{
//     fetch('https://api.github.com/users/roshan-jha-23').then((res)=>res.json()).then((data)=>setData(data));
//   },[])
  return (
    <div className="text-center m-5 bg-gray-500 text-white p-4 text-3xl">
      Github ID:{data.id} 
      Name:{data.name}
      <img src={data.avatar_url} alt="PIX OF USER" />
    </div>
  );
}

export default Github

export const githubInfoLoader=async()=>{
    const data=await fetch("https://api.github.com/users/roshan-jha-23");
    return data.json();
}