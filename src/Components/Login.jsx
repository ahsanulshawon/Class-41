import Lottie from "lottie-react";
import LoginAnimation from "../../public/animations/login.json"
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Login = () => {

// //Get velue
const [name, setName] = useState ('')
// const [email, setEmail] = useState ('')
// const [pass, setPass] = useState ('')

// //Get error
// const [nameError, setEmailError] = ('')
// const [emailError, setEmailError] = ('')
// const [passError, setPassError] = ('')


const handleName = (event)=> {
    setName(event.target.value)
}
const handleLogin = ()=>{
    event.preventDefault()
}

return (
    <div>
            <div className="container mx-auto flex justify-evenly items-center">
                <div className="w-[48%]">
                    <Lottie className="h-[450px]" animationData={LoginAnimation}></Lottie>
                </div>
                <div className="w-[30%] text-center">
                    <h1 className="text-[40px] font-bold mb-4 text-[#7AA3FF]"> LOGIN</h1>

                    <form>
                        <input onChange={handleName} className="w-full px-3 py-2 outline-none border-[#7AA3FF] border-4 rounded-lg mb-1" type="email" placeholder="Enter your  email" />
                        <p className="text-left text-red-500 text-[12px] mb-5">{}</p>
                        <input className="w-full px-3 py-2 outline-none border-[#7AA3FF] border-4 rounded-lg mb-1" type="password" placeholder="Enter your password" />
                        <p className="text-left text-red-500 text-[12px] mb-5">{}</p>

                        <button onClick={handleLogin} className="w-full px-3 py-2 outline-none bg-[#7AA3FF] font-semibold text-white rounded-lg mb-1">LOGIN</button>
                    </form>
                    <p className="text-[12px] text-left mt-2">Are you New here? Please. <NavLink className="text-[#7aa3ff] font-semibold pointer" to="/registration">Registar</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;