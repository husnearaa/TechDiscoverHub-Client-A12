import {Link, NavLink } from "react-router-dom";





const Navbar = () => {


    return (



        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-base bg-[#262626] ">
                <h2 className="text-3xl font-extrabold dark:text-white text-white"><span className="text-[#fed700] ">Tech</span>DiscoverHub</h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold dark:text-white text-white">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#fed700] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#fed700] " : ""
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#fed700]  " : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
                {/* <button className="btn border-[#fed700] text-black bg-[#fed700] px-10 rounded-full">Login</button> */}
            
            <Link to={"/login"}><button className="btn border-[#fed700] text-black bg-[#fed700] px-10 rounded-full">Login</button>
            </Link>
            </nav>
        </div>
    );
};

export default Navbar;