import {useEffect} from "react";
import LanguageToggle from "./LanguageToggle.jsx";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    return <nav className="navbar fixed top-0 w-full z-40 bg-[rgba(10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl text-white">
                    mail@<span className="text-[#C7D989]">eliasixd</span>.com
                </a>

                {/*Mobile Menu (Burger)*/}
                <div
                    className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
                    onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden ml-6 md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#toolkit" className="text-gray-300 hover:text-white transition-colors">
                        My Toolkit
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>
                    <a href="/CVeliasCHRISTIANSEN.pdf" download="Elias-CV.pdf" target="_blank" rel="noopener noreferrer"
                       className="text-gray-300 hover:text-white transition-colors">
                        Download CV
                    </a>

                    <LanguageToggle className="ml-4" />
                </div>
            </div>
        </div>
    </nav>
}
