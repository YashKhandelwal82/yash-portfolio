 "use client";

import { FlipWords } from "@/components/ui/flip-words";

export function About() {
  const words = [" AI & Data Science Student",  "MERN Stack & Full-Stack Developer", "C++ Developer", " Machine Learning Enthusiast", "Tech Enthusiast"];

  return (
    <div className="flex justify-center items-center bg-[#0A0A0A] px-6 mt-[-8rem]">
      
      <div className="text-center text-4xl font-semibold text-gray-300 dark:text-neutral-100 leading-relaxed">
        <br />
        <span className="text-indigo-500">
          <FlipWords words={words} />
        </span>
      </div>
    </div>
  );
}

export default About;
