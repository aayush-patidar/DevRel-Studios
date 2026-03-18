import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── SVG Icon helpers ──────────────────────────────────────────────── */
const IconEmail = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.25 4.5H3.75C2.92 4.5 2.25 5.17 2.25 6v12c0 .83.67 1.5 1.5 1.5h16.5c.83 0 1.5-.67 1.5-1.5V6c0-.83-.67-1.5-1.5-1.5Zm-1.06 2.25-7.19 5.03-7.19-5.03h14.38Zm1.06 10.5H3.75V8.36l7.5 5.25a.75.75 0 0 0 .84 0l7.5-5.25V17.25Z" fill="currentColor" />
    </svg>
);

const IconPhone = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98Z" fill="currentColor" />
    </svg>
);

const IconLocation = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z" fill="currentColor" />
    </svg>
);

const IconLinkedIn = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="currentColor" />
    </svg>
);

const IconInstagram = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor" />
    </svg>
);

const IconCheck = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 6L9 17.5L3.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─── Services list ─────────────────────────────────────────────────── */
const SERVICES = [
    'Web Development',
    'App Development (Android & iOS)',
    'NoCode Website Development',
    'AI/ML Solutions',
];

/* ─── Main Component ─────────────────────────────────────────────────── */
const ContactSection = () => {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo('.contact-header',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
        );
        tl.fromTo('.contact-form-card',
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' },
            '-=0.4'
        );
        tl.fromTo('.contact-info-cards',
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' },
            '-=0.9'
        );
    }, { scope: containerRef });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitError(false);

        const data = new FormData(e.target);
        data.append('_subject', 'New Contact Form Submission - DevRel Studios');

        try {
            const response = await fetch('https://formspree.io/f/xlgpaorq', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
            } else {
                setSubmitError(true);
            }
        } catch (error) {
            setSubmitError(true);
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        {
            label: 'DevRel Studios – LinkedIn',
            href: 'https://www.linkedin.com/company/devrel-studios/',
            icon: <IconLinkedIn />
        },
        {
            label: 'Aayush – Instagram',
            href: 'https://www.instagram.com/_aayushpatidar_',
            icon: <IconInstagram />
        },
        {
            label: 'Yug – Instagram',
            href: 'https://www.instagram.com/yug._.pathak',
            icon: <IconInstagram />
        }
    ];

    const whyPoints = [
        'Fast response within 24 hours',
        'Free consultation and quote',
        'Modern, high-performance solutions',
        'Client-focused development'
    ];

    /* shared glass card style */
    const glassCard = 'relative rounded-2xl border border-[#FFFFFF12] bg-[#FFFFFF07] backdrop-blur-xl p-8 transition-all duration-500 hover:border-[#0080FF3D] hover:bg-[#FFFFFF0D] hover:shadow-[0_0_60px_rgba(0,128,255,0.07)] hover:scale-[1.005]';

    /* shared input style */
    const inputBase = 'w-full bg-[#FFFFFF06] border border-[#FFFFFF14] rounded-lg px-4 py-3 text-white text-sm font-sans placeholder:text-[#FFFFFF33] focus:outline-none focus:border-[#0080FF6B] focus:bg-[#0080FF08] transition-all duration-300';

    return (
        <section
            id="contact"
            ref={containerRef}
            className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden"
        >
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0080FF] opacity-[0.04] blur-[180px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED] opacity-[0.03] blur-[140px] pointer-events-none" />

            {/* ── Section Header ── */}
            <div className="text-center mb-16 max-w-3xl">
                <div className="contact-header flex items-center justify-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        GET IN TOUCH
                    </span>
                </div>
                <h2 className="contact-header font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                    Let's Work Together
                </h2>
                <p className="contact-header font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Ready to bring your vision to life? Get in touch with DevRel Studios and let's build something impactful.
                </p>
                {/* CTA anchor */}
                <div className="contact-header mt-8">
                    <a
                        href="#contact-form"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7C3AED] to-[#006AFF] text-white font-sans font-bold py-4 px-8 rounded-lg text-sm tracking-wide hover:shadow-[0_0_40px_rgba(0,128,255,0.35)] hover:scale-[1.04] transition-all duration-300"
                    >
                        Get In Touch
                        <svg width="16" height="16" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4849 9.70417L13.3287 17.8604C13.1586 18.0305 12.928 18.126 12.6875 18.126C12.447 18.126 12.2164 18.0305 12.0463 17.8604C11.8763 17.6904 11.7807 17.4597 11.7807 17.2193C11.7807 16.9788 11.8763 16.7481 12.0463 16.5781L18.6563 9.96925H0.90625C0.665898 9.96925 0.43539 9.87377 0.265435 9.70382C0.0954798 9.53386 0 9.30336 0 9.063C0 8.82265 0.0954798 8.59214 0.265435 8.42219C0.43539 8.25223 0.665898 8.15675 0.90625 8.15675H18.6563L12.0463 1.54793C11.8763 1.37788 11.7807 1.14724 11.7807 0.906754C11.7807 0.666268 11.8763 0.435631 12.0463 0.265582C12.2164 0.0955326 12.447 0 12.6875 0C12.928 0 13.1586 0.0955326 13.3287 0.265582L21.4849 8.42183C21.5692 8.506 21.636 8.60595 21.6816 8.71596C21.7272 8.82598 21.7507 8.94391 21.7507 9.063C21.7507 9.1821 21.7272 9.30002 21.6816 9.41004C21.636 9.52006 21.5692 9.62001 21.4849 9.70417Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* ── Two-column grid ── */}
            <div id="contact-form" className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">

                {/* ── LEFT: Contact Form Card ── */}
                <div className={`contact-form-card ${glassCard}`}>
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#0080FF06] to-[#7C3AED06]" />

                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 relative z-10">Send Us a Message</h3>
                    <p className="font-sans text-[#FFFFFF52] text-sm mb-8 relative z-10">Fill in the details below and we'll get back to you within 24 hours.</p>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-12 gap-4 relative z-10">
                            <div className="w-16 h-16 rounded-full bg-[#0080FF1A] border border-[#0080FF52] flex items-center justify-center text-[#0080FF]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M20.5 6L9 17.5L3.5 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <p className="font-serif text-xl text-white">Message sent successfully.</p>
                            <p className="font-sans text-[#FFFFFF6B] text-sm text-center max-w-xs">We'll get back to you within 24 hours.</p>
                            <button
                                onClick={() => { setSubmitted(false); }}
                                className="mt-2 font-sans text-sm text-[#0080FFCC] hover:text-white transition-colors duration-300 underline underline-offset-4"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form action="https://formspree.io/f/xlgpaorq" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                            {/* Row 1: Full Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-sans text-xs font-semibold text-[#FFFFFF6B] uppercase tracking-wider">
                                        Full Name <span className="text-[#0080FF]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Full Name"
                                        className={inputBase}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-sans text-xs font-semibold text-[#FFFFFF6B] uppercase tracking-wider">
                                        Email Address <span className="text-[#0080FF]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@gmail.com"
                                        className={inputBase}
                                    />
                                </div>
                            </div>

                            {/* Row 2: Company + Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-sans text-xs font-semibold text-[#FFFFFF6B] uppercase tracking-wider">
                                        Company Name <span className="text-[#0080FF]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Company"
                                        className={inputBase}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-sans text-xs font-semibold text-[#FFFFFF6B] uppercase tracking-wider">
                                        Phone Number <span className="text-[#0080FF]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                        className={inputBase}
                                    />
                                </div>
                            </div>

                            {/* Service Interested In */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="service-select"
                                    className="font-sans text-xs font-semibold text-[#FFFFFF6B] uppercase tracking-wider"
                                >
                                    Service Interested In
                                </label>
                                {/* Custom styled dropdown */}
                                <div className="relative">
                                    <select
                                        id="service-select"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full appearance-none bg-[#FFFFFF06] border border-[#FFFFFF14] rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#0080FF6B] focus:bg-[#0080FF08] transition-all duration-300 cursor-pointer"
                                        style={{
                                            color: formData.service ? '#ffffff' : '#ffffff55',
                                            backgroundColor: '#0d0d0d',
                                        }}
                                    >
                                        <option value="" disabled style={{ backgroundColor: '#111111', color: '#888' }}>
                                            Select a service
                                        </option>
                                        {SERVICES.map((svc) => (
                                            <option
                                                key={svc}
                                                value={svc}
                                                style={{ backgroundColor: '#111111', color: '#ffffff' }}
                                            >
                                                {svc}
                                            </option>
                                        ))}
                                        <option value="Other" style={{ backgroundColor: '#111111', color: '#ffffff' }}>
                                            Other
                                        </option>
                                    </select>
                                    {/* Custom chevron icon */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFFFFF52]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-sans text-xs font-semibold text-[#FFFFFF6B] uppercase tracking-wider">
                                    Project Details
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell us about your project, goals, timeline, and requirements..."
                                    className={`${inputBase} resize-none`}
                                />
                            </div>

                            {/* Submit Button */}
                            {submitError && (
                                <p className="text-red-400 text-sm font-sans mb-2 text-center transition-all">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative mt-2 w-full bg-gradient-to-r from-[#7C3AED] to-[#006AFF] text-white font-sans font-bold py-4 px-8 rounded-lg text-sm tracking-wide flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(0,128,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </>
                                )}
                                {/* Shimmer overlay */}
                                <span className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </span>
                            </button>
                        </form>
                    )}
                </div>

                {/* ── RIGHT: Info + Why Choose Us ── */}
                <div className="contact-info-cards flex flex-col gap-6">

                    {/* Contact Info Card */}
                    <div className={glassCard}>
                        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-[#0080FF08] to-transparent" />

                        <h3 className="font-serif text-xl md:text-2xl text-white mb-6 relative z-10">Contact Information</h3>

                        <div className="flex flex-col gap-5 relative z-10">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#0080FF1A] border border-[#0080FF29] flex items-center justify-center text-[#0080FF]">
                                    <IconEmail />
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-[#FFFFFF4D] uppercase tracking-wider mb-0.5">Email</p>
                                    <a href="mailto:devrelstudios@gmail.com" className="font-sans text-white text-sm hover:text-[#0080FF] transition-colors duration-300">
                                        devrelstudios@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#0080FF1A] border border-[#0080FF29] flex items-center justify-center text-[#0080FF]">
                                    <IconPhone />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="font-sans text-xs text-[#FFFFFF4D] uppercase tracking-wider mb-0.5">Phone</p>
                                    <a
                                        href="tel:+919098770750"
                                        className="font-sans text-white text-sm hover:text-[#0080FF] transition-colors duration-300"
                                    >
                                        +91 9098770750
                                    </a>
                                    <a
                                        href="tel:+918962313507"
                                        className="font-sans text-white text-sm hover:text-[#0080FF] transition-colors duration-300"
                                    >
                                        +91 8962313507
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#0080FF1A] border border-[#0080FF29] flex items-center justify-center text-[#0080FF]">
                                    <IconLocation />
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-[#FFFFFF4D] uppercase tracking-wider mb-0.5">Location</p>
                                    <p className="font-sans text-white text-sm">India</p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#FFFFFF0F] my-6 relative z-10" />

                        {/* Social Links */}
                        <div className="relative z-10">
                            <p className="font-sans text-xs text-[#FFFFFF4D] uppercase tracking-wider mb-4">Follow Us</p>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.label}
                                        title={link.label}
                                        className="w-10 h-10 rounded-full bg-[#FFFFFF0F] border border-[#FFFFFF14] flex items-center justify-center text-[#FFFFFF6B] hover:bg-[#0080FF29] hover:border-[#0080FF52] hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us Card */}
                    <div className={glassCard}>
                        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-[#7C3AED08] to-transparent" />

                        <h3 className="font-serif text-xl md:text-2xl text-white mb-6 relative z-10">Why Choose Us?</h3>
                        <ul className="flex flex-col gap-4 relative z-10">
                            {whyPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-5 h-5 shrink-0 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#006AFF] flex items-center justify-center text-white mt-0.5">
                                        <IconCheck />
                                    </span>
                                    <span className="font-sans text-sm text-[#FFFFFFB3] leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
