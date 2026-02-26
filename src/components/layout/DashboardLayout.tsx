import Header from "./Header";
import Sidebar from "./Sidebar";
import IconRail from "./IconRail";
import CreatePost from "../post/CreatePost";
import PostCard from "../post/PostCard";
import TextPostCard from "../post/TestPostCard";
import PromoAndSuggestions from "./RightSidebar";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:flex ">
            <IconRail />
          </div>
          <aside className="hidden lg:block lg:col-span-3">
            <Sidebar />
          </aside>

          <main className="col-span-12 lg:col-span-5 space-y-6">
            <CreatePost />
            <PostCard />
            <TextPostCard />
          </main>

          <aside className="col-span-12 lg:col-span-3">
            <PromoAndSuggestions />
          </aside>
        </div>
      </div>
    </div>
  );
}
