import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from "@react-icons/all-files/fa/FaChevronCircleLeft";
import useSelectedServiceStore from "../stores/selectedServiceStore.ts";
import {useState} from "react";
import PhoneInput from 'react-phone-number-input'

const CheckoutPage = () => {
    interface CompletePaymentData {
        merchant_id: number;
        merchant_key: string;
        return_url: string;
        cancel_url: string;
        notify_url: string;
        name_first: string;
        name_last: string;
        email_address: string;
        amount: number;
        item_name: string;
        item_description: string;
        email_confirmation: boolean;
        confirmation_address: string;
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [cellNumber, setCellNumber] = useState("");

    const { globalSelectedPages, globalBusinessType, globalTotalPrice } = useSelectedServiceStore()

    const completePaymentData: CompletePaymentData = {
        merchant_id: parseInt(process.env.PF_MERCHANT_ID!),
        merchant_key: process.env.PF_MERCHANT_KEY!,
        return_url: `${process.env.BACKEND_URL!}${process.env.RETURN_URL!}`,
        cancel_url: `${process.env.BACKEND_URL!}${process.env.CANCEL_URL!}`,
        notify_url: `${process.env.BACKEND_URL!}${process.env.NOTIFY_URL!}`,
        name_first: firstName,
        name_last: lastName,
        email_address: email,
        amount: globalTotalPrice,
        item_name: globalBusinessType.name,
        item_description: globalBusinessType.description,
        email_confirmation: true,
        confirmation_address: email
    }



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
                    <form action="https://www.payfast.co.za/eng/process"
                          method="post" className="w-full min-h-50 flex flex-col justify-start items-start">
                        {/*Hidden inputs*/}
                        <input type="hidden" name="merchant_id" value={process.env}/>
                        <input type="hidden" name="merchant_key" value="46f0cd694581a"/>
                        <input type="hidden" name="amount" value="100.00"/>
                        {/*Names*/}
                        <div className="w-full h-25 flex items-center bg-white justify-between gap-5">
                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">First Name</h3>
                                <input
                                    name="name_first"
                                    value={firstName}
                                    id="first name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00" type="text"/>
                            </div>
                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">Last Name</h3>
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
                                <h3 className="font-geist-mono">Phone Number</h3>
                                <input
                                    name="name_first"
                                    value={cellNumber}
                                    id="phone number"
                                    onChange={(e) => setCellNumber(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00" type="text"/>
                            </div>
                            <div className="w-full text-neutral-600 h-full flex-col items-start pt-3 justify-between">
                                <h3 className="font-geist-mono">Email Address</h3>
                                <input
                                    name="name_last"
                                    value={email}
                                    id="email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 h-15 border-2 border-neutral-300 bg-neutral-00" type="text"/>
                            </div>
                        </div>
                        <button type="submit"
                                className="w-1/2 mt-5 h-15 bg-accent hover:scale-105 transition-all ease-in-out duration-300">Confirm
                            Payment
                        </button>
                    </form>

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