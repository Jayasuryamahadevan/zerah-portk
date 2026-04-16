import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Explanation() {
    const containerRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRefs = useRef<HTMLParagraphElement[]>([]);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // Function to wrap words in spans for the Blur effect
            const splitTextToSpans = (element: HTMLElement | null) => {
                if (!element) return;
                const text = element.innerText;
                element.innerHTML = '';
                const words = text.split(' ').filter(w => w.length > 0);

                words.forEach((word) => {
                    const span = document.createElement('span');
                    span.innerText = word;
                    span.style.display = 'inline-block';
                    // Initial state for the animation
                    span.style.opacity = '0';
                    span.style.filter = 'blur(10px)';
                    span.style.transform = 'translateY(10px)';
                    span.style.willChange = 'opacity, filter, transform';
                    element.appendChild(span);
                    // Crucial: append an actual text node for the space so HTML doesn't collapse it
                    element.appendChild(document.createTextNode(' '));
                });
                return element.querySelectorAll('span');
            };

            // Apply splitting
            const headingWords = splitTextToSpans(headingRef.current);
            const paragraphWordsList = paragraphRefs.current.map(p => splitTextToSpans(p));

            // Animate Heading (Gradual Blur)
            if (headingWords) {
                gsap.to(headingWords, {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 1.2,
                    stagger: 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top bottom-=15%",
                        toggleActions: "play none none reverse"
                    }
                });
            }

            // Animate Paragraphs (Gradual Blur)
            paragraphWordsList.forEach((wordNodes, index) => {
                if (wordNodes) {
                    gsap.to(wordNodes, {
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                        duration: 1,
                        stagger: 0.02,
                        delay: index * 0.2, // slight delay for second paragraph
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: paragraphRefs.current[index],
                            start: "top bottom-=10%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLParagraphElement) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    return (
        <section id="explanation" ref={containerRef} className="relative min-h-[80vh] bg-neutral-950 text-white flex flex-col items-center justify-center p-8 md:p-24 overflow-hidden z-20">
            {/* Extended Cinematic Dark Background to match Hero */}
            <div
                className="absolute top-0 left-0 w-full h-[150%] pointer-events-none opacity-60 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            />

            {/* Dark Gradient Overlay to ensure text readability and seam blending */}
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
