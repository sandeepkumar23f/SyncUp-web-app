"use client";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Welcome back, Julie <span className="inline-block">👋</span>
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Here’s what you need to focus on today
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button className="border bg-white px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">
          Last 30 Days
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
          Search Job
        </button>

      </div>

    </div>
  );
}
