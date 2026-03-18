import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

/* ── Services dropdown data ─────────────────────────────────────────── */
const SERVICES = [
    'All Services',
    'Web Development',
    'App Development (Android & iOS)',
    'NoCode Website Development',
    'AI/ML Solutions',
];

/* ── ChevronDown icon ────────────────────────────────────────────────── */
const ChevronDown = ({ open }) => (
    <svg
        width="12" height="12" viewBox="0 0 24 24" fill="none"
        className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Main Navbar ─────────────────────────────────────────────────────── */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    /* Close dropdown on outside click */
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    /* Close mobile menu on route change */
    useEffect(() => { setIsOpen(false); }, [location]);

    /* Smooth scroll handler — works from any page */
    const handleAnchorClick = (e, sectionId) => {
        e.preventDefault();
        setIsOpen(false);
        setServicesOpen(false);

        const scrollToSection = () => {
            document.getElementById(sectionId)
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        if (location.pathname === '/') {
            scrollToSection();
        } else {
            navigate('/');
            setTimeout(scrollToSection, 400);
        }
    };

    const linkCls = 'font-sans text-white transition-colors duration-300 font-normal tracking-wide';

    return (
        <nav className="container mx-auto top-0 left-0 w-full py-8 px-4 md:px-8 z-50 bg-transparent border-b-[0.5px] border-[#FFFFFF29]">
            <div className="flex justify-between items-center">

                {/* ── Logo ── */}
                <Link to="/" className="flex items-center gap-3 text-white no-underline group">
                    <span className="font-sans italic font-bold text-3xl tracking-wide group-hover:opacity-90 transition-opacity">
                        DRS
                    </span>
                    <span className="font-sans text-xs leading-tight text-white border-l border-white/30 pl-3 sm:border-0 sm:pl-0 uppercase tracking-wide">
                        DevRel <br />
                        Studios
                    </span>
                </Link>

                {/* ── Desktop Nav ── */}
                <div className="hidden lg:flex items-center gap-10">

                    {/* Work → scrolls to #projects */}
                    <a
                        href="#projects"
                        onClick={(e) => handleAnchorClick(e, 'projects')}
                        className={`${linkCls} text-sm hover:text-white`}
                    >
                        Work
                    </a>

                    {/* Services — dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setServicesOpen((v) => !v)}
                            className={`${linkCls} text-sm hover:text-white flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0`}
                        >
                            Services
                            <ChevronDown open={servicesOpen} />
                        </button>

                        {/* Dropdown panel */}
                        <div
                            className={`absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-64 rounded-xl border border-[#FFFFFF14] bg-[#0A0A0ACC] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 origin-top ${servicesOpen
                                ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="h-[2px] w-full bg-gradient-to-r from-[#7C3AED] to-[#006AFF]" />
                            <ul className="py-2">
                                {SERVICES.map((service, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => setServicesOpen(false)}
                                            className="w-full text-left px-5 py-2.5 font-sans text-sm text-[#FFFFFFCC] hover:text-white hover:bg-[#FFFFFF0A] transition-colors duration-200 cursor-pointer bg-transparent border-none"
                                        >
                                            {i === 0 ? (
                                                <span className="font-semibold text-white">{service}</span>
                                            ) : service}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* About */}
                    <Link to="/about-institute" className={`${linkCls} text-sm hover:text-white`}>
                        About
                    </Link>

                    {/* Team */}
                    <a
                        href="#team"
                        onClick={(e) => handleAnchorClick(e, 'team')}
                        className={`${linkCls} text-sm hover:text-white`}
                    >
                        Team
                    </a>

                    {/* Contact */}
                    <a
                        href="#contact"
                        onClick={(e) => handleAnchorClick(e, 'contact')}
                        className={`${linkCls} text-sm hover:text-white`}
                    >
                        Contact
                    </a>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={(e) => handleAnchorClick(e, 'contact')}
                        className="bg-[#006AFF] text-white font-sans font-bold py-3 px-6 text-xs tracking-widest uppercase hover:bg-[#0058D6] transition-colors duration-300"
                    >
                        Start Project
                    </a>
                </div>

                {/* ── Hamburger ── */}
                <div
                    className="lg:hidden flex flex-col justify-between w-8 h-5 cursor-pointer z-[60]"
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-[-45deg] translate-y-[9px]' : ''}`} />
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-[45deg] -translate-y-[9px]' : ''}`} />
                </div>

                {/* ── Mobile Menu ── */}
                <div
                    className={`fixed inset-0 bg-bg-dark backdrop-blur-md z-[55] flex flex-col justify-center items-center gap-6 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <ul className="flex flex-col items-center gap-6 w-full px-8">

                        {/* Work → scrolls to #projects */}
                        <li>
                            <a
                                href="#projects"
                                onClick={(e) => handleAnchorClick(e, 'projects')}
                                className={`${linkCls} text-2xl font-light`}
                            >
                                Work
                            </a>
                        </li>

                        {/* Services with expandable sub-list */}
                        <li className="w-full flex flex-col items-center">
                            <button
                                onClick={() => setMobileServicesOpen((v) => !v)}
                                className={`${linkCls} text-2xl font-light flex items-center gap-2 bg-transparent border-none cursor-pointer`}
                            >
                                Services
                                <ChevronDown open={mobileServicesOpen} />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 w-full max-w-xs ${mobileServicesOpen ? 'max-h-[600px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="rounded-xl border border-[#FFFFFF14] bg-[#FFFFFF08] backdrop-blur-xl overflow-hidden">
                                    <div className="h-[2px] w-full bg-gradient-to-r from-[#7C3AED] to-[#006AFF]" />
                                    <ul className="py-2">
                                        {SERVICES.map((service, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => { setMobileServicesOpen(false); setIsOpen(false); }}
                                                    className="w-full text-left px-5 py-2.5 font-sans text-sm text-[#FFFFFFCC] hover:text-white hover:bg-[#FFFFFF0A] transition-colors duration-200 cursor-pointer bg-transparent border-none"
                                                >
                                                    {i === 0 ? (
                                                        <span className="font-semibold text-white">{service}</span>
                                                    ) : service}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link to="/about-institute" onClick={() => setIsOpen(false)} className={`${linkCls} text-2xl font-light`}>
                                About
                            </Link>
                        </li>

                        <li>
                            <a href="#team" onClick={(e) => handleAnchorClick(e, 'team')} className={`${linkCls} text-2xl font-light`}>
                                Team
                            </a>
                        </li>

                        <li>
                            <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className={`${linkCls} text-2xl font-light`}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <a
                        href="#contact"
                        onClick={(e) => handleAnchorClick(e, 'contact')}
                        className="mt-2 bg-[#006AFF] text-white font-sans font-bold py-4 px-8 text-sm tracking-widest uppercase"
                    >
                        Start a Project
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
