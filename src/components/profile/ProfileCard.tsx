import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
          <Image
            src="/profile.png"
            alt="profile"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        <h2 className="font-semibold text-gray-800">
          Minnie Armstrong
        </h2>

        <p className="text-sm text-gray-500">
          UI / UX Designer
        </p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>75% Completed</span>
          <span className="text-blue-500 cursor-pointer">
            Update profile
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button className="flex-1 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          View Profile
        </button>

        <button className="flex-1 py-2 text-sm border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
          Share Profile
        </button>
      </div>
    </div>
  );
}