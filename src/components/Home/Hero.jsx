import React from 'react';


const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col pt-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col flex-grow relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 w-full flex-grow py-10">

                    {/* Left Column */}
                    <div className="flex flex-col justify-start">
                        <span className="flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
                            <span className="w-2.5 h-2.5 bg-white inline-block"></span>
                            DevRel Studios
                        </span>
                        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white mt-8 tracking-tight">
                            Building Digital Products <br />
                            <span className="italic text-[#FFFFFF3D] font-serif">That Drive</span> Real Growth.
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 mt-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#006AFF] text-white font-sans font-bold py-4 px-8 text-sm tracking-wide hover:bg-[#0058D6] transition-colors duration-300"
                            >
                                Start Your Project
                                <svg width="16" height="16" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4849 9.70417L13.3287 17.8604C13.1586 18.0305 12.928 18.126 12.6875 18.126C12.447 18.126 12.2164 18.0305 12.0463 17.8604C11.8763 17.6904 11.7807 17.4597 11.7807 17.2193C11.7807 16.9788 11.8763 16.7481 12.0463 16.5781L18.6563 9.96925H0.90625C0.665898 9.96925 0.43539 9.87377 0.265435 9.70382C0.0954798 9.53386 0 9.30336 0 9.063C0 8.82265 0.0954798 8.59214 0.265435 8.42219C0.43539 8.25223 0.665898 8.15675 0.90625 8.15675H18.6563L12.0463 1.54793C11.8763 1.37788 11.7807 1.14724 11.7807 0.906754C11.7807 0.666268 11.8763 0.435631 12.0463 0.265582C12.2164 0.0955326 12.447 0 12.6875 0C12.928 0 13.1586 0.0955326 13.3287 0.265582L21.4849 8.42183C21.5692 8.506 21.636 8.60595 21.6816 8.71596C21.7272 8.82598 21.7507 8.94391 21.7507 9.063C21.7507 9.1821 21.7272 9.30002 21.6816 9.41004C21.636 9.52006 21.5692 9.62001 21.4849 9.70417Z" fill="white" />
                                </svg>
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 border border-[#FFFFFF3D] text-white font-sans font-bold py-4 px-8 text-sm tracking-wide hover:border-white transition-colors duration-300"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-end pb-24 md:pb-32">
                        <p className="font-sans text-lg lg:text-xl leading-relaxed text-[#FFFFFF8A] max-w-lg lg:ml-auto md:text-right">
                            We partner with startups and businesses to design, build, and scale high-performance digital solutions.
                        </p>
                        <p className="font-sans text-sm leading-relaxed text-[#FFFFFF6B] max-w-md lg:ml-auto md:text-right mt-6 italic">
                            "We are not just developers. We are your product and technology partners."
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-10 left-0 w-full border-t-[0.5px] border-[#FFFFFF3D] pt-5 flex justify-between items-center text-white font-serif text-sm">
                    <span className="tracking-wide">Scroll to Discover</span>
                    <span className=""><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.85403 7.35375L5.35403 11.8537C5.30759 11.9002 5.25245 11.9371 5.19175 11.9623C5.13105 11.9874 5.06599 12.0004 5.00028 12.0004C4.93457 12.0004 4.86951 11.9874 4.80881 11.9623C4.74811 11.9371 4.69296 11.9002 4.64653 11.8537L0.146528 7.35375C0.0527077 7.25993 0 7.13268 0 7C0 6.86732 0.0527077 6.74007 0.146528 6.64625C0.240348 6.55243 0.367596 6.49972 0.500278 6.49972C0.63296 6.49972 0.760208 6.55243 0.854028 6.64625L4.50028 10.2931V0.5C4.50028 0.367392 4.55296 0.240215 4.64672 0.146447C4.74049 0.0526785 4.86767 0 5.00028 0C5.13289 0 5.26006 0.0526785 5.35383 0.146447C5.4476 0.240215 5.50028 0.367392 5.50028 0.5V10.2931L9.14653 6.64625C9.24035 6.55243 9.3676 6.49972 9.50028 6.49972C9.63296 6.49972 9.76021 6.55243 9.85403 6.64625C9.94785 6.74007 10.0006 6.86732 10.0006 7C10.0006 7.13268 9.94785 7.25993 9.85403 7.35375Z" fill="white" />
                    </svg></span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
