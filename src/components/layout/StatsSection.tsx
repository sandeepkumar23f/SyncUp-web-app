"use client";

import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { title: "Active Jobs", value: "03", icon: "/frame-f1.png" },
    { title: "Jobs In Progress", value: "03", icon: "/frame-f2.png" },
    { title: "Shortlisted", value: "03", icon: "/frame-f3.png" },
    { title: "On Hold", value: "03", icon: "/frame-f4.png" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-gray-500 text-sm">{item.title}</h3>

          <div className="flex justify-between items-center mt-3">
            <span className="text-2xl sm:text-3xl font-bold">
              {item.value}
            </span>

            {/* Icon instead of bars */}
            <Image
              src={item.icon}
              alt="stat-icon"
              width={40}
              height={40}
            />
          </div>

          <p className="text-green-500 text-xs mt-2">
            +5 from yesterday
          </p>
        </div>
      ))}
    </div>
  );
}
