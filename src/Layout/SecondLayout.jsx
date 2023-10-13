import { Outlet } from "react-router-dom";
import NavbarForSecLayout from "../Components/NavbarForSecLayout";
import Footer from "../Components/Footer";

const SecondLayout = () => {
    return (
        <div>
            <NavbarForSecLayout/>
            <Outlet/>
        </div>
    );
};

export default SecondLayout;