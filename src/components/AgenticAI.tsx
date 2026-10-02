import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AgenticAI() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const desktopMotion = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
        if (!desktopMotion) return;

        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                opacity: 0,
                y: 42,
                duration: 0.95,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                }
            });

            gsap.from(pRef.current?.children || [], {
                opacity: 0,
                y: 24,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: pRef.current,
                    start: 'top 86%',
                    once: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="agentic" ref={sectionRef} className="min-h-screen bg-black text-white flex flex-col justify-center p-12 md:p-24 relative overflow-hidden">
            <div className="max-w-6xl w-full mx-auto relative z-10">
                <h2 ref={textRef} className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none mb-16">
                    Meet <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">Agentic AI.</span>
                </h2>
                <div ref={pRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl md:text-3xl text-neutral-400 font-medium leading-relaxed border-t border-neutral-800 pt-16">
                    <p className="hover:text-white transition-colors duration-500">
                        It’s not just about models that chat. It’s about models that act.
                        We build AI agents capable of planning complex sequences, using external tools, and evaluating their own outputs before finalizing decisions.
                    </p>
                    <p className="hover:text-white transition-colors duration-500">
                        Welcome to the next paradigm. System 2 thinking, integrated seamlessly into your enterprise architecture.
                    </p>
                </div>
            </div>

            <div className="decorative-blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full pointer-events-none"></div>
        </section>
    );
}
