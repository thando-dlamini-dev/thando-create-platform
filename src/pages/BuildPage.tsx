import {useState} from "react";


const BuildPage = () => {

    const [type, setType] = useState<string>('fullstack');


    return (
        <>
            <section className='caret-transparent cursor-default overflow-hidden relative min-h-screen flex justify-between items-center bg-background pt-30'>
                <div className='w-screen h-screen flex flex-col justify-between items-start'>
                    <div className=' w-full h-20 flex justify-center items-center'>
                        <h1 className='text-5xl text-neutral-600 top-0 font-bold'>
                            Build Your Custom Website
                        </h1>
                    </div>
                    <div className='w-full h-screen flex items-start justify-evenly'>
                        <div className='w-1/5 h-full m-7 rounded-2xl border-1 p-3 border-neutral-400 flex flex-col items-center justify-start gap-4'>
                            <div className='w-full h-20 mb-20 rounded-xl bg-neutral-300 shadow-lg font-mono font-bold text-2xl text-neutral-600 items-center flex justify-center'>
                                <span>Website Type</span>
                            </div><div onClick={() => setType('fullstack')} className={`relative w-full h-40 rounded-xl flex bg-neutral-300 shadow-lg font-mono font-bold text-2xl text-neutral-600 text-center `}>
                                <div  className={`absolute ${type === 'fullstack' ? 'border-green-600' : 'border-neutral-600'} right-1/2 top-2 size-8 border-9 rounded-full transition-all duration-300`}></div>
                            </div><div onClick={() => setType('frontend')} className={`relative w-full h-40 rounded-xl flex bg-neutral-300 shadow-lg font-mono font-bold text-2xl text-neutral-600 text-center `}>
                                <div  className={`absolute ${type === 'frontend' ? 'border-green-600' : 'border-neutral-600'} right-1/2 top-2 size-8 border-9 rounded-full transition-all duration-300`}></div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full m-7 rounded-2xl border-1 p-3 border-neutral-400 flex flex-col items-center justify-start gap-4'>

                        </div>
                        <div className='w-1/4 h-full m-7 rounded-2xl border-1 p-3 border-neutral-400 flex flex-col items-center justify-start gap-4'>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BuildPage;