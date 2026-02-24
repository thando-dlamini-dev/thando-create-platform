import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from "@react-icons/all-files/fa/FaChevronCircleLeft";
import useSelectedServiceStore from "../stores/selectedServiceStore.ts";

const CheckoutPage = () => {
    const { globalSelectedPages, globalBusinessType } = useSelectedServiceStore()

    return (
        <>
            <div className='w-screen min-h-screen bg-neutral-50 flex items-center justify-between'>
                <div className="w-2/3 h-screen flex flex-col  items-start gap-10 justify-start">
                    <div className="flex justify-start items-start w-full min-h-20 flex-col">
                        <div className="size-13 m-3 ml-20 mb-10 mt-10">
                            <img src="src/assets/logo2.png" alt=""/>
                        </div>
                        <Link to="/service-customizer" className="min-w-1 hover:scale-105 transition-all duration-300 cursor-pointer text-lg text-neutral-600 h-10 hover:bg-neutral-200 hover:px-3 rounded-lg ml-20 flex items-center justify-start gap-2">
                            <FaChevronCircleLeft/>
                            Back to services
                        </Link>
                    </div>
                </div>
                <div className="w-1/3 h-screen bg-neutral-300 flex flex-col  items-start gap-10 justify-start">
                    <div className="flex justify-between items-center w-full h-20 bg-gray-500">

                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;