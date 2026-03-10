import {motion} from "framer-motion";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import {useState} from "react";

const Faq = () => {
    interface Faq {
        question: string;
        revealedAns: string;
    }

    const faqs: Faq[] = [
        {
            question: "How long does it take to build a website?",
            revealedAns: "Timelines vary based on complexity. A simple 5-page website typically takes 2-3 weeks, while e-commerce sites with custom features can take 4-6 weeks. We'll provide a detailed timeline during our strategy session."
        },
        {
            question: "Do you offer website maintenance after launch?",
            revealedAns: "Yes! We offer monthly maintenance packages that include security updates, backups, content updates, and performance monitoring. Prices start from R850/month for basic maintenance."
        },
        {
            question: "What if I don't have content or images for my website?",
            revealedAns: "No problem! We can help with copywriting, stock photography, and even connect you with local photographers or content creators. We also offer AI-assisted content generation to get you started."
        },
        {
            question: "Will my website work on mobile phones?",
            revealedAns: "Absolutely! All our websites are built with a 'mobile-first' approach, ensuring they look and function perfectly on smartphones, tablets, and desktops. We test on multiple devices before launch."
        },
        {
            question: "Can you integrate payment gateways like PayFast or Yoco?",
            revealedAns: "Yes, we specialize in South African payment integrations including PayFast, Yoco, Ozow, and SnapScan. We can also set up recurring billing for membership sites or subscription services."
        },
        {
            question: "Do you help with domain registration and hosting?",
            revealedAns: "We handle the entire setup process. We can register your .co.za domain (typically R99/year) and set up reliable local hosting. We'll also connect your email and ensure everything works seamlessly."
        },
        {
            question: "What if I need changes after the website is live?",
            revealedAns: "All our packages include a revision period. After that, we offer flexible support options—you can request individual changes, purchase hourly support, or sign up for a maintenance plan for ongoing updates."
        }
    ];

    const [selectedFaq, setSelectedFaq] = useState<Faq>({question: "", revealedAns: ""});
    return (
        <>
            <section
                className='w-screen pt-20 flex-col items-center justify-start min-h-screen lg:h-screen mb-20 lg:mb-40 flex mt-20 lg:mt-30 bg-background px-4 lg:px-0'>
                    <div className="lg:w-4/5 w-screen min-h-50 flex md:flex-col flex-col lg:flex-row justify-between items-center lg:items-start">
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
                        <div className="lg:w-1/2 w-4/5 min-h-50 text-xl flex-col items-start justify-start">
                            {faqs.map((faq) => (
                                <div onClick={() => {selectedFaq.question === faq.question ? setSelectedFaq({question: "", revealedAns: ""}) : setSelectedFaq(faq)}} key={faq.question} className={`w-full cursor-pointer transition-all ease-in-out duration-300 ${selectedFaq.question === faq.question ? "h-fit transition-all ease-in-out duration-300" : "h-7"} overflow-hidden font-geist-mono-regular border-0 border-black mb-3 flex items-start justify-between text-neutral-600 border-b-1 border-neutral-600`}>
                                    <div className="w-full min-h-20">
                                        <span className={`font-geist-mono-bold pb-5 ${selectedFaq.question === faq.question && "text-accent"} transition-all duration-300 ease-in-out`}>{faq.question}</span>
                                        <p>{faq.revealedAns}</p>
                                    </div>
                                    {selectedFaq.question === faq.question ? <FaCirclePlus/> : <FaCircleMinus/>}
                                </div>
                            ))}
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Faq;