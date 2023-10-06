import React from "react";
import Image from "next/image";
import emoji from "../../public/images/emoji-sticker.png";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex min-h-screen mt-10 justify-center">
      <div className="flex flex-col px-3 shadow-md text-slate-500 dark:text-slate-100 font-light lg:flex-row lg:items-center lg:space-x-10">
        <div className="container bg-clip-content shadow-md flex flex-col justify-center">
          <div className="pb-2">
            <h3 className="text-4xl lg:text-5xl space-y-4">
              <span className="text-xl pl-4">Hi, I'm Zach<br /></span>
              <div className="flex justify-center bg-violet-100 dark:bg-violet-300 rounded-full py-3">
                <span className="text-gradient font-semibold">Full Stack</span>{" "}
                <span className="pb-0 pl-1 ">Developer<br/></span>
              </div>
            </h3>
            <small className="flex justify-end pr-5 text-sm">*in the making</small>
          </div>
          <h4 className="mt-2 text-lg w-4/5 pl-5">
            Utilizing a blend of technical skills, a growth mindset, and a dedication to continuous learning!
          </h4>
          <div className="mt-4 pl-5">
            <Link legacyBehavior href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing">
              <a className="px-4 py-2 inline-block shadow-md bg-gradient-to-r from-violet-400 to-indigo-300 text-slate-100 rounded-md font-medium hover:scale-105 transition-transform duration-200">
                View My Resume
              </a>
            </Link>
          </div>
          <div className="mt-4 pl-5 mb-10 lg:mb-0">
            <Link legacyBehavior href="/about">
              <a className="px-4 py-2 shadow-md inline-block bg-gradient-to-r from-violet-400 to-indigo-300 text-slate-100 rounded-md font-medium hover:scale-105 transition-transform duration-200">
                About Me
              </a>
            </Link>
          </div>
          <div className="flex lg:justify-center" >
            <div className=" w-1/2 h-1/2">
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
    </div>
  );
}


