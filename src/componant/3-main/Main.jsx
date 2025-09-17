import React, { useState } from "react";
import "./main.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { myProjets } from "./my projects";
import { AnimatePresence, motion } from "motion/react";

function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjets);

  const btnClick = (btnCat) => {
    setCurrentActive(btnCat);
    const newArray = myProjets.filter((item) => {
      const f = item.category.find((fitem) => {
        return fitem === btnCat;
      });
      return f === btnCat;
    });
    setarr(newArray);
  };

  return (
    <main className="flex" id="Projects">
      {/* left sec */}
      <section className="left flex ">
        {/* all btn */}
        <button
          onClick={() => {
            setCurrentActive("all");
            setarr(myProjets);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All projects
        </button>
        {/* html btn */}
        <button
          onClick={() => {
            btnClick("html&css");
          }}
          className={currentActive === "html&css" ? "active" : null}
        >
          HTML & CSS
        </button>
        {/* bootstrap btn */}
        <button
          onClick={() => {
            btnClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          bootstrab
        </button>
        {/* javascript btn */}
        <button
          onClick={() => {
            btnClick("javascript");
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          javaScript
        </button>
        {/* react btn */}
        <button
          onClick={() => {
            btnClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>
      {/* right sec */}
      <section className="right">
        <AnimatePresence>

        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{transform: 'scale: 0 '}}
              animate={{transform: 'scale: 1 '}}
              key={item.imgPath}
              className="card"
            >
              <img src={item.imgPath} alt="" />
              <div className="box">
                <div>
                  <h2>{item.projectTitle}</h2>
                </div>
                <div>
                  <p>{item.projectSubTiltle}</p>
                </div>
                <div className="links flex">
                  <div className="flex">
                    <a target="blank" href={item.Plink}>
                      <FaLink />
                    </a>
                    <a target="blank" href={item.gitLink}>
                      <FaGithub />
                    </a>
                  </div>
                  <div className="more flex">
                    <a href="#">
                      more
                      <FaArrowRight style={{ alignSelf: "end" }}></FaArrowRight>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
