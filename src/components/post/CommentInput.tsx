import Image from "next/image";

export default function CommentInput() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <Image
          src="/profile1.png"
          alt="profile"
          width={32}
          height={32}
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 text-black">
        <input
          type="text"
          placeholder="Write your comment..."
          className="flex-1 bg-transparent outline-none text-sm"
        />

        <div className="flex items-center gap-3 text-gray-400">
          <Image src="/ic.png" alt="like" width={16} height={16} />
          <Image src="/ic_e.png" alt="like" width={16} height={16} />
          <Image src="/ic_i.png" alt="like" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}