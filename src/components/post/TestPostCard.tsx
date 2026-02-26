import Image from "next/image";
import PostActions from "./PostActions";
import CommentInput from "./CommentInput";

export default function TextPostCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      
      <div className="flex items-start justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/randomp.png"
              alt="user"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-medium text-gray-800">
              Clara Kim
            </p>
            <p className="text-xs text-gray-500">
              12 April at 09:28 PM
            </p>
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-600 text-lg">
          ⋯
        </button>
      </div>

      <p className="text-sm text-gray-700 mt-4">
        A Great Way To Generate All The Motivation You Need To Get Fit.
      </p>

      <PostActions />

      <CommentInput />

    </div>
  );
}