import ProfileCard from "../profile/ProfileCard";
import AnalyticsCard from "../profile/AnalyticsCard";
import StoriesList from "../stories/StoriesList";

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <ProfileCard />
      <AnalyticsCard />
      <StoriesList />
    </div>
  );
}