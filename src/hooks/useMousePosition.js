import { useState, useEffect } from 'react';

const useMousePosition = () => {
    // Initialize state to track mouse coordinates
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Function that updates mouse position state
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX, // X coordinate relative to viewport
                y: event.clientY  // Y coordinate relative to viewport
            });
        };

        // Add event listener when component mounts
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function - removes event listener when component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return mousePosition;
};

export default useMousePosition;
