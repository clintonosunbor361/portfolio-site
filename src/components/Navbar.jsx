import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu on click

        if (location.pathname !== '/') {
            navigate(`/${id}`);
            setTimeout(() => {
                const element = document.getElementById(id.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${scrolled || isOpen
            ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'
            : 'bg-transparent'
            }`}>
            <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white z-50 relative">
                CLINTON<span className="text-xs align-top">®</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
                <a
                    href="#"
                    onClick={(e) => scrollToSection(e, '#root')}
                    className="hover:text-primary dark:hover:text-white transition-colors"
                >
                    Home
                </a>
                <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, '#about')}
                    className="hover:text-primary dark:hover:text-white transition-colors"
                >
                    About
                </a>
                <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, '#projects')}
                    className="hover:text-primary dark:hover:text-white transition-colors"
                >
                    Case Studies
                </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/clintonosunbor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition-colors"
                >
                    <FaLinkedin className="text-2xl" />
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider border border-slate-900 dark:border-white px-4 py-2 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all rounded-full"
                >
                    View Resume
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 text-slate-900 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 h-screen w-screen bg-background-light dark:bg-background-dark z-40 flex flex-col items-center justify-start pt-32 pb-12 space-y-8 text-xl font-medium text-slate-900 dark:text-white overflow-y-auto">
                    <a href="#" onClick={(e) => scrollToSection(e, '#root')}>Home</a>
                    <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Case Studies</a>

                    <div className="flex flex-col items-center space-y-6 mt-8">
                        <a href="https://www.linkedin.com/in/clintonosunbor/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold uppercase tracking-wider border border-slate-900 dark:border-white px-6 py-3 rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
