import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { SlMenu } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader'; // Make sure this path is correct

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const navHandler = () => {
        setIsActive(!isActive);
    };

    const handleNavClick = (path) => {
        setLoading(true);
        setIsActive(false);


        setTimeout(() => {
            navigate(path);
            setLoading(false);
        }, 500);
    };

    return (
        <header className="bg-[#232526] text-white shadow-md relative z-40">
            {loading && <Loader />}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3">
                    <img
                        src="/img/Bhavadip.JPG"
                        alt="Logo"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-xl font-semibold cursor-pointer" onClick={() => handleNavClick('/')}>
                        Bhavadip Dhandhlya
                    </span>
                </div>

                <nav className="hidden md:flex gap-6 text-base">
                    <span onClick={() => handleNavClick('/blog')} className="btn cursor-pointer hover:text-gray-400 transition">Blog</span>
                    <span onClick={() => handleNavClick('/project')} className="btn cursor-pointer hover:text-gray-400 transition">Project</span>
                </nav>

                <div className="md:hidden">
                    {isActive ? (
                        <RxCross2 className="text-2xl cursor-pointer" onClick={navHandler} />
                    ) : (
                        <SlMenu className="text-2xl cursor-pointer" onClick={navHandler} />
                    )}
                </div>
            </div>

            {isActive && (
                <div className="md:hidden flex flex-col items-center bg-[#232526] py-4 space-y-4">
                    <span onClick={() => handleNavClick('/blog')} className="hover:text-gray-400">Blog</span>
                    <span onClick={() => handleNavClick('/project')} className="hover:text-gray-400">Project</span>
                </div>
            )}
        </header>
    );
};

export default Navbar;


