import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Web 2.0 Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Saylani Mass IT Training Program"
            subTitle="Module-III (Present)"
            result="Advanced JS & ReactJs "
            des="I am learning ReactJs with Advanced JavaScript and will also going to learn ReactNative and NextJs15.In this quarter i have also learned Redux tool and React icons"
          />
          <ResumeCard
            title="Saylani Mass IT Training Program" 
            subTitle="Module-II (4 Months)"
            result="JavaScript & Tailwindcss"
            des="I have learned JavaScript in this module and library TailwindCss .In this quarter i have also learned about Git and its commands , Typescrpt and Firebase basics."
          />
          <ResumeCard
            title="Saylani Mass IT Training Program"
            subTitle="Module-I (2 Months)"
            result="Html & Css"
            des="I have learned Html5 & CSS3 Technologies with its libraries like Bootsrap.In this quarter i also learned about Netlify hoisting , Git or Github basics and Fonts Libraries."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Web 3.0 Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Governor Sindh IT Initiative Program"
            subTitle="Quarter-II (Present)"
            result="Nodejs & NextJs 13"
            des="I am learning NodeJs and NextJs13 in this quarter & to step in this modern AI World i will learn Blockchain and Metaverse theory."
          />
          <ResumeCard
            title="Governor Sindh IT Initiative Program"
            subTitle="Quarter-I (4 Months)"
            result="TypeScript"
            des="I have learned TypeScript in this module and its uses and made 45 Asssignments of TypeScripts given by the Institute."
          />
          <ResumeCard
            title="Saylani IT Program "
            subTitle="Crash Course (1 Month)"
            result="JS Advanced"
            des="I completed online crash course of Js advanced from SMIT in which i learn advancement of javascript & gained some tips to code effeciently."
          />
        
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
