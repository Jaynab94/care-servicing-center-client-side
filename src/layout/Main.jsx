import { Outlet } from "react-router-dom";
import Footer from "../pages/home/home/shared/footer/Footer";
import Navbar from "../pages/navBar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;