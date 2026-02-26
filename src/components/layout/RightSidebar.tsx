import Image from "next/image";

export default function PromoAndSuggestions() {
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-2xl shadow-sm p-4">
        
        <h3 className="font-semibold text-gray-800 text-sm">
          Hire faster with SyncUp!
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Network without limits and hire like a pro!
        </p>

        <div className="relative mt-4 rounded-xl overflow-hidden">
          <Image
            src="/image-3.png"
            alt="promo"
            width={400}
            height={250}
            className="w-full object-cover"
          />

          <span className="absolute top-3 right-3 bg-black text-xs font-medium px-2 py-1 rounded-full shadow">
            30% OFF
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-4">

        <h3 className="font-semibold text-blue-600 text-sm">
          Suggestions
        </h3>

        <p className="text-xs text-gray-500 mt-1 mb-4">
          Below courses are suggested based on your current skills & 
          curated to help you stay updated with the current market trends.
        </p>

        <div className="rounded-xl overflow-hidden">
          <Image
            src="/image-3.png"
            alt="course"
            width={400}
            height={250}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-3">
          <h4 className="font-semibold text-gray-800 text-sm">
            Figma: Basics
          </h4>

          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-gray-500">
              Tyler Hooks
            </p>

            <div className="flex items-center gap-1 text-xs text-gray-600">
              ⭐ <span>4.2</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}