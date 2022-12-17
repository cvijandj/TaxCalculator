import React from "react";
import DropDownTab from "./DropDownTab";
import { useState, useEffect } from "react";



export default function Tab(props) {
  const [period, setPeriod] = useState('Weekly')
  const [atm, setAtm] = useState('0')
  const netWeek = Math.round(props.week / 1.6523463318);
  const netFort = Math.round(props.fort/ 1.6523463318);
  const netMonth = Math.round(props.month / 1.6523463318);
  const netAnnual = Math.round(props.annual / 1.6523463318);

  useEffect(() => {
    period === 'Weekly' ? setAtm(netWeek) : period === 'Monthly' ? setAtm(netMonth): period === 'Fortnightly' ? setAtm(netFort):setAtm(netAnnual) 
            },[period]);

  return (
    <div className="flex mt-10 flex-col ml-4 mr-4">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Frequency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Gross income
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Tax
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Net income
                  </th>
                  
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className=" hover:bg-slate-200 ">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Weekly
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap">${props.week}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    ${Math.round(props.week / 6.3667232)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700">
                      ${netWeek}
                    </a>
                  </td>
                  
                </tr>
                <tr className=" hover:bg-slate-200 ">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Fortnightly
                  </td>
                  <td className="px-6 py-4 text-center  text-sm text-gray-800 whitespace-nowrap">${props.fort}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  ${Math.round(props.fort / 6.3667232)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <a className="text-green-300 hover:text-green-700" >
                    ${netFort}
                    </a>
                  </td>
                  
                  
                </tr>
                <tr className=" hover:bg-slate-200 ">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Monthly
                  </td>
                  <td className="px-6 py-4 text-center  text-sm text-gray-800 whitespace-nowrap">${props.month}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  ${Math.round(props.month / 6.3667232)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <a className="text-green-500 hover:text-green-700" >
                    ${netMonth}
                    </a>
                  </td>
                  
                </tr>
                <tr className=" hover:bg-slate-200 ">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Annually
                  </td>
                  <td className="px-6 py-4 text-center  text-sm text-gray-800 whitespace-nowrap">
                     ${props.annual}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  ${Math.round(props.annual / 6.3667232)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                    <a className="text-green-300 hover:text-green-700" >
                    ${netAnnual}
                    </a>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 justify-center flex font-mono flex-row mb-5">
         <p >Your </p> <DropDownTab period={period} setPeriod={setPeriod} /><p>Net Income is</p><p className=" ml-1 text-green-400 hover:text-green-700 ">{atm}.</p>
      </div>
    </div>
  );
};