import React from "react";
import Image from "next/image";
import emoji from "../../public/images/emoji-sticker.png";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex justify-center min-h-screen mt-10 lg:mt-0">
      <div className="flex flex-col lg:flex-row px-3 justify-center  text-slate-500 dark:text-slate-100 font-light lg:space-x-10 bg-clip-content shadow-md">
        

          {/* Text Content */}
          <div className="flex flex-col justify-center lg:w-1/3 lg:items-start">
            <div className=" pb-2 ">
                <div className="text-4xl lg:text-5xl space-y-4">
                  <span className="text-xl pl-4 lg:pl-10">Hi, I&apos;m Zach<br /></span>
                  <div className="flex justify-center  bg-violet-100 dark:bg-violet-300 rounded-full py-3 lg:block">
                    <span className="text-gradient font-semibold lg:pl-10">Full Stack</span>{" "}
                    <span className="pb-0 pl-1 lg:pl-10">Developer<br /></span>
                    <small className="md:flex md:justify-end md:pr-10 text-sm hidden">*in the making</small>
                  </div>
                  <small className="flex justify-end pr-5 text-sm lg:hidden">*in the making</small>
                  
                  <div className="mt-2 text-lg w-4/5 pl-5 lg:pl-10">
                    Utilizing a blend of technical skills, a growth mindset, and a dedication to continuous learning!
                  </div>
                </div>
              </div>
              <div className="mt-4 pl-5 lg:pl-10 lg:w-1/2">
                <Link legacyBehavior href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing">
                  <a className="px-4 py-2 inline-block shadow-md focus:ring focus:ring-violet-300 bg-gradient-to-r from-violet-400 to-indigo-300 text-slate-100 rounded-md font-medium hover:scale-105 transition-transform duration-200">
                    View My Resume
                  </a>
                </Link>
              </div>
              <div className="mt-4 pl-5 lg:pl-10 mb-10 lg:mb-0 lg:w-1/2">
                <Link legacyBehavior href="/about">
                  <a className="px-4 py-2 shadow-md inline-block focus:ring focus:ring-violet-300 bg-gradient-to-r from-violet-400 to-indigo-300 text-slate-100 rounded-md font-medium hover:scale-105 transition-transform duration-200">
                    About Me
                  </a>
                </Link>
              </div>
          </div>

          {/* Image Content */}
            <div className="flex justify-center lg:justify-end lg:w-1/3 " >
              <div className="flex lg:flex-wrap lg:content-center">
                  <Image
                    src={emoji}
                    alt="My memoji"
                    className="rounded-full"
                    quality={100}
                    priority
                    width={400}
                    height={400}
                  />
              </div>
            </div>
        </div>
      </div>
    
  );
}


