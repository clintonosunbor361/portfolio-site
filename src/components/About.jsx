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
                    <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-12 text-slate-900 dark:text-white">
                        Good Day, I am Clinton Osunbor. A Business Systems Analyst.
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-slate-900 dark:text-white">
                        For me, systems analysis isn't just about requirements; it's about{' '}
                        <span className="serif-italic">Clarity, Efficiency,</span> and{' '}
                        <span className="serif-italic">Impact</span>.
                    </h2>

                </div>
                <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-64 h-80 border border-gray-300 dark:border-gray-700 p-4 rounded-2xl transition-transform duration-500">
                        <img
                            alt="Professional portrait of Clinton"
                            className="w-full h-full object-cover rounded-xl filter contrast-125 grayscale hover:grayscale-0 transition-all duration-500"
                            src="/headshot.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
