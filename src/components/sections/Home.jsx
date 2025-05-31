import "../../css/Home.css";
import {RevealOnScroll} from "../RevealOnScroll.jsx";
import ButtonDrop from "../../assets/buttonDrop.svg?react";

export const Home = () => {

    console.log('ButtonDrop:', ButtonDrop);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#A1BF36] to-[#FAED7D] bg-clip-text text-transparent leading-tight">
                        Hej, I'm Elias!
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a UX engineer who believes great products start with understanding people.
                        Through rigorous user research and human-centered design, I create digital solutions that
                        don't just look good, they solve real problems and enhance how professionals accomplish their
                        most important work.
                    </p>
                    <div className="flex justify-center px-4 mt-6 md:mt-20">
                        <a href="#projects"
                           className="relative inline-flex items-center justify-center transition
                                      hover:-translate-y-0.5 group">
                            <ButtonDrop className="w-22 h-auto svg-hover-shadow"/>
                            <span
                                className="absolute inset-0 flex items-center justify-center text-[#FAED7D] font-bold z-10 -translate-y-2">
                                Projects
                            </span>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}