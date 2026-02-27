import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
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
        features: string[]
        techStack: Tech[]
    }

    const Portfolio: Portfolio[] = [
        {
            id: 0,
            name: "Choco-Protein products",
            image: "/Choco.webp",
            description: "Ecommerce website that sells chocolate flavoured protein products",
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
        }
    ]

    return(
        <>

        </>
    )
}

export default PortfolioPage;