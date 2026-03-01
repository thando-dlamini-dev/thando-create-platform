import { useState } from "react";
import { motion } from "framer-motion";
import { CirclePlusIcon } from "lucide-react";

const PrinciplesSection = () => {
    const [clicked, setClicked] = useState<string>('none');

    interface PrincipleCard {
        id: number;
        title: string;
        subtitle: string;
        shortDescription: string;
        fullDescription: string;
        imageUrl: string;
        imageAlt: string;
    }

    const principlesData: PrincipleCard[] = [
        {
            id: 1,
            title: "Strategic Precision",
            subtitle: "No more guesswork in development",
            shortDescription: "Every feature is intentionally chosen based on data and AI-driven insights...",
            fullDescription: "Our AI-powered platform analyzes your business goals, target audience, and industry trends to recommend only the features that deliver real value. Instead of overwhelming you with endless options, we provide data-backed recommendations that ensure you invest in what actually moves your business forward.",
            imageUrl: "src/assets/img.png",
            imageAlt: "3D geometric brain with interconnected nodes representing AI strategy"
        },
        {
            id: 2,
            title: "Accelerated Execution",
            subtitle: "From idea to launch in record time",
            shortDescription: "Our streamlined process and clear planning eliminate bottlenecks...",
            fullDescription: "Traditional web development can take months of back-and-forth. Our platform cuts through the noise with a streamlined workflow that reduces planning time by up to 70%. The clear visual builder and AI guidance eliminate decision paralysis, while our efficient development process ensures rapid implementation. ",
            imageUrl: "src/assets/img_1.png",
            imageAlt: "3D sphere with motion trails representing speed and momentum"
        },
        {
            id: 3,
            title: "Craftsmanship Quality",
            subtitle: "Code that performs as beautifully as it looks",
            shortDescription: "Hand-crafted implementation with attention to every detail...",
            fullDescription: "While our platform handles the planning, every line of code is hand-crafted by an experienced developer. We don't use generic templates or bloated frameworks. Each website is built with clean, optimized code that ensures fast loading times, excellent SEO performance, and seamless user experiences.",
            imageUrl: "src/assets/img_2.png",
            imageAlt: "3D precision mechanical assembly representing quality engineering"
        }
    ];

    return (
        <>
            <section className='w-screen min-h-screen lg:h-screen mb-20 lg:mb-40 flex justify-center items-start mt-20 lg:mt-30 bg-background px-4 lg:px-0'>
                <div className='w-full lg:min-w-3/5 lg:h-150 flex flex-col justify-between items-center'>
                    {/* Header Section */}
                    <div className='w-full lg:min-w-10 lg:h-1/4 flex flex-col items-start lg:items-center justify-start gap-4 lg:gap-3 mb-8 lg:mb-0'>
                        <div className='w-full lg:min-w-10 lg:mx-2 lg:flex lg:justify-center'>
                            <motion.h1
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 2, ease: 'easeInOut', type: 'spring' }}
                                className='text-2xl sm:text-3xl lg:text-4xl font-bold text-text-col font-geist-mono-bold'
                            >
                                Built for Results-Driven Businesses
                            </motion.h1>
                        </div>
                        <div className='w-full lg:w-2/5 lg:px-2'>
                            <motion.p
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 2.4, ease: 'easeInOut', type: 'spring' }}
                                className='font-geist-mono-regular text-text-col text-sm sm:text-base'
                            >
                                This platform embodies the principles that separate successful digital products from the rest.
                            </motion.p>
                        </div>
                    </div>

                    {/* Cards Container */}
                    <div className='w-full lg:w-2/3 lg:h-2/3 flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-0 py-2'>
                        {principlesData.map((principle) => (
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: principle.id * 0.3 + 0.6,
                                    ease: 'easeInOut',
                                    type: 'spring'
                                }}
                                onClick={() => setClicked(clicked === principle.title ? 'none' : principle.title)}
                                key={principle.id}
                                className={`
                                    relative cursor-pointer hover:scale-102 transition-all duration-200 
                                    flex flex-col justify-start items-center bg-neutral-200 rounded-3xl 
                                    h-80 sm:h-96 lg:h-full p-3 m-2 shadow-lg
                                    ${clicked === principle.title
                                    ? 'lg:w-2/3 w-full'
                                    : 'lg:w-2/5 w-full lg:w-2/5'
                                }
                                `}
                            >
                                <img
                                    src={principle.imageUrl}
                                    className='w-full h-full object-cover lg:object-contain lg:w-md lg:h-full filter invert absolute left-0 top-0 rounded-3xl'
                                    alt={principle.imageAlt}
                                />

                                {/* Title */}
                                <h1 className={`
                                    ${clicked === principle.title
                                    ? 'text-accent lg:text-xl'
                                    : 'text-neutral-800 lg:text-lg'
                                } 
                                    ease-in-out transition-all duration-300 
                                    absolute bottom-5 left-4 lg:left-6 
                                    text-lg font-geist-mono-regular z-10
                                `}>
                                    {principle.title}
                                </h1>

                                {/* Plus Icon */}
                                <h1 className={`
                                    ${clicked === principle.title
                                    ? 'text-accent rotate-225 lg:text-xl'
                                    : 'lg:text-lg'
                                } 
                                    ease-in-out transition-all duration-700 
                                    absolute bottom-5 right-4 lg:right-6 
                                    text-lg font-geist-mono-regular z-10
                                `}>
                                    <CirclePlusIcon className="w-6 h-6 lg:w-7 lg:h-7" />
                                </h1>

                                {/* Description Overlay */}
                                <motion.div
                                    className={`
                                        font-geist-mono-regular 
                                        w-1/2 lg:h-4/5 h:6/7
                                        absolute right-4 
                                        bg-white/0 rounded-2xl 
                                        flex items-start justify-start 
                                        p-4 overflow-hidden 
                                        text-text-col 
                                        transition-all duration-700 ease-in-out z-20
                                        ${clicked === principle.title
                                        ? 'visible text-sm backdrop-blur-xl'
                                        : 'invisible text-[0px]'
                                    }
`}
                                >
                                    {principle.fullDescription}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrinciplesSection;