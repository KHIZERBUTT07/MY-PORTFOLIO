import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJs , FaCss3} from "react-icons/fa";
import { SiTailwindcss,/* SiFigma ,*/  /*SiNextdotjs*/  } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["a MERN Stack Developer To Be.", "a Front-End Developer.", "an E-commerce Expert."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Khizer Butt</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am Passionate front-end develper skilled in creating resonsive and user-friendly websites using modern technologies like Html5,Css3,TailwindCss,javaScript and React basics.Experienced in converting design concepts into interactive web experiences.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
          <a target='blank' href="https://www.facebook.com/khizer.butt.161214?mibextid=kFxxJD"><FaFacebookF /></a> 
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
            <a target='blank' href="https://www.linkedin.com/in/khizer-butt-637a3a241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner