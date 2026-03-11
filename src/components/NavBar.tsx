import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import useAnnouncementStore from "../stores/AnouncementStore.ts";
import { useState } from "react";

const NavBar = () => {
    // type User = {
    //     id: number,
    //     name: string,
    //     email: string
    // }

    // const user: User = {
    //     id: 8903489734243870,
    //     name: "Thando Dlamini",
    //     email: "thandodlaminidev@gmail.com",
    // }


    const { hasExited } = useAnnouncementStore()
    const [ activeLink, setActiveLink ] = useState<string>("")

    interface Link {
        delay: number,
        name: string,
        url: string
    }

    const links: Link[] = [
        {
            delay: 0.2,
            name: "About",
            url: "/about",
        },
        {
            delay: 0.3,
            name: "services",
            url: "/services",
        },
        {
            delay: 0.4,
            name: "Portfolio",
            url: "/portfolio",
        },
        {
            delay: 0.5,
            name: "Company",
            url: "/company",
        }

    ]

    //Wide Screen

    return (
        <>
            <div className={`top-0 fixed bg-white/0 z-50 w-screen min-h-15 flex py-2 px-5`}>

            <motion.div initial={{opacity:0, y: -20}} animate={{opacity:1, y: 0}} transition={{duration:0.5, ease:"easeInOut"}} className={`w-screen px-5 rounded-full bg-neutral-300 h-15 flex justify-between items-center gap-10 bg-white/0 backdrop-blur-md border-1 border-neutral-200 shadow-sm`}>
                {/*Logo*/}
                <div className='w-1/7 h-2/3 flex justify-center gap-2 items-center'>
                    <Link to='/' className='text-2xl font-mono font-bold w-10 h-10 flex items-center justify-center gap-1 text-accent'><img className='w-3/4' src='src/assets/logo2.png' alt=""/> <span>reate</span></Link>
                </div>
                {/*Links*/}
                <div className='w-1/3 h-2/3 flex justify-evenly items-center '>
                    {links.map((link) => (
                        <motion.div initial={{opacity:0, y: -20}} animate={{opacity:1, y: 0}} transition={{duration:0.5 + link.delay, ease:"easeInOut"}} key={link.delay}>
                            <Link onClick={() => setActiveLink(link.name)} to={link.url} className={`font-mono px-3 py-2 rounded-full text-sm font-light transition-all duration-200 transition-all ease-in-out duration-500 ${activeLink === link.name ? "bg-accent/80" : "text-neutral-600"}`} key={link.name} >{link.name}</Link>
                        </motion.div>))}
                </div>
                <div className='w-1/5 h-2/3 flex justify-end items-center'>
                    {/*Buttons*/}
                    <Link
                        className='text-md text-neutral-900 rounded-full bg-neutral-300 border-1 border-neutral-200 hover:text-white py-1 px-4 font-light hover:scale-105 transition-all duration-300 hover:bg-accent/80' to='/login'>
                        Sign In
                    </Link>

                    {/*{user &&*/}
                    {/*    <div className='size-7 rounded-full border-2 border-neutral-300 bg-accent font-bold text-black text-xl text-center pb-3'>*/}
                    {/*        {user?.name.charAt(0).toUpperCase()}*/}
                    {/*    </div>*/}
                    {/*}*/}
                </div>
            </motion.div>
            </div>
        </>
    )
}
export default NavBar