import HeroSection from "../components/HeroSection.tsx";
import PrinciplesSection from "../components/PrinciplesSection.tsx";
import HowItWorks from "../components/HowItWorks.tsx";
import TrustedBrand from "../components/TrustedBrand.tsx";

const LandingPage = () => {
    return (
        <>
            <section className='overflow-hidden scroll-smooth'>
                <div className='w-screen min-h-screen flex-col items-center justify-center'>
                    <HeroSection/>
                    <PrinciplesSection/>
                    <TrustedBrand/>
                </div>
            </section>
        </>
    )
}

export default LandingPage;