import Image from "next/image";

const people = [
  { id: 1, name: "Rakesh Sharma", role: "Front-end Developer" },
  { id: 2, name: "Rakesh Sharma", role: "Front-end Developer" },
  { id: 3, name: "Rakesh Sharma", role: "Front-end Developer" },
];

export default function StoriesList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="font-semibold text-gray-800 mb-4">
        Sosmed Stories
      </h3>

      <div className="space-y-4">
        {people.map((person) => (
          <div key={person.id} className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {person.name}
                </p>
                <p className="text-xs text-gray-500">
                  {person.role}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="text-xs px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                Follow
              </button>
              <button className="text-xs px-3 py-1 border rounded-full text-gray-600 hover:bg-gray-100 transition">
                Message
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}