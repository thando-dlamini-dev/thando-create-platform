import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from "@react-icons/all-files/fa/FaChevronCircleLeft";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaShieldAlt } from "@react-icons/all-files/fa/FaShieldAlt";
import { FaCreditCard } from "@react-icons/all-files/fa/FaCreditCard";
import { FaMobile } from "@react-icons/all-files/fa/FaMobile";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import useSelectedServiceStore from "../stores/selectedServiceStore.ts";
import { useState } from "react";

const CheckoutPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [cellNumber, setCellNumber] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const { globalSelectedPages, globalSelectedFeatures, globalBusinessGoals, globalBusinessType, globalTotalPrice } = useSelectedServiceStore();

    // Format price for display
    const formattedPrice = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 2
    }).format(globalTotalPrice);

    // Handle form submission
    const handleSubmit = () => {
        setIsProcessing(true);
        // Form will submit normally, but we show processing state
        setTimeout(() => setIsProcessing(false), 3000);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100'>
            <div className="container mx-auto px-4 py-6 lg:py-8">
                {/* Return to services button - repositioned for mobile */}
                <Link
                    to="/service-customizer"
                    className="inline-flex items-center gap-2 text-neutral-600 hover:text-accent transition-all duration-300 mb-4 lg:mb-6 hover:scale-105"
                >
                    <FaChevronCircleLeft className="text-lg" />
                    <span className="font-geist-mono">Back to services</span>
                </Link>

                {/* Main content grid - responsive layout */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left section - Checkout form */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        {/* Header with logo */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-neutral-200">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <img src="src/assets/logo2.png" alt="Logo" className="w-8 h-8 object-contain"/>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-geist-mono-bold text-accent">HECKOUT</h1>
                            </div>
                            <p className="text-neutral-600 text-sm md:text-base flex items-center gap-2">
                                <FaLock className="text-accent text-sm" />
                                Secure payment powered by PayFast
                            </p>
                        </div>

                        {/* Contact Information Form */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-neutral-200">
                            <h2 className="text-xl font-geist-mono-bold text-neutral-800 mb-4 flex items-center gap-2">
                                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm">1</span>
                                Contact Information
                            </h2>

                            <form
                                action={import.meta.env.VITE_SANDBOX_URL}
                                method="post"
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                {/* Hidden inputs */}
                                <input type="hidden" name="merchant_id" value={import.meta.env.VITE_PF_SANDBOX_MERCHANT_ID}/>
                                <input type="hidden" name="merchant_key" value={import.meta.env.VITE_PF_SANDBOX_MERCHANT_KEY}/>
                                <input type="hidden" name="amount" value={globalTotalPrice}/>
                                <input type="hidden" name="item_name" value={globalBusinessType.name}/>
                                <input type="hidden" name="item_description" value={globalBusinessType.description}/>

                                {/* Name fields - responsive grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first_name" className="block text-sm font-geist-mono text-neutral-700">
                                            First Name
                                        </label>
                                        <input
                                            id="first_name"
                                            name="name_first"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full p-3 border-2 border-neutral-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                            type="text"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last_name" className="block text-sm font-geist-mono text-neutral-700">
                                            Last Name
                                        </label>
                                        <input
                                            id="last_name"
                                            name="name_last"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full p-3 border-2 border-neutral-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                            type="text"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Contact details - responsive grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-geist-mono text-neutral-700">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <FaMobile className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                            <input
                                                id="phone"
                                                name="cell_number"
                                                value={cellNumber}
                                                type="tel"
                                                onChange={(e) => setCellNumber(e.target.value)}
                                                className="w-full p-3 pl-10 border-2 border-neutral-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                                placeholder="+27 123 456 789"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-geist-mono text-neutral-700">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email_address"
                                            value={email}
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-3 border-2 border-neutral-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Hidden email fields - fixed */}
                                <input type="hidden" name="email" value={email}/>
                                <input type="hidden" name="confirmation_address" value={email}/>

                                {/* Payment button */}
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white font-geist-mono-bold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <FaLock />
                                            Confirm Payment • {formattedPrice}
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Trust badges - responsive grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="bg-white p-3 rounded-xl border border-neutral-200 flex items-center gap-2">
                                <FaShieldAlt className="text-accent text-lg" />
                                <span className="text-xs font-geist-mono text-neutral-600">SSL Secure</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-neutral-200 flex items-center gap-2">
                                <FaCreditCard className="text-accent text-lg" />
                                <span className="text-xs font-geist-mono text-neutral-600">Credit/Debit</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-neutral-200 flex items-center gap-2">
                                <FaCheckCircle className="text-accent text-lg" />
                                <span className="text-xs font-geist-mono text-neutral-600">PCI Compliant</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-neutral-200 flex items-center gap-2">
                                <FaRegClock className="text-accent text-lg" />
                                <span className="text-xs font-geist-mono text-neutral-600">Instant</span>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Order Summary */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-neutral-200 sticky top-6">
                            <h2 className="text-2xl font-geist-mono-bold text-neutral-800 mb-6 pb-4 border-b border-neutral-200">
                                Order Summary
                            </h2>

                            {/* Business Type Card */}
                            <div className="mb-6">
                                <h3 className="text-sm font-geist-mono text-neutral-600 mb-2">Business Type</h3>
                                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-accent/20">
                                    <span className="font-geist-mono-bold text-neutral-800">{globalBusinessType.name}</span>
                                    {(() => {
                                        const Icon = globalBusinessType.icon;
                                        return <Icon className="w-5 h-5 text-accent" />;
                                    })()}
                                </div>
                            </div>

                            {/* Selected Services */}
                            {globalSelectedPages.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-sm font-geist-mono text-neutral-600 mb-2">Pages</h3>
                                    <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                                        <span className="text-neutral-700">Number of pages</span>
                                        <span className="font-bold text-accent">{globalSelectedPages}</span>
                                    </div>
                                </div>
                            )}

                            {globalSelectedFeatures.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-sm font-geist-mono text-neutral-600 mb-2">Features</h3>
                                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                                        {globalSelectedFeatures.map((feature, index) => (
                                            <div key={index} className="flex justify-between items-center p-2 bg-neutral-50 rounded-lg text-sm">
                                                <span className="text-neutral-700 truncate">{feature.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {globalBusinessGoals && (
                                <div className="mb-4">
                                    <h3 className="text-sm font-geist-mono text-neutral-600 mb-2">Business Goal</h3>
                                    <div className="p-3 bg-neutral-50 rounded-lg text-sm text-neutral-700">
                                        {globalBusinessGoals}
                                    </div>
                                </div>
                            )}

                            {/* Price Breakdown */}
                            <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2">
                                <div className="flex justify-between text-neutral-600">
                                    <span>Subtotal</span>
                                    <span>{formattedPrice}</span>
                                </div>
                                <div className="flex justify-between text-neutral-600">
                                    <span>VAT (15%)</span>
                                    <span>{(globalTotalPrice * 0.15).toFixed(2)} ZAR</span>
                                </div>
                                <div className="flex justify-between text-lg font-geist-mono-bold text-accent pt-2 border-t border-neutral-200 mt-2">
                                    <span>Total</span>
                                    <span>{formattedPrice}</span>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="mt-6 pt-4 border-t border-neutral-200">
                                <p className="text-xs text-neutral-500 mb-3 flex items-center gap-1">
                                    <FaShieldAlt className="text-accent" />
                                    Accepted payment methods
                                </p>
                                <div className="flex gap-2">
                                    <div className="px-3 py-2 bg-neutral-100 rounded-lg text-xs font-geist-mono">Visa</div>
                                    <div className="px-3 py-2 bg-neutral-100 rounded-lg text-xs font-geist-mono">Mastercard</div>
                                    <div className="px-3 py-2 bg-neutral-100 rounded-lg text-xs font-geist-mono">Amex</div>
                                </div>
                            </div>

                            {/* Help text */}
                            <p className="text-xs text-neutral-400 mt-4 text-center">
                                By confirming your payment, you agree to our Terms of Service and Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;