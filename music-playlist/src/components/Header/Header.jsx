import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/6707/6707083.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/signin"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Upload
                        </Link>
                    </div>

                    <div
                        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-customDarkGray'} border-b border-gray-100 lg:border-0 hover:text-blue-700 lg:px-2.5 lg:py-2.5`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/acoustic"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-gray-700'} border-b border-gray-100 lg:border-0 hover:text-blue-700 lg:px-2.5 lg:py-2.5`
                                    }
                                >
                                    Acoustic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/jazz"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-gray-700'} border-b border-gray-100 lg:border-0 hover:text-blue-700 lg:px-2.5 lg:py-2.5`
                                    }
                                >
                                    Jazz
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/metal"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-gray-700'} border-b border-gray-100 lg:border-0 hover:text-blue-700 lg:px-2.5 lg:py-2.5`
                                    }
                                >
                                    Metal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/rock"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-gray-700'} border-b border-gray-100 lg:border-0 hover:text-blue-700 lg:px-2.5 lg:py-2.5`
                                    }
                                >
                                    Rock
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/synthwave"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-gray-700'} border-b border-gray-100 lg:border-0 hover:text-blue-700 lg:px-2.5 lg:py-2.5`
                                    }
                                >
                                    Synthwave
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
