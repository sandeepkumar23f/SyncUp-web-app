"use client";

export default function JobTable() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm text-black">
      <h2 className="font-semibold text-lg mb-4">
        Job Application Status
      </h2>

      <div className="overflow-x-auto text-black">
        <table className="min-w-150 w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-3">Job title</th>
              <th className="text-left">Company</th>
              <th className="text-left">Applied on</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">Jr. Front-end Developer</td>
              <td>Microsoft</td>
              <td>08/08/2023</td>
              <td>
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                  In-progress
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Senior Back-end Developer</td>
              <td>Google</td>
              <td>24/07/2023</td>
              <td>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">
                  Applied
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">UI/UX Designer</td>
              <td>Meta</td>
              <td>01/05/2023</td>
              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Offered
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
