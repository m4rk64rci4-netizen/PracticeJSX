import CITlogo from '../assets/CIT.png'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RxDashboard, RxUpload } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Sidebar() {
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        setOpen(!open);
    }

    const menu = [
        {
            icons: <RxDashboard size={20} />,
            label: "Dashboard",
            link: "dashboard"
        },
        {
            icons: <RxUpload size={20}/>,
            label: "Upload Files"
        },
        {
            icons: <MdOutlineLogout size={20}/>,
            label: "Logout",
            link: "login"
        }
    ]

    return (
        <nav className={`sideBar shadow-md bg-gray-600 text-white flex flex-col h-screen relative duration-300 ${open ? 'w-60' : 'w-10'} gap-3`}>
            <div className={`flex justify-between items-center px-3 h-10 -mb-2 mt-2`}>
                <div>
                    <img src={CITlogo} alt="CIT Logo" className={`${open ? 'w-10' : 'w-0'}`} />
                </div>
                
                <div onClick={toggleSidebar} className="cursor-pointer -ml-0.75 w-10 h-10 flex items-center justify-center hover:bg-gray-700 rounded-md">
                    {!open ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
                </div>
            </div>

            <ul className="gap-3 mt-2 flex flex-col">
                {
                    menu.map((menuItem, index) => (
                        <Link to={`/thesis/${menuItem.link}`}>
                            <li key={index} className="px-2 py-2 hover:bg-gray-700 rounded-md cursor-pointer flex items-center gap-3">
                                {menuItem.icons}
                                <span className={`${open ? 'block text-md items-center font-medium': 'hidden'}`}>{menuItem.label}</span>
                            </li>
                        </Link>
                    )
                    )
                }
            </ul>

            <div className="flex flex-1 items-center gap-3 rounded-md absolute bottom-2 w-55 left-1.75">
                <FaUserCircle size={25} className="hover:bg-gray-700 rounded-full"/>
                <div>
                    <span className={`${open ? 'block' : 'hidden'}`}>
                        <p className="text-sm font-medium">Admin User</p>
                        <p className="text-xs">admin@gmail.com</p>
                    </span>
                    
                </div>
            </div>

        </nav>
    )
}

export default Sidebar