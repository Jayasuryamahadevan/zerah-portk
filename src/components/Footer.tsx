import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-white text-black py-32 px-12 md:px-24 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="group cursor-pointer">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 relative inline-block">
                        Let's Talk.
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
                    </h2>
                    <a href="mailto:hello@zerahlab.com" className="text-2xl md:text-4xl font-bold flex items-center hover:opacity-70 transition-opacity">
                        hello@zerahlab.com <ArrowUpRight className="ml-4 w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </a>
                </div>
                <div className="mt-24 md:mt-0 flex gap-12 text-sm font-semibold tracking-wider uppercase text-neutral-500">
                    <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-black transition-colors">Twitter</a>
                    <span>© {new Date().getFullYear()} Zerah Lab.</span>
                </div>
            </div>
        </footer>
    );
}
