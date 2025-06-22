import './App.css'
import "./index.css";
import "./i18n.js"
import Footer from './components/Footer.jsx';
import {useState} from "react";
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { Navbar } from './components/Navbar.jsx';
import {MobileMenu} from "./components/MobileMenu.jsx";
import {Home} from "./components/sections/Home.jsx";
import {About} from "./components/sections/About.jsx";
import {Toolkit} from "./components/sections/Toolkit.jsx";
import {Contact} from "./components/sections/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import LanguageToggle from "./components/LanguageToggle.jsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        {/*START LOADING ANIMATION*/}
        {!isLoaded && (
            <div className="hidden lg:block">
            <LoadingScreen onComplete={() => setIsLoaded(true)}/>
            </div>
        )}

        <div className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-100 lg:opacity-0'
            } bg-[#F2E7D3] text-black`}
        >
        {/*END LOADING ANIMATION*/}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <CustomCursor/>
        <Home />
        <About />
        <Toolkit />
        <Contact />
        <Footer />
        </div>
    </>
  );
}

export default App
