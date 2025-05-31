import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.scss';
import EducationTimeline from "../componet/EducationTimeline"


function Home() {

    function handleDownload() {

        const link = document.createElement('a');

        link.href = `https://drive.google.com/file/d/1Y7SkoCkV9jLESVIlGm4XEaDoRUxofWyL/view?usp=sharing`;


        link.download = 'Bhavadip.pdf'; // The name of the file to be downloaded
        link.click();
    }

    function handleMywork() {
        const link = document.createElement('a');

        link.href = `https://www.instagram.com/bhavadip_dev/`;
        link.target = `_blank`
        link.click();
    }





    return (
        <div>
            <div>
                <div className="animation">
                    <div className="container1">
                        <div className="avatar">
                            <Link href="/">
                                <img src="/img/Bhavadip.JPG" alt="Bhavadip" />
                            </Link>
                        </div>
                        <div className="content1">
                            <h1 className="text-2xl">Dhandhlya Bhavadip</h1>
                            <p>Software Engineer, Farmer</p>
                        </div>
                    </div>

                    <div className="about">
                        <h1 className="self-start text-4xl my-2">About</h1>
                        <p>
                            I'm a Software Engineer based in Gujarat, India. I have a passion for building
                            performant, scalable, and beautiful user interfaces. I’m proficient in technologies like
                            React.js, Node.js and Dotnet Core. I hold a B.Tech degree in Computer Engineering from GEC Gandhinagar.
                        </p>


                        <div className="flex flex-col sm:flex-row sm:my-3 my-5 mx-auto gap-3 items-center justify-center">
                            <button className="btn" onClick={handleDownload}>
                                Resume
                            </button>

                            <button className="btn" onClick={handleMywork}>
                                My Work
                            </button>

                            <Link className="btn flex items-center gap-2" to="/project">
                                Projects <FaArrowRight className="arrow" />
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="px-6 py-10  text-white" style={{ backgroundColor: "#232526" }}>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl  mb-6 ">Skills</h1>

                        <div className="flex flex-wrap gap-4 ">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React JS",
                                "Node JS",
                                "Mongoose",
                                "Dotnet core",
                                "PostgreSql",
                                "Java",
                            ].map((skill, index) => (

                                <span
                                    key={index}
                                    className="mt-2 px-2 md:mt-6 py-1 rounded shadow-[2px_2px_2px_2px_#5596e4] text-center text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#232526" }} className="pb-7" >
                    <div className="about skillclass pb-5" >
                        <h1 className="text-4xl my-2">Education</h1>
                    </div>
                    <EducationTimeline />
                </div>
            </div>
        </div>
    )
}

export default Home
