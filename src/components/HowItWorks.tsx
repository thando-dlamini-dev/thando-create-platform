import { motion, AnimatePresence } from 'framer-motion'

const HowItWorks = () => {
    const processSteps = [
        {
            id: 1,
            stepNumber: "01",
            title: "AI Strategy Session",
            description: "Describe your business and goals to get AI-powered feature recommendations tailored to your specific needs.",
            features: [
                "Business goal analysis",
                "AI-powered feature recommendations",
                "Preliminary quote estimation",
                "Industry-specific insights"
            ],
            icon: "🧠",
            duration: "10-15 minutes"
        },
        {
            id: 2,
            stepNumber: "02",
            title: "Interactive Builder",
            description: "Customize your website visually with our real-time builder. See instant previews and price updates as you make changes.",
            features: [
                "Real-time visual preview",
                "Drag-and-drop sections",
                "Live pricing calculator",
                "AI content suggestions"
            ],
            icon: "🎨",
            duration: "20-30 minutes"
        },
        {
            id: 3,
            stepNumber: "03",
            title: "Final Review & Quote",
            description: "Get your detailed project specification and transparent pricing breakdown, then consult directly with Thando.",
            features: [
                "Detailed project specification",
                "Transparent pricing breakdown",
                "15-minute developer consultation",
                "Timeline confirmation"
            ],
            icon: "📋",
            duration: "24-hour turnaround"
        },
        {
            id: 4,
            stepNumber: "04",
            title: "We Build & Launch",
            description: "Sit back while we handle the development. Receive regular updates and launch with full support.",
            features: [
                "Hand-coded custom development",
                "Weekly progress updates",
                "Quality assurance testing",
                "Launch & 30-day support"
            ],
            icon: "🚀",
            duration: "3-4 weeks"
        }
    ];

    return (
        <>
            <section className="w-screen min-h-screen py-20 bg-background flex items-center justify-center ">
                <div className="w-2/3 min-h-screen flex-col justify-between items-center">
                    <div className="w-full h-50 flex items-start justify-center">
                        <h1 className="text-4xl font-mono font-bold text-neutral-800">How It Works</h1>
                    </div>
                    <div className="w-full min-h-full flex flex-col items-start justify-start gap-10">
                        {processSteps.map((step) => (
                            <AnimatePresence>
                            <motion.div
                            key={step.id}
                            initial={{x: step.id%2 === 0 ? 150 : -150, opacity: 0}}  whileInView={{x: 0, opacity: 1}} transition={{duration: 1}}
                            className={`relative shadow-lg w-full h-100 rounded-3xl bg-gray-200 flex items center items-center justify-between p-3 ${step.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-1/2 h-full ${step.id % 2 === 0 ? "rounded-r-2xl" : "rounded-l-2xl"} bg-gray-200 flex flex-col items-start p-4 justify-center gap-5`}>
                                    <div className="absolute top-3 left-3 size-10 bg-accent rounded-full shadow-md shadow-neutral-500 text-white flex justify-center items-center">
                                        <span className="text-white font-bold text-lg font-mono">{step.id}</span>
                                    </div>
                                    <h1 className="text-2xl text-text-col">{step.title}</h1>
                                    <p className="text-text-col text-lg">{step.description}</p>
                                    <div className="w-full min-h-20 bg-neutral-300 rounded-lg p-1">
                                        {step.features.map((feature) => (
                                            <span className="px-2 py-4 bg-gray-2000 my-4 rounded-full text-text-col">{feature}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-1/2 h-full flex items-start justify-start gap-5">
                                    <div className="w-full h-full rounded-2xl bg-gray-300 overflow-hidden">
                                        <img className="w-full h-full" src="" alt=""/>
                                    </div>
                                </div>
                            </motion.div></AnimatePresence>))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;