import { Link } from "react-router-dom"
import {CheckCircle, CheckIcon} from "lucide-react";

const Pricing = () => {
    return(
        <>
            <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center pt-20">
                <div className="rounded-2xl w-6xl h-4/5 flex flex-col justify-between items-center pt-20">
                    <div className="w-2/3 h-40 flex-col text-center items-center justify-center">
                        <h1 className="text-4xl font-geist-mono-bold text-black flex items-center justify-center gap-3">
                            Select A Plan To Begin
                        </h1>
                        <p className="pt-10 font-geist-mono-regular text-black">Tell us your goals. Get AI-crafted recommendations.
                            Fine-tune your perfect site. Watch us build your digital advantage.</p>
                    </div>
                    <div className="w-full h-full flex items-start justify-between p-5 gap-5">
                        <div
                            className="w-1/3 min-h-100 bg-neutral-200 shadow-md border- 4 border-green- 600 rounded-2xl p-1 mt-20 flex-col items-start justify-start p-5">
                            <div className="w-full text-black h-20 flex-col items-start justify-between">
                                <h1 className="text-xl font-geist-mono-bold pb-2">Static Page</h1>
                                <p className="">Great to start your journey</p>
                            </div>
                            <div className="w-full h-40 text-black h-30 flex flex-col items-center justify-center">
                                <span className="text-4xl font-geist-mono-bold">Free</span>
                                <span className="font-geist-mono-regular">Forever</span>
                            </div>
                            <div
                                className="w-full h-10 text-black flex mb-5 items-center cursor-pointer justify-center rounded-md border-1 border-neutral-200 shadow-sm">
                                <Link to="/starter" className="text-black ">Get started</Link>
                            </div>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Access to all paid features</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Fast responses</span>

                        </div>

                        <div
                            className="w-1/3 min-h-100 bg-neutral-200 shadow-md border-4 border-green-600 rounded-2xl p-1 mt-20 flex-col items-start justify-start p-5">
                            <div className="w-full text-black h-20 flex-col items-start justify-between">
                                <h1 className="text-xl font-geist-mono-bold pb-2">Pro</h1>
                                <p className="">Even better performance and Security</p>
                            </div>
                            <div className="w-full h-40 text-black h-30 flex flex-col items-center justify-center">
                                <span className="text-4xl font-geist-mono-bold">R5000</span>
                                <span className="font-geist-mono-regular">Once Off</span>
                            </div>
                            <div
                                className="bg-green-600 w-full h-10 text-black flex mb-5 items-center cursor-pointer justify-center rounded-md border-0 border-neutral-200 shadow-s">
                                <Link to="/pro" className="text-white">Get started</Link>
                            </div>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Unlimited number of pages</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Get 5 Revisions</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Free Domain</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Better Security</span>

                        </div>

                        <div
                            className="w-1/3 min-h-100 bg-neutral-200 shadow-md border- 4 border-green- 600 rounded-2xl p-1 mt-20 flex-col items-start justify-start p-5">
                            <div className="w-full text-black h-20 flex-col items-start justify-between">
                                <h1 className="text-xl font-geist-mono-bold pb-2">Starter</h1>
                                <p className="">Great to start your journey</p>
                            </div>
                            <div className="w-full h-40 text-black h-30 flex flex-col items-center justify-center">
                                <span className="text-4xl font-geist-mono-bold">Free</span>
                                <span className="font-geist-mono-regular">Forever</span>
                            </div>
                            <div
                                className="w-full h-10 text-black flex mb-5 items-center cursor-pointer justify-center rounded-md border-1 border-neutral-200 shadow-sm">
                                <Link to="/starter" className="text-black ">Get started</Link>
                            </div>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Access to all paid features</span>
                            <span className="text-neutral-600 mb-3 flex justify-start items-center gap-2"><CheckCircle className="size-4 text-green-600"/>Fast responses</span>

                        </div>
                    </div>
                </div>
                </div>
            </>
            )
            }

            export default Pricing