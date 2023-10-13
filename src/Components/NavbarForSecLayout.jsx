import { NavLink } from 'react-router-dom';

const NavbarForSecLayout = () => {
    return (
        <div>
             <div className="container mx-auto flex justify-between py-5 items-center">
                <div className="logo rounded-lg font-bold bg-[#7AA3FF] text-white px-3 py-1  text-[25px]"><a href="#">LOGO</a></div>
                <div className="menu">
                    <ul className='flex justify-between gap-5 items-center bg-[#7AA3FF] p-4 rounded-xl font-semibold'>
                        <li className=' duration-300 ease-in-out hover:text-white'><NavLink className={({ isActive}) => isActive ? "rounded-lg font-bold  px-2 py-[3px] bg-[#0E21A0]  text-white" : ""} to="/">HOME</NavLink></li>
                        <li className=' duration-300 ease-in-out hover:text-white'><NavLink className={({ isActive}) => isActive ? "rounded-lg font-bold  px-2 py-[3px] bg-[#0E21A0]  text-white" : ""} to="blog">BLOG</NavLink></li>
                        <li className=' duration-300 ease-in-out hover:text-white'><NavLink className={({ isActive}) => isActive ? "rounded-lg font-bold  px-2 py-[3px] bg-[#0E21A0]  text-white" : ""} to="users">USERS</NavLink></li>
                        <li className=' duration-300 ease-in-out hover:text-white'><NavLink className={({ isActive}) => isActive ? "rounded-lg font-bold  px-2 py-[3px] bg-[#0E21A0]  text-white" : ""} to="/">MAIN LAYOUT</NavLink></li>

                    </ul>
                </div>
                <div className="login font-semibold  ">
                <ul className='flex bg-[#7AA3FF] p-4 rounded-xl'>
                <li className=' duration-300 ease-in-out hover:text-white'><NavLink className={({ isActive}) => isActive ? "rounded-lg font-bold bg-[#0E21A0] px-2 py-[3px]  text-white" : ""} to="/login">LOGIN</NavLink></li>
                <span className='mx-3'> | </span>
                <li className=' duration-300 ease-in-out hover:text-white'><NavLink className={({ isActive}) => isActive ? "rounded-lg font-bold bg-[#0E21A0] px-2 py-[3px]  text-white" : ""} to="/registration">RAGISTRATION</NavLink></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarForSecLayout;