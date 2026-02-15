import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-16">
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                    Featured Case Studies
                </span>
            </div>

            {caseStudies.map((project, index) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center last:mb-0 relative z-10">
                    <div className={`lg:col-span-4 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'lg:col-span-4'}`}>
                        <div className="text-6xl md:text-8xl font-bold text-gray-100 dark:text-slate-800 mb-4 -ml-2 select-none">
                            ({index + 1 < 10 ? `0${index + 1}` : index + 1})
                        </div>
                        <Link to={`/case-study/${project.id}`} className="group block mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent-light transition-colors">{project.title}</h3>
                        </Link>
                        <p className="serif-italic text-xl text-gray-500 mb-6">{project.subtitle}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {/* Truncate description for list view if needed, or use a short summary field */}
                            {project.description.substring(0, 150)}...
                        </p>
                        <div className="grid grid-cols-2 gap-y-4 text-xs uppercase tracking-wide border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div className="text-gray-400">Role</div>
                            <div className="font-semibold text-slate-900 dark:text-white">{project.role}</div>
                            <div className="text-gray-400">{project.roi ? 'Impact' : 'Outcome'}</div>
                            <div className="font-semibold text-slate-900 dark:text-white">{project.outcome}</div>
                            <div className="text-gray-400">Year</div>
                            <div className="font-semibold text-slate-900 dark:text-white">{project.year}</div>
                        </div>
                    </div>
                    <div className={`lg:col-span-8 ${index % 2 === 0 ? 'order-1 lg:order-2' : ''} relative`}>
                        <div className={`absolute -top-4 ${index % 2 === 0 ? '-left-4' : '-right-4'} bg-black text-white dark:bg-white dark:text-black text-xs font-mono px-2 py-1 z-10`}>
                            {project.roi || project.compliance || `Users: ${project.users || 'N/A'}`}
                        </div>
                        <Link to={`/case-study/${project.id}`} className="block relative overflow-hidden group z-20">
                            <img
                                alt={project.title}
                                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
                                src={project.image}
                            />
                        </Link>
                        {project.codeImage && (
                            <div className={`hidden md:block absolute ${index % 2 === 0 ? 'bottom-[-40px] left-12' : 'top-12 right-12'} w-48 h-32 border-4 border-white dark:border-background-dark shadow-lg`}>
                                <img
                                    alt="Code detail"
                                    className="w-full h-full object-cover"
                                    src={project.codeImage}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}
