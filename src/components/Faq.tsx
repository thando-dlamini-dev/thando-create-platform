import {motion} from "framer-motion";

const Faq = () => {
    return (
        <>
            <section
                className='w-screen flex-col bg-neutral-300 items-center justify-start min-h-screen lg:h-screen mb-20 lg:mb-40 flex mt-20 lg:mt-30 bg-background px-4 lg:px-0'>
                    <div className="w-screen min-h-10 bg-neutral-300">
                        <motion.h1
                            initial={{opacity: 0, x: -70}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 2, ease: 'easeInOut', type: 'spring'}}
                            className='text-2xl sm:text-3xl lg:text-4xl font-bold text-text-col font-geist-mono-bold'
                        >
                                Frequently asked questions
                        </motion.h1>
                    </div>
                    <div className="w-2/3 min-h-50 bg-neutral-400"></div>
            </section>
        </>
    )
}

export default Faq;