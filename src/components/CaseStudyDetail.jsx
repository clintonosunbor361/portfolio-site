import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
    const { id } = useParams();
    const project = caseStudies.find(study => study.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="text-center py-24">Case study not found.</div>;
    }

    // Determine next project for navigation
    const currentIndex = caseStudies.findIndex(study => study.id === id);
    const prevProject = caseStudies[currentIndex - 1] || caseStudies[caseStudies.length - 1];
    const nextProject = caseStudies[currentIndex + 1] || caseStudies[0];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 font-sans selection:bg-slate-300 dark:selection:bg-slate-700 min-h-[100svh]">
            {/* Navigation is handled by App.jsx or we can add a specific back button here as per template */}

            <header className="pt-24 px-6 md:px-12 lg:px-24 pb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-4 group">
                            <span className="material-symbols-outlined text-lg mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Back to Case Studies
                        </Link>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-white font-serif">
                            {/* Assuming numbering logic or adding it to data */}{currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}: {project.title.toUpperCase()} <br />
                            <span className="serif-italic font-normal text-slate-600 dark:text-slate-400">{project.subtitle}</span>
                        </h1>
                    </div>
                    <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-800 mb-8 shadow-2xl">
                        <img
                            alt={`Professional dashboard visualization for ${project.title}`}
                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            src={project.image}
                        />
                        <div className="absolute inset-0 bg-black/10 dark:bg-white/5 pointer-events-none"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-200 dark:border-gray-800 py-8">
                        <div>
                            <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 block mb-2">Role</span>
                            <span className="text-lg font-bold">{project.role.toUpperCase()}</span>
                        </div>
                        <div>
                            <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 block mb-2">Time/Year</span>
                            <span className="text-lg font-bold">{project.year}</span>
                        </div>
                        <div>
                            <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 block mb-2">Impact</span>
                            <span className="text-lg font-bold">{project.outcome.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="px-6 md:px-12 lg:px-24 py-16">
                <div className="max-w-4xl mx-auto space-y-24">
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl font-bold uppercase tracking-wide border-l-4 border-black dark:border-white pl-4">The Challenge</h2>
                        </div>
                        <div className="md:col-span-8">
                            {project.challenge && (
                                <>
                                    <h3 className="text-3xl font-serif italic mb-6 text-slate-700 dark:text-slate-300">"{project.challenge.quote}"</h3>
                                </>
                            )}
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl font-bold uppercase tracking-wide border-l-4 border-black dark:border-white pl-4">The Strategy</h2>
                        </div>
                        <div className="md:col-span-8">
                            <div className="space-y-8">
                                {project.strategy && project.strategy.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="w-full">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold uppercase tracking-wide border-l-4 border-black dark:border-white pl-4 mb-8">The Execution</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                                {project.execution?.description}
                            </p>
                        </div>
                        <div className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 p-4 md:p-8 shadow-sm">
                            <div className="aspect-video relative overflow-hidden bg-gray-50 dark:bg-black/50">
                                <img
                                    alt="Process Map Graphic"
                                    className="w-full h-full object-contain p-4 mix-blend-multiply dark:mix-blend-normal dark:opacity-90"
                                    src={project.execution?.image}
                                />
                                <div className="absolute bottom-4 right-4 bg-white dark:bg-black text-xs font-mono px-2 py-1 border border-gray-200 dark:border-gray-700">{project.execution?.caption}</div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-50 dark:bg-slate-900 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 py-24">
                        <div className="max-w-5xl mx-auto">
                            <div className="mb-16 text-center">
                                <span className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 px-4 py-1 text-xs uppercase tracking-wider font-semibold">Outcomes</span>
                                <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-4">Measured Success</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                                {project.results?.stats.map((stat, index) => (
                                    <div key={index} className="p-6">
                                        <div className="text-6xl md:text-7xl font-bold text-primary dark:text-white mb-2">{stat.value}</div>
                                        <div className="h-1 w-12 bg-gray-300 mx-auto mb-4"></div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="relative max-w-3xl mx-auto">
                                <span className="absolute top-0 left-0 text-8xl font-serif text-gray-200 dark:text-gray-800 -translate-x-1/2 -translate-y-1/2 z-0">"</span>
                                <blockquote className="relative z-10 text-center">
                                    <p className="text-2xl md:text-3xl serif-italic leading-relaxed text-slate-800 dark:text-slate-200 mb-8">
                                        "{project.results?.testimonial?.quote}"
                                    </p>
                                    <footer className="text-sm font-bold uppercase tracking-wider text-gray-500">
                                        — {project.results?.testimonial?.author}
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </section>

                    <section className="flex justify-between items-center pt-12 border-t border-gray-200 dark:border-gray-800">
                        <Link to={`/case-study/${prevProject.id}`} className="group flex flex-col items-start opacity-70 hover:opacity-100 transition-opacity">
                            <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Previous</span>
                            <span className="text-lg font-serif italic group-hover:-translate-x-2 transition-transform">{prevProject.title}</span>
                        </Link>
                        <Link to={`/case-study/${nextProject.id}`} className="group flex flex-col items-end text-right opacity-70 hover:opacity-100 transition-opacity">
                            <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Next Project</span>
                            <span className="text-lg font-serif italic group-hover:translate-x-2 transition-transform">{nextProject.title}</span>
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    );
}
