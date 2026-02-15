export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900">
            <div className="mb-12">
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                    Stakeholder Feedback
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white dark:bg-black p-12 relative border border-gray-100 dark:border-gray-800">
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black dark:border-white"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black dark:border-white"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black dark:border-white"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black dark:border-white"></div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            alt="Headshot of client"
                            className="w-16 h-16 rounded-full object-cover mb-4 grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiWn5k3AQjgRV08m_wPlJU6mKO7fz9dVj8T_g3pM-iMb3yeQ8jJxHKki9Mbyt9b7LXlNwsDBXWnQedHkVjQQV5gup6tQvfINEBRfS0eZJDfCjLqJV6SzjE0Uu2jfut9DbBxu6dxsG7vfzLtQtrsmOH_03ScouXb8O_neNvUo1AWu0NCa9Hs9VQgVVsWLs_cd4ds-aTBtotNndcL-HzU2-8KAWtdmR5mvBUCvfk_wanZpQEBjce2xuUk9jReA9yKzYzoc8lzkOxhk8N"
                        />
                        <div className="text-sm font-bold mb-1 text-slate-900 dark:text-white">Sarah Jenkins</div>
                        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider">CTO, FinCore Ltd</div>
                        <p className="text-xl serif-italic leading-relaxed text-slate-900 dark:text-white">
                            "Alex didn't just document requirements; he challenged our assumptions. The resulting system was far leaner and more effective than what we initially asked for."
                        </p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white dark:bg-black p-12 relative border border-gray-100 dark:border-gray-800">
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black dark:border-white"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black dark:border-white"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black dark:border-white"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black dark:border-white"></div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            alt="Headshot of client"
                            className="w-16 h-16 rounded-full object-cover mb-4 grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxQ6hPG9wvmQ17HOc3W2RabQIlREV6_aII5OxyyxE8NdPwhmsR1E6bZIOW70htwy01c4NwuAmVK2bzyzU-ZuwpbngGU9Dzcm_JwORS4UVeJkMW5IL2WXWP6BpjKF1uTeeEXXoVk-mHfhrFYU5c-1BIWb5IWpB_Gqxp0CLCwaU8cVzkxNt_aQj7R0AoJ6V_Jljp5SnqyAXuEzgvTrrQL4TkY7QLvwu4KJkcoa89JWe2IcgUwQkHEj40TcIRnWhT0vI_6ClaMFWwSVuG"
                        />
                        <div className="text-sm font-bold mb-1 text-slate-900 dark:text-white">Emily Chen</div>
                        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider">Product Director, MediTech</div>
                        <p className="text-xl serif-italic leading-relaxed text-slate-900 dark:text-white">
                            "The clarity Alex brings to complex technical landscapes is rare. He speaks both 'Executive' and 'Developer' fluently."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
