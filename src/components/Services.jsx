export default function Services() {
    const services = [
        {
            icon: "account_tree",
            title: "Systems & Workflow Architecture",
            desc: "Designing structured digital workflows, process logic, and scalable operational systems aligned with business objectives."
        },
        {
            icon: "tune",
            title: "Operations Optimization",
            desc: "Identifying bottlenecks, eliminating inefficiencies, and redesigning processes to improve speed, accuracy, and reliability."
        },
        {
            icon: "bar_chart",
            title: "Data & Performance Intelligence",
            desc: "Building dashboards (Looker Studio), KPI frameworks, and structured reporting systems to support decision-making."
        },
        {
            icon: "terminal",
            title: "Internal Systems & Automation",
            desc: "Developing practical internal tools using Google Sheets, Apps Script, SQL, and system integrations to streamline execution."
        }
    ];

    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-slate-900/50">
            <div className="mb-16">
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                    Core Competencies
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="group p-6 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                        <div className="mb-6 text-slate-800 dark:text-slate-200">
                            <span className="material-symbols-outlined text-4xl font-light">
                                {service.icon}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
