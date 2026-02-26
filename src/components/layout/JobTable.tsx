"use client";
import Image from "next/image";
import { useState } from "react";

export default function JobTable() {
  const [newOn, setNewOn] = useState(true);
  const [progressOn, setProgressOn] = useState(true);
  const [pendingOn, setPendingOn] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm text-black">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <h2 className="font-semibold text-lg">
          Job Application Status
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>New</span>
            <button
              onClick={() => setNewOn(!newOn)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                newOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  newOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>In Progress</span>
            <button
              onClick={() => setProgressOn(!progressOn)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                progressOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  progressOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Pending Task</span>
            <button
              onClick={() => setPendingOn(!pendingOn)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                pendingOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  pendingOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">
            <span>Sort By</span>
            <Image
              src="/sort.png"
              alt="sort-icon"
              width={12}
              height={12}
            />
          </button>

        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-t border-gray-200">
            <tr>
              <th className="text-left py-3">Job title</th>
              <th className="text-left py-3">Company</th>
              <th className="text-left py-3">Applied on</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="py-4">Jr. Front-end Developer</td>
              <td className="py-4">Microsoft</td>
              <td className="py-4">08/08/2023</td>
              <td className="py-4">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                  In-progress
                </span>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50">
              <td className="py-4">Senior Back-end Developer</td>
              <td className="py-4">Google</td>
              <td className="py-4">24/07/2023</td>
              <td className="py-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">
                  Applied
                </span>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50">
              <td className="py-4">UI/UX Designer</td>
              <td className="py-4">Meta</td>
              <td className="py-4">01/05/2023</td>
              <td className="py-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Offered
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
