"use client";

export default function StatsSection() {
  const stats = [
    { title: "Active Jobs", value: "03" },
    { title: "Jobs In Progress", value: "03" },
    { title: "Shortlisted", value: "03" },
    { title: "On Hold", value: "03" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="flex items-end gap-1 h-8">
              <div className="w-1 bg-blue-400 h-4 rounded"></div>
              <div className="w-1 bg-blue-500 h-6 rounded"></div>
              <div className="w-1 bg-blue-600 h-8 rounded"></div>
              <div className="w-1 bg-blue-400 h-5 rounded"></div>
              <div className="w-1 bg-blue-500 h-7 rounded"></div>
            </div>
          </div>

          <p className="text-green-500 text-xs mt-2">
            +5 from yesterday
          </p>
        </div>
      ))}
    </div>
  );
}
