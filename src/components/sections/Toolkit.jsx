import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Toolkit = () => {
    return(
        <section
            id="toolkit"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-[#563B21] text-center">
                        My Toolkit
                    </h2>
                    <div className="nocursor grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/*First Project*/}
                        <div className="p-6 rounded-xl border border-[#563B21] hover:-translate-y-1
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Remote and Interactive User Research Expertise
                            </h3>
                            <p className="mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Design Research", "Interviews", "Observation", "Web Development"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-sm
                                                    hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-black hover:text-blue-300 transition-colors my-4">
                                    View Details
                                </a>
                            </div>
                        </div>

                        {/*Second Project*/}
                        <div className="p-6 rounded-xl border border-[#563B21] hover:-translate-y-1
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                From Research Results to Design Decisions
                            </h3>
                            <p className="text-black mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["User Research", "Prototyping", "Python", "UX"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-sm
                                                    hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-black hover:text-blue-300 transition-colors my-4">
                                    View Details
                                </a>
                            </div>
                        </div>

                        {/*Third Project*/}
                        <div className="p-6 rounded-xl border border-[#563B21] hover:-translate-y-1
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Prototyping and Communication of Designs using Figma, Miro and More
                            </h3>
                            <p className="text-black mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it YES another change.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Remote User Research", "Design Research", "UX Research"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-sm
                                                    hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-black hover:text-blue-300 transition-colors my-4">
                                    View Details
                                </a>
                            </div>
                        </div>

                        {/*Fourth Project*/}
                        <div className="p-6 rounded-xl border border-[#563B21] hover:-translate-y-1
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Web Development to Implement and Further Test Products and Services
                            </h3>
                            <p className="text-black mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it YES another change.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Figma", "UX", "Heuristic Evaluation"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-[#563B211a] text-black py-1 px-3 rounded-full text-sm
                                                    hover:bg-[#FAED7D1a] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-black hover:text-blue-300 transition-colors my-4">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}