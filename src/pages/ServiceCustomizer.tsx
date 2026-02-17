import { useState } from "react";

const ServiceCustomizer = () => {
    interface Page {
        id: number;
        name: string;
        options: {
            name: string;
            selected: boolean;
        };
        question: string;
    }

    interface Process {
        progress: number;
    }

    const formData : Page[] = [

    ]
    const [ currentPage, setCurrentPage ] = useState(1);
    const pageData = [

    ]

    return (
        <>
            <div className='w-screen min-h-screen flex-col items-center justify-center'>
                <div className="w-screen h-screen flex justify-between items-center">
                    <div className="w-1/2 g-full bg-neutral-400"></div>
                    <div className="w-1/2 g-full"></div>
                </div>
            </div>
        </>
    )
}

export default ServiceCustomizer