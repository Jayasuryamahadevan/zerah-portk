import { lazy, Suspense, useEffect, useState } from 'react';

import Hero from './components/Hero';

const Explanation = lazy(() => import('./components/Explanation'));
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const AgenticAI = lazy(() => import('./components/AgenticAI'));
const Research = lazy(() => import('./components/Research'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    const [loadRest, setLoadRest] = useState(false);

    useEffect(() => {
        let timeoutId: number | undefined;

        const scheduleBelowFold = () => {
            timeoutId = window.setTimeout(() => setLoadRest(true), 80);
        };

        if (document.readyState === 'complete') {
            scheduleBelowFold();
        } else {
            window.addEventListener('load', scheduleBelowFold, { once: true });
        }

        return () => {
            window.removeEventListener('load', scheduleBelowFold);
            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <main>
                <Hero />
                {loadRest ? (
                    <Suspense fallback={<div className="min-h-[80vh] bg-neutral-950" aria-hidden="true" />}>
                        <Explanation />
                        <Services />
                        <Products />
                        <AgenticAI />
                        <Research />
                        <Footer />
                    </Suspense>
                ) : (
                    <div className="min-h-[80vh] bg-neutral-950" aria-hidden="true" />
                )}
            </main>
        </div>
    );
}

export default App;
