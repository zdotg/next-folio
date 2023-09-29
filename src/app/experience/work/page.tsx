export default function WorkExperience() {
  return (
    <div className="flex items-start min-h-screen w-full dark:bg-slate-800 bg-white">
      <div className="container shadow-md mx-auto mt-10 py-10">
      <table className="border border-style-one  mx-auto mt-10 py-0 content-start justify-start w-80 md:w-9/12   ">
      <thead>
        <tr>
          <th className="border border-none">
            <h4 className="text-start font-normal pl-3 py-5 underline underline-offset-4">
              <span className="text-gradient border-style-one ">Job</span>{" "}
              Experience
            </h4>
          </th>
          <th className="border-none font-light text-start pl-3 py-5 underline underline-offset-4">Tenure</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white">
        <tr>
          <td className="border px-3 pb-3">
            Crocodile Wine - Wine Sales Specialist
          </td>
          <td className="border px-3 pb-3">2021-present</td>
        </tr>
        <tr>
          <td className="border px-3 pb-3">
            Windsor Boutique Hotel - Hotel Concierge
          </td>
          <td className="border px-3 pb-3">2020-present</td>
        </tr>
        <tr>
          <td className="border px-3 pb-3">Wine Sales Specialist</td>
          <td className="border px-3 pb-3">2018-present</td>
        </tr>
        <tr>
          <td className="border px-3 pb-3">
            Bottle Riot - Bartender
          </td>
          <td className="border px-3 pb-3">2017-2019</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  );
};

