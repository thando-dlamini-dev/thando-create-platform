
const Section  = () => {
    return (
        <>
            <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center">
                <div className="border-1 border-neutral-300 rounded-3xl w-6xl h-4/5 flex flex-col justify-between items-center p-5">
                    <div className="relative w-full h-2/5 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src="src/assets/Cubes-render.png" className="w-full absolute left-0 top-0" alt=""/>
                        <h1 className="backdrop-blur-2xl text-neutral-800 font-geist-mono-bold text-3xl">Frequently Asked Questions</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;