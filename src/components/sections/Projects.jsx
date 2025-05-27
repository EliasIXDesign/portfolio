export const Projects = () => {
    return(
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md_grid-cols-2 gap-6">
                    {/*First Project*/}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition " >
                        <h3>Cloud Platform</h3>
                        <p>
                            Short Title of the projects
                        </p>
                        <div>
                            {["React", "Node.js", "UX"].map((skill, key) => (
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
        </section>
    )
}