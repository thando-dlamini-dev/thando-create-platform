import { useState } from "react";

interface Tech {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
}

const TechStackSection = () => {
    const TechStack: Tech[] = [
        {
            id: 0,
            name: "React",
            description: "",
            imgUrl: "",
        }
    ]

    const [ activeStack, setActiveStack]= useState(TechStack[0]);

    return (
        <>
            <div className="font-geist-mono w-screen h-screen flex flex-col justify-between items-center">
                <div className="rounded-2xl w-7xl h-4/5 flex justify-between gap-10 items-center p-10">
                    <div className="w-2/5 h-full flex flex-col justify-start items-start gap-10 p-10">
                        <h2 className="text-3xl font-geist-mono-bold text-accent">Our Tech Stack</h2>
                        <div className="size-100 bg-neutral-200 rounded-4xl">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-start items-start gap-10 p-10">
                        <div className="w-full h-15 bg-black flex justify-evenly items-center">
                            <span className=""></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

                export default TechStackSection