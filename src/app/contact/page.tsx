import React from "react";

export default function Contact()  {
  return (
    <div className="py-10  text-slate-700 dark:text-slate-300">
      <h2 className="text-center text-gradient text-2xl font-semibold pb-5" id="Contact">
        Contact Me
      </h2>
      <div className="mx-auto w-80 lg:w-1/2 p-6 bg-slate-200 dark:bg-slate-300 rounded-lg shadow-lg">
        <form action="https://formsubmit.co/zach.ecab@gmail.com" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-slate-700">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-slate-100 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="email"
              aria-describedby="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-slate-700">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-slate-100 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2  text-slate-700">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 bg-slate-100 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              id="message"
              name="message"
              placeholder="Message"
              style={{ minHeight: "10rem" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

