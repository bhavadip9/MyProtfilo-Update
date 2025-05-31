import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
    {
        title: "B.Tech",
        institute: "GEC Gandhinagar",
        description: "Completed B.Tech in Computer Engineering with a CGPA of 7.40",
        year: "2025",
        icon: GraduationCap  // Specific icon for this entry
    },
    {
        title: "HSC",
        institute: "MK Techno School Talaja",
        description: "10+2 with Physics, Maths and Chemistry, got 1677 rank in Gujarat board.",
        year: "2021",
        icon: School  // Specific icon for this entry
    },
    {
        title: "SSC",
        institute: "Shree Vivekanand Devali",
        description: "10 with 80% pass",
        year: "2019",
        icon: BookOpen  // Specific icon for this entry
    },
];

const EducationTimeline = () => {
    return (
        <div className="bg-[#232526] relative w-full px-6 py-2 md:py-16">

            <div className="acsdemygraph">
                {/* Vertical Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full z-0 hidden md:block" />

                {educationData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const animationDirection = isLeft ? -100 : 100;
                    const Icon = item.icon; // Get the specific icon component

                    return (
                        <div
                            key={index}
                            className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full mb-4 md:mb-16 "
                        >
                            {/* Left Card (or full width on mobile) */}
                            {isLeft ? (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, x: -animationDirection }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="w-full md:w-5/12 text-center md:text-left md:pr-6 mb-6 md:mb-0"
                                    >
                                        <div className="bg-[#1f2937] text-white p-4 rounded-xl shadow-md border-l-4 border-blue-600">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="text-sm">{item.institute}</p>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                            <p className="text-sm text-blue-400 mt-1">{item.year}</p>
                                        </div>
                                    </motion.div>

                                    {/* Center Icon */}
                                    <div className="flex flex-col me-6 items-center  w-auto  mb-6 md:mb-0 hidden md:block">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md z-10">
                                            <Icon className="text-white" size={18} /> {/* Use specific icon */}
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-5/12" />
                                </>
                            ) : (
                                <>
                                    <div className="hidden md:block w-5/12" />

                                    <div className="flex flex-col me-6 items-center w-auto  mb-6 md:mb-0  hidden md:block">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md z-10">
                                            <Icon className="text-white" size={18} /> {/* Use specific icon */}
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: animationDirection }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="w-full md:w-5/12 text-center md:text-left md:pl-6"
                                    >
                                        <div className="bg-[#1f2937] text-white p-4 rounded-xl shadow-md border-l-4 border-blue-600">
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="text-sm">{item.institute}</p>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                            <p className="text-sm text-blue-400 mt-1">{item.year}</p>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EducationTimeline;

