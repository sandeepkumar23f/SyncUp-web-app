"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sent: 650, interviews: 450 },
  { name: "Feb", sent: 580, interviews: 520 },
  { name: "Mar", sent: 350, interviews: 600 },
  { name: "Apr", sent: 700, interviews: 850 },
  { name: "May", sent: 750, interviews: 500 },
  { name: "Jun", sent: 720, interviews: 420 },
  { name: "Jul", sent: 680, interviews: 350 },
  { name: "Aug", sent: 600, interviews: 380 },
  { name: "Sep", sent: 760, interviews: 480 },
  { name: "Oct", sent: 730, interviews: 520 },
  { name: "Nov", sent: 670, interviews: 540 },
  { name: "Dec", sent: 710, interviews: 320 },
];

export default function VacancyStats() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Vacancy Stats</h2>
        <button className="border px-4 py-1 rounded-lg text-sm text-gray-500">
          This Year
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sent"
            stroke="#2563eb"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="interviews"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
