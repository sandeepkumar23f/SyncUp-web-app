"use client";

import Image from "next/image";

export default function RecommendedJobs() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-fit text-black">
      <h2 className="font-semibold text-lg mb-4">
        Recommended Jobs
      </h2>

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border rounded-xl p-4 mb-4 hover:shadow-md transition"
        >
          {/* Title + Icon */}
          <div className="flex items-center gap-3">
            <Image
              src="/image-fg.png"
              alt="job-icon"
              width={40}
              height={40}
              className="rounded-lg"
            />

            <div>
              <h3 className="font-medium">
                UI UX Designer
              </h3>
              <p className="text-gray-500 text-sm">
                SyncUp Technologies
              </p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex justify-between mt-4 text-xs text-gray-400">
            <span>Bangalore</span>
            <span>Hybrid</span>
          </div>
        </div>
      ))}

      {/* View All Button */}
      <button className="w-full border rounded-xl py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
        View all posts →
      </button>
    </div>
  );
}
