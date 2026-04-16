import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const researchTracks = [
    {
        title: 'Foundation Models',
        description: 'Compact enterprise SLMs tuned for low-latency inference and on-prem deployment.',
    },
    {
        title: 'Agentic Systems',
        description: 'Multi-agent orchestration pipelines for autonomous planning, execution, and QA.',
    },
    {
        title: 'Synthetic Data',
        description: 'Domain-accurate synthetic generation with automated drift and bias diagnostics.',
    },
    {
        title: 'Model Compression',
        description: 'Distillation, pruning, and quantization workflows for efficient production rollouts.',
    },
    {
        title: 'Decision Intelligence',
        description: 'Forecasting and optimization layers for finance, operations, and strategic planning.',
    },
];

export default function Research() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.research-headline',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 78%',
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.92, y: 60 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 82%',
                        once: true,
                    },
                }
            );

            gsap.to(imageRef.current, {
                y: -26,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.fromTo(
                '.research-row',
                { opacity: 0, y: 38 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="research" ref={sectionRef} className="bg-black text-white py-28 md:py-40 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-16 items-start">
                <div className="research-headline xl:sticky xl:top-28">
                    <p className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">R&D Division</p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.92]">
                        Research
                        <span className="block text-neutral-500 italic font-medium mt-2">The Lab.</span>
                    </h2>
                    <p className="mt-7 text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
                        We run applied research programs that move from concept to deployment. Every initiative is measured by production readiness, model reliability, and enterprise impact.
                    </p>

                    <div ref={imageRef} className="mt-10 relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/60">
                        <img
                            src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?auto=format&fit=crop&w=1400&q=80"
                            alt="AI research laboratory with advanced monitoring displays"
                            className="w-full h-[330px] md:h-[420px] object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                            <div>
                                <p className="text-xs tracking-[0.2em] uppercase text-white/70">Current Focus</p>
                                <p className="text-xl md:text-2xl font-semibold">Enterprise AI Systems</p>
                            </div>
                            <span className="text-sm text-white/80">2026</span>
                        </div>
                    </div>
                </div>

                <div ref={listRef} className="border-t border-neutral-800">
                    {researchTracks.map((item, idx) => (
                        <div
                            key={idx}
                            className="research-row group border-b border-neutral-800 py-8 md:py-10 cursor-pointer relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors duration-400 hover:bg-white hover:text-black hover:-mx-4 hover:px-4"
                        >
                            <div className="z-10">
                                <p className="text-xs md:text-sm text-neutral-500 group-hover:text-black/55 tracking-[0.2em] uppercase mb-3">
                                    Track {String(idx + 1).padStart(2, '0')}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{item.title}</h3>
                            </div>
                            <div className="flex items-center gap-5 z-10">
                                <p className="text-sm md:text-base text-neutral-400 group-hover:text-black/70 max-w-sm text-left md:text-right">
                                    {item.description}
                                </p>
                                <ArrowUpRight className="w-7 h-7 opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                            </div>

                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
