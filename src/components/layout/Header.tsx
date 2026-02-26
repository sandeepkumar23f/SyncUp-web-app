import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className=" mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/group.png"
            alt="logo-part-1"
            width={28}
            height={28}
            
          />
          <Image
            src="/union.png"
            alt="logo-part-2"
            width={28}
            height={28}
          />
        </div>

        <div className="hidden md:flex flex-1 justify-center ">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-full py-2 pl-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              🔍
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <Image
              src="/message.png"
              alt="message"
              width={18}
              height={18}
            />
          </button>

          <button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <Image
              src="/notification.png"
              alt="notification"
              width={18}
              height={18}
            />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>

          <button className="w-9 h-9 rounded-full overflow-hidden border">
            <Image
              src="/profile.png"
              alt="profile"
              width={36}
              height={36}
              className="object-cover"
            />
          </button>

        </div>
      </div>
    </header>
  );
}