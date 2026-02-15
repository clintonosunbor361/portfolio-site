export default function Methodology() {
    const steps = [
        {
            num: "01",
            title: "Discover",
            desc: "(Stakeholder interviews, current state analysis, problem definition)",
            margin: "lg:mt-[22px]",
            pos: "lg:-top-16"
        },
        {
            num: "02",
            title: "Define",
            desc: "(Requirement documentation, scope lock, technical feasibility)",
            margin: "lg:absolute lg:top-1/2 lg:-translate-y-1/2",
            pos: "lg:-bottom-24",
            extraClass: "lg:mt-32"
        },
        {
            num: "03",
            title: "Design",
            desc: "(Prototyping, system architecture, data flow diagrams)",
            margin: "lg:mt-[22px]",
            pos: "lg:-top-16"
        },
        {
            num: "04",
            title: "Deliver",
            desc: "(UAT coordination, training, deployment support)",
            margin: "lg:absolute lg:top-1/2 lg:-translate-y-1/2",
            pos: "lg:-bottom-24",
            extraClass: "lg:mt-32"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="mb-16">
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                    My Methodology
                </span>
            </div>
            <div className="relative py-12">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-300 dark:bg-gray-700 -z-10"></div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left">
                    {steps.map((step, index) => (
                        <div key={index} className={`relative group ${step.extraClass ? 'pt-12 lg:pt-0' : ''}`}>
                            <div className={`text-5xl md:text-6xl font-serif mb-4 group-hover:text-primary dark:group-hover:text-white transition-colors text-slate-900 dark:text-white ${step.extraClass || ''}`}>
                                {step.title}
                            </div>
                            <div className={`lg:absolute ${step.pos} lg:left-0 text-xs font-mono text-gray-400`}>
                                {step.num}
                            </div>
                            <div className={`h-4 w-4 bg-black dark:bg-white rounded-full mx-auto lg:mx-0 mb-4 lg:mb-0 border-4 border-white dark:border-black z-10 relative ${step.margin}`}></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-xs mx-auto lg:mx-0">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
