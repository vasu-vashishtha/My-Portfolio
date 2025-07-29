import html from "../../assets/stack/HTML.png"
import css from "../../assets/stack/CSS.png"
import js from "../../assets/stack/Javascript.svg"
import bootstrap from "../../assets/stack/Bootstrap.svg"
import react from "../../assets/stack/React.png"
import node from "../../assets/stack/NodeJs.svg"
import express from "../../assets/stack/Express.png"
import mongo from "../../assets/stack/MongoDB.svg"
import git from "../../assets/stack/Git.svg"
import github from "../../assets/stack/Github.svg"
import materialui from "../../assets/stack/MaterialUI.svg"
import next from "../../assets/stack/Next.svg"
import redux from "../../assets/stack/Redux.svg"
import saas from "../../assets/stack/Saas.svg"
import tailwind from "../../assets/stack/Tailwind.png"
import vercel from "../../assets/stack/Vercel.svg"
import typescript from "../../assets/stack/Typescript.svg"
import bash from "../../assets/stack/Bash.svg"



const SkillRing = () => {
  const outerSkills = [html, css, js, bootstrap, git, github, materialui, tailwind, bash];
  const innerSkills = [react, node, express, mongo, next, redux, saas, vercel, typescript];

  return (
    <div className="mt-12 flex justify-center">
      <div className="skill-circle-container">
        {/* Outer Dashed Ring */}
        <div className="skill-ring" />

        {/* Outer rotating icons */}
        <div className="rotating-ring">
          {outerSkills.map((icon, i) => {
            const angle = (360 / outerSkills.length) * i;
            return (
              <div
                key={`outer-${i}`}
                className="skill-icon"
                style={{
                  transform: `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg) translate(-50%, -50%)`,
                }}
              >
                <img src={icon} alt="skill" />
              </div>
            );
          })}
        </div>

        {/* Inner Dashed Ring */}
        <div className="skill-ring-inner" />

        {/* Inner rotating icons */}
        <div className="rotating-ring-inner">
          {innerSkills.map((icon, i) => {
            const angle = (360 / innerSkills.length) * i;
            return (
              <div
                key={`inner-${i}`}
                className="skill-icon"
                style={{
                  transform: `rotate(${angle}deg) translateX(90px) rotate(-${angle}deg) translate(-50%, -50%)`,
                }}
              >
                <img src={icon} alt="skill" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default SkillRing;
