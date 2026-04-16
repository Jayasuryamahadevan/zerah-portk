import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PlayIcon, X, Instagram, Twitter } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance animations for the main glass window
            gsap.from(".window-reveal", {
                y: 50,
                opacity: 0,
                scale: 0.98,
                duration: 1.5,
                ease: "power3.out"
            });

            // Staggered text reveal inside the window
            gsap.from(".text-reveal", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                delay: 0.5,
                ease: "power2.out"
            });

            // Slower Parallax for the Background Image
            gsap.to(".bg-parallax", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-neutral-950 flex items-center justify-center p-4 md:p-12">
            {/* Cinematic Dark Background Image */}
            <img src="/hero-bg.png" alt="Cinematic AI Background" className="bg-parallax absolute inset-0 w-full h-[120%] object-cover opacity-60 -top-[10%]" />

            {/* The Main Glass Window Container */}
            <div className="window-reveal relative w-full h-full max-w-7xl max-h-[900px] border border-white/20 rounded-[2rem] overflow-hidden flex flex-col bg-black/10 backdrop-blur-md shadow-2xl shadow-black/80">

                {/* Top Navigation Bar Inside the Window */}
                <div className="flex justify-between items-center p-6 md:p-10 z-10 w-full">
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-3">
                            {/* Quad Squares Icon mimicking Zerah/Lab */}
                            <div className="grid grid-cols-2 gap-[2px]">
                                <div className="w-2.5 h-2.5 border-2 border-white"></div>
                                <div className="w-2.5 h-2.5 border-2 border-white"></div>
                                <div className="w-2.5 h-2.5 border-2 border-white"></div>
                                <div className="w-2.5 h-2.5 border-2 border-white bg-white"></div>
                            </div>
                            <span className="text-white font-bold text-lg tracking-widest hidden md:block">ZERAH LAB</span>
                        </div>
                        <nav className="hidden md:flex gap-8 text-white/70 text-xs font-bold uppercase tracking-widest">
                            <a href="#services" className="hover:text-white transition">Services</a>
                            <a href="#products" className="hover:text-white transition">Products</a>
                            <a href="#research" className="hover:text-white transition">Research</a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-5 text-white/70">
                            <X className="w-4 h-4 hover:text-white cursor-pointer transition" />
                            <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition" />
                            <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition" />
                        </div>
                        <a href="#explanation" className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                            Enter The Lab
                        </a>
                    </div>
                </div>

                {/* Main Hero Content Area */}
                <div className="flex-1 flex flex-col justify-center p-6 md:p-16 z-10 w-full md:w-[70%]">
                    <h1 className="text-reveal text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-white leading-[1.1] tracking-tight">
                        INTELLIGENCE <br className="hidden md:block" />
                        THAT GOES BEYOND <br className="hidden md:block" />
                        AUTOMATION
                    </h1>

                    <div className="text-reveal mt-10 md:mt-16 flex items-center gap-4 cursor-pointer group w-max">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                            <PlayIcon className="text-white group-hover:text-black w-4 h-4 ml-1" />
                        </div>
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Watch Movie</span>
                    </div>
                </div>

                {/* Bottom Overlays & Widgets */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between items-end z-10 pointer-events-none">

                    {/* Bottom Left White Block (Cutout effect from index.css) */}
                    <div className="cutout-bottom-left bg-white p-6 md:p-10 pointer-events-auto flex flex-wrap gap-8 md:gap-16">
                        <div>
                            <div className="text-xl md:text-3xl font-black text-black tracking-tighter">10X</div>
                            <div className="text-[0.65rem] text-neutral-500 uppercase tracking-widest font-bold mt-1">Velocity</div>
                        </div>
                        <div>
                            <div className="text-xl md:text-3xl font-black text-black tracking-tighter">24/7</div>
                            <div className="text-[0.65rem] text-neutral-500 uppercase tracking-widest font-bold mt-1">Operation</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-xl md:text-3xl font-black text-black tracking-tighter">100%</div>
                            <div className="text-[0.65rem] text-neutral-500 uppercase tracking-widest font-bold mt-1">Autonomous</div>
                        </div>
                    </div>

                    {/* Bottom Right Dark Glass Block */}
                    <div className="bg-black/40 backdrop-blur-md rounded-tl-[2rem] p-6 md:p-8 w-full max-w-xs border-t border-l border-white/10 pointer-events-auto hidden md:block">
                        <h3 className="text-white font-bold mb-3 uppercase tracking-[0.2em] text-[0.65rem]">Architecting the future</h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-6 font-medium">Explore expert systems and custom LLMs that feel immersive, meaningful and unforgettable.</p>
                        <a href="#products" className="block w-full text-center py-3 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500">
                            Explore Lab
                        </a>
                    </div>
                </div>

                {/* Vertical Scroll Indicator on the right edge */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-32 z-10">
                    <span className="text-white/80 text-xs font-bold tracking-widest">01</span>
                    <div className="w-[1px] h-32 bg-white/20 relative">
                        <div className="absolute top-0 left-0 w-full h-1/3 bg-white"></div>
                    </div>
                    <span className="text-white/40 text-xs font-bold tracking-widest">04</span>
                </div>

            </div>

            {/* Floating pill below the main window */}
            <div className="absolute bottom-4 z-10 flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-3 cursor-pointer hover:bg-white/10 transition">
                    <img src="/ZerahhlogoFinal.png" alt="Zerah Lab Logo" className="w-5 h-5 rounded-full object-cover bg-white" />
                    <div className="flex flex-col">
                        <span className="text-[0.6rem] text-white/80 font-bold uppercase tracking-widest leading-none">@zerah_lab</span>
                        <span className="text-[0.55rem] text-white/50 uppercase tracking-widest mt-0.5">Follow for more</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
