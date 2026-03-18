import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeadershipSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(".header-animate",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
        tl.fromTo(".impact-card",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
        );
        tl.fromTo(".impact-image",
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            "-=0.6"
        );

    }, { scope: containerRef });

    const impactCards = [
        {
            title: "Product & Web Development",
            description: "We build modern web products that are fast, scalable, and built to last. From landing pages to full-stack platforms, we ship with quality and speed.",
            icon: (
                <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>
            )
        },
        {
            title: "UI/UX Design",
            description: "Beautiful, user-centered design that drives engagement and conversions. Every pixel is intentional.",
            icon: (
                <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>
            )
        },
        {
            title: "Backend Systems & APIs",
            description: "Secure, scalable backend infrastructure and APIs that power your product reliably at any scale.",
            icon: (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    </div>
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>
            )
        },
        {
            title: "Custom Digital Solutions",
            description: "Have a unique challenge? We architect and build bespoke digital solutions tailored precisely to your business needs.",
            icon: (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center">
            {/* svgsssssssssssssss don't change broo, this gonaaa spoill everyyythingggg */}
            <div className='absolute h-full w-full bottom-1/2 left-0 z-[-1]'>
                <svg width="full" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_201_1774)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF;fill:color(display-p3 0.0000 0.0000 1.0000);fill-opacity:1" }} />
                    </g>
                    <g filter="url(#filter1_f_201_1774)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000;fill:color(display-p3 0.0000 0.5020 0.0000);fill-opacity:1" }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_201_1774" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_201_1774" />
                        </filter>
                        <filter id="filter1_f_201_1774" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_201_1774" />
                        </filter>
                    </defs>
                </svg>
            </div>
            {/* Header */}
            <div className="text-center mb-16">
                <div className="header-animate flex items-center justify-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        WHAT WE DO
                    </span>
                </div>
                <h2 className="header-animate font-serif text-4xl md:text-6xl text-white leading-[1.1]">
                    Services That Move Businesses
                </h2>
                <p className="header-animate font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
                    We are a team focused on building modern, scalable digital products. We work closely with our clients, acting as an extension of their team to turn ideas into impactful solutions.
                </p>
            </div>
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
                    {impactCards.map((card, index) => (
                        <div
                            key={index}
                            className="impact-card bg-[#0A0A0AA3] p-6 rounded-2xl flex flex-col gap-8 transition-colors duration-300 group min-h-[250px] border border-[#FFFFFF08] hover:border-[#0080FF4D]"
                        >
                            <div className="w-10 h-10 flex items-center justify-start opacity-70 group-hover:opacity-100 transition-opacity">
                                {card.icon}
                            </div>
                            <div className="mt-auto">
                                <h3 className="font-serif text-2xl text-white mb-3">{card.title}</h3>
                                <p className="font-sans text-white text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="impact-image w-full lg:w-[35%] bg-[#0A0A0A] rounded-2xl overflow-hidden relative min-h-[500px] lg:min-h-auto border border-[#FFFFFF0F] flex flex-col justify-between p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 bg-white inline-block" />
                        <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
                    </div>
                    <div>
                        <p className="font-sans text-[#FFFFFF6B] text-lg leading-relaxed mb-8">
                            "We are not just developers. We are your product and technology partners."
                        </p>
                        <p className="font-sans text-[#FFFFFF40] text-sm leading-relaxed">
                            We work as an embedded part of your team — bringing full product thinking, design sensibility, and engineering excellence to every project.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="mt-8 inline-flex items-center gap-2 bg-[#006AFF] text-white font-sans font-bold py-4 px-6 text-sm tracking-wide hover:bg-[#0058D6] transition-colors duration-300"
                    >
                        Start Your Project
                        <svg width="16" height="14" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4849 9.70417L13.3287 17.8604C13.1586 18.0305 12.928 18.126 12.6875 18.126C12.447 18.126 12.2164 18.0305 12.0463 17.8604C11.8763 17.6904 11.7807 17.4597 11.7807 17.2193C11.7807 16.9788 11.8763 16.7481 12.0463 16.5781L18.6563 9.96925H0.90625C0.665898 9.96925 0.43539 9.87377 0.265435 9.70382C0.0954798 9.53386 0 9.30336 0 9.063C0 8.82265 0.0954798 8.59214 0.265435 8.42219C0.43539 8.25223 0.665898 8.15675 0.90625 8.15675H18.6563L12.0463 1.54793C11.8763 1.37788 11.7807 1.14724 11.7807 0.906754C11.7807 0.666268 11.8763 0.435631 12.0463 0.265582C12.2164 0.0955326 12.447 0 12.6875 0C12.928 0 13.1586 0.0955326 13.3287 0.265582L21.4849 8.42183C21.5692 8.506 21.636 8.60595 21.6816 8.71596C21.7272 8.82598 21.7507 8.94391 21.7507 9.063C21.7507 9.1821 21.7272 9.30002 21.6816 9.41004C21.636 9.52006 21.5692 9.62001 21.4849 9.70417Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
