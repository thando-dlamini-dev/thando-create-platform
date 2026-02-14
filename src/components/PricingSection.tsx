import { Link } from "react-router-dom"
import {CheckCircle, CheckIcon} from "lucide-react";
import { useEffect, useState } from "react";


const PricingSection = () => {
    const [selectedPrice, setSelectedPrice] = useState<number>(0);

    //Update when user selects a price1
    useEffect(() => {

    },[selectedPrice])
    return(
        <>
            <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center pt-20">
                <div className="rounded-2xl w-6xl h-4/5 flex flex-col justify-between items-center pt-20">
                    <div className="w-2/3 h-40 flex-col text-center items-center justify-center">
                        <h1 className="text-4xl font-geist-mono-bold text-black flex items-center justify-center gap-3">
                            Strategic Development Plans
                        </h1>
                        <p className="pt-10 font-geist-mono-regular text-black">AI-driven recommendations. Craftsmanship execution. Accelerated timelines.
                            Choose your path to digital advantage.</p>
                    </div>
                    <div className="w-full h-full flex items-start justify-between p-5 gap-5">
                        <div
                            className="w-1/3 min-h-100 bg-neutral-200 shadow-md border-4 border-neutral-300 rounded-2xl p-1 mt-20 flex-col items-start justify-start p-5">
                            <div className="w-full text-black h-20 flex-col items-start justify-between">
                                <h1 className="text-xl font-geist-mono-bold pb-2">Referral Program</h1>
                                <p className="">Free website through referrals</p>
                            </div>
                            <div className="w-full h-40 text-black h-30 flex flex-col items-center justify-center">
                                <span className="text-4xl font-geist-mono-bold">Free</span>
                                <span className="font-geist-mono-regular">After Referrals</span>
                                <div className="mt-3 px-3 py-1 bg-yellow-100 border border-yellow-300 rounded-md">
                                    <span className="text-sm font-geist-mono-bold text-amber-800">Refer 5 businesses</span>
                                </div>
                            </div>
                            <div
                                className="w-full h-10 text-black flex mb-5 items-center cursor-pointer justify-center rounded-md border-1 border-neutral-400 shadow-sm hover:bg-neutral-300">
                                <Link to="/referral" className="text-black">Learn How It Works</Link>
                            </div>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Single landing page website</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>AI strategy session included</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Mobile-responsive design</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Basic SEO setup</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Unlock after 5 referrals*</span>
                            <div className="mt-3 pt-3 border-t border-neutral-300">
                                <p className="text-xs text-neutral-500">*Refer at least 5 business owners who purchase any paid service</p>
                            </div>
                        </div>

                        <div
                            className="w-1/3 min-h-100 bg-neutral-200 shadow-md border-4 border-green-600 rounded-2xl p-1 mt-20 flex-col items-start justify-start p-5 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                                Most Popular
                            </div>
                            <div className="w-full text-black h-20 flex-col items-start justify-between">
                                <h1 className="text-xl font-geist-mono-bold pb-2">Growth Pro</h1>
                                <p className="">Multi-page site with full features</p>
                            </div>
                            <div className="w-full h-40 text-black h-30 flex flex-col items-center justify-center">
                                <span className="text-4xl font-geist-mono-bold">R5,500</span>
                                <span className="font-geist-mono-regular">Once Off</span>
                                <span className="text-sm text-neutral-600 mt-2">Launch in 3-4 weeks</span>
                            </div>
                            <div
                                className="bg-green-600 w-full h-10 text-white flex mb-5 items-center cursor-pointer justify-center rounded-md border-0 border-neutral-200 shadow-s hover:bg-green-700">
                                <Link to="/service-customizer" className="text-white">Start Strategy Session</Link>
                            </div>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Comprehensive AI strategy analysis</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Up to 5 custom pages</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Contact form integration</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Advanced SEO optimization</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>3 rounds of revisions</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Performance optimization</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Basic analytics setup</span>
                        </div>

                        <div
                            className="w-1/3 min-h-100 bg-neutral-200 shadow-md border-4 border-neutral-300 rounded-2xl p-1 mt-20 flex-col items-start justify-start p-5">
                            <div className="w-full text-black h-20 flex-col items-start justify-between">
                                <h1 className="text-xl font-geist-mono-bold pb-2">Enterprise</h1>
                                <p className="">Advanced features & payment integration</p>
                            </div>
                            <div className="w-full h-40 text-black h-30 flex flex-col items-center justify-center">
                                <span className="text-4xl font-geist-mono-bold">R15,000+</span>
                                <span className="font-geist-mono-regular">Custom Quote</span>
                                <span className="text-sm text-neutral-600 mt-2">4-5 week timeline</span>
                            </div>
                            <div
                                className="border-neutral-500 border-1 w-full h-10 text-white flex mb-5 items-center cursor-pointer justify-center rounded-md border-0 border-neutral-200 shadow-s hover:bg-purple-700">
                                <Link to="/enterprise" className="text-black">Book Consultation</Link>
                            </div>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Full AI-driven strategic planning</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Unlimited pages + custom CMS</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Payment system integration</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Advanced security features</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>E-commerce capabilities</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>5+ rounds of revisions</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Priority support & training</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingSection