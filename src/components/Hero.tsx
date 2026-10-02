import { PlayIcon, X, Instagram, Twitter } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-neutral-950 flex items-center justify-center p-4 md:p-12">
            <img
                src="/hero-bg.png"
                alt="Cinematic AI Background"
                className="hero-media absolute inset-0 w-full h-[112%] object-cover opacity-60 -top-[6%]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
            />

            <div className="hero-window relative w-full h-full max-w-7xl max-h-[900px] border border-white/20 rounded-[2rem] overflow-hidden flex flex-col bg-black/20 glass-lite shadow-2xl shadow-black/80">

                <div className="flex justify-between items-center p-6 md:p-10 z-10 w-full">
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-3">
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

                <div className="flex-1 flex flex-col justify-center p-6 md:p-16 z-10 w-full md:w-[70%]">
                    <h1 className="hero-text text-4xl md:text-5xl lg:text-[4.5rem] font-medium text-white leading-[1.1] tracking-tight">
                        INTELLIGENCE <br className="hidden md:block" />
                        THAT GOES BEYOND <br className="hidden md:block" />
                        AUTOMATION
                    </h1>

                    <div className="hero-text hero-text-delay mt-10 md:mt-16 flex items-center gap-4 cursor-pointer group w-max">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                            <PlayIcon className="text-white group-hover:text-black w-4 h-4 ml-1" />
                        </div>
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Watch Movie</span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full flex justify-between items-end z-10 pointer-events-none">
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

                    <div className="bg-black/50 glass-lite rounded-tl-[2rem] p-6 md:p-8 w-full max-w-xs border-t border-l border-white/10 pointer-events-auto hidden md:block">
                        <h3 className="text-white font-bold mb-3 uppercase tracking-[0.2em] text-[0.65rem]">Architecting the future</h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-6 font-medium">Explore expert systems and custom LLMs that feel immersive, meaningful and unforgettable.</p>
                        <a href="#products" className="block w-full text-center py-3 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500">
                            Explore Lab
                        </a>
                    </div>
                </div>

                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-32 z-10">
                    <span className="text-white/80 text-xs font-bold tracking-widest">01</span>
                    <div className="w-[1px] h-32 bg-white/20 relative">
                        <div className="absolute top-0 left-0 w-full h-1/3 bg-white"></div>
                    </div>
                    <span className="text-white/40 text-xs font-bold tracking-widest">04</span>
                </div>
            </div>

            <div className="absolute bottom-4 z-10 flex flex-col items-center">
                <div className="bg-black/50 glass-lite border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-3 cursor-pointer hover:bg-white/10 transition">
                    <div className="grid grid-cols-2 gap-[1px] w-5 h-5 p-[3px] rounded-full bg-white/10 border border-white/20" aria-hidden="true">
                        <span className="border border-white"></span>
                        <span className="border border-white"></span>
                        <span className="border border-white"></span>
                        <span className="border border-white bg-white"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.6rem] text-white/80 font-bold uppercase tracking-widest leading-none">@zerah_lab</span>
                        <span className="text-[0.55rem] text-white/50 uppercase tracking-widest mt-0.5">Follow for more</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
