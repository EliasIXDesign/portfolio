import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from 'emailjs-com'
import {useState} from "react";
import { useTranslation } from 'react-i18next';

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
            </RevealOnScroll>
        </section>
    )
}