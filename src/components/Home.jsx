import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Methodology from './Methodology';
import Projects from './Projects';
import Gallery from './Gallery';

export default function Home() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans selection:bg-slate-300 dark:selection:bg-slate-700">
            <main>
                <Hero />
                <About />
                <Projects />
                <Services />
                <Methodology />
                <Gallery />
            </main>
        </div>
    );
}
