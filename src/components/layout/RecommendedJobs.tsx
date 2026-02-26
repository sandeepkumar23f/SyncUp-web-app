"use client";

export default function RecommendedJobs() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-fit text-black">
      <h2 className="font-semibold text-lg mb-4">
        Recommended Jobs
      </h2>

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border rounded-xl p-4 mb-4"
        >
          <h3 className="font-medium">UI UX Designer</h3>
          <p className="text-gray-500 text-sm">
            SyncUp Technologies
          </p>

          <div className="flex justify-between mt-3 text-xs text-gray-400">
            <span>Bangalore</span>
            <span>Hybrid</span>
          </div>
        </div>
      ))}

      <button className="w-full border rounded-xl py-2 text-sm text-gray-600">
        View all posts →
      </button>
    </div>
  );
}
