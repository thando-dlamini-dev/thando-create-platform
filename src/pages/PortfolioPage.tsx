import { FaReact } from "react-icons/fa";
import type {IconType} from "react-icons";
import {useState} from "react";

const PortfolioPage = () => {
    interface Tech {
        id: number;
        name: string;
        useCase: string;
        icon: IconType;
    }

    interface Portfolio {
        id: number;
        name: string;
        image: string;
        description: string;
        live_demo: string;
        features: string[]
        techStack: Tech[]
    }

    const Portfolio: Portfolio[] = [
        {
            id: 0,
            name: "Choco-Protein products",
            image: "src/assets/protein.webp",
            description: "Ecommerce website that sells chocolate flavoured protein products",
            live_demo: "/choco-protein",
            features: [
                "Payment Integration",
                "Authentication"
            ],
            techStack: [
                {
                    id: 0,
                    name: "React.js",
                    useCase: "Frontend development with reusable components",
                    icon: FaReact ,
                }
            ]
        },
        {
            id: 0,
            name: "Jewellery",
            image: "src/assets/jewellery.jpg",
            description: "Ecommerce website that sells chocolate flavoured protein products",
            live_demo: "",
            features: [
                "Payment Integration",
                "Authentication"
            ],
            techStack: [
                {
                    id: 0,
                    name: "React.js",
                    useCase: "Frontend development with reusable components",
                    icon: FaReact ,
                }
            ]
        },
        {
            id: 0,
            name: "World-Day Chocolate",
            image: "src/assets/choco.avif",
            description: "Ecommerce website that sells chocolate flavoured protein products",
            live_demo: "src/assets/protein.jpg",
            features: [
                "Payment Integration",
                "Authentication"
            ],
            techStack: [
                {
                    id: 0,
                    name: "React.js",
                    useCase: "Frontend development with reusable components",
                    icon: FaReact ,
                }
            ]
        },
    ]

    const [ selectedProject, setSelectedProject ] = useState<string>("");

    return(
        <>
            <div className="w-screen min-h-screen mt-30">
                <div className="w-full h-20 flex flex-col items-center justify-evenly">
                    <h1 className="text-accent font-geist-mono-bold text-4xl">
                        Our Work
                    </h1>
                    <p className="text-neutral-700">Purpose-built designs for businesses, schools, e-commerce & organisations full setup & 12 months support included.</p>
                </div>
                <div className="w-full min-h-screen flex flex-col items-center justify-evenly gap-20 pt-30">
                    {Portfolio.map((tech, index) => (
                        <div key={index} className="w-full lg:w-3/5 min-h-2 flex flex-col-reverse lg:flex-row justify-between items-center rounded-4xl p-5 shadow-md border-1 border-neutral-200 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
                            {/*Project Text*/}
                            <div className="w-1/2 h-80 flex flex-col items-start justify-between">
                                <h2 className="font-geist-mono-bold text-2xl text-accent">
                                    {tech.name}
                                </h2>
                                <p className={`text-neutral-700 transition-all duration-300 ease-in-out ${tech.name === selectedProject ? "text-md" : "text-[0px]"}`}>
                                    {tech.description}
                                </p>
                                <p className={`text-neutral-700 transition-all duration-300 ease-in-out ${tech.name === selectedProject ? "text-md" : "text-[0px]"}`}>
                                    {tech.features.map((feature, index) => (<span className={`px-3 py-2 mr-3 rounded-full ${tech.name === selectedProject && "border-1"} border-neutral-600 shadow-md text-neutral-700`} key={index}>{feature}</span>))}
                                </p>
                                <div className={`w-full transition-all `}></div>
                                <button onClick={() => setSelectedProject(tech.name)} className="px-4 py-3 bg-accent/80 transition-all duration-300 ease-in-out hover:bg-accent rounded-full font-geist-mono-regular shadow-md">More Info</button>
                            {/*Project Image*/}
                            </div>
                            <div className="w-1/2 h-80 flex justify-center items-center rounded-xl">
                                <img src={tech.image} className="w-full rounded-xl" alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PortfolioPage;