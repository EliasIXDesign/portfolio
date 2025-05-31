import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const About = () => {
    const frontendSkills = [
        "Figma",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "SharePoint",
        "PowerBi",
    ];

    const uxResearchSkills = [
      "Qual Studies",
      "Quant Studies",
      "Usability Testing",
      "A/B Testing",
      "Workshops",
      "Remote Research",
    ];

    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#A1BF36] to-[#FAED7D] bg-clip-text text-transparent text-center">
                        About me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I design digital experiences that solve real problems for users and businesses
                        </p>

                        <p className="text-gray-300 mb-6">
                            As an Interaction Designer, I bridge user expectations with digital solutions through
                            systematic problem-solving. I identify design challenges, investigate root causes, and
                            implement strategic fixes that improve user satisfaction and drive business results.
                        </p>

                        <p className="text-gray-300 mb-6">
                            Fluent in English, German, and Danish, I excel in cross-cultural collaboration and thrive in
                            diverse team environments where different perspectives create better outcomes.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">UX Research</h3>
                                <div className="flex flex-wrap gap-2">
                                    {uxResearchSkills.map((skill, key) => (
                                        <span key={key}
                                              className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend Dev</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill, key) => (
                                        <span key={key}
                                              className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li> {/*Education 1*/}
                                    <span className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        Master's in Interaction Design
                                    </span>
                                    <br/>
                                    <i>AAU University (2022-2025)</i>
                                    <br />
                                    <span className="mt-2 block">
                                        With a thesis on applying morphological analysis as the basis of design
                                        exploration for hybrid physical-digital designs.
                                    </span>
                                </li>

                                <li> {/*Education 2*/}
                                    <span className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        Bachelor's in Interaction Design
                                    </span>
                                    <br/>
                                    <i>AAU University (2019-2022)</i>
                                    <br />
                                    <span className="mt-2 block">
                                        Writing my thesis on enhancing civic engagement through interactive technology,
                                        using a custom-built digital installation.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">

                                <li> {/*Work Experience 1,2...*/}
                                    <span className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        UX Researcher at the LEGO Group
                                    </span> <br/>
                                    <i>Billund (2023-2025)</i>
                                    <br/>
                                    <span className="mt-2 block">
                                        Conducted diverse end-to-end remote research projects to support the development
                                        of marketing and campaign materials across the organization.
                                    </span>
                                </li>
                                <li>
                                    <span className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        UX Internship at the LEGO Group
                                    </span> <br/>
                                    <i>Billund (2022-2023)</i>
                                    <br/>
                                    <span className="mt-2 block">
                                        Facilitated workshops and remote research to present Consumer Insights and
                                        UX learnings to brand developers and play engineers.
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