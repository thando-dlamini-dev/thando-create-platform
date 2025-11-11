import {CircleX} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useAnnouncementStore from "../stores/AnouncementStore.ts";

const Announcement = () => {

    // const announcements = [
    //     {
    //         id: 1,
    //         text: "🚀 Trusted by 500+ founders • 4.9/5 average rating",
    //         type: "social-proof"
    //     },
    //     {
    //         id: 2,
    //         text: "⏰ Limited spots available this month • Book your free consultation now",
    //         type: "urgency"
    //     },
    //     {
    //         id: 3,
    //         text: "🎯 New: AI-Powered Website Strategy • Get personalized recommendations",
    //         type: "feature"
    //     },
    //     {
    //         id: 4,
    //         text: "📚 Free Website Planning Guide • Download our 20-page checklist",
    //         type: "lead-magnet"
    //     },
    //     {
    //         id: 5,
    //         text: "Get 40% off On Your First Website",
    //         type: "discount"
    //     }
    // ];

    const { hasExited , toggleHasExited }  = useAnnouncementStore();

    return (
        <>
            {!hasExited &&

                <motion.div initial={{opacity:0, y: -30}} animate={{opacity:1, y: 0}} transition={{duration:0.7, ease:"easeInOut"}}  className={`z-20 fixed ${hasExited ? "top-0" : ""} w-screen h-8 flex items-center font-sans justify-between bg-neutral-900`}>
                    <div className='w-9/10 h-full bg-neutral-900 font-mono flex justify-center gap-5 items-center'>
                        <span>
                            Get
                        </span>

                        <Link className='text-lime-300 hover:animate-none animate-pulse duration-50' to='/services'>
                            40% off
                        </Link>
                        <span>
                            On Your First Website
                        </span>
                    </div>
                    <div className='w-10 h-full cursor-pointer flex items-center justify-center mr-5'>
                        <CircleX onClick={() => toggleHasExited()} className='hover:rotate-90 hover:text-red-500 transition-all duration-300'/>
                    </div>
                </motion.div>

            }
        </>
    )
}

export default Announcement;