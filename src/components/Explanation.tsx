import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Explanation() {
    const containerRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRefs = useRef<HTMLParagraphElement[]>([]);

    useEffect(() => {
        const desktopMotion = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;

        if (!desktopMotion) {
            return;
        }

        const ctx = gsap.context(() => {
            const splitTextToSpans = (element: HTMLElement | null) => {
                if (!element) return null;

                const text = element.innerText;
                element.innerHTML = '';

                text.split(' ').filter(Boolean).forEach((word) => {
                    const span = document.createElement('span');
                    span.innerText = word;
                    span.style.display = 'inline-block';
                    span.style.opacity = '0';
                    span.style.filter = 'blur(8px)';
                    span.style.transform = 'translateY(10px)';
                    element.appendChild(span);
                    element.appendChild(document.createTextNode(' '));
                });

                return element.querySelectorAll('span');
            };

            const headingWords = splitTextToSpans(headingRef.current);
            const paragraphWordsList = paragraphRefs.current.map((paragraph) => splitTextToSpans(paragraph));

            if (headingWords) {
                gsap.to(headingWords, {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 0.9,
                    stagger: 0.025,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                });
            }

            paragraphWordsList.forEach((wordNodes, index) => {
                if (!wordNodes) return;

                gsap.to(wordNodes, {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 0.75,
                    stagger: 0.012,
                    delay: index * 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: paragraphRefs.current[index],
                        start: 'top 88%',
                        once: true,
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLParagraphElement | null) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    return (
        <section id="explanation" ref={containerRef} className="relative min-h-[80vh] bg-neutral-950 text-white flex flex-col items-center justify-center p-8 md:p-24 overflow-hidden z-20">
            <div
                className="cinematic-bg absolute top-0 left-0 w-full h-[150%] pointer-events-none opacity-60 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none z-0"></div>

            <div className="max-w-4xl relative z-10 w-full mt-12 mb-24">
                <span className="text-sm font-bold tracking-[0.3em] text-neutral-400 uppercase mb-12 block">The Mission</span>

                <h2 ref={headingRef} className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-16">
                    We don't just build software. We architect the cognitive infrastructure of tomorrow's enterprise.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-lg md:text-2xl text-neutral-300 font-medium leading-relaxed">
                    <p ref={addToRefs}>
                        At Zerah Lab, our goal is customer-centric transformation. We understand that legacy systems are heavy, brittle, and expensive. That's why every product and research initiative we output is designed to replace friction with pure intelligence.
                    </p>
                    <p ref={addToRefs}>
                        From bespoke Small Language Models (SLMs) that operate securely on-premise, to massive multi-agent architectures that automate entire operational departments—we deliver flawless, production-ready AI.
                    </p>
                </div>

                <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
            </div>
        </section>
    );
}
