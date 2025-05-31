import projects from "../data";
import ResponsiveCard from "./ResponsiveCard";


const Project = () => {
    return (
        <div className="min-h-screen " style={{ backgroundColor: "#232526" }}>


            <div className="text-center pt-5">
                <h1 className="text-4xl  text-white mb-10">Projects</h1>
            </div>
            <div className="w-[90%] md:w-[65%] mx-auto px-4 mt-5 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map(project => (
                        <ResponsiveCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            link={project.link}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Project;
