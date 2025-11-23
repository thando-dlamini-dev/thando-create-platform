import HeroSection from "../components/HeroSection.tsx";
import PrinciplesSection from "../components/PrinciplesSection.tsx";
import HowItWorks from "../components/HowItWorks.tsx";

const LandingPage = () => {
    return (
        <>
            <section className='overflow-hidden scroll-smooth'>
                <div className='w-screen min-h-screen '>
                    <HeroSection/>
                    <PrinciplesSection/>
                </div>
            </section>
        </>
    )
}

export default LandingPage;