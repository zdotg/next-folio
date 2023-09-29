export default function AcademicExperience() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full dark:bg-slate-800">
       <table className="border border-none mx-auto  dark:bg-slate-800 bg-white">
      <thead>
        <tr>
          <th className="border border-none px-3">
            <h4 className="text-center font-normal">
              <span className="text-gradient border-style-one">Academic</span>{" "}
              Qualifications
            </h4>
          </th>
          <th className="border border-none px-3 font-light">Graduated</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white pt-3">
        <tr>
          <td className="border border-none px-3">
            NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
          </td>
          <td className="border border-none px-3">May 2023</td>
        </tr>
        <tr>
          <td className="border border-none px-3 ">
            B.S. from The University of Montevallo
          </td>
          <td className="border border-none px-3 ">May 2013</td>
        </tr>
      </tbody>
    </table>
    </div>
   
  );
};
