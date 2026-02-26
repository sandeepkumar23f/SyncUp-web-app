import Image from "next/image";
import PostActions from "./PostActions";
import CommentInput from "./CommentInput";

export default function PostCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      
      <div className="flex items-start justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/image-2.png"
              alt="user"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-medium text-gray-800">
              Pan Feng Shui
            </p>
            <p className="text-xs text-gray-500">
              12 April at 09:28 PM
            </p>
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          ⋯
        </button>
      </div>

      <p className="text-sm text-gray-700 mt-4">
        Had an amazing interaction with the founder of <b>ABC Company</b>, 
        sharing my experience through this small article
      </p>

      <div className="mt-4 rounded-xl overflow-hidden">
        <Image
          src="/post.png"
          alt="post"
          width={800}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <PostActions />

      <CommentInput />

    </div>
  );
}