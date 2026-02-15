export default function Stats() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                    <div className="text-6xl font-bold mb-2 text-slate-900 dark:text-white">50+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Systems Optimized</div>
                </div>
                <div>
                    <div className="text-6xl font-bold mb-2 text-slate-900 dark:text-white">$10M</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Cost Savings Identified</div>
                </div>
                <div>
                    <div className="text-6xl font-bold serif-italic text-slate-900 dark:text-white">Certified</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">CBAP &amp; Scrum Master</div>
                </div>
            </div>
        </section>
    );
}
