import { Outlet } from "react-router-dom";


const MainLayout = () => {

   

    return (
        <div className="max-w-[1300px] mx-auto ">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;