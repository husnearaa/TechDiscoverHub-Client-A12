
import { FaAd, FaBars, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {



    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">

                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            My Review</NavLink>
                    </li>

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            <FaBars />
                            Products</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;