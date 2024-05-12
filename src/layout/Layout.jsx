import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-360px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;