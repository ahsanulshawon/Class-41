import { Outlet } from "react-router-dom";
import NavbarForMAinLayout from "../Components/NavbarForMAinLayout";

const Main = () => {
    return (
        <div>
            <NavbarForMAinLayout/>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;