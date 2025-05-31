import ResponsiveBlogCard from './ResponsiveBlogCard';
import blogs from '../blogdata';


const Blog = () => {
    return (
        <div className="min-h-screen " style={{ backgroundColor: "#232526" }}>


            <div className="text-center pt-5">
                <h1 className="text-4xl  text-white mb-10">Blogs</h1>
            </div>
            <div className="w-[90%] md:w-[65%] mx-auto px-4 mt-5 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {blogs.map(blog => (
                        <ResponsiveBlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            imageUrl={blog.imageUrl}
                            link={blog.link}
                        />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Blog;
