import { useEffect } from "react";
import Header from "./componant/1-header/Header";
import Hero from "./componant/2-hero/Hero";
import Main from "./componant/3-main/Main";
import Contact from "./componant/4-contact/Contact.jsx";
import Footer from "./componant/5-footer/Footer";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);
  const [showScroll, setShowScroll] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

        <a style={{
          opacity:showScroll?1:0,
          transition:'1s'
        }} href="#up">
          <button className="scroll2Top">
            <MdOutlineKeyboardDoubleArrowUp />
          </button>
        </a>
    </div>
  );
}

export default App;
