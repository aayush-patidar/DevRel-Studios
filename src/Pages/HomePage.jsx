import React from 'react';
import AboutSection from "../components/Home/About";
import Hero from "../components/Home/Hero";
import InfoSlider from "../components/Home/InfoSlider";
import SolutionSection from "../components/Home/SolutionSection";
import MethodologySection from "../components/Home/MethodologySection";
import VisionSection from "../components/Home/VisionSection";
import LeadershipSection from "../components/Home/LeadershipSection";
import InsightsSection from "../components/Home/InsightsSection";
import TeamSection from "../components/Home/TeamSection";
import JoinMovementSection from "../components/Home/JoinMovementSection";
import ContactSection from "../components/Home/ContactSection";

export default function HomePage() {
    const bgRef = React.useRef(null);
    const cursorRef = React.useRef(null);

    return (
        <>
            <div className="relative w-full h-full">
                <Hero />
            </div>
            <div className="relative w-full h-full">
                <AboutSection />
            </div>
            <div className="relative w-full h-full">
                <InfoSlider />
            </div>
            <div className="relative w-full h-full">
                <SolutionSection />
            </div>
            <div className="relative w-full h-full">
                <MethodologySection />
            </div>
            <div className="relative w-full h-full">
                <VisionSection />
            </div>
            <div className="relative w-full h-full">
                <LeadershipSection />
            </div>
            <div className="relative w-full h-full">
                <InsightsSection />
            </div>
            <div className="relative w-full h-full">
                <TeamSection />
            </div>
            <div className="relative w-full h-full">
                <ContactSection />
            </div>
            <div className="relative w-full h-full">
                <JoinMovementSection />
            </div>
        </>
    )
}