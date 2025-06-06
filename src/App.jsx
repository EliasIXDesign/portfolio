import './App.css'
import "./index.css";
import {useState} from "react";
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { Navbar } from './components/Navbar.jsx';
import {MobileMenu} from "./components/MobileMenu.jsx";
import {Home} from "./components/sections/Home.jsx";
import {About} from "./components/sections/About.jsx";
import {Projects} from "./components/sections/Projects.jsx";
import {Contact} from "./components/sections/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        {!isLoaded && (
            <div className="hidden lg:block">
            <LoadingScreen onComplete={() => setIsLoaded(true)}/>
            </div>
        )}

        <div className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-100 lg:opacity-0'
            } bg-[#080808] text-gray-100`}
        >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <CustomCursor/>
        <Home />
        <About />
        <Projects />
        <Contact />
        </div>
    </>
  );
}

export default App
