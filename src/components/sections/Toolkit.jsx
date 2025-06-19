import "../../css/Toolkit.css";
import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Toolkit = () => {
    const DRAG_SENSITIVITY = 10; 
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    

    const onMouseDown = (e) => {
        isDown.current = true;
        scrollRef.current.classList.add('cursor-grabbing');
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onMouseLeave = () => {
        isDown.current = false;
        scrollRef.current.classList.remove('cursor-grabbing');
    };

    const onMouseUp = () => {
        isDown.current = false;
        scrollRef.current.classList.remove('cursor-grabbing');
    };

    const onMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * DRAG_SENSITIVITY;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const cards = [
        {
        title: "Card Title 1",
        image: "https://placehold.co/1080x1080",
        paragraphs: [
            "This is the first paragraph for card 1",
            "This is the second paragraph for card 1"
        ]
        },
        {
        title: "Card Title 2",
        image: "https://placehold.co/1080x1080",
        paragraphs: [
            "This is the first paragraph for card 2",
            "This is the second paragraph for card 2"
        ]
        },
        // Add more cards here
    ];

  return (
    <section id="toolkit" className="w-full overflow-x-auto">
      <RevealOnScroll>
        <div
          className="flex space-x-8 px-5 overflow-x-auto no-scrollbar select-none cursor-grab snap-x snap-mandatory scroll-smooth"
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
              className="flex-shrink-0 w-[80vw] h-[80vh] bg-white rounded-lg shadow-lg p-6 mx-5 snap-center"
            >
              <div className="flex flex-row items-start gap-6 h-full">
                <div className="flex-1 flex flex-col justify-start">
                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                  <div>
                    {card.paragraphs.map((text, i) => (
                      <p key={i} className="mb-2 text-gray-700">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="w-[40rem] h-[40rem] min-w-[20rem] min-h-[20rem] flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full rounded aspect-square"
                    width={1080}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
