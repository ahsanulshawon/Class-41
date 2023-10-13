
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavbarForSecLayout from "./NavbarForSecLayout";

const Users = () => {


  const [data, setData] = useState([])


useEffect(()=>{

    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch (url)
      .then(res => res.json())
      .then(data=> setData(data))
},[])



    return (
        <div>
            
            
            <div className="container mx-auto">
                <h1 className=" text-xl font-bold mb-10 text-center">USERS : {data.length} </h1>
                <div className="items flex justify-between flex-wrap ">
                {
                    data.map((data)=>{
                        return(
                        <div className="item w-[32%] border-2 p-5 mb-6 border-black" key={data.id}>
                        
                                
                            <h1 className=" mb-3 text-red-500 font-bold"  >ID: {data.id}</h1>
                            <h1 className=" font-bold  mb-3 " >Name : {data.name}</h1>
                            <h2 className="mb-3">Email: {data.email}</h2>

                            <Link to={`/users/${data.id}`} className="px-2 py-0 border-2 border-black hover:bg-black hover:text-white duration-500 hover:font-bold ">DETAILS</Link>
                        
                        </div>
                        )
                    })
                }
                </div>
            </div>
            
            
        </div>
    );
};

export default Users;