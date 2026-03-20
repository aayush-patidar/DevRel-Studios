import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsWrapperRef = useRef(null);
    const baseLineRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    const cards = [
        {
            id: 1,
            number: "1",
            title: "PRODUCT & WEB DEVELOPMENT",
            desc: "We build fast, scalable web products — from MVPs to full-scale platforms — with clean code and long-term maintainability."
        },
        {
            id: 2,
            number: "2",
            title: "UI/UX DESIGN",
            desc: "Intuitive interfaces and premium user experiences that convert visitors into loyal customers."
        },
        {
            id: 3,
            number: "3",
            title: "BACKEND SYSTEMS & APIS",
            desc: "Robust architectures, secure APIs, and scalable infrastructure that power your product at any stage."
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=3000",
            }
        });
        tl.to(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
            .set(cardsWrapperRef.current, { autoAlpha: 1 })
            .fromTo(baseLineRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 2, ease: "power2.out" }
            )
            .fromTo(card1Ref.current,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 4, ease: "power2.out" }
            )
            .fromTo(card2Ref.current,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 4, ease: "power2.out" }
            )
            .fromTo(card3Ref.current,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 4, ease: "power2.out" }
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-auto min-h-screen lg:h-screen overflow-hidden flex flex-col justify-center text-white py-20 lg:py-0">
            <div className="absolute w-[30%] h-full top-0 right-0 bg-gradient-to-l from-[#0A0A0A] to-transparent z-50 pointer-events-none"></div>
            <div
                ref={headerRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 px-4"
            >
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-[#D9D9D9] inline-block" />
                    <span className="text-[#FFFFFF] font-sans text-xs font-bold tracking-[0.2em] uppercase">WHAT WE DO</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                    <span className="italic font-light text-[#FFFFFF6B] mr-3">We help businesses</span>
                    Build & Scale
                </h2>
                <p className="font-sans text-[#FFFFFF6B] max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                    We help businesses build and scale digital products through strategy, design, development, and growth. Every service is focused on delivering real business value.
                </p>
            </div>
            <div
                ref={cardsWrapperRef}
                className="relative w-full max-w-7xl mx-auto h-[75vh] md:h-[65vh] z-10 flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-4 opacity-0 invisible mt-8 md:mt-0 px-4 md:px-0"
            >
                <div
                    ref={baseLineRef}
                    className="hidden md:flex absolute bottom-0 left-0 w-full h-[12px] origin-center z-0 flex-col justify-between"
                >
                    <div className="w-full h-full border-t-[3px] border-b-[3px] border-dashed border-white"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 50%, black 50%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%, black 50%, transparent)'
                        }}
                    />
                </div>

                <div ref={card1Ref} className="flex flex-col md:items-center justify-end h-auto md:h-full relative z-10">
                    <div className="relative flex flex-col items-start md:text-start max-w-sm md:max-w-3xs mb-2 md:mb-4 px-4 md:px-0 bg-[#0A0A0A]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 rounded-xl border border-white/5 md:border-none">
                        <div className="hidden md:block absolute -top-1/2 -left-1/4 font-serif text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent from-50% to-100% ">
                            {cards[0].number}
                        </div>
                        <h3 className="text-xl md:text-3xl font-serif text-white mb-2 md:tracking-wide">{cards[0].title}</h3>
                        <p className="text-[#FFFFFF52] font-sans text-sm md:text-base">{cards[0].desc}</p>
                    </div>
                    <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-transparent to-white" />
                </div>
                <div ref={card2Ref} className="flex flex-col md:items-center justify-start text-start h-auto md:h-full relative z-10">
                    <div className="relative flex flex-col items-start md:text-start max-w-sm md:max-w-3xs md:mt-10 mb-2 md:mb-6 px-4 md:px-0 bg-[#0A0A0A]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 rounded-xl border border-white/5 md:border-none">
                        <div className="hidden md:block absolute -top-1/2 -left-1/4 font-serif text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent from-50% to-100% ">
                            {cards[1].number}
                        </div>
                        <h3 className="text-xl md:text-3xl font-serif text-white mb-2 md:tracking-wide">{cards[1].title}</h3>
                        <p className="text-[#FFFFFF52] font-sans text-sm md:text-base">{cards[1].desc}</p>
                    </div>
                    <div className="hidden md:block w-1 h-42 flex-1 bg-gradient-to-b from-transparent to-white" />
                </div>
                <div ref={card3Ref} className="flex flex-col md:items-center justify-end h-auto md:h-full relative z-10">
                    <div className="relative flex flex-col items-start md:text-start max-w-sm md:max-w-3xs mb-2 md:mb-4 px-4 md:px-0 bg-[#0A0A0A]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 rounded-xl border border-white/5 md:border-none">
                        <div className="hidden md:block absolute -top-1/2 -left-1/4 font-serif text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent from-50% to-100% ">
                            {cards[2].number}
                        </div>
                        <h3 className="text-xl md:text-3xl font-serif text-white mb-2 md:tracking-wide">{cards[2].title}</h3>
                        <p className="text-[#FFFFFF52] font-sans text-sm md:text-base">{cards[2].desc}</p>
                    </div>
                    <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-transparent to-white" />
                </div>

            </div>
        </section>
    );
};

export default SolutionSection;