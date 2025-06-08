import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    };

    return (
        <div className="relative flex items-center ml-8 select-none text-gray-300 font-semibold text-sm">
            <button
                onClick={() => toggleLanguage('en')}
                className="relative px-0 transition focus:outline-none"
                aria-label="Switch to English"
            >
                <span className="relative flex flex-col items-center">
                    EN
                    <span className={`
                    absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red-500 
                    transition-transform duration-300 
                    ${i18n.language === 'en' ? 'scale-x-100' : 'scale-x-0'} origin-left 
                    `}
                    >
                    </span>
                </span>
            </button>

            <span className="mx-2 text-gray-300">/</span>

            <button
                onClick={() => toggleLanguage('de')}
                className="relative px-0 transition focus:outline-none"
                aria-label="Switch to German"
            >
                <span className="relative flex flex-col items-center">
                    DE
                    <span className={`
                    absolute left-0 right-0 -bottom-0.5 h-0.5 bg-red-500 
                    transition-transform duration-300 
                    ${i18n.language === 'de' ? 'scale-x-100' : 'scale-x-0'} origin-left 
                    `}
                    >
                    </span>
                </span>
            </button>
        </div>
    );
}