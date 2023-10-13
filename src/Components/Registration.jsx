import Lottie from "lottie-react";
import registrationAnimation from "../../public/animations//registration.json"
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Registration = () => {

    const [name, setName] = useState("");

    const handleName = (event)=> {
        console.log(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return (
        <div>
        <div className="container mx-auto flex justify-evenly items-center">
            <div className="w-[48%]">
                <Lottie className="h-[450px]" animationData={registrationAnimation}></Lottie>
            </div>
            <div className="w-[30%] text-center">
                <h1 className="text-[40px] font-bold mb-4 text-[#7AA3FF]">RAGISTRATION</h1>

                <form onSubmit={handleSubmit}>
                    <input onChange={handleName} className="w-full px-3 py-2 outline-none border-[#7AA3FF] border-4 rounded-lg mb-1" type="text" placeholder="Enter your full name" />
                    <p className="text-left text-red-500 text-[12px] mb-5">{}</p>
                    <input className="w-full px-3 py-2 outline-none border-[#7AA3FF] border-4 rounded-lg mb-1" type="email" placeholder="Enter your email" />
                    <p className="text-left text-red-500 text-[12px] mb-5">{}</p>
                    <input className="w-full px-3 py-2 outline-none border-[#7AA3FF] border-4 rounded-lg mb-1" type="password" placeholder="Enter your password" />
                    <p className="text-left text-red-500 text-[12px] mb-5">{}</p>

                    <button  className="w-full px-3 py-2 outline-none bg-[#7AA3FF] font-semibold text-white rounded-lg mb-1">Ragistar</button>
                </form>
                <p className="text-[12px] text-left mt-2">Already Have an Account ? Please. <NavLink className="text-[#7aa3ff] font-semibold pointer" to="/login">LOGIN</NavLink></p>
            </div>
        </div>
    </div>
    );
};

export default Registration;