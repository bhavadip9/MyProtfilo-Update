import {
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaEnvelope
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#232526] w-full text-white shadow-md relative z-40  text-white   border-t border-gray-700 " >
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between gap-6 ">
                <Link
                    to="https://www.linkedin.com/in/bhavadip-dhandhlya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400"
                >
                    <FaLinkedin className="text-2xl" />
                    <span>Bhavadip Dhandhlya</span>
                </Link>
                <Link
                    to="https://github.com/bhavadip9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400"
                >
                    <FaGithubSquare className="text-2xl" />
                    <span>bhavadip9</span>
                </Link>
                <Link
                    to="https://www.instagram.com/bhavadip_dnd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400"
                >
                    <FaInstagramSquare className="text-2xl" />
                    <span>@bhavadip_dnd</span>
                </Link>
                <Link
                    to="mailto:bhavadip2004@gmail.com"
                    className="flex items-center gap-2 hover:text-gray-400"
                >
                    <FaEnvelope className="text-2xl" />
                    <span>bhavadip2004@gmail.com</span>
                </Link>
                <Link
                    to="https://twitter.com/Bhavadip_9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-400"
                >
                    <FaTwitterSquare className="text-2xl" />
                    <span>@Bhavadip_9</span>
                </Link>
            </div>
            <div className="text-center text-sm text-gray-400 pb-4">
                © 2024 Bhavadip Dhandhlya. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
