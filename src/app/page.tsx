import React from "react";
import Image from "next/image";
import emoji from "../../public/images/emoji-sticker.png";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="flex min-h-screen mt-10">
    <div className="flex flex-col px-3 lg:flex-row shadow-md text-stone-700 font-light">
        <div className="container bg-clip-content shadow-md">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex flex-col lg:w-2/3">
              <div className="pb-2">
                  <h3 className="text-4xl lg:text-5xl space-y-4">
                  <span className="text-xl pl-4">Hi, I'm Zach<br /></span>
                    <div className="flex justify-center">
                      <span className="text-purple-600 font-bold">Full Stack</span> {" "}
                      <span className="pb-0 pl-1">Developer<br/></span>
                    </div>
                  </h3>
                  <small className="flex justify-end pr-5 text-sm">*in the making</small>
                </div>
                <h4 className="mt-2 text-lg w-4/5 pl-5">
                  Utilizing a blend of technical skills, a growth mindset, and a
                  dedication to continuous learning!
                </h4>
              </div>
              <div className="mt-4 pl-5">
                <Link legacyBehavior href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing" >
                  <a className="px-4 py-2 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200">
                    View My Resume
                  </a>
                </Link>
              </div>
              <div className="mt-4 pl-5">
                <Link href="/about" className="px-4 py-2 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200">
                    About Me
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="relative w-full h-full">
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
};


