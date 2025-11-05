import HeroSection from "../components/HeroSection.tsx";
import PrinciplesSection from "../components/PrinciplesSection.tsx";

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