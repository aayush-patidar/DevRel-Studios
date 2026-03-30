import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
    const containerRef = useRef(null);
    const [activeId, setActiveId] = useState(1);

    const cards = [
        {
            id: 1,
            label: "STRATEGY",
            title: "Product Strategy",
            subtitle: "From Idea to Roadmap",
            description: "We help you define and validate product ideas, identify your target market, and create a clear roadmap. No wasted time — just focused execution aligned with your business goals.",
            image: "/images/lucaweb.webp"
        },
        {
            id: 2,
            label: "DESIGN",
            title: "UI/UX Design",
            subtitle: "Experiences That Convert",
            description: "Premium digital design that puts users first. From wireframes to polished interfaces, we create experiences that feel intuitive and drive engagement.",
            image: "/images/lucaweb.webp"
        },
        {
            id: 3,
            label: "DEVELOPMENT",
            title: "Web & Product Dev",
            subtitle: "Built to Perform & Scale",
            description: "Full-stack development of scalable web applications, APIs, and backend systems. We write clean, maintainable code that stands the test of time.",
            image: "/images/lucaweb.webp"
        },
        {
            id: 4,
            label: "GROWTH",
            title: "Scale & Optimize",
            subtitle: "Beyond the Launch",
            description: "After launch, we continue as your technology partner — optimizing performance, adding features, and supporting growth milestones as your business evolves.",
            image: "/images/lucaweb.webp"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(containerRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-linear-to-b from-[#00264D] to-[#0A0A0A00] py-24 px-4 md:px-8 flex flex-col items-center">
            <div className="text-center mb-16 max-w-4xl">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        OUR APPROACH
                    </span>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-8">
                    One Goal. <br />
                    Four Pillars of Delivery.
                </h2>
                <p className="font-sans text-white text-base md:text-lg leading-relaxed mx-auto">
                    We guide clients from idea to launch and beyond. Our integrated approach covers every stage of building a successful digital product.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto min-h-[700px] sm:min-h-[850px] md:h-[600px] flex flex-col md:flex-row gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => setActiveId(card.id)}
                        className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group ${activeId === card.id ? "grow-[4]" : "grow-[1]"
                            }`}
                        style={{ backgroundColor: '#0080FF29' }}
                    >
                        <div className={`absolute inset-0 flex flex-col p-6 md:p-8 rounded-2xl transition-opacity duration-500 bg-[#0a0a0a3a] border border-[#0080FF52] ${activeId === card.id ? "opacity-100 delay-200 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                            <div className="absolute top-0 left-0 bg-[#0080FF6B] text-white px-6 py-4 rounded-br-2xl text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 z-20" style={{ backdropFilter: "blur(20px)" }}>
                                <span className="w-1.5 h-1.5 bg-white box-border" />
                                {card.label}
                            </div>
                            <div className="w-full h-full flex flex-col justify-center items-center text-center px-4">
                                <div className="max-w-3xl">
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">{card.title}</h3>
                                    <p className="font-serif text-[#0080FF] text-xl md:text-2xl mb-8 font-medium italic">{card.subtitle}</p>
                                    <p className="font-sans text-[#FFFFFF99] text-base md:text-lg leading-relaxed mx-auto max-w-2xl">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute rounded-2xl inset-0 flex flex-col transition-all duration-300 ${activeId === card.id ? "opacity-0 pointer-events-none delay-0" : "opacity-100 delay-100"}`}>
                            <div className={`h-[18%] w-full p-4 flex flex-col gap-2 bg-[#0080FF52]`}>
                                <span className="w-1.5 h-1.5 bg-white block" />
                                <span className="text-white font-sans text-[12px] font-bold tracking-widest uppercase leading-loose w-32">
                                    {card.label}
                                </span>
                            </div>

                            <div className="grow relative overflow-hidden bg-[#0A0A0AA3]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="md:-rotate-90 md:whitespace-nowrap origin-center transform md:translate-y-10 text-center md:text-left">
                                        <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{card.title}</h3>
                                        <p className="font-serif text-white text-sm md:text-lg">{card.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default VisionSection;
