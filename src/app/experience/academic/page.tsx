export default function AcademicExperience() {
  return (
    <div className="flex items-start min-h-screen w-full dark:bg-slate-800">
      <div className="container shadow-md mx-auto mt-10 py-10">
      <table className="border border-style-one  mx-auto mt-10 py-0 content-start justify-start w-80 md:w-9/12 dark:bg-slate-800 bg-white">
      <thead>
        <tr >
          <th className="border border-none ">
            <h4 className="pl-3 py-5 underline underline-offset-4 text-start font-normal">
              <span className="text-gradient border-style-one">Academic</span>{" "}
              Qualifications
            </h4>
          </th>
          <th className="pr-5 underline underline-offset-4 text-start border border-none font-light">Graduated</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white pt-3">
        <tr>
          <td className="border px-3 pb-3">
            NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
          </td>
          <td className="border px-2">May 2023</td>
        </tr>
        <tr>
          <td className="border px-3 pt-3 pb-3 ">
            B.S. from The University of Montevallo
          </td>
          <td className="border px-3 ">May 2013</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
   
  );
};
