import {RevealOnScroll} from "../RevealOnScroll.jsx";
import { useTranslation } from 'react-i18next';

export const About = () => {
    const productSkills = [
        "Project Managment",
        "Market Research",
        "Scrum",
        "Product Metrics",
        "Jira/Confluence",
        "Miro",
        "PowerBi",
    ];

    const uxResearchSkills = [
      "Qual Studies",
      "Quant Studies",
      "Remote Research",
      "A/B Testing",
      "Usability Testing",
      "Workshops",
      "Google Analytics",
    ];

    const { t } = useTranslation();

    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-[#563B21] text-center">
                        {t('aboutme')}
                    </h2>

                    <div className="nocursor rounded-xl p-8 border-[#563B21] border hover:translate-y-1 transition-all">
                        <p className="text-black mb-6">
                            {t('p1aboutme')}
                        </p>

                        <p className="text-black mb-6">
                            {t('p2aboutme')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-[#563B21]">Product Specialist</h3>
                                <div className="flex flex-wrap gap-2">
                                    {productSkills.map((skill, key) => (
                                        <span key={key}
                                              className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-sm
                                                    hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-[#563B21]">UX Research</h3>
                                <div className="flex flex-wrap gap-2">
                                    {uxResearchSkills.map((skill, key) => (
                                        <span key={key}
                                              className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-sm
                                                    hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nocursor grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-[#563B21] border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#563B21]">{t('education')}</h3>
                            <ul className="list-disc list-inside text-[#563B21] space-y-2">
                                <li> {/*Education 1*/}
                                    <span className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-base
                                          hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        Master's in Interaction Design
                                    </span>
                                    <br/>
                                    <i className="text-black">AAU University (2022-2025)</i>
                                    <br />
                                    <span className="mt-2 block text-black">
                                        {t('maixd')}
                                    </span>
                                </li>

                                <li> {/*Education 2*/}
                                    <span className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-base
                                          hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        Bachelor's in Interaction Design
                                    </span>
                                    <br/>
                                    <i className="text-black">AAU University (2019-2022)</i>
                                    <br />
                                    <span className="mt-2 block text-black">
                                        {t('baixd')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-[#563B21] border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#563B21]">{t('workexperience')}</h3>
                            <ul className="list-disc list-inside text-[#563B21] space-y-2">

                                <li> {/*Work Experience 1,2...*/}
                                    <span className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-base
                                          hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        UX Researcher Student Worker
                                    </span> <br/>
                                    <i className="text-black">the LEGO Group (2023-2025)</i>
                                    <br/>
                                    <span className="mt-2 block text-black">
                                        {t('swlego')}
                                    </span>
                                </li>
                                <li>
                                    <span className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-base
                                          hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        User Research Internship
                                    </span> <br/>
                                    <i className="text-black">the LEGO Group (2022-2023)</i>
                                    <br/>
                                    <span className="mt-2 block text-black">
                                        {t('intlego')}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    );
}