import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
    return(
        <>
            <section className='w-screen min-h-screen flex justify-between items-center bg-background'>
                {/*Left section*/}
                <div className='w-full lg:w-1/2 h-screen flex justify-center items-start pt-25 lg:items-center lg:pl-20 lg:justify-start lg:pt-30 font-geist-mono-bold'>
                    <div className='w-full lg:w-full flex items-center justify-center min-h-50 lg:py-5 border-0 rounded-3xl p-2 bg-white/0 border-1 border-white shadow-md backdrop-blur-xs'>
                        <div className='w-full h-full rounded-2xl flex flex-col items-center lg:justify-start gap-2 lg:items-start'>
                            <motion.h1 initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}}
                                       transition={{duration: 0.3, ease: "easeInOut"}}
                                       className='flex mb-4 justify-start gap-3 font-bold text-4xl text-text-col'>Your
                                Expert-Developed Website Strategically Planned By AI
                            </motion.h1>
                            <div className=' min-h-30 flex items-center justify-start'>

                                <motion.p initial={{opacity: 0, y: -15}} animate={{opacity: 1, y: 0}}
                                          transition={{duration: 0.9, ease: "easeInOut"}}
                                          className='mb-3 text-neutral-800 font-geist-mono-regular'>We combine
                                    AI-powered planning with expert
                                    development — so you get a website that actually delivers results.
                                </motion.p>

                            </div>
                            <motion.div
                            initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, ease: "easeInOut"}}
                            className='w-full h-fit lg:w-2/3 lg:h-10 flex flex-col lg:flex-row justify-evenly lg:justify-start lg:gap-10 items-center'>
                                <Link
                                    className='text-text-col text-neutral-900 bg-neutral-300 border-accent hover:text-black py-2 px-10 rounded-full font-light hover:scale-105 transition-all duration-300 hover:bg-accent'
                                    to='/login'>
                                    Login
                                </Link>
                                <Link
                                    className='text-md text-text-col border-1 border-neutral-400 hover:text-accent py-2 px-6 rounded-full font-light hover:scale-105 transition-all duration-300 flex justify-evenly items-center gap-3'
                                    to='/service-customizer'>

                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/*Right section*/}
                <div className='w-2/3 hidden lg:flex min-h-screen flex-col items-start justify-evenly'>
                <motion.img
                    initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className='w-full'
                    src='src/assets/UI10(CYCLES)-min.png'
                />
                </div>
            </section>
        </>
    )
}

export default HeroSection;