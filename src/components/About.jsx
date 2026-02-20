export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-12">
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                    About Me
                </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7">
                    <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-12 text-slate-900 dark:text-white">
                        Good day, I am Clinton Osunbor, a Business Systems Analyst.
                    </h2>
                    <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-8 text-slate-900 dark:text-white">
                        For me, systems analysis isn’t just about gathering requirements. It’s about bringing{' '}
                        <span className="serif-italic">clarity</span> to workflows, improving{' '}
                        <span className="serif-italic">efficiency</span>, and creating{' '}
                        <span className="serif-italic">measurable impact</span>.
                    </h2>

                </div>
                <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-64 h-80 border border-gray-300 dark:border-gray-700 p-4 rounded-2xl transition-transform duration-500">
                        <img
                            alt="Professional portrait of Clinton"
                            className="w-full h-full object-cover rounded-xl filter contrast-125 grayscale transition-all duration-500"
                            src="/headshot.jpg"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
                <div>
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">What I Help Teams Do</h3>
                    <ul className="space-y-4 text-slate-600 dark:text-gray-400">
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Save time by reducing manual work and repetitive reconciliation.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Reduce operational costs through better processes and automation.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Improve workflow clarity and remove bottlenecks.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Track performance using structured data and live dashboards.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Turn operational data into practical insights for better decisions,
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">What To Do Next</h3>
                    <ul className="space-y-4 text-slate-600 dark:text-gray-400">
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Review my case studies to see how I approach operational challenges.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Reach out if you need support improving your internal systems.
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            Connect on LinkedIn or send an email.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
