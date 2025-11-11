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
        <section className="w-full min-h-screen py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From idea to launch in four simple steps. Our AI-powered process makes website development effortless.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative group"
                        >
                            {/* Connecting Line (for desktop) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform -translate-y-1/2 z-0" />
                            )}

                            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105 z-10">
                                {/* Step Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {step.stepNumber}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-purple-600 font-medium mt-1">
                                                {step.duration}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-3xl">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-3">
                                    {step.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Step Indicator for Mobile */}
                                <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-500 font-bold text-sm">
                                    ↓
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Join hundreds of founders who've transformed their ideas into successful websites with our AI-powered process.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                                Start Free Strategy Session
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-200">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;