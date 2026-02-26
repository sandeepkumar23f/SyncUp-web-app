import Header from "./Header";
import Sidebar from "./Sidebar";
import IconRail from "./IconRail";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:flex ">
            <IconRail />
          </div>
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <Sidebar />
          </aside>

          <main className="col-span-1 lg:col-span-6 bg-white rounded-xl shadow-sm p-4">
            <div className="h-96 flex items-center justify-center text-gray-400">
              Feed Section
            </div>
          </main>

          <aside className="hidden lg:block lg:col-span-3 bg-white rounded-xl shadow-sm p-4">
            <div className="h-96 flex items-center justify-center text-gray-400">
              Right Sidebar
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
