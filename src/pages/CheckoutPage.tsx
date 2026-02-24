import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from "@react-icons/all-files/fa/FaChevronCircleLeft";
import useSelectedServiceStore from "../stores/selectedServiceStore.ts";

const CheckoutPage = () => {
    const { globalSelectedPages, globalBusinessType } = useSelectedServiceStore()

    return (
        <>
            <div className='w-screen min-h-screen bg-neutral-50 flex items-center justify-between'>
                {/*Left section*/}
                <div className="w-2/3 pl-20 pr-40 h-screen flex flex-col  items-start gap-10 justify-start">
                    <div className="flex justify-start items-start w-full min-h-20 flex-col">
                        {/*Return to services button*/}
                        <Link to="/service-customizer" className="mt-12 min-w-1 hover:scale-105 transition-all duration-300 cursor-pointer text-lg text-neutral-600 h-10 hover:bg-neutral-200 hover:px-3 rounded-lg flex items-center justify-start gap-2">
                            <FaChevronCircleLeft />
                            Back to services
                        </Link>
                        {/*Heading and paragraph*/}
                        <div className="w-1/2 my-6 h-13 flex justify-start items-center">
                            <div className="size-13 mb-10 mt-10">
                                <img src="src/assets/logo2.png" alt=""/>
                            </div>
                            <h1 className="text-accent text-5xl font-geist-mono-bold ">HECKOUT</h1>
                        </div>
                        <p className="text-neutral-600">Please complete yoour payment using a valid credit/debit card number</p>
                    </div>
                    {/*Input Area*/}
                    <div className="w-full min-h-50 bg-neutral-400 flex flex-col justify-start items-start">
                        <div className="w-full h-20 flex items-center bg-white justify-between gap-5">
                            <div className="w-full text-neutral-600 h-full bg-neutral-300 flex flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">First Name</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Right section*/}
                <div className="w-1/3 h-screen bg-neutral-300 flex flex-col  items-start gap-10 justify-start">
                    <div className="flex justify-between items-center w-full h-20 bg-gray-500">

                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;