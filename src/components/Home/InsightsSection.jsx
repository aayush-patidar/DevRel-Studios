import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InsightsSection = () => {
    const containerRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('ALL');

    const filters = ['ALL', 'WEB APP', 'MOBILE', 'E-COMMERCE', 'SAAS'];

    const insights = [
        {
            type: 'SAAS',
            title: "FinAssist — Modern Financial Assistance & Scalable Insights",
            description: "A comprehensive platform helping users manage and analyze financial data with real-time analytics and a clean UI.",
            techStack: "TypeScript, Tailwind CSS",
            image: "/images/finassist.webp",
            action: "View Project",
            link: "https://finassist-prod.vercel.app/"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(".insight-header",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
        );
        tl.fromTo(".filter-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 },
            "-=0.4"
        );
        tl.fromTo(".insight-card",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            "-=0.2"
        );

    }, { scope: containerRef });

    const filtered = activeFilter === 'ALL' ? insights : insights.filter(i => i.type === activeFilter);

    return (
        <section id="projects" ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center">
            {insights.length > 6 && (
                <div className='absolute bottom-0 left-0 h-[60%] w-full z-10 bg-linear-to-t from-[#00264D] to-transparent pointer-events-none'></div>
            )}
            <div className="w-full max-w-7xl mb-12">
                <div className="insight-header flex items-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-[#52525266] inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        OUR PROJECTS
                    </span>
                </div>
                <h2 className="insight-header font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                    Real Work. Real Impact.
                </h2>
                <p className="insight-header font-sans text-[#FFFFFF6B] text-base md:text-lg mb-10">
                    We let results speak for themselves. Every project is focused on delivering measurable business outcomes.
                </p>
                {insights.length > 3 && (
                    <div className="flex flex-wrap gap-4">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`filter-btn px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${activeFilter === filter
                                    ? 'bg-[#0080FF6B] text-white rounded-sm backdrop-blur-lg'
                                    : 'bg-[#0080FF33] text-white rounded-sm border border-[#0080FF4D]'
                                    }`}
                            >
                                {filter === 'ALL' && <span className="inline-block w-1.5 h-1.5 bg-white mr-2 mb-0.5"></span>}
                                {filter}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative w-full max-w-7xl min-h-[400px]">
                {filtered.length > 0 ? (
                    <div className={`grid gap-6 w-full ${filtered.length === 1
                        ? 'grid-cols-1 max-w-4xl mx-auto'
                        : filtered.length === 2
                            ? 'grid-cols-1 md:grid-cols-2'
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}>
                        {filtered.map((item, index) => (
                            <div key={index} className="insight-card group cursor-pointer">
                                <div className="overflow-hidden border border-[#262626] hover:border-[#0080FF4D] transition-colors duration-300">
                                    <a href={item.link} target="_blank" rel="noreferrer" className={`relative ${filtered.length === 1 ? 'h-64 sm:h-[400px]' : 'h-48 sm:h-56'} w-full block overflow-hidden p-4`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-0 left-0">
                                            <div className="bg-[#0080FFA3] text-white text-[12px] font-bold px-5 py-3 rounded-br-2xl uppercase tracking-widest flex items-center gap-2" style={{ backdropFilter: "blur(20px)" }}>
                                                <span className="w-1.5 h-1.5 bg-white"></span>
                                                {item.type}
                                            </div>
                                        </div>
                                    </a>
                                    <div className="px-4 pb-4 flex flex-col h-full">
                                        <h3 className="font-sans text-base lg:text-lg text-white leading-snug mb-2 font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="font-sans text-[#FFFFFF6B] text-xs leading-relaxed mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                            {item.techStack.split(',').map((tech, i) => (
                                                <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-[#0080FFCC] bg-[#0080FF14] px-2 py-1 rounded-sm border border-[#0080FF33]">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full py-3 bg-[#FFFFFF1A] rounded-sm text-white text-sm font-medium text-center hover:bg-[#FFFFFF2A] transition-colors duration-300 no-underline"
                                        >
                                            {item.action}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full py-32 border border-dashed border-[#FFFFFF14] rounded-2xl">
                        <p className="font-sans text-white text-lg opacity-50 italic">
                            No projects are currently listed. Check back soon for our latest work!
                        </p>
                    </div>
                )}

                {insights.length > 6 && (
                    <div className="absolute bottom-0 left-0 w-full h-[400px] flex items-end justify-center pb-10 pointer-events-none">
                        <button className="pointer-events-auto bg-[#006AFF] text-white z-10 font-sans py-4 px-6 hover:bg-[#0058D6] transition-colors duration-300">
                            View All Projects
                        </button>
                    </div>
                )}
            </div>

        </section>
    );
};

export default InsightsSection;
