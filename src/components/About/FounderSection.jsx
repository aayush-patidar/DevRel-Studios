import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const founders = [
    {
        name: "Aayush Patidar",
        role: "CEO & Founder, DevRel Studios",
        image: "/images/aayush.webp",
        linkedin: "https://www.linkedin.com/in/aayush-patidar-619a04325",
        features: [
            <>Focused on <span className="text-white font-bold">scalable digital products</span> and driving long-term growth</>,
            "Performance-first approach to product development",
            "Building partnerships that go beyond delivery"
        ],
        reverseLayout: false
    },
    {
        name: "Yug Pathak",
        role: "Managing Director & Founder, DevRel Studios",
        image: "/images/yug.webp",
        linkedin: "https://www.linkedin.com/in/yug-pathak-94b7b225b",
        features: [
            <>Leads execution to deliver <span className="text-white font-bold">modern, user-focused digital solutions</span></>,
            "Clean design and seamless user experience",
            "Focuses on user-centric product architecture"
        ],
        reverseLayout: true
    }
];

const FounderSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Animation for each founder card
        const cards = gsap.utils.toArray('.founder-card');

        cards.forEach((card) => {
            const image = card.querySelector('.founder-image');
            const contentElements = card.querySelectorAll('.founder-content > *');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(image,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            );

            tl.fromTo(contentElements,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
                "-=0.5"
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex justify-center flex-col items-center">

            {/* Common Header */}
            <div className="flex items-center gap-3 mb-16">
                <span className="w-2.5 h-2.5 bg-white inline-block" />
                <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                    MEET THE FOUNDERS
                </span>
            </div>

            <div className="w-full max-w-7xl mx-auto flex flex-col gap-32">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className={`founder-card flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${founder.reverseLayout ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Image */}
                        <div className="founder-image relative rounded-2xl overflow-hidden w-full lg:w-[40%] aspect-[4/5] mx-auto shrink-0">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Content */}
                        <div className="founder-content w-full lg:w-[60%] flex flex-col items-start text-left">
                            <h2 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
                                {founder.name}
                            </h2>
                            <p className="font-sans text-white/50 text-lg md:text-xl font-light mb-10">
                                {founder.role}
                            </p>
                            <ul className="space-y-4 mb-12">
                                {founder.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <span className="w-4 h-px bg-[#006AFF] mt-3 shrink-0" />
                                        <p className="font-sans text-[#FFFFFFCC] text-base md:text-lg leading-relaxed">
                                            {feature}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-[#006AFF] text-white font-sans font-bold py-4 px-8 rounded-lg flex items-center gap-3 hover:bg-[#0058D6] hover:shadow-[0_0_30px_rgba(0,106,255,0.4)] transition-all duration-300"
                            >
                                Connect on LinkedIn
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FounderSection;
