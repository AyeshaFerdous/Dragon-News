import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layout-components/LeftNavbar";
import RightNavbar from "../Components/Layout-components/RightNavbar";
import Navbar from "../Components/Navbar";



const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <header>
           <Header></Header>
           <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
           </section>
           
           <nav className="w-11/12 mx-auto py-2">
           <Navbar></Navbar>
           </nav>

           <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
           <aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
           </aside>
            <section className="col-span-6">
                <Outlet/>
            </section>
            <aside className="col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
           </main>
           </header>
        </div>
    );
};

export default HomeLayout;