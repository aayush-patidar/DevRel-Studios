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
        <footer className="relative w-full bg-[#0A0A0A66] text-white pt-24 mt-20 pb-8 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col">
                {/* Massive DRS Background Watermark */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center items-start overflow-hidden pointer-events-none select-none opacity-[0.05]">
                    <span className="font-serif italic text-[240px] md:text-[320px] lg:text-[400px] font-black leading-none text-white tracking-tighter">
                        DRS
                    </span>
                </div>
                <div className="border-t border-x border-[#FFFFFF1A] transform-gpu backdrop-blur-3xl overflow-hidden">
                    <a href="https://www.linkedin.com/company/devrel-studios/" target="_blank" rel="noreferrer" className="group flex items-center justify-between py-6 px-6 md:px-8 hover:bg-[#FFFFFF05] transition-colors duration-300">
                        <div className="flex items-center gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M21 3.75V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75Z" fill="white" />
                                <path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.891C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="white" />
                            </svg>
                            <span className="font-serif text-xl">LinkedIn</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-x border-[#FFFFFF1A] mb-24 backdrop-blur-3xl">
                    <div className="p-8 md:border-r border-[#FFFFFF1A]">
                        <h3 className="font-serif italic text-xl mb-6 text-white">Services</h3>
                        <ul className="space-y-2">
                            {['Web Development', 'App Development (Android & iOS)', 'NoCode Website Development', 'AI/ML Solutions'].map((item) => (
                                <li key={item}>
                                    <span className="text-[#525252] hover:text-white transition-colors text-sm font-medium cursor-default">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8">
                        <h3 className="font-serif italic text-xl mb-6 text-white">Company</h3>
                        <ul className="space-y-2">
                            {[
                                { label: 'About Us', href: '/about-institute' },
                                { label: 'Our Work', href: '/#projects' },
                                { label: 'Start a Project', href: '/#contact' },
                                { label: 'Contact Us', href: '/#contact' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-[#525252] hover:text-white transition-colors text-sm font-medium">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-14 px-4">
                    <div className="max-w-md w-full">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="font-serif italic text-5xl font-black leading-none tracking-tighter">DRS</h2>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif leading-none mb-1">DevRel</span>
                                <span className="text-xl font-serif leading-none">Studios</span>
                            </div>
                        </div>
                        <p className="font-sans text-[#525252] text-sm leading-relaxed">
                            We partner with startups and businesses to design, build, and scale high-performance digital products. <br className="hidden md:block" />
                            Your growth is our mission.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <h3 className="font-serif text-xl mb-4 text-[#525252]">Stay in the loop</h3>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === 'loading' || status === 'success'}
                                placeholder="Name@email.com"
                                className="w-full bg-[#0D0D0D] border border-[#292929] rounded-sm px-4 py-3 text-white placeholder-[#FFFFFF3D] focus:outline-hidden text-sm italic disabled:opacity-50 transition-all duration-300"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="bg-[#006AFF] text-white font-bold px-6 py-3 rounded-sm transition-colors uppercase text-sm tracking-wider whitespace-nowrap hover:bg-[#0058D6] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Subscribed' : 'Subscribe'}
                            </button>
                        </form>
                        {status === 'error' && (
                            <p className="text-red-400 text-xs mt-2 font-sans transition-opacity">Something went wrong. Please try again.</p>
                        )}
                        {status === 'success' && (
                            <p className="text-[#0080FF] text-xs mt-2 font-sans transition-opacity">Thanks for subscribing!</p>
                        )}
                    </div>
                </div>

                <div className="border-t border-[#FFFFFF1A] pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#FFFFFF40] gap-4 px-4 uppercase tracking-wider font-medium">
                    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                        <span>© 2025 DevRel Studios. All rights reserved.</span>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span className="hidden md:inline">|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                    <div className="flex gap-4">
                        <span>Built for builders</span>
                        <span>|</span>
                        <span>Made with purpose</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
