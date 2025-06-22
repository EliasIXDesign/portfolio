import { useState, useEffect } from "react";
import LanguageToggle from "./LanguageToggle.jsx";
import {
  useFloating,
  useClick, // Added this import
  useDismiss,
  useRole,
  useInteractions,
  offset,
  flip,
  shift,
  autoUpdate
} from '@floating-ui/react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const { refs, floatingStyles, context } = useFloating({
    open: isDialogOpen,
    onOpenChange: setIsDialogOpen,
    middleware: [offset(10), flip(), shift()],
    placement: 'top',
    whileElementsMounted: autoUpdate,
  });

  // Added useClick hook here
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: true,
    escapeKey: true,
    outsidePressEvent: 'mousedown',
  });
  const role = useRole(context, { role: 'dialog' });

  // Added click to interactions
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  useEffect(() => {
    const handleScroll = () => setIsDialogOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="navbar fixed top-0 w-full z-40 bg-[rgba(10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl text-white">
            mail@<span className="text-[#C7D989]">eliasixd</span>.com
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden ml-6 md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>

            <button
              ref={refs.setReference}
              {...getReferenceProps()}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none"
            >
              Download CV
            </button>

            <LanguageToggle className="ml-4" />
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="bg-[#F2E7D3] text-black px-4 py-3 rounded-lg shadow-lg z-50 max-w-xs"
          {...getFloatingProps()}
        >
          <p className="text-sm">I'm currently looking for Product Manager and UX Researcher opportunities in both Poland and Germany.</p>
          <p className="text-sm">I'm willing to relocate and excited to be part of a global, fast moving team.</p>
          <a
            href="/CVeliasCHRISTIANSEN.pdf"
            download="Elias-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-400 hover:underline text-sm"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
