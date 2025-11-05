import {useLocation} from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import NavBar from "./components/NavBar.tsx";
import Announcement from "./components/Anouncement.tsx";
import {AnimatePresence} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import BuildPage from "./pages/BuildPage.tsx";
import { useSmoothScroll } from "./useSmoothScroll.ts";

const App = () =>  {
    useSmoothScroll();
    const location = useLocation();

    return (
        <>
            <Announcement/>
            <NavBar/>
            <div className="smooth-content">
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<LandingPage/>}/>
                        <Route path='/build' element={<BuildPage/>}/>
                    </Routes>
                </AnimatePresence>
            </div>
        </>
    )
}

export default App