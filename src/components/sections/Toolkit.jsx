import React from "react";
import "../../css/Toolkit.css";
import Card1 from "../../../src/assets/Card1.svg";
import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Toolkit = () => {
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const DRAG_SENSITIVITY = 2; 

    const onMouseDown = (e) => {
        isDown.current = true;
        scrollRef.current.classList.add('cursor-grabbing');
        startX.current = e.pageX;  // Use absolute position
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX.current) * DRAG_SENSITIVITY; // Multiply by sensitivity
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
};


    const onMouseUp = () => {
        isDown.current = false; // <-- use isDown, not isDragging
        scrollRef.current.classList.remove('cursor-grabbing');
    };

    const onMouseLeave = () => {
        if (isDown.current) onMouseUp();
    };

    const cards = [
        { svg: <img src={Card1} alt="Card 1" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card1} alt="Card 1" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card1} alt="Card 1" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card1} alt="Card 1" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card1} alt="Card 1" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },

        
    ];

    return (
        <section id="toolkit" className="min-h-screen flex items-center justify-center py-20">
            <div className="nocursor max-w-3xl mx-auto px-4 rounded-xl overflow-hidden md:max-w-[1536px]">
                <RevealOnScroll>
                    <div
                        className="flex space-x-8 px-5 py-5 overflow-x-auto no-scrollbar select-none cursor-grab snap-x snap-mandatory scroll-smooth"
                        ref={scrollRef}
                        style={{ WebkitOverflowScrolling: "touch" }}
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                    >
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-[555px] h-[555px] bg-white rounded-lg shadow-lg p-0 snap-center flex items-center justify-center"
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    {card.svg}
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
