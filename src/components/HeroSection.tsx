import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {CheckCircle2} from "lucide-react";

const HeroSection = () => {
    return(
        <>
            <section className='scroll-smooth relative w-screen min-h-screen flex justify-between items-center bg-background'>
                <div className='z-10 font-geist-mono-bold w-1/2 h-screen flex flex-col items-end pl-20 justify-start pt-30'>
                    <div className='border-neutral-300 border-0 absolute left-20 w-1/2 min-h-50 py-5 top-85 rounded-3xl p-2 pl-20'>
                        <div className='w-full h-full rounded-2xl flex flex-col justify-start gap-2 items-start'>
                            <motion.h1 initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}}
                                       transition={{duration: 0.3, ease: "easeInOut"}}
                                       className='flex mb-4 justify-start gap-3 font-bold text-4xl text-text-col'>Your
                                Expert-Developed Website Strategically Planned By AI
                            </motion.h1>

                            <div className=' w-1/2 min-h-30 flex items-center justify-start'>
                                <motion.p initial={{opacity: 0, y: -15}} animate={{opacity: 1, y: 0}}
                                          transition={{duration: 0.9, ease: "easeInOut"}}
                                          className='mb-3 text-neutral-800 font-geist-mono-regular'>We combine
                                    AI-powered planning with expert
                                    development — so you get a website that actually delivers results.
                                </motion.p>

                            </div>
                            {/*<div className="w-1/2 h-20 flex flex-col items-start justify-between">*/}
                            {/*    <div className="w-full h-10 flex justify-between items-center">*/}
                            {/*        <span*/}
                            {/*            className="text-black font-geist-mono-regular flex items-center gap-2"><CheckCircle2*/}
                            {/*            className="size-4 text-green-600"/> Responsive Design</span>*/}
                            {/*        <span*/}
                            {/*            className="text-black font-geist-mono-regular flex items-center gap-2"><CheckCircle2*/}
                            {/*            className="size-4 text-green-600"/> Responsive Design</span>*/}
                            {/*    </div>*/}
                            {/*    <div className="w-full h-10 flex justify-between items-center">*/}
                            {/*        <span*/}
                            {/*            className="text-black font-geist-mono-regular flex items-center gap-2"><CheckCircle2*/}
                            {/*            className="size-4 text-green-600"/> Responsive Design</span>*/}
                            {/*        <span*/}
                            {/*            className="text-black font-geist-mono-regular flex items-center gap-2"><CheckCircle2*/}
                            {/*            className="size-4 text-green-600"/> Responsive Design</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}
                                        transition={{duration: 1, ease: "easeInOut"}}
                                        className='w-2/3 h-10 flex justify-start gap-10 items-center'>
                                <Link
                                    className='text-text-col text-neutral-900 bg-neutral-300 border-accent hover:text-black py-2 px-5 rounded-sm font-light hover:scale-105 transition-all duration-300 hover:bg-accent'
                                    to='/login'>
                                    Login
                                </Link>
                                <Link
                                    className='text-md text-text-col border-1 border-neutral-400 hover:text-accent py-2 px-6 rounded-sm font-light hover:scale-105 transition-all duration-300 flex justify-evenly items-center gap-3'
                                    to='/services'>
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 min-h-screen flex flex-col items-start pl-20 justify-evenly '></div>
                <motion.img initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
                            transition={{duration: 1, ease: "easeInOut"}} className='absolute top-20 right-0 w-3/5'
                            src='src/assets/UI10(CYCLES)-min.png'/>
            </section>
        </>
    )
}

export default HeroSection;