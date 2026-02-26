import Image from "next/image";

export default function CreatePost() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <p className="text-sm font-medium text-gray-700 mb-3">
        Create a Post
      </p>

      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/profile1.png"
            alt="profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>

        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-transparent outline-none text-sm"
        />

        <button>
          <Image
            src="/send-2.png"
            alt="send"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
}