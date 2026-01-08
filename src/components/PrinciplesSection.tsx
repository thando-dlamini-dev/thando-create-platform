import {useState} from "react";
import { motion } from "framer-motion";
import {CirclePlusIcon} from "lucide-react";

const PrinciplesSection = () => {

    const [clicked, setClicked] = useState<string>('none')

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
            fullDescription: "Our AI-powered platform analyzes your business goals, target audience, and industry trends to recommend only the features that deliver real value. Instead of overwhelming you with endless options, we provide data-backed recommendations that ensure you invest in what actually moves your business forward. This eliminates costly development mistakes and ensures every dollar spent contributes directly to your growth objectives.",
            imageUrl: "src/assets/img.png",
            imageAlt: "3D geometric brain with interconnected nodes representing AI strategy"
        },
        {
            id: 2,
            title: "Accelerated Execution",
            subtitle: "From idea to launch in record time",
            shortDescription: "Our streamlined process and clear planning eliminate bottlenecks...",
            fullDescription: "Traditional web development can take months of back-and-forth. Our platform cuts through the noise with a streamlined workflow that reduces planning time by up to 70%. The clear visual builder and AI guidance eliminate decision paralysis, while our efficient development process ensures rapid implementation. Most projects launch in 3-4 weeks instead of the industry standard 2-3 months, getting you to market faster and starting to generate ROI sooner.",
            imageUrl: "src/assets/img_1.png",
            imageAlt: "3D sphere with motion trails representing speed and momentum"
        },
        {
            id: 3,
            title: "Craftsmanship Quality",
            subtitle: "Code that performs as beautifully as it looks",
            shortDescription: "Hand-crafted implementation with attention to every detail...",
            fullDescription: "While our platform handles the planning, every line of code is hand-crafted by an experienced developer. We don't use generic templates or bloated frameworks. Each website is built with clean, optimized code that ensures fast loading times, excellent SEO performance, and seamless user experiences. From pixel-perfect design implementation to robust backend architecture, we maintain the highest standards of web craftsmanship that result in websites that not only look exceptional but perform flawlessly across all devices and platforms.",
            imageUrl: "src/assets/img_2.png",
            imageAlt: "3D precision mechanical assembly representing quality engineering"
        }
    ];

    return(
        <>
            <section className='w-screen min-h-screen flex justify-center items-start mt-30 bg-background'>
                <div className='min-w-3/5 h-150 flex flex-col justify-between items-center'>
                    <div className='w-full h-1/4 flex flex-col items-start justify-start gap-3'>
                        <div className='w-3/5 h-full mx-2'>
                            <motion.h1 initial={{opacity: 0, x: -70}} whileInView={{opacity: 1, x: 0}}
                                       transition={{duration: 2, ease: 'easeInOut', type: 'spring'}}
                                       className='text-4xl font-bold text-text-col font-geist-mono-bold'>Built for Results-Driven
                                Businesses
                            </motion.h1>
                        </div>
                        <div className='w-2/5 h-full px-2'>
                            <motion.p initial={{opacity: 0, x: -40}} whileInView={{opacity: 1, x: 0}}
                                      transition={{duration: 2.4, ease: 'easeInOut', type: 'spring'}}
                                      className='font-geist-mono-regular text-text-col'>This platform embodies the principles that separate
                                successful digital products from the rest.
                            </motion.p>
                        </div>
                    </div>
                    <div className='min-w-full h-2/3 flex items-center justify-evenly py-2'>
                        {principlesData.map((principle) => (
                            <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{
                                duration: principle.id * 0.3 + 0.6,
                                ease: 'easeInOut',
                                type: 'spring'
                            }} onClick={() => setClicked(clicked === principle.title ? 'none' : principle.title)}
                                        key={principle.id}
                                        className={`${clicked === principle.title ? 'w-2/3' : 'w-2/5'} relative cursor-pointer hover:scale-102 transition-all duration-200 flex flex-col justify-start items-center bg-neutral-300 rounded-3xl h-full p-3 m-2 shadow-lg`}>
                                <img src={principle.imageUrl} className='w-md h-full filter invert absolute left-0 top-0' alt=""/>
                                <h1 className={`${clicked === principle.title ? 'text-xl text-accent' : 'text-lg '} ease-in-out transition-all duration-300 absolute bottom-5 left-6 text-2xl font-geist-mono-regular`}>{principle.title}</h1>
                                <h1 className={`${clicked === principle.title ? 'text-xl text-accent rotate-225' : 'text-lg '} ease-in-out transition-all duration-700 absolute bottom-5 right-6 text-2xl font-geist-mono-regular`}>
                                    <CirclePlusIcon/></h1>
                                <motion.div
                                    className={`font-geist-mono-regular w-1/2 h-2/3 absolute right-4 bg-white/0 rounded-2xl flex items-start justify-start p-3 overflow-hidden text-text-col transition-all duration-700 ease-in-out ${clicked === principle.title ? 'visible text-md backdrop-blur-xl' : 'text-[0px] '}`}>{principle.fullDescription}</motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            </>
            )
            }

            export default PrinciplesSection