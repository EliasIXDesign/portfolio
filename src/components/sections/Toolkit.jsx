import React from "react";
import "../../css/Toolkit.css";
import Card1 from "../../../src/assets/Card1.svg";
import Card2 from "../../../src/assets/Card2.svg";
import Card3 from "../../../src/assets/Card3.svg";
import Card4 from "../../../src/assets/Card4.svg";
import Card5 from "../../../src/assets/Card5.svg";
import { useRef, useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";



function shuffleArray(array) {
    const arr = [...array]; // create a shallow copy to avoid mutating original
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


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
        { svg: <img src={Card2} alt="Card 2" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card3} alt="Card 3" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card4} alt="Card 4" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
        { svg: <img src={Card5} alt="Card 5" className="w-full h-full object-contain" draggable="false" onDragStart={(e) => e.preventDefault()} /> },
    ];

    const [shuffleCards, setShuffleCards] = useState([]);

    useEffect(()=> {
        setShuffleCards(shuffleArray(cards));
    }, []);

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
                        {shuffleCards.map((card, idx) => (
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
