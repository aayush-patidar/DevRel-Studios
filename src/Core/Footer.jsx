import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');

        const data = new FormData();
        data.append('email', email);
        data.append('_subject', 'New Newsletter Subscription - DevRel Studios');

        try {
            const response = await fetch('https://formspree.io/f/xlgpaorq', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <footer className="relative w-full bg-[#050505] text-white pt-32 pb-12 px-4 md:px-8 font-sans overflow-hidden border-t border-[#FFFFFF0D]">
            {/* Background Aesthetic Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col relative z-20">
                {/* Massive DRS Background Watermark with Animated Opacity */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center items-start overflow-hidden pointer-events-none select-none opacity-[0.03]">
                    <span className="font-serif italic text-[240px] md:text-[320px] lg:text-[450px] font-black leading-none text-white tracking-tighter">
                        DRS
                    </span>
                </div>

                {/* Glassmorphism LinkedIn Card */}
                <div className="relative mb-16 group">
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative border border-[#FFFFFF0D] bg-[#0A0A0A]/80 backdrop-blur-3xl overflow-hidden rounded-lg">
                        <a href="https://www.linkedin.com/company/devrel-studios/" target="_blank" rel="noreferrer" className="flex items-center justify-between py-8 px-8 md:px-12 group/link transition-all duration-500">
                            <div className="flex items-center gap-6">
                                <div className="p-3 bg-blue-600/10 rounded-xl group-hover/link:bg-blue-600 group-hover/link:text-white text-blue-500 transition-all duration-500">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#888888] text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Social Ecosystem</span>
                                    <span className="font-sans text-xl md:text-2xl text-white font-medium">Join our community on LinkedIn</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-[#444] group-hover/link:text-white transition-colors">
                                <span className="hidden md:block font-bold text-xs uppercase tracking-widest">Connect</span>
                                <ArrowRight className="w-8 h-8 group-hover/link:translate-x-3 transition-transform duration-500 ease-out" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-32">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="font-serif italic text-6xl font-black leading-none tracking-tighter text-white">DRS</h2>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-serif leading-none mb-1 text-white">DevRel</span>
                                    <span className="text-2xl font-serif leading-none text-white/50">Studios</span>
                                </div>
                            </div>
                            <p className="font-sans text-[#888888] text-sm leading-relaxed max-w-sm">
                                Architecture-led development for Web3, AI, and enterprise-scale digital experiences. We turn technical complexity into seamless growth.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-1 lg:col-span-1 gap-8">
                        <div>
                            <h3 className="text-[#444] text-[10px] uppercase font-bold tracking-[0.3em] mb-8">Capabilities</h3>
                            <ul className="space-y-4">
                                {['Web Systems', 'UI/UX Design', 'Backend Infrastructure', 'Custom Solutions'].map((item) => (
                                    <li key={item}>
                                        <span className="text-[#888888] hover:text-white transition-all text-sm font-medium cursor-pointer flex items-center gap-2 group">
                                            <span className="w-0 h-[1px] bg-blue-600 group-hover:w-3 transition-all"></span>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#444] text-[10px] uppercase font-bold tracking-[0.3em] mb-8">Navigation</h3>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Intelligence', href: '/#vision' },
                                    { label: 'Our Work', href: '/#projects' },
                                    { label: 'The Team', href: '/#team' },
                                    { label: 'Init Project', href: '/#contact' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="text-[#888888] hover:text-white transition-all text-sm font-medium flex items-center gap-2 group">
                                            <span className="w-0 h-[1px] bg-indigo-600 group-hover:w-3 transition-all"></span>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="p-8 bg-[#0D0D0D] border border-[#FFFFFF0D] rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
                            <h3 className="font-sans text-lg md:text-xl mb-2 text-white font-bold">Stay in the loop</h3>
                            <p className="text-[#666] text-xs mb-8">Get high-level updates on our latest builds and research.</p>
                            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === 'loading' || status === 'success'}
                                    placeholder="Name@email.com"
                                    className="w-full bg-[#050505] border border-[#222] rounded-md px-4 py-4 text-white placeholder-[#444] focus:border-blue-500/50 focus:outline-hidden text-sm italic transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className="w-full bg-white text-black hover:bg-blue-600 hover:text-white font-bold py-4 rounded-md transition-all uppercase text-[10px] tracking-[0.2em] disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Processing...' : status === 'success' ? 'Synchronized' : 'Execute Subscription'}
                                </button>
                            </form>
                            {status === 'error' && (
                                <p className="text-red-500 text-[10px] mt-4 font-bold uppercase tracking-widest">Protocol Failure. Try again.</p>
                            )}
                            {status === 'success' && (
                                <p className="text-blue-500 text-[10px] mt-4 font-bold uppercase tracking-widest">Connection Established.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#FFFFFF0D] pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#444] gap-8 px-2 uppercase tracking-[0.2em] font-bold">
                    <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
                        <span className="text-[#666]">© 2026 DevRel Studios</span>
                        <a href="#" className="hover:text-white transition-colors">Security Protocol</a>
                        <a href="#" className="hover:text-white transition-colors">Architecture Registry</a>
                    </div>
                    <div className="flex gap-8 items-center">
                        <span className="text-[#333]">/</span>
                        <span className="text-[#666]">Built for the future of intent</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
