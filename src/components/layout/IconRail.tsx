import Image from "next/image";

export default function IconRail() {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-16 flex flex-col items-center py-6 gap-6">
      <NavIcon src="/home-2.png" active />
      <NavIcon src="/user-tick.png" />
      <NavIcon src="/people.png" />
      <NavIcon src="/message.png" />
      <NavIcon src="/briefcase.png"/>
      <NavIcon src="/setting-2.png" />
    </div>
  );
}


function NavIcon({
  src,
  active = false,
}: {
  src: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-10 h-10 flex items-center justify-center rounded-lg transition
        ${active ? "bg-blue-100" : "hover:bg-gray-100"}
      `}
    >
      <Image src={src} alt="nav-icon" width={20} height={20} />
    </button>
  );
}