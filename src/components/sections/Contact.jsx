import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from 'emailjs-com'
import {useState} from "react";
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import CopyMailDialog from '../FloatingDialog'; // Import your dialog
import { useFloating, autoUpdate, offset, flip, shift, useDismiss, useInteractions } from '@floating-ui/react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY,)
            .then(() => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""});
        }).catch((error) => {
            console.log('EmailJS Error:', error);
            alert("Oops, something went wrong, please try again!");
        });
    }

    const { t } = useTranslation();

    /*Floating UI*/

    const [showEmailDialog, setShowEmailDialog] = useState(false);
    const [copyStatus, setCopyStatus] = useState('');
    const EMAIL = 'mail@eliasixd.com';

    const { refs, floatingStyles, context } = useFloating({
        open: showEmailDialog,
        onOpenChange: setShowEmailDialog,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    const dismiss = useDismiss(context);
    const { getFloatingProps } = useInteractions([dismiss]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopyStatus('Copied to clipboard!');
            setTimeout(() => setCopyStatus(''), 2000);
        } catch {
            setCopyStatus('Failed to copy!');
        }
        setShowEmailDialog(false);
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full sm:w-150 mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-[#563B21] text-center">
                        {t('getintouch')}
                    </h2>
                    <form className="nocursor space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className="w-full bg-[#563B21] border-white/10 border rounded px-4 py-3 text-white placeholder-white
                                        transition focus:outline-none focus:border-[#A1BF36]"
                            placeholder="Name..."
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-[#563B21] border border-white/10 rounded px-4 py-3 text-white placeholder-white
                                            transition focus:outline-none focus:border-[#A1BF36]"
                                placeholder="example@email.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                className="w-full bg-[#563B21] border border-white/10 rounded px-4 py-3 text-white placeholder-white
                                            transition focus:outline-none focus:border-[#A1BF36]"
                                placeholder={t('yourmessage')}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>

                        <button
                        type="submit"
                        className="w-full bg-[#e4d7c0] text-[#563B21] py-3 px-6 rounded font-medium transition
                        relative overflow-hidden hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                        >
                            {t('sendmessage')}
                        </button>
                    </form>
                </div>
                <div className="nocursor flex justify-center gap-4 mt-12">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/elias-martin-christiansen-ixd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e4d7c0] text-[#563B21] rounded-full w-16 h-16 flex items-center justify-center shadow-md hover:bg-[#A1BF36] transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/EliasIXDesign"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e4d7c0] text-[#563B21] rounded-full w-16 h-16 flex items-center justify-center shadow-md hover:bg-[#A1BF36] transition"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                    {/* Email */}
                    <div className="relative">
                        <button
                            ref={refs.setReference}
                            onClick={() => setShowEmailDialog(true)}
                            className="bg-[#e4d7c0] text-[#563B21] rounded-full w-16 h-16 flex items-center
                                        justify-center shadow-md hover:bg-[#A1BF36] transition"
                            aria-label="Email"
                        >
                            <FaEnvelope size={24} />
                        </button>

                        {/* Dialog appears here */}
                        {showEmailDialog && (
                            <CopyMailDialog
                                ref={refs.setFloating}
                                email={EMAIL}
                                onYes={handleCopy}
                                onNo={() => setShowEmailDialog(false)}
                                style={floatingStyles}
                                {...getFloatingProps({})}
                            />
                        )}

                        {/* Copy status feedback */}
                        {copyStatus && (
                            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center
                                            text-sm text-black whitespace-nowrap">
                                {copyStatus}
                            </div>
                        )}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}