import HeroSection from "../components/HeroSection.tsx";
import PrinciplesSection from "../components/PrinciplesSection.tsx";
import Steps from "../components/Steps.tsx";
import Pricing from "../components/Pricing.tsx";

const LandingPage = () => {
    return (
        <>
            <section className='overflow-hidden scroll-smooth'>
                <div className='w-screen min-h-screen flex-col items-center justify-center'>
                    <HeroSection/>
                    <PrinciplesSection/>
                    <Steps/>
                    <Pricing/>
                </div>
            </section>
        </>
    )
}

export default LandingPage;