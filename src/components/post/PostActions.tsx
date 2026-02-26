import Image from "next/image";

export default function PostActions() {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 mt-3 pt-3 border-t">
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition">
          <Image src="/like.png" alt="like" width={16} height={16} />
          <span>3</span>
          <Image src="/smile.png" alt="like" width={16} height={16} />
          <span>6</span>
          <Image src="/smile2.png" alt="like" width={16} height={16} />
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition">
          <span>25 Comments</span>
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition">
          <span>231 Shares</span>
        </div>
      </div>

      <div className="cursor-pointer hover:text-blue-500 transition">
        24 Saved
      </div>

    </div>
  );
}