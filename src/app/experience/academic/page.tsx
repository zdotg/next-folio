export default function AcademicExperience() {
  return (
    <div className="flex items-start min-h-screen w-full ">
      <div className="container shadow-md mx-auto mt-10 py-10 text-slate-500">
      <h2 className="text-center text-gradient text-2xl font-light pb-5">
        Academic Qualifications
      </h2>
      <table className="border-solid border-2 border-violet-500 bg-violet-100 mx-auto mt-10 py-0 content-start justify-start w-80 md:w-9/12">
      <thead>
        <tr >
          <th className="border border-none ">
            <h4 className="text-center text-xl font-light">
              Attended
            </h4>
          </th>
          <th className="text-center border-solid border-2 border-violet-500 text-xl font-light px-3">Graduated</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white pt-3 text-center font-light">
        <tr>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">
            NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
          </td>
          <td className="border-solid border-2 border-violet-500 px-2">May 2023</td>
        </tr>
        <tr>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3 ">
            B.S. from The University of Montevallo
          </td>
          <td className="border-solid border-2 border-violet-500 px-2 ">May 2013</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
   
  );
};
