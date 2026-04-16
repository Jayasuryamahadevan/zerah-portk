import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Hero from './components/Hero';
import Explanation from './components/Explanation';
import Services from './components/Services';
import Products from './components/Products';
import AgenticAI from './components/AgenticAI';
import Research from './components/Research';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <main>
                <Hero />
                <Explanation />
                <Services />
                <Products />
                <AgenticAI />
                <Research />
            </main>

            <Footer />
        </div>
    );
}

export default App;
