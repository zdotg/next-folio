export default function WorkExperience() {
  return (
    <div className="flex items-start min-h-screen w-full bg">
      <div className="container shadow-md mx-auto mt-5 py-5">
        <div className="text-2xl text-gradient font-semibold text-center">
          Experience
        </div>
      <table className="border-solid border-2 border-violet-500 mx-auto mt-10 py-0 content-start justify-start w-80 md:w-9/12  text-slate-500 dark:text-slate-700 bg-violet-100">
      <thead>
        <tr>
          <th className="border-solid border-2 border-violet-500 ">
            <h4 className="text-center text-xl font-light py-3">
              Job Experience
            </h4>
          </th>
          <th className="border-none text-xl font-light text-center py-3">Tenure</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white text-center font-light">
        <tr>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">
            Crocodile Wine - Wine Sales Specialist
          </td>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">2021-present</td>
        </tr>
        <tr>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">
            Windsor Boutique Hotel - Hotel Concierge
          </td>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">2020-present</td>
        </tr>
        <tr>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">Wine Sales Specialist</td>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">2018-present</td>
        </tr>
        <tr>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">
            Bottle Riot - Bartender
          </td>
          <td className="border-solid border-2 border-violet-500 px-3 pt-3 pb-3">2017-2019</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  );
};

