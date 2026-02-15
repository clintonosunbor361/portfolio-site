export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-10 px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 mb-12">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Ready to optimize your operations or <br />
                        <span className="serif-italic font-normal text-gray-400">digital infrastructure?</span>
                    </h2>
                    <p className="text-gray-400 mt-4 mb-8">
                        Let's discuss how we can turn your complex business challenges into streamlined technical solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            className="bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 px-2 w-full sm:w-72 transition-colors text-white placeholder-gray-600"
                            placeholder="Enter your email address"
                            type="email"
                        />
                        <button className="bg-white text-black font-bold uppercase tracking-wider text-xs px-8 py-3 hover:bg-gray-200 transition-colors">
                            Start Conversation
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-sm text-gray-400 mt-8 lg:mt-0">
                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/clintonosunbor/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a className="hover:text-white transition-colors" href="mailto:clintonosunbor361@gmail.com" target="_blank" rel="noopener noreferrer">clintonosunbor361@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-xs text-gray-500">
                <div>© 2026 Clinton Osunbor. All rights reserved.</div>
            </div>
        </footer>
    );
}
