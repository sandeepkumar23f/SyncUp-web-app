"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", sent: 650, interviews: 450, rejected: 120 },
  { name: "Feb", sent: 580, interviews: 520, rejected: 140 },
  { name: "Mar", sent: 350, interviews: 600, rejected: 90 },
  { name: "Apr", sent: 700, interviews: 850, rejected: 160 },
  { name: "May", sent: 750, interviews: 500, rejected: 130 },
  { name: "Jun", sent: 720, interviews: 420, rejected: 110 },
  { name: "Jul", sent: 680, interviews: 350, rejected: 100 },
  { name: "Aug", sent: 600, interviews: 380, rejected: 95 },
  { name: "Sep", sent: 760, interviews: 480, rejected: 150 },
  { name: "Oct", sent: 730, interviews: 520, rejected: 140 },
  { name: "Nov", sent: 670, interviews: 540, rejected: 135 },
  { name: "Dec", sent: 710, interviews: 320, rejected: 105 },
];

export default function VacancyStats() {
  const [sentOn, setSentOn] = useState(true);
  const [interviewOn, setInterviewOn] = useState(true);
  const [rejectedOn, setRejectedOn] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-6 text-black">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        <h2 className="font-semibold text-lg">
          Vacancy Stats
        </h2>

        <div className="flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Application Sent</span>
            <button
              onClick={() => setSentOn(!sentOn)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                sentOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  sentOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Interviews</span>
            <button
              onClick={() => setInterviewOn(!interviewOn)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                interviewOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  interviewOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Rejected</span>
            <button
              onClick={() => setRejectedOn(!rejectedOn)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                rejectedOn ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  rejectedOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">
            <span>This Year</span>
            <Image
              src="/ic_d.png"
              alt="arrow"
              width={14}
              height={14}
            />
          </button>

        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {sentOn && (
            <Line
              type="monotone"
              dataKey="sent"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
            />
          )}

          {interviewOn && (
            <Line
              type="monotone"
              dataKey="interviews"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
            />
          )}

          {rejectedOn && (
            <Line
              type="monotone"
              dataKey="rejected"
              stroke="#ef4444"
              strokeWidth={3}
              dot={false}
            />
          )}

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
