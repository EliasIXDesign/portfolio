export const About = () => {
    const frontendSkills = [
        "React",
        "Javascript",
        "TailwindCss",
        "Figma",
    ];

    const uxResearchSkills = [
      "Remote Research",
      "Workshops",
      "Design Studio",
      "Survey Design",
    ];

    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to to-cyan-400 bg-clip-text text-transparent text-center">
                    About me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate web developer and UX Researcher that puts user-centered design at the forefront
                        of every projects. With a strong background in data analytics, I'll ensure that our team
                        builds services of the future based on insights from real people.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, key) => (
                                    <span key={key}
                                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">UX Research</h3>
                            <div className="flex flex-wrap gap-2">
                                {uxResearchSkills.map((skill, key) => (
                                    <span key={key}
                                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
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
                                <strong>M.SC in Interaction Design</strong> - AAU University (2019-2022)
                            </li>
                            <li> {/*Education 2*/}
                                <strong>M.SC in Interaction Design</strong> - AAU University (2019-2022)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">

                            <div> {/*Work Experience 1,2...*/}
                                <h4 className="font-semibold">Job Title at Corp (2021-2022)</h4>
                                <p>
                                    Developed something that was really cool and def not to be a corporate
                                    slave that only cared about getting out of there as fast as possible
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Job Title at Corp (2021-2022)</h4>
                                <p>
                                    Developed something that was really cool and def not to be a corporate
                                    slave that only cared about getting out of there as fast as possible
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}