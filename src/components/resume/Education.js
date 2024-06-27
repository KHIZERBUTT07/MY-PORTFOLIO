import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Computer Science"
            subTitle="University  (2024 - Present)"
            result="3.90/4"
            des=""
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Gov.National College Karachi (2023 - 2024)"
            result="4.75/5"
            des="I completed my Intermediate in Computer Science.I made some assignments in college by using technologies like C & C++ and I learned Algorithms And basics of Data Structure"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="The Educators K-A-E-C-H-S (2020 - 2022)"
            result="A1 Grade"
            des="I completed my Matric in Computer Science with excellent marks.One of my greatest achivement was that i was serving my school as a Headboy."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Apps"
            subTitle="present"
            result="Great"
            des="I am currently learning ReactJs and i know react basics and i have made some E-commerce stores using React and some APIs.I am also making Assignments and Projects by using Redux tool"
          />
          <ResumeCard
            title="JavaScript Projects"
            subTitle="4months"
            result="Excellent"
            des=" When i was learning Javascript i have made some great JS Projects and Assignments which contains Weather App and Some Todos App and Landing Pages with Functionality."
          />
          <ResumeCard
            title="CSS Designs"
            subTitle="2months"
            result="Excellent"
            des="I have made some excellent Css designs when i was learning CSS3 and i converted Figma designs into code which contains forms , landing pages , Brouchers & Many more."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
