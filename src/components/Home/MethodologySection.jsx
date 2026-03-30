import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MethodologySection = () => {
    const containerRef = React.useRef(null);
    const textRef = React.useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(containerRef.current.querySelector('h2'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(containerRef.current.querySelector('p'),
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                "<"
            );
        tl.to(".bar-1", { height: "100%", duration: 1, ease: "power2.out" })
            .to(".text-1", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
        tl.to(".bar-2", { height: "100%", duration: 1, ease: "power2.out" })
            .to(".text-2", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
        tl.to(".bar-3", { height: "100%", duration: 1, ease: "power2.out" })
            .to(".text-3", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");


    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-gradient-to-t from-[#00264D] to-[#0A0A0A00] pt-24 pb-14 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="w-2 h-2 bg-[#D9D9D9] inline-block" />
                        <span className="text-[#FFFFFF] font-sans text-xs font-bold tracking-[0.2em] uppercase">OUR PROCESS</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1]">
                        How We Work <br /> With You
                    </h2>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="font-sans text-white text-base md:text-lg">
                        From the first conversation to post-launch growth, we are with you every step. Our process is designed to be transparent, collaborative, and focused on results.
                    </p>
                </div>
            </div>
            {/* ─── MOBILE: static card stack ─── */}
            <div className="md:hidden max-w-xl mx-auto pt-12 flex flex-col gap-6 px-2">
                {[
                    { num: '01', title: 'Discover & Design', items: ['Understand goals and vision', 'Define product strategy', 'Create intuitive experiences'] },
                    { num: '02', title: 'Build & Launch', items: ['Develop scalable solutions', 'Rigorous quality assurance', 'Smooth, reliable deployment'] },
                    { num: '03', title: 'Scale & Grow', items: ['Post-launch support', 'Performance optimization', 'Continuous improvements'] },
                ].map(({ num, title, items }) => (
                    <div key={num} className="flex gap-5 p-5 rounded-2xl border border-[#FFFFFF0F] bg-[#0A0A0A60] backdrop-blur-sm">
                        <span className="font-serif text-4xl text-[#006AFF] leading-none shrink-0 mt-1">{num}</span>
                        <div>
                            <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans opacity-70">
                                {items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* ─── DESKTOP: animated bar layout ─── */}
            <div className="hidden md:flex max-w-6xl mx-auto pt-28 h-[80vh] flex-row justify-between items-end gap-4">
                <div className="w-1/3 h-full flex items-end gap-4 group">
                    <div className="bar-1 w-full lg:w-32 bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
                        <div className="absolute top-0 left-full ml-8 max-w-[80vw] md:w-[300px] opacity-0 text-1">
                            <h3 className="font-serif text-3xl text-white mb-3">Discover & Design</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans">
                                <li>Understand goals and vision</li>
                                <li>Define product strategy</li>
                                <li>Create intuitive experiences</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-[70%] flex items-end gap-4 group">
                    <div className="bar-2 w-full lg:w-32 bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
                        <div className="absolute top-0 left-full ml-8 max-w-[80vw] md:w-[400px] opacity-0 text-2">
                            <h3 className="font-serif text-3xl text-white mb-3">Build & Launch</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans">
                                <li>Develop scalable solutions</li>
                                <li>Rigorous quality assurance</li>
                                <li>Smooth, reliable deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-[40%] flex items-end gap-4 group">
                    <div className="bar-3 w-full lg:w-32 bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
                        <div className="absolute top-0 left-full ml-8 max-w-[80vw] md:w-[300px] opacity-0 text-3">
                            <h3 className="font-serif text-3xl text-white mb-3">Scale & Grow</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans">
                                <li>Post-launch support</li>
                                <li>Performance optimization</li>
                                <li>Continuous improvements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MethodologySection;
