/*Taken from PedroTech and customized*/
import {useEffect, useRef} from "react";

export const RevealOnScroll = ({children}) => {
  const ref = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  ref.current.classList.add("visible"); /*if element visible, add class "visible" to it*/
              }
          },
          { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } /*trigger when 20% is visible + -50px bottom*/
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect(); /*cleanup*/
  });

  return (
      <div ref={ref} className="reveal">
          {children}
      </div>
  );
};