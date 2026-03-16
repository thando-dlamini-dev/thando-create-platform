import { FaReact } from "react-icons/fa";
import type {IconType} from "react-icons";

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
            image: "/Choco.webp",
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
            name: "Jewelery",
            image: "/Choco.webp",
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
            name: "Choco-Protein products",
            image: "/Choco.webp",
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
    ]

    return(
        <>
            <div className="w-screen h-screen mt-30">
                <div className="w-full h-20 flex flex-col items-center justify-evenly">
                    <h1 className="text-accent font-geist-mono-bold text-4xl">
                        Our Work
                    </h1>
                    <p className="text-neutral-700">Purpose-built designs for businesses, schools, e-commerce & organisations full setup & 12 months support included.</p>
                </div>
            </div>
        </>
    )
}

export default PortfolioPage;