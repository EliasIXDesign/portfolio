// noinspection JSCheckFunctionSignatures

import "../../css/Home.css";
import {RevealOnScroll} from "../RevealOnScroll.jsx";
import ButtonDrop from "../../assets/buttonDrop.svg?react";
import { useTranslation } from 'react-i18next';

export const Home = () => {

    console.log('ButtonDrop:', ButtonDrop);
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#563B21] leading-tight">
                        {t('hejgreeting')}
                    </h1>

                    <p className="nocursor text-black text-lg mb-8 max-w-lg mx-auto">
                        {t('introtext')}
                    </p>
                    <div className="flex justify-center px-4 mt-6 md:mt-20">
                        <a href="#toolkit"
                           className="nocursor relative inline-flex items-center justify-center transition
                                      hover:-translate-y-0.5 group">
                            <ButtonDrop className="w-25 h-auto svg-hover-shadow"/>
                            <span
                                className="absolute inset-0 flex items-center justify-center text-[#563B21] font-bold z-10 -translate-y-3">
                                My Toolkit
                            </span>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}