import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ResponsiveBlogCard({ title, description, imageUrl, link }) {
    return (
        <div className="bg-sky-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2),0_6px_30px_rgba(183,44,44,0.3)]">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-3">{description}</p>

                <Link to={link} className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                    Read more... <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}

export default ResponsiveBlogCard;
