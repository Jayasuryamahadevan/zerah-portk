import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Cpu, Bot, Network } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'AI Driven Automation',
        description: 'Transforming legacy workflows into intelligent, frictionless systems. End-to-end operational mastery.',
        icon: Cpu,
        color: 'bg-white',
        textColor: 'text-black'
    },
    {
        id: '02',
        title: 'Cognitive Agents',
        description: 'Deploying autonomous entities that reason, plan, and execute multi-step deterministic tasks.',
        icon: Bot,
        color: 'bg-neutral-900',
        textColor: 'text-white'
    },
    {
        id: '03',
        title: 'Enterprise MLOps',
        description: 'Scaling machine learning infrastructure securely. Bulletproof deployment pipelines.',
        icon: Network,
        color: 'bg-neutral-800',
        textColor: 'text-white'
    }
];

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".service-window", {
                y: 50,
                opacity: 0,
                scale: 0.98,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center+=20%",
                }
            });

            gsap.from(".service-block", {
                opacity: 0,
                y: 30,
                scale: 0.95,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".service-window",
                    start: "top center+=10%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex flex-col items-center justify-center p-4 md:p-12 z-20">
            {/* Same continuous background */}
            <div
                className="absolute top-0 left-0 w-full h-[150%] pointer-events-none opacity-60 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            />
            {/* Dark gradient to ensure contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-0"></div>

            {/* Main Window Container */}
            <div className="service-window relative w-full max-w-7xl border border-white/10 rounded-[2.5rem] bg-black/60 backdrop-blur-2xl shadow-2xl p-6 md:p-10 z-10 flex flex-col xl:flex-row gap-6">

                {/* Left Side: Header and Featured Service */}
                <div className="flex flex-col gap-6 w-full xl:w-2/5">
                    {/* Header Block */}
                    <div className="bg-neutral-900/50 rounded-[2rem] p-8 md:p-12 border border-white/5 h-full flex flex-col justify-between">
                        <div>
                            <div className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-4">Core Principles</div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                                AI & <br /> AUTOMATION
                            </h2>
                        </div>
                        <p className="text-neutral-400 mt-12 text-sm leading-relaxed max-w-xs font-medium">
                            Unleashing unprecedented operational velocity through state-of-the-art intelligence.
                        </p>
                    </div>

                    {/* Featured Service Block - White Block */}
                    <div className={`service-block group ${services[0].color} ${services[0].textColor} rounded-[2rem] p-8 relative overflow-hidden cursor-pointer`}>
                        <div className="flex justify-between items-start mb-16">
                            {(() => {
                                const FeaturedIcon = services[0].icon;
                                return <FeaturedIcon className={`w-8 h-8 ${services[0].textColor} transition-transform group-hover:scale-110 duration-500`} />;
                            })()}
                            <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <div className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2">{services[0].id} //</div>
                            <h3 className="text-3xl font-bold tracking-tighter mb-4">{services[0].title}</h3>
                            <p className="text-sm font-medium opacity-80 leading-relaxed max-w-[250px]">{services[0].description}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Grid of remaining services */}
                <div className="w-full xl:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.slice(1).map((srv) => {
                        const SrvIcon = srv.icon;
                        return (
                            <div key={srv.id} className={`service-block group ${srv.color} border border-white/5 ${srv.textColor} rounded-[2rem] p-8 relative overflow-hidden cursor-pointer flex flex-col justify-between min-h-[300px]`}>
                                <div className="flex justify-between items-start">
                                    <SrvIcon className="w-8 h-8 opacity-80 transition-transform group-hover:scale-110 duration-500" />
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold opacity-30">{srv.id}</span>
                                    </div>
                                    <h3 className="text-2xl font-medium tracking-tight mb-3">{srv.title}</h3>
                                    <p className="text-xs font-medium opacity-70 leading-relaxed border-t border-white/10 pt-4 mt-auto">
                                        {srv.description}
                                    </p>
                                </div>

                                {/* Hover reveal glow */}
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}

                    {/* Final Action/Image Block */}
                    <div className="service-block md:col-span-2 group bg-neutral-900 border border-white/5 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between cursor-pointer hover:bg-neutral-800 transition-colors duration-500 overflow-hidden relative">
                        {/* Abstract background element simulating the 'headphone' image slot from reference */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>

                        <div className="flex flex-col gap-2 relative z-10">
                            <h3 className="text-white font-medium text-2xl tracking-tight">Enterprise Scale</h3>
                            <p className="text-neutral-500 text-sm max-w-sm">Built for balanced operations and refined noise isolation. Letting logic adapt seamlessly to your enterprise.</p>
                        </div>
                        <div className="mt-6 sm:mt-0 relative z-10 font-bold uppercase tracking-widest text-[0.65rem] border border-white/20 rounded-full px-8 py-4 text-white group-hover:bg-white group-hover:text-black transition-all">
                            Explore Capability
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
