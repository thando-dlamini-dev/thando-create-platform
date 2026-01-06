import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import useAnnouncementStore from "../stores/AnouncementStore.ts";

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

    interface Link {
        delay: number,
        name: string,
        url: string
    }

    const links: Link[] = [
        {
            delay: 0.1,
            name: "Home",
            url: "/about"
        },
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
            name: "Build",
            url: "/build",
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
            <motion.div initial={{opacity:0, y: -20}} animate={{opacity:1, y: 0}} transition={{duration:0.5, ease:"easeInOut"}} className={`fixed ${hasExited ? "top-0" : "top-8"} z-50 left-0 w-screen h-15 flex justify-evenly px-40 items-center gap-10 bg-background shadow-md backdrop-blur-md`}>
                {/*Logo*/}
                <div className='w-1/7 h-2/3 flex justify-center gap-2 items-center'>
                    <Link to='/' className='text-2xl font-mono font-bold w-10 h-10 flex items-center justify-center gap-1 text-accent'><img className='w-3/4' src='src/assets/logo2.png' alt=""/> <span>reate</span></Link>
                </div>
                {/*Links*/}
                <div className='w-1/3 h-2/3 flex justify-evenly items-center '>
                    {links.map((link) => (
                        <motion.div initial={{opacity:0, y: -20}} animate={{opacity:1, y: 0}} transition={{duration:0.5 + link.delay, ease:"easeInOut"}} key={link.delay}>
                            <Link  to={link.url} className='font-mono text-text-col text-sm font-light hover:text-accent transition-all duration-200' key={link.name} >{link.name}</Link>
                        </motion.div>))}
                </div>
                <div className='w-1/5 h-2/3 flex justify-evenly items-center'>
                    {/*Buttons*/}
                    <Link
                        className='text-md text-neutral-900 bg-neutral-300 border-accent hover:text-black py-1 px-4 rounded-sm font-light hover:scale-105 transition-all duration-300 hover:bg-accent' to='/login'>
                        Sign In
                    </Link>

                    {/*{user &&*/}
                    {/*    <div className='size-7 rounded-full border-2 border-neutral-300 bg-accent font-bold text-black text-xl text-center pb-3'>*/}
                    {/*        {user?.name.charAt(0).toUpperCase()}*/}
                    {/*    </div>*/}
                    {/*}*/}
                </div>
            </motion.div>
        </>
    )
}
export default NavBar