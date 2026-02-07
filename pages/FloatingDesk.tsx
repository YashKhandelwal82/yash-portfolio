"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
 
  IconHome,
  IconCode,
 
  IconBrandLinkedin
} from "@tabler/icons-react";
 
export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/yash-khandelwal-26a5012a9",
    },
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/Yash_8273/",
    },
 
   
    {
      title: "GeeksforGeeks",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.geeksforgeeks.org/profile/yashkhandellj7",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/YashKhandelwal82",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around p-4 ">
    <FloatingDock
      mobileClassName="translate-y-0" // Keeps it in position without offset
      items={links}
    />
  </div>
  );
}
 
export default FloatingDockDemo;