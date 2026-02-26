import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from "@react-icons/all-files/fa/FaChevronCircleLeft";
import useSelectedServiceStore from "../stores/selectedServiceStore.ts";
import {useState} from "react";
import PhoneInput from 'react-phone-number-input'

const CheckoutPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [cellNumber, setCellNumber] = useState("");

    const { globalSelectedPages, globalSelectedFeatures, globalBusinessGoals, globalBusinessType, globalTotalPrice } = useSelectedServiceStore()

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
                        <p className="text-neutral-600">Please complete your payment using a valid credit/debit card number</p>
                    </div>
                    {/*Input Area*/}
                    <form action={import.meta.env.VITE_SANDBOX_URL}
                          method="post" className="w-full min-h-50 flex flex-col justify-start items-start">
                        {/*Hidden inputs*/}
                        <input type="hidden" name="merchant_id" value={import.meta.env.VITE_PF_SANDBOX_MERCHANT_ID}/>
                        <input type="hidden" name="merchant_key" value={import.meta.env.VITE_PF_SANDBOX_MERCHANT_KEY}/>
                        <input type="hidden" name="amount" value={globalTotalPrice}/>
                        <input type="hidden" name="item_name" value={globalBusinessType.name}/>
                        <input type="hidden" name="item_description" value={globalBusinessType.description}/>
                        <input type="hidden" name={email} value="1"/>
                        <input type="hidden" name="confirmation_address" value={email}/>
                        {/*Names*/}
                        <div className="w-full h-25 flex items-center bg-white justify-between gap-5">
                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">{firstName}</h3>
                                <input
                                    name="name_first"
                                    value={firstName}
                                    id="first name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00" type="text"/>
                            </div>
                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">{lastName}</h3>
                                <input
                                    name="name_last"
                                    value={lastName}
                                    id="last name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00" type="text"/>
                            </div>
                        </div>
                        {/*Contant Details*/}
                        <div
                            className="w-full h-25 flex items-center bg-white justify-between gap-5">

                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">{cellNumber}</h3>
                                <input
                                    name="cell_number"
                                    value={cellNumber}
                                    type="tel"
                                    id="phone"
                                    onChange={(e) => setCellNumber(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00"/>
                            </div>
                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">{email}</h3>
                                <input
                                    name="email_address"
                                    value={email}
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00"/>
                            </div>
                        </div>
                        <button type="submit"
                                className="w-1/2 mt-5 h-15 bg-accent hover:scale-105 transition-all ease-in-out duration-300">Confirm
                            Payment
                        </button>
                    </form>

                </div>
                {/*Right section*/}
                <div className="w-1/3 h-screen bg-neutral-3 flex flex-col  items-start gap-10 justify-start px-10">
                    <div className="flex justify-center mt-10 items-center w-full h-20 bg-gray-">
                        <h1 className="font-geist-mono-bold text-3xl text-neutral-600">Order Summary</h1>
                    </div>
                    <div className="flex flex-col justify-start mt-10 items-start p-3 w-full min-h-20 border-2 border-neutral-300 rounded-2xl">
                        <h2 className="text-neutral-600 text-lg font-bold pb-3">Business Type</h2>
                        <div className="w-full h-20 bg-neutral-300 rounded-xl">
                            {globalBusinessType.name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;