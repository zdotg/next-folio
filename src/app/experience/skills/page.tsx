import Link from "next/link";
import React from "react";

export default function Skills() {
  return (
    <div
      className="flex min-h-screen py-8 justify-center"
      id="Skills"
    >
      <div className="max-w-3/4">
        <h2 className="text-center text-2xl text-gradient font-semibold py-2 ">
          Skills
        </h2>
        <div className="row text-center my-auto py-5 flex justify-center">
          <div className="col-lg-12 center">
           
            <button
              className="mt-4 px-4 py-2 bg-gradient-to-r from-violet-400 to-indigo-300 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200"
              role="button"
            >
               <Link href="https://github.com/zdotg">My GitHub</Link>
              
            </button>
          </div>
        </div>
        <div className="row  py-5 px-2 text-center border bg-violet-100 text-slate-500 dark:text-slate-700 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-3 leading-relaxed capitalize hover:scale-125 ">
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>Tailwind CSS </li>
              <li>JavaScript</li>
              <li>SCSS</li>
              <li>Data Structures</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>
          <div className="mb-3 leading-relaxed capitalize hover:scale-125">
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Wire-framing</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Passion to Learn</li>
              <li>Responsive Web Design</li>
              <li>Cross-Platform Design</li>
              <li>Mobile-First Design Principles</li>
              <li>Planning/Coordination with teams</li>
            </ul>
          </div>
          <div className="mb-3 leading-relaxed capitalize hover:scale-125">
            <ul>
              <li>React Native</li>
              <li>Redux/Context</li>
              <li>Dependencies</li>
              <li>Version Control</li>
              <li>MongoDB/Atlas</li>
              <li>Flask/Insomnia</li>
              <li>CI/CD Pipelines</li>
              <li>NoSQL Databases</li>
              <li>Docker and Kubernetes</li>
              <li>Cloud Deployments (AWS, GCS, Azure)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


