import { useEffect, useState } from "react";
import "./Header.css";
import { AiFillSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";

function Header() {
  // theme code
  const [Theme, setTheme] = useState(localStorage.getItem("currentMode"));
  useEffect(() => {
    if (Theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [Theme]);

  // modal code
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <header className="flex">
        <button onClick={ShowModal} className="menu">
          <span
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: " translateY(-4px)",
            }}
          >
            <IoMenu />
          </span>
        </button>
        <div />
        <nav>
          <ul className="flex">
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              Theme === "dark" ? "light" : "dark"
            );
            setTheme(localStorage.getItem("currentMode"));
          }}
          className="mode"
        >
          {Theme === 'dark' ? (
            <span className="dark">
              <FaRegMoon />
            </span>
          ) : (
            <span className="light">
              <AiFillSun />
            </span>
          )}
        </button>

        {/* pop up code */}
        {showModal && (
          <div className="fixed">
            <ul className="modal">
              <li>
                <button className="Cmodal" onClick={ShowModal}>
                  <FiX />
                </button>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Speaking</a>
              </li>
              <li>
                <a href="#">Uses</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
