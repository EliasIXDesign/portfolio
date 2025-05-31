import React, {useState} from 'react';
import useMousePosition from "../hooks/useMousePosition.js";
import '../css/CustomCursor.css';

const CustomCursor = () => {
    //get current mouse position from hook
    const {x, y} = useMousePosition();
    const [isOverNavbar, setIsOverNavbar] = useState(false);

    React.useEffect(() => {
        const handleMouseOver = (e) => {
            const navbar = e.target.closest('.navbar, .nocursor');
            setIsOverNavbar(!!navbar);
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    React.useEffect(() => {
        if (isOverNavbar) {
            document.body.style.cursor = 'default';
        } else {
            document.body.style.cursor = 'none';
        }
    }, [isOverNavbar]);

    if (isOverNavbar) return null; //Don't render cursor over navbar

    return (
        <div className="custom-cursor"
             style={{
                 left: `${x}px`,
                 top: `${y}px`,
             }}>
        </div>
    )
}

export default CustomCursor;

