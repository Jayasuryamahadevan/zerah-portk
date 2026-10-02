import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Cpu, Search, Layers, Database, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: '01',
        name: 'AutoSLM',
        tagline: 'SLM Factory',
        description: 'Bespoke Small Language Models distilled for absolute precision and terrifying speed.',
        icon: Cpu,
        color: 'bg-white',
        textColor: 'text-black',
        colSpan: 'md:col-span-2 xl:col-span-1'
    },
    {
        id: '02',
        name: 'Sarvagyan',
        tagline: 'Web Search Intelligence',
        description: 'Neural retrieval augmentation mapping the deep web into structured, actionable enterprise knowledge.',
        icon: Search,
        color: 'bg-transparent',
        textColor: 'text-white',
        colSpan: 'md:col-span-1'
    },
    {
        id: '03',
        name: 'AutoAnnotator',
        tagline: 'Automated Annotation',
        description: 'Zero-human-in-the-loop massive parallel data labeling using multi-agent consensus validation.',
        icon: Layers,
        color: 'bg-neutral-800',
        textColor: 'text-white',
        colSpan: 'md:col-span-1'
    },
    {
        id: '04',
        name: 'Talk to CSV',
        tagline: 'Conversational Data',
        description: 'Instantly query, pivot, and visualize massive raw datasets using natural language intelligence.',
        icon: Database,
        color: 'bg-neutral-900',
        textColor: 'text-white',
        colSpan: 'md:col-span-1'
    },
    {
        id: '05',
        name: 'Curriculam Project',
        tagline: 'Adaptive Learning',
        description: 'Hyper-personalized dynamically generated syllabi mapping instantly to student cognition profiles.',
        icon: BookOpen,
        color: 'bg-black',
        textColor: 'text-white',
        colSpan: 'md:col-span-1'
    }
];

export default function Products() {
    const containerRef = useRef<HTMLElement>(null);
    const windowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const desktopMotion = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
        if (!desktopMotion) return;

        const ctx = gsap.context(() => {
            gsap.from(windowRef.current, {
                y: 56,
                opacity: 0,
                scale: 0.98,
                duration: 1.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 82%',
                    once: true,
                }
            });

            gsap.fromTo(
                '.product-block',
                {
                    opacity: 0,
                    y: 32,
                    scale: 0.965,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.07,
                    duration: 0.78,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: windowRef.current,
                        start: 'top 85%',
                        once: true,
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="products" ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex flex-col items-center justify-center p-4 md:p-12 z-20">
            <div
                className="cinematic-bg absolute top-0 left-0 w-full h-[150%] pointer-events-none opacity-60 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none z-0"></div>

            <div className="text-center z-10 mb-12 relative w-full max-w-7xl px-8 flex justify-between items-end">
                <div className="text-left">
                    <span className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">The Armory</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter">
                        Ecosystem <br /> <span className="text-neutral-600">Products.</span>
                    </h2>
                </div>
                <div className="hidden lg:block text-neutral-400 text-sm max-w-xs text-right font-medium">
                    Deploy expert systems designed for scale, precision, and frictionless integration into enterprise workflows.
                </div>
            </div>

            <div ref={windowRef} className="glass-panel relative w-full max-w-7xl border border-white/10 rounded-[2.5rem] bg-neutral-900/40 shadow-2xl p-4 md:p-8 z-10 flex flex-col xl:flex-row gap-4">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-min">
                    {products.map((prod, index) => {
                        const ProdIcon = prod.icon;
                        const isFeatured = index === 0;

                        return (
                            <div key={prod.id} className={`product-block group ${prod.colSpan} ${prod.color} border border-white/10 ${prod.textColor} rounded-[2rem] p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between ${isFeatured ? 'min-h-[400px]' : 'min-h-[280px]'} shadow-lg hover:shadow-2xl hover:border-white/30 transition-all duration-500`}>
                                <div className="flex justify-between items-start z-10 relative">
                                    <ProdIcon className={`${isFeatured ? 'w-12 h-12' : 'w-8 h-8'} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                                    <div className={`w-10 h-10 rounded-full border ${isFeatured ? 'border-black/20' : 'border-white/20'} flex items-center justify-center ${isFeatured ? 'group-hover:bg-black group-hover:text-white' : 'group-hover:bg-white group-hover:text-black'} transition-colors duration-300`}>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="mt-8 z-10 relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-black tracking-widest ${isFeatured ? 'opacity-40' : 'opacity-30'}`}>{prod.id} </span>
                                        <div className={`h-px w-8 ${isFeatured ? 'bg-black/20' : 'bg-white/20'}`}></div>
                                        <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase ${isFeatured ? 'opacity-60' : 'opacity-50'}`}>{prod.tagline}</span>
                                    </div>
                                    <h3 className={`${isFeatured ? 'text-5xl md:text-6xl' : 'text-3xl'} font-bold tracking-tighter mb-4 leading-none`}>
                                        {prod.name}
                                    </h3>
                                    <p className={`${isFeatured ? 'text-lg max-w-xs' : 'text-sm'} font-medium ${isFeatured ? 'opacity-80' : 'opacity-70'} leading-relaxed mt-auto`}>
                                        {prod.description}
                                    </p>
                                </div>

                                {!isFeatured && (
                                    <div className="decorative-blur absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>
                                )}

                                <div className={`absolute inset-0 ${isFeatured ? 'bg-black opacity-0 group-hover:opacity-[0.02]' : 'bg-white opacity-0 group-hover:opacity-[0.03]'} transition-opacity duration-300 pointer-events-none`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
