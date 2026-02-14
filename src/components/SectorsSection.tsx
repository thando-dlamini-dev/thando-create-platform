import type { IconType } from "@react-icons/all-files"
import { FaStethoscope } from "@react-icons/all-files/fa/FaStethoscope";
import { FaCar } from "@react-icons/all-files/fa/FaCar";
import { FaTshirt } from "@react-icons/all-files/fa/FaTshirt";
import { FaUtensils } from "@react-icons/all-files/fa/FaUtensils";
import { FaSpa } from "@react-icons/all-files/fa/FaSpa";
import { FaHardHat } from "@react-icons/all-files/fa/FaHardHat";

const SectorsSection = () => {
    interface Sector {
        id: number;
        title: string;
        icon: IconType;
        description: string;
    }

    const sectorsData: Sector[] = [
        {
            id: 1,
            title: "Medical & Healthcare",
            icon: FaStethoscope,
            description: "Professional websites for doctors, dentists, clinics, and healthcare practices."
        },
        {
            id: 2,
            title: "Car Detailing & Auto",
            icon: FaCar,
            description: "Custom sites for mechanics, detailers, and car dealerships with service booking."
        },
        {
            id: 3,
            title: "Clothing & Fashion",
            icon: FaTshirt,
            description: "E-commerce stores for boutiques, spaza shops, and fashion retailers."
        },
        {
            id: 4,
            title: "Restaurants & Cafés",
            icon: FaUtensils,
            description: "Online menus, reservation systems, and delivery integration."
        },
        {
            id: 5,
            title: "Salons & Spas",
            icon: FaSpa,
            description: "Booking websites with appointment scheduling and service catalogs."
        },
        {
            id: 6,
            title: "Construction & Trades",
            icon: FaHardHat,
            description: "Portfolio sites for builders, electricians, plumbers with project galleries."
        }
    ];

    // Industry tags array from the screenshot
    const industries = [
        "FINANCE", "EDUCATION", "HEALTHCARE", "AUTOMOBILE",
        "DEV OPS", "WEB3", "HARDWARE", "BUSINESS INTELLIGENCE"
    ];

    return (
        <>
            <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center">
                <div className="rounded-2xl w-7xl h-4/5 flex flex-col justify-start gap-10 items-center pt-20">
                    <div className="w-4/5 h-40 flex flex-col text-center items-center justify-center">
                        <h1 className="text-4xl font-geist-mono-regular text-neutral-800 flex center gap-x-5">
                            Helping <span className="text-accent">South African</span> businesses grow online
                        </h1>
                        <div className="w-3/4 min-h-20 flex justify-center items-center">
                            <p className="text-center pt-10 text-neutral-800 font-geist-mono-regular">From small startups to established
                                companies, we build custom sites that turn visitors into paying customers.
                            </p>
                        </div>
                    </div>

                    {/* Your existing grid */}
                    <div className="w-7xl grid grid-cols-6 gap-x-5 gap-5 bg-neutral-6">
                        {sectorsData.map((sector, index) => {
                            const Icon = sector.icon;

                            return (
                                <div
                                    key={index}
                                    className="w-full hover:scale-105 transition-all duration-300 h-full border-2 bg-neutral-200 border-neutral-300 rounded-4xl p-1 flex flex-col items-center justify-start gap-3 p-5">
                                    <Icon className="size-10 text-neutral-600"/>
                                    <h3 className="font-geist-mono-bold text-accent text-md">{sector.title}</h3>
                                    <p className="text-neutral-600 text-sm mx-2">{sector.description}</p>
                                    <div className="w-full h-[2px] bg-neutral-300"></div>
                                </div>
                            )
                        })}
                    </div>

                    {/* ADD THIS: Industry tags section - matches the screenshot */}
                    <div className="w-full mt-10 flex flex-wrap justify-center gap-3">
                        {industries.map((industry) => (
                            <span
                                key={industry}
                                className="px-4 py-2 bg-neutral-200 text-neutral-700 rounded-full text-sm font-geist-mono-medium hover:bg-accent hover:text-white transition-colors cursor-pointer"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectorsSection;