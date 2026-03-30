import React from 'react';

const JourneySection = () => {
    const journeyData = [
        {
            year: "2024",
            icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M22.7501 11.3751C22.7513 12.7009 22.4506 14.0096 21.871 15.2019C21.2913 16.3943 20.4478 17.439 19.4044 18.257C19.0857 18.5039 18.8274 18.8202 18.6491 19.1817C18.4708 19.5433 18.3771 19.9407 18.3751 20.3439V21.0001C18.3751 21.2322 18.2829 21.4547 18.1189 21.6188C17.9548 21.7829 17.7322 21.8751 17.5001 21.8751H10.5001C10.2681 21.8751 10.0455 21.7829 9.88142 21.6188C9.71732 21.4547 9.62513 21.2322 9.62513 21.0001V20.3439C9.62472 19.9429 9.53289 19.5474 9.35663 19.1873C9.18036 18.8272 8.92432 18.512 8.60795 18.2657C7.56776 17.4532 6.72524 16.4154 6.14367 15.2305C5.5621 14.0456 5.2566 12.7443 5.25013 11.4243C5.22388 6.68182 9.04763 2.73448 13.789 2.62511C14.9557 2.59695 16.1163 2.80247 17.2024 3.22958C18.2885 3.65669 19.2781 4.29674 20.1131 5.11208C20.9481 5.92741 21.6116 6.90154 22.0645 7.97714C22.5173 9.05273 22.7505 10.2081 22.7501 11.3751Z" fill="white" />
                <path d="M19.2501 25.3749C19.2501 25.6069 19.158 25.8295 18.9939 25.9936C18.8298 26.1577 18.6072 26.2499 18.3751 26.2499H9.62514C9.39308 26.2499 9.17052 26.1577 9.00642 25.9936C8.84233 25.8295 8.75014 25.6069 8.75014 25.3749C8.75014 25.1428 8.84233 24.9202 9.00642 24.7561C9.17052 24.5921 9.39308 24.4999 9.62514 24.4999H18.3751C18.6072 24.4999 18.8298 24.5921 18.9939 24.7561C19.158 24.9202 19.2501 25.1428 19.2501 25.3749ZM23.6251 11.3749C23.6289 12.8335 23.2994 14.2738 22.6617 15.5857C22.0241 16.8976 21.0951 18.0465 19.9458 18.9447C19.7309 19.1094 19.5565 19.3211 19.4359 19.5636C19.3153 19.806 19.2518 20.0728 19.2501 20.3436V20.9999C19.2501 21.464 19.0658 21.9091 18.7376 22.2373C18.4094 22.5655 17.9643 22.7499 17.5001 22.7499H10.5001C10.036 22.7499 9.5909 22.5655 9.26271 22.2373C8.93452 21.9091 8.75014 21.464 8.75014 20.9999V20.3436C8.74996 20.0761 8.68845 19.8121 8.57032 19.5721C8.45219 19.3321 8.2806 19.1223 8.06874 18.9589C6.92241 18.0662 5.99418 16.9243 5.35426 15.6199C4.71435 14.3154 4.37953 12.8825 4.37514 11.4296C4.34671 6.21565 8.55983 1.87565 13.7683 1.74986C15.0516 1.71894 16.3282 1.94505 17.5228 2.41488C18.7175 2.88472 19.8061 3.58879 20.7246 4.48565C21.643 5.38251 22.3728 6.45405 22.871 7.63718C23.3691 8.82031 23.6255 10.0911 23.6251 11.3749Z" fill="white" />
            </svg>),
            title: "The Vision",
            content: (
                <div className="font-sans text-[#FFFFFF85] text-base font-light leading-relaxed space-y-4">
                    <p className="italic">Research and consulting reveal a global leadership trust crisis.</p>
                    <p className="italic">The DevRel Studios framework takes shape.</p>
                </div>
            ),
            hasStartLabel: true,
            alignRight: false,
        },
        {
            year: "2025",
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M12.25 8.75C12.25 9.44223 12.0447 10.1189 11.6601 10.6945C11.2756 11.2701 10.7289 11.7187 10.0894 11.9836C9.44985 12.2485 8.74612 12.3178 8.06719 12.1827C7.38825 12.0477 6.76461 11.7144 6.27513 11.2249C5.78564 10.7354 5.4523 10.1117 5.31725 9.43282C5.1822 8.75388 5.25152 8.05015 5.51642 7.41061C5.78133 6.77107 6.22993 6.22444 6.80551 5.83986C7.38108 5.45527 8.05777 5.25 8.75 5.25C9.67826 5.25 10.5685 5.61875 11.2249 6.27513C11.8813 6.9315 12.25 7.82174 12.25 8.75Z" fill="white" />
                    <path d="M23.625 19.25C23.625 19.4821 23.5328 19.7046 23.3687 19.8687C23.2046 20.0328 22.9821 20.125 22.75 20.125H20.125V22.75C20.125 22.9821 20.0328 23.2046 19.8687 23.3687C19.7046 23.5328 19.4821 23.625 19.25 23.625C19.0179 23.625 18.7954 23.5328 18.6313 23.3687C18.4672 23.2046 18.375 22.9821 18.375 22.75V20.125H15.75C15.5179 20.125 15.2954 20.0328 15.1313 19.8687C14.9672 19.7046 14.875 19.4821 14.875 19.25C14.875 19.0179 14.9672 18.7954 15.1313 18.6313C15.2954 18.4672 15.5179 18.375 15.75 18.375H18.375V15.75C18.375 15.5179 18.4672 15.2954 18.6313 15.1313C18.7954 14.9672 19.0179 14.875 19.25 14.875C19.4821 14.875 19.7046 14.9672 19.8687 15.1313C20.0328 15.2954 20.125 15.5179 20.125 15.75V18.375H22.75C22.9821 18.375 23.2046 18.4672 23.3687 18.6313C23.5328 18.7954 23.625 19.0179 23.625 19.25Z" fill="white" />
                </svg>
            ),
            title: "The Ecosystem Launches",
            content: (
                <ul className="font-sans text-[#FFFFFF85] text-base font-light leading-relaxed space-y-2">
                    <li>• Infrastructure deployed</li>
                    <li>• LUCA the Leader launches (CSR)</li>
                    <li>• R&D and Consulting activated</li>
                </ul>
            ),
            alignRight: true,
        },
        {
            year: "2026",
            icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M22.75 5.25V22.75H5.25V5.25H22.75Z" fill="white" />
                <path d="M23.625 5.25V10.5C23.625 10.7321 23.5328 10.9546 23.3687 11.1187C23.2046 11.2828 22.9821 11.375 22.75 11.375C22.5179 11.375 22.2954 11.2828 22.1313 11.1187C21.9672 10.9546 21.875 10.7321 21.875 10.5V7.36203L17.2441 11.9941C17.0799 12.1582 16.8572 12.2505 16.625 12.2505C16.3928 12.2505 16.1701 12.1582 16.0059 11.9941C15.8418 11.8299 15.7495 11.6072 15.7495 11.375C15.7495 11.1428 15.8418 10.9201 16.0059 10.7559L20.638 6.125H17.5C17.2679 6.125 17.0454 6.03281 16.8813 5.86872C16.7172 5.70462 16.625 5.48206 16.625 5.25C16.625 5.01794 16.7172 4.79538 16.8813 4.63128C17.0454 4.46719 17.2679 4.375 17.5 4.375H22.75C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25Z" fill="white" />
            </svg>),
            title: "Expanding Impact",
            content: (
                <div className="font-sans text-[#FFFFFF85] text-base font-light leading-relaxed">
                    <p>Global partnerships, expanded research, certifications, and community growth.</p>
                </div>
            ),
            alignRight: false,
        },
        {
            year: "2027",
            icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M22.7501 11.3751C22.7513 12.7009 22.4506 14.0096 21.871 15.2019C21.2913 16.3943 20.4478 17.439 19.4044 18.257C19.0857 18.5039 18.8274 18.8202 18.6491 19.1817C18.4708 19.5433 18.3771 19.9407 18.3751 20.3439V21.0001C18.3751 21.2322 18.2829 21.4547 18.1189 21.6188C17.9548 21.7829 17.7322 21.8751 17.5001 21.8751H10.5001C10.2681 21.8751 10.0455 21.7829 9.88142 21.6188C9.71732 21.4547 9.62513 21.2322 9.62513 21.0001V20.3439C9.62472 19.9429 9.53289 19.5474 9.35663 19.1873C9.18036 18.8272 8.92432 18.512 8.60795 18.2657C7.56776 17.4532 6.72524 16.4154 6.14367 15.2305C5.5621 14.0456 5.2566 12.7443 5.25013 11.4243C5.22388 6.68182 9.04763 2.73448 13.789 2.62511C14.9557 2.59695 16.1163 2.80247 17.2024 3.22958C18.2885 3.65669 19.2781 4.29674 20.1131 5.11208C20.9481 5.92741 21.6116 6.90154 22.0645 7.97714C22.5173 9.05273 22.7505 10.2081 22.7501 11.3751Z" fill="white" />
                <path d="M19.2501 25.3749C19.2501 25.6069 19.158 25.8295 18.9939 25.9936C18.8298 26.1577 18.6072 26.2499 18.3751 26.2499H9.62514C9.39308 26.2499 9.17052 26.1577 9.00642 25.9936C8.84233 25.8295 8.75014 25.6069 8.75014 25.3749C8.75014 25.1428 8.84233 24.9202 9.00642 24.7561C9.17052 24.5921 9.39308 24.4999 9.62514 24.4999H18.3751C18.6072 24.4999 18.8298 24.5921 18.9939 24.7561C19.158 24.9202 19.2501 25.1428 19.2501 25.3749Z" fill="white" />
            </svg>),
            title: "Global Integration",
            content: (
                <div className="font-sans text-[#FFFFFF85] text-base font-light leading-relaxed">
                    <p>Establishing worldwide benchmarks for trusted leadership across all major industries.</p>
                </div>
            ),
            alignRight: true,
        }
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col py-24 overflow-x-hidden select-none">
            {/* Fade gradient at bottom */}
            <div className='absolute h-3/4 w-full bottom-0 left-0 z-10 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none' />

            {/* Section header */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center mb-12 shrink-0 z-20">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        OUR JOURNEY
                    </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide text-center">
                    From Vision to Reality
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8 z-20">

                {/* ─── MOBILE: left-aligned single column ─── */}
                <div className="flex flex-col gap-0 md:hidden">
                    {/* Outer wrapper is relative so the spine line anchors here */}
                    <div className="relative pl-12">
                        {/* Vertical spine */}
                        <div className="absolute left-4 top-0 bottom-0 w-px"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 6px, transparent 6px, transparent 14px)'
                            }}
                        />
                        {journeyData.map((item, index) => (
                            <div key={index} className="relative pb-12">
                                {/* Dot + year */}
                                <div className="absolute left-0 top-0 -translate-x-1/2 flex flex-col items-center">
                                    <span className="text-white font-sans text-[10px] font-light tracking-widest mb-1 whitespace-nowrap">{item.year}</span>
                                    <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] shrink-0" />
                                </div>
                                {/* Card */}
                                <div className="pt-7 w-full">
                                    <div className="p-5 rounded-2xl border border-[#FFFFFF14] bg-[#FFFFFF14] backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-transform duration-300 hover:scale-[1.01]">
                                        <div className='mb-3'>{item.icon}</div>
                                        <h3 className="font-serif text-lg text-white mb-2 tracking-wide">{item.title}</h3>
                                        <div>{item.content}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── DESKTOP: alternating left / right ─── */}
                <div className="hidden md:block relative">
                    {/* Central vertical spine — positioned inside this relative block */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 6px, transparent 6px, transparent 14px)'
                        }}
                    />

                    {journeyData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-start mb-16 ${item.alignRight ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            {/* Card side (takes up ~45% width) */}
                            <div className={`w-[45%] ${item.alignRight ? 'pl-10' : 'pr-10'}`}>
                                <div className={`p-8 rounded-2xl border border-[#FFFFFF14] bg-[#FFFFFF14] backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-transform duration-300 hover:scale-[1.02] ${item.alignRight ? 'text-left' : 'text-left'}`}>
                                    <div className='mb-4'>{item.icon}</div>
                                    <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">{item.title}</h3>
                                    <div>{item.content}</div>
                                </div>

                                {/* "This is where the work began" label for first item */}
                                {item.hasStartLabel && (
                                    <div className={`mt-4 flex items-center gap-2 ${item.alignRight ? '' : 'justify-end'}`}>
                                        <span className="text-white/40 font-sans text-xs tracking-widest uppercase">
                                            This is where the work began →
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Center dot + year (10%) */}
                            <div className="w-[10%] flex flex-col items-center relative z-10 pt-8">
                                <span className="text-white font-sans text-sm font-light tracking-widest mb-2 whitespace-nowrap">{item.year}</span>
                                <span className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_white] shrink-0" />
                            </div>

                            {/* Empty opposing side (45%) */}
                            <div className="w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default JourneySection;