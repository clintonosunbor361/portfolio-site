import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(mq.matches);
        update();
        mq.addEventListener?.("change", update);
        return () => mq.removeEventListener?.("change", update);
    }, []);

    return reduced;
}

export default function Hero() {
    const words = useMemo(() => ["IT.", "Data.", "Operations."], []);
    const reducedMotion = usePrefersReducedMotion();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reducedMotion) return;
        const id = setInterval(() => {
            setIndex((p) => (p + 1) % words.length);
        }, 1200);
        return () => clearInterval(id);
    }, [words.length, reducedMotion]);

    const current = words[index];
    const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");

    return (
        <header className="pt-32 pb-16 px-6 md:px-12 lg:px-24 flex items-center min-h-[100svh] relative z-10">
            <div className="max-w-6xl w-full mx-auto text-left relative z-10">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white shadow-sm">
                        Business Systems Analyst
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-8 text-slate-900 dark:text-white">
                    I cut across{" "}
                    <span className="relative inline-block align-baseline">
                        <span className="invisible">{longest}</span>
                        <span
                            key={current}
                            className="absolute left-0 top-0 serif-italic font-normal text-[#4a6fa5] dark:text-[#6a8fb9] transition-opacity duration-500"
                        >
                            {current}
                        </span>
                    </span>
                    <br />
                    <span className="text-slate-600 dark:text-slate-400 font-normal">
                        Designing Systems and Improving Workflows.
                    </span>
                </h1>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
                    I build tools and workflows that reduce operational friction, cut costs, save time, and
                    enable revenue-generating work.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors inline-flex justify-center items-center"
                    >
                        View Case Studies
                    </a>

                    <a
                        href="mailto:clintonosunbor361@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-slate-900 dark:text-white border border-slate-900 dark:border-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all inline-flex justify-center items-center"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </header>
    );
}
