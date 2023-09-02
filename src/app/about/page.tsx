


import Image from "next/image";
import AboutMemoji from "../../../public/images/AboutMemoji.png"

export default function About() {
 

  return (
    <div
      className="bg-white flex-grow overscroll-contain text-stone-700 p-5 dark:bg-slate-800 dark:text-slate-100"
      id="About"
    >
      <div className="container mx-auto shadow-md ">
        <div className="flex flex-col lg:flex-row items-center mx-auto max-w-7xl">
          <div className="w-full md:w-1/2 ">
            <Image
              src={AboutMemoji}
              alt="My memoji"
              className="rounded-l-full"
              height={350}
              width={350}
              quality={100}
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="pb-2">
              <h2 className="text-2xl font-light dark:text-slate-100">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="overflow-auto object-fill">
                I am a passionate and driven individual who discovered my love
                for web development during the height of the pandemic. 
                With a blend of technical skills, a growth
                mindset, and a dedication to continuous learning, I am
                excited to contribute my knowledge and collaborate with
                like-minded professionals in a challenging and rewarding
                software engineering role. I am actively seeking
                opportunities where I can leverage my skills, adaptability,
                and enthusiasm to create innovative solutions and make a
                positive impact. I am open to new opportunities and would
                love to connect with companies that value creativity,
                collaboration, and a strong commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
  );
};

