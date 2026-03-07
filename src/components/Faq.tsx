import {motion} from "framer-motion";

const Faq = () => {
    return (
        <>
            <section
                className='w-screen pt-20 flex-col items-center justify-start min-h-screen lg:h-screen mb-20 lg:mb-40 flex mt-20 lg:mt-30 bg-background px-4 lg:px-0'>
                    <div className="w-4/5 min-h-50 flex justify-between items-center">
                        <div className="w-1/2 min-h-50 flex-col items-start justify-start gap-10">
                            <div className="w-full min-h-10 mb-20">
                                <motion.h1
                                    initial={{opacity: 0, x: -70}}
                                    whileInView={{opacity: 1, x: 0}}
                                    transition={{duration: 2, ease: 'easeInOut', type: 'spring'}}
                                    className='text-2xl sm:text-3xl lg:text-4xl font-bold text-text-col font-geist-mono-bold'
                                >
                                    Frequently asked questions
                                </motion.h1>
                            </div>
                        </div>
                        <div className="w-1/2 min-h-50 flex-col items-start justify-start gap-10">
                            <div className="w-full w-10 bg-neutral-400">

                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Faq;