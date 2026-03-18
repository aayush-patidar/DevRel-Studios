import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
    const containerRef = useRef(null);

    const team = [
        {
            name: "Aayush Patidar",
            role: "CEO & Founder",
            bio: "Focused on building scalable digital products and driving the vision of DevRel Studios with performance and long-term growth.",
            image: "/images/aayush.webp",
            linkedin: "https://www.linkedin.com/in/aayush-patidar-619a04325",
            instagram: "https://www.instagram.com/_aayushpatidar_"
        },
        {
            name: "Yug Pathak",
            role: "Managing Director & Founder",
            bio: "Leads execution and delivers modern, user-focused digital solutions with clean design and seamless experience.",
            image: "/images/yug.webp",
            linkedin: "https://www.linkedin.com/in/yug-pathak-94b7b225b",
            instagram: "https://www.instagram.com/yug._.pathak"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".team-header",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        );

        tl.fromTo(".team-card",
            { opacity: 0, y: 40, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.2, ease: "power2.out" },
            "-=0.4"
        );

    }, { scope: containerRef });

    return (
        <section id="team" ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0080FF] opacity-[0.04] blur-[150px] pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
                <div className="team-header flex items-center justify-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        MEET THE FOUNDERS
                    </span>
                </div>
                <h2 className="team-header font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                    Meet the Team
                </h2>
                <p className="team-header font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed">
                    The people behind DevRel Studios — building scalable digital products with performance and precision.
                </p>
            </div>

            {/* Team Cards */}
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="team-card group relative rounded-2xl border border-[#FFFFFF12] bg-[#FFFFFF08] backdrop-blur-xl p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.02] hover:border-[#0080FF3D] hover:bg-[#FFFFFF0F] hover:shadow-[0_0_60px_rgba(0,128,255,0.06)]"
                    >
                        {/* Subtle glow on hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-[#0080FF08] to-transparent" />

                        {/* Profile Image */}
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 ring-2 ring-[#FFFFFF14] group-hover:ring-[#0080FF3D] transition-all duration-500">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A33] to-transparent pointer-events-none" />
                        </div>

                        {/* Name & Role */}
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 relative z-10">{member.name}</h3>
                        <p className="font-sans text-[#0080FFCC] text-sm font-medium tracking-wide uppercase mb-5 relative z-10">{member.role}</p>

                        {/* Bio */}
                        <p className="font-sans text-[#FFFFFF6B] text-sm md:text-base leading-relaxed mb-8 max-w-sm relative z-10">
                            {member.bio}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-5 relative z-10">
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-[#FFFFFF0F] border border-[#FFFFFF14] flex items-center justify-center text-[#FFFFFF6B] hover:bg-[#0080FF29] hover:border-[#0080FF52] hover:text-white transition-all duration-300"
                                aria-label={`${member.name} LinkedIn`}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="currentColor" />
                                </svg>
                            </a>
                            <a
                                href={member.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-[#FFFFFF0F] border border-[#FFFFFF14] flex items-center justify-center text-[#FFFFFF6B] hover:bg-[#0080FF29] hover:border-[#0080FF52] hover:text-white transition-all duration-300"
                                aria-label={`${member.name} Instagram`}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
