import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Projects = () => {
    return(
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#A1BF36] to-[#FAED7D] bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="nocursor grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/*First Project*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#FAED7D]
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <p className="text-gray-400 mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "UX"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-[#FAED7D] hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                        {/*Second Project*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#FAED7D]
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <p className="text-gray-400 mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "UX"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-[#FAED7D] hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                        {/*Third Project*/}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#FAED7D]
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <p className="text-gray-400 mb-4">
                                Short Title of the projects that goes into detail about how much
                                exciting stuff that was in there and what tech I used to do it YES another change.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "UX"].map((skill, key) => (
                                    <span key={key}
                                          className="bg-blue-500/10 text-[#FAED7D] py-1 px-3 rounded-full text-sm
                                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="nocursor flex justify-between items-center">
                                <a href="#" className="text-[#FAED7D] hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}