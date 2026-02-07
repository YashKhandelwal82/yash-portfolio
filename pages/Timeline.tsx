"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const experienceData = [
    {
      title: "Education",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">G L Bajaj Group of Institutions Mathura</span> - B.Tech in AI & Data Science
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            CGPA: <span className="font-bold">8.0</span> | 2023 - 2027
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Coursework:</span> Data Structures and Algorithms, Object-Oriented Design & Programming, Database Management Systems, Computer Networks, Machine Learning
          </p>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Kommercio</span> - Full-stack e-commerce platform with vendor dashboard, shopping cart, and secure PayPal checkout.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Monastery360</span> - Immersive digital tourism platform with 360° virtual monastery tours and AI-driven narration.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Sorting Algorithm Visualizer</span> - Interactive web-based tool demonstrating sorting algorithms in real-time.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
           <span className="font-bold">Simon Game</span> - Web-based interactive memory game developed using HTML, CSS, and JavaScript, implementing event handling, game logic, and dynamic UI updates.
          </p>
        </div>
      ),
    },
    {
      title: "Technical Skills",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Languages:</span> C++, JavaScript, Python, C, SQL, HTML, CSS
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Libraries/Frameworks:</span> Flask, Node.js, Express.js, Next.js, FastAPI, TailwindCSS
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Developer Tools:</span> Git, GitHub, Visual Studio
          </p>
        </div>
      ),
    },
  ];

  // Combined achievements and volunteer experience data
  const achievementsLeadershipData = [
    {
      title: "LeetCode",
      content: (
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Solved <span className="font-bold">550+ DSA problems</span> on LeetCode, demonstrating strong algorithmic thinking.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Secured a <span className="font-bold">Global Rank of 1594</span> in LeetCode Contests, reflecting strong problem-solving speed and algorithmic efficiency under time constraints.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Earned <span className="font-bold">LeetCode 100 Days Badge</span> in 2025 for consistent problem solving.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Earned <span className="font-bold">LeetCode 200 Days Badge</span> in 2025 for sustained dedication.
          </p>
        </div>
      ),
    },
    {
      title: "GeeksforGeeks",
      content: (
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Solved <span className="font-bold">100+ DSA problems</span> on GeeksforGeeks.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Continuously improving <span className="font-bold">problem-solving skills</span> and <span className="font-bold">algorithmic expertise</span>.
          </p>
        </div>
      ),
    },
    {
      title: "Soft Skills",
      content: (
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Leadership</span> - Demonstrated through project development and team collaboration.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Adaptability</span> - Quick learner with ability to work on diverse tech stacks.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Experience Timeline */}
      <Timeline 
        data={experienceData} 
        title="My Journey"
        description="AI & Data Science undergraduate at G L Bajaj Group of Institutions, Mathura, with strong expertise in MERN Stack development, full-stack web applications, and problem-solving using C++."
      />
      
      {/* Combined Achievements and Leadership Timeline */}
      <Timeline 
        data={achievementsLeadershipData}
        title="Achievements & Certifications"
        description="Technical accomplishments and continuous learning journey in competitive programming."
      />
    </div>
  );
}

export default TimelineDemo;