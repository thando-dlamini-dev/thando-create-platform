import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    CheckCircle, Clock, RotateCw, MessageCircle, Zap, Shield, Users, Star,
    Layout, ShoppingCart, MessageSquare, Grid, Calendar, UserCircle,
    BarChart, Target, Award, HeadphonesIcon, DollarSign, Sparkles,
    Plus, Minus, CreditCard, Globe, Server, Mail, Smartphone
} from "lucide-react";
import { Link } from "react-router-dom"

export interface BusinessType {
    id: string;
    name: string;
    description: string;
}

const ServiceCustomizer = () => {
    interface View {
        id: number;
        name: string;
    }



    // Website Features
    const websiteFeatures = [
        { id: 'marketing', name: 'Marketing', icon: BarChart, category: 'engagement' },
        { id: 'payment', name: 'Payment', icon: CreditCard, category: 'ecommerce' },
        { id: 'forum', name: 'Forum', icon: MessageSquare, category: 'community' },
        { id: 'inventory', name: 'Inventory', icon: Grid, category: 'ecommerce' },
        { id: 'form', name: 'Form', icon: Mail, category: 'leads' },
        { id: 'chat', name: 'Chat', icon: MessageCircle, category: 'support' },
        { id: 'membership', name: 'Membership', icon: UserCircle, category: 'community' },
        { id: 'booking', name: 'Booking', icon: Calendar, category: 'scheduling' },
        { id: 'portfolio', name: 'Portfolio', icon: Layout, category: 'showcase' },
        { id: 'dashboard', name: 'Dashboard', icon: Server, category: 'admin' },
    ];

    // Business Goals
    const businessGoals = [
        {
            id: 1,
            title: "Generating Leads and Conversions",
            icon: Target,
            description: "Capture potential customer information and convert visitors"
        },
        {
            id: 2,
            title: "Building Brand Awareness and Authority",
            icon: Award,
            description: "Establish trust and recognition in your market"
        },
        {
            id: 3,
            title: "Enhancing Customer Service and Support",
            icon: HeadphonesIcon,
            description: "Provide better support and engagement"
        },
        {
            id: 4,
            title: "Driving Sales and Revenue",
            icon: DollarSign,
            description: "Increase online transactions and revenue"
        },
    ];

    // Business Types with descriptions
    const businessTypes: BusinessType[] = [
        {
            id: 'local',
            name: "Local Business",
            description: "Brick-and-mortar stores, restaurants, salons serving local customers"
        },
        {
            id: 'ecommerce',
            name: "E-commerce",
            description: "Online stores selling products directly to customers"
        },
        {
            id: 'service',
            name: "Service Provider",
            description: "Plumbers, electricians, consultants offering professional services"
        },
        {
            id: 'startup',
            name: "Startup",
            description: "Early-stage companies looking to establish digital presence"
        },
        {
            id: 'enterprise',
            name: "Enterprise",
            description: "Large organizations needing complex, scalable solutions"
        },
        {
            id: 'nonprofit',
            name: "Non-profit",
            description: "Charities, NGOs, community organizations"
        },
    ];

    // Page Types
    const pageTypes = [
        "Landing Page", "About Us", "Services", "Products",
        "Blog", "Contact", "FAQ", "Testimonials", "Careers", "Gallery"
    ];

    const views: View[] = [
        { id: 0, name: "Summary" },
        { id: 1, name: "Pricing" }
    ];

    const [activeView, setActiveView] = useState<View>(views[0]);

    // Selected options state
    const [selectedPages, setSelectedPages] = useState<string[]>(["Landing Page"]);
    const [businessType, setBusinessType] = useState<BusinessType>(businessTypes[0]);
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [selectedGoals, setSelectedGoals] = useState<number[]>([]);
    const [pageCount, setPageCount] = useState(1);
    const [hasEcommerce, setHasEcommerce] = useState(false);

    // Pricing calculation
    const calculatePrice = () => {
        let basePrice = 5000;

        // Page count pricing
        basePrice += (pageCount - 1) * 1500;

        // Feature pricing
        basePrice += selectedFeatures.length * 800;

        // E-commerce addition
        if (hasEcommerce || selectedFeatures.includes('payment') || selectedFeatures.includes('inventory')) {
            basePrice += 3000;
        }

        // Business type adjustments
        if (businessType.id === 'enterprise') basePrice += 5000;
        if (businessType.id === 'ecommerce') basePrice += 3000;

        return basePrice;
    };

    const toggleFeature = (featureId: string) => {
        setSelectedFeatures(prev =>
            prev.includes(featureId)
                ? prev.filter(f => f !== featureId)
                : [...prev, featureId]
        );
    };

    const toggleGoal = (goalId: number) => {
        setSelectedGoals(prev =>
            prev.includes(goalId)
                ? prev.filter(g => g !== goalId)
                : [...prev, goalId]
        );
    };

    const togglePage = (page: string) => {
        if (page === "Landing Page") return; // Always keep landing page
        setSelectedPages(prev =>
            prev.includes(page)
                ? prev.filter(p => p !== page)
                : [...prev, page]
        );
        setPageCount(prev => prev + (selectedPages.includes(page) ? -1 : 1));
    };

    const totalPrice = calculatePrice();

    return (
        <div className='w-screen min-h-screen bg-neutral-50 pt-23'>
            <div className="w-screen h-screen flex justify-between items-start p-8 gap-8">
                {/* Left Side - Configuration Panel */}
                <div className="w-3/5 h-full overflow-y-auto pr-4 space-y-6">
                    {/* Business Type - Updated with cards and descriptions */}
                    <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                        <h3 className="text-lg font-geist-mono-bold text-black mb-4 flex items-center gap-2">
                            <Globe className="size-5 text-accent" />
                            Business Type
                        </h3>
                        <div className="space-y-2">
                            {businessTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setBusinessType(type)}
                                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                                        businessType.id === type.id
                                            ? 'border-accent bg-accent/5'
                                            : 'border-neutral-200 hover:border-neutral-300'
                                    }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="font-geist-mono-bold text-black">{type.name}</span>
                                            <p className="text-sm text-neutral-600 mt-1">{type.description}</p>
                                        </div>
                                        {businessType.id === type.id && (
                                            <CheckCircle className="size-5 text-accent" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pages Selection */}
                    <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                        <h3 className="text-lg font-geist-mono-bold text-black mb-4 flex items-center gap-2">
                            <Layout className="size-5 text-accent" />
                            Pages Required
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm text-neutral-600">Total Pages:</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setPageCount(prev => Math.max(1, prev - 1))}
                                    className="p-1 rounded-md bg-neutral-100 hover:bg-neutral-200"
                                >
                                    <Minus className="size-4" />
                                </button>
                                <span className="w-8 text-center font-geist-mono-bold">{pageCount}</span>
                                <button
                                    onClick={() => setPageCount(prev => prev + 1)}
                                    className="p-1 rounded-md bg-neutral-100 hover:bg-neutral-200"
                                >
                                    <Plus className="size-4" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {pageTypes.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => togglePage(page)}
                                    disabled={page === "Landing Page"}
                                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                                        selectedPages.includes(page)
                                            ? 'bg-accent text-white'
                                            : page === "Landing Page"
                                                ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                    }`}
                                >
                                    {page} {page === "Landing Page" && "(Required)"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Website Features Grid */}
                    <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                        <h3 className="text-lg font-geist-mono-bold text-black mb-4 flex items-center gap-2">
                            <Smartphone className="size-5 text-accent" />
                            Website Features
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {websiteFeatures.map((feature) => {
                                const Icon = feature.icon;
                                const isSelected = selectedFeatures.includes(feature.id);
                                return (
                                    <button
                                        key={feature.id}
                                        onClick={() => toggleFeature(feature.id)}
                                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                                            isSelected
                                                ? 'border-accent bg-accent/5'
                                                : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50'
                                        }`}
                                    >
                                        <Icon className={`size-5 ${isSelected ? 'text-accent' : 'text-neutral-500'}`} />
                                        <span className="text-sm font-geist-mono-medium">{feature.name}</span>
                                        {isSelected && <CheckCircle className="size-4 text-accent ml-auto" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Business Goals Grid */}
                    <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                        <h3 className="text-lg font-geist-mono-bold text-black mb-4 flex items-center gap-2">
                            <Target className="size-5 text-accent" />
                            Main Business Goals
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {businessGoals.map((goal) => {
                                const Icon = goal.icon;
                                const isSelected = selectedGoals.includes(goal.id);
                                return (
                                    <button
                                        key={goal.id}
                                        onClick={() => toggleGoal(goal.id)}
                                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                                            isSelected
                                                ? 'border-accent bg-accent/5'
                                                : 'border-neutral-200 hover:border-neutral-300'
                                        }`}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <Icon className={`size-6 ${isSelected ? 'text-accent' : 'text-neutral-500'}`} />
                                            {isSelected && <CheckCircle className="size-5 text-accent" />}
                                        </div>
                                        <h4 className="font-geist-mono-bold text-sm mb-1">{goal.title}</h4>
                                        <p className="text-xs text-neutral-600">{goal.description}</p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Side - Summary/Pricing Panel */}
                <div className="w-2/5 h-full flex flex-col items-center justify-start gap-6">
                    {/* View Toggle */}
                    <div className="w-full h-12 flex justify-evenly items-center gap-2">
                        {views.map((view) => (
                            <span
                                onClick={() => setActiveView(view)}
                                className={`text-xl px-3 py-1 cursor-pointer rounded-lg font-geist-mono-regular transition-all duration-300 ${
                                    activeView.name === view.name
                                        ? "bg-accent text-white"
                                        : "border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
                                }`}
                                key={view.id}
                            >
                                {view.name}
                            </span>
                        ))}
                    </div>

                    {/* Animated Content Area */}
                    <div className="w-full h-[600px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeView.id}
                                initial={{x: -20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: 20, opacity: 0}}
                                transition={{duration: 0.15, ease: "easeInOut"}}
                                className="w-full h-full rounded-xl border border-neutral-200 bg-white shadow-lg absolute inset-0 overflow-y-auto"
                            >
                                {/* Summary View */}
                                {activeView.name === "Summary" && (
                                    <div className="p-6 space-y-6">
                                        <h2 className="text-2xl font-geist-mono-bold text-black flex items-center gap-2">
                                            <Sparkles className="size-6 text-accent" />
                                            Your Project Summary
                                        </h2>

                                        {/* Business Type - Updated with description */}
                                        <div className="border-b border-neutral-100 pb-4">
                                            <span className="text-sm text-neutral-400">BUSINESS TYPE</span>
                                            <p className="text-lg font-geist-mono-medium text-black mt-1">{businessType.name}</p>
                                            <p className="text-sm text-neutral-600 mt-1">{businessType.description}</p>
                                        </div>

                                        {/* Pages */}
                                        <div className="border-b border-neutral-100 pb-4">
                                            <span className="text-sm text-neutral-400">PAGES ({pageCount})</span>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {selectedPages.map((page) => (
                                                    <span key={page} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                                                        {page}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Selected Features */}
                                        {selectedFeatures.length > 0 && (
                                            <div className="border-b border-neutral-100 pb-4">
                                                <span className="text-sm text-neutral-400">FEATURES</span>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {selectedFeatures.map((featureId) => {
                                                        const feature = websiteFeatures.find(f => f.id === featureId);
                                                        return feature && (
                                                            <span key={featureId} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                                                                {feature.name}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Business Goals */}
                                        {selectedGoals.length > 0 && (
                                            <div className="border-b border-neutral-100 pb-4">
                                                <span className="text-sm text-neutral-400">GOALS</span>
                                                <div className="space-y-2 mt-2">
                                                    {selectedGoals.map((goalId) => {
                                                        const goal = businessGoals.find(g => g.id === goalId);
                                                        return goal && (
                                                            <div key={goalId} className="flex items-start gap-2">
                                                                <goal.icon className="size-4 text-accent mt-0.5" />
                                                                <span className="text-sm text-neutral-700">{goal.title}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Next Steps */}
                                        <div className="bg-neutral-50 rounded-lg p-4">
                                            <h4 className="font-geist-mono-bold text-black mb-2">Ready to proceed?</h4>
                                            <p className="text-sm text-neutral-600 mb-4">
                                                Switch to the Pricing tab to see your customized quote based on these selections.
                                            </p>
                                            <button
                                                onClick={() => setActiveView(views[1])}
                                                className="w-full bg-accent text-white py-2 rounded-lg font-geist-mono-medium"
                                            >
                                                View Pricing
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Pricing View */}
                                {activeView.name === "Pricing" && (
                                    <div className="p-6">
                                        <h2 className="text-2xl font-geist-mono-bold text-black mb-6 flex items-center gap-2">
                                            <DollarSign className="size-6 text-accent" />
                                            Your Custom Quote
                                        </h2>

                                        {/* Price Breakdown */}
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-neutral-600">Base Price</span>
                                                <span className="font-geist-mono-medium">ZAR 5,000</span>
                                            </div>
                                            {pageCount > 1 && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-neutral-600">Additional Pages ({(pageCount - 1)} × ZAR 1,500)</span>
                                                    <span className="font-geist-mono-medium">ZAR {(pageCount - 1) * 1500}</span>
                                                </div>
                                            )}
                                            {selectedFeatures.length > 0 && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-neutral-600">Features ({selectedFeatures.length} × ZAR 800)</span>
                                                    <span className="font-geist-mono-medium">ZAR {selectedFeatures.length * 800}</span>
                                                </div>
                                            )}
                                            {(hasEcommerce || selectedFeatures.includes('payment') || selectedFeatures.includes('inventory')) && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-neutral-600">E-commerce Setup</span>
                                                    <span className="font-geist-mono-medium">ZAR 3,000</span>
                                                </div>
                                            )}
                                            {businessType.id === 'enterprise' && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-neutral-600">Enterprise Premium</span>
                                                    <span className="font-geist-mono-medium">ZAR 5,000</span>
                                                </div>
                                            )}
                                            <div className="border-t border-neutral-200 pt-3 mt-3">
                                                <div className="flex justify-between font-geist-mono-bold text-lg">
                                                    <span>Total</span>
                                                    <span className="text-accent">ZAR {totalPrice.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Business Type Summary in Pricing */}
                                        <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Globe className="size-4 text-accent" />
                                                <span className="font-geist-mono-medium">Business Type</span>
                                            </div>
                                            <p className="text-sm text-black font-geist-mono-medium">{businessType.name}</p>
                                            <p className="text-xs text-neutral-600 mt-1">{businessType.description}</p>
                                        </div>

                                        {/* Delivery Timeline */}
                                        <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Clock className="size-4 text-accent" />
                                                <span className="font-geist-mono-medium">Estimated Timeline</span>
                                            </div>
                                            <p className="text-sm text-neutral-600">
                                                {pageCount > 5 ? '4-6 weeks' : pageCount > 3 ? '3-4 weeks' : '2-3 weeks'}
                                                {selectedFeatures.length > 5 ? ' + additional time for complex features' : ''}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="space-y-3">
                                            <Link to="/checkout" className="w-full bg-accent text-white py-3 rounded-lg font-geist-mono-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                                                Continue to Checkout
                                                <CreditCard className="size-4" />
                                            </Link>

                                            <button className="w-full border border-neutral-300 text-neutral-700 py-2 rounded-lg font-geist-mono-regular hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
                                                Contact me for custom quote
                                                <MessageCircle className="size-4" />
                                            </button>
                                        </div>

                                        {/* Hourly Option */}
                                        <div className="mt-6 pt-6 border-t border-neutral-200">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-neutral-100 p-2 rounded-lg">
                                                    <Users className="size-5 text-neutral-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-geist-mono-bold text-black">
                                                        Need flexibility when hiring?
                                                    </p>
                                                    <p className="text-xs text-neutral-600 mt-1">
                                                        Hire by the hour, ideal for long-term projects with flexible hours and weekly payments.
                                                    </p>
                                                    <div className="mt-3 flex items-center justify-between">
                                                        <span className="text-lg font-geist-mono-bold text-accent">
                                                            ZAR 590.64/hour
                                                        </span>
                                                        <button className="text-sm text-accent border border-accent px-3 py-1 rounded-md hover:bg-accent hover:text-white transition-colors">
                                                            Request hourly offer
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCustomizer;