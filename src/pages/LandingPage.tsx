import HeroSection from "../components/HeroSection.tsx";
import PrinciplesSection from "../components/PrinciplesSection.tsx";
import SectorsSection from "../components/SectorsSection.tsx";
import PricingSection from "../components/PricingSection.tsx";
import Features from "../components/Features.tsx";
import Section from "../components/Section.tsx";
import TechStackSection from "../components/TechStack.tsx";

const LandingPage = () => {
    return (
        <>
            <section className='overflow-hidden scroll-smooth'>
                <div className='w-screen min-h-screen flex-col items-center justify-center'>
                    <HeroSection/>
                    <PrinciplesSection/>
                    <SectorsSection/>
                    <TechStackSection/>
                    <PricingSection/>
                    <Features/>
                    <Section/>
                </div>
            </section>
        </>
    )
}

export default LandingPage;