import StatsSection from "./StatsSection";
import VacancyStats from "./VacancyStats";
import JobTable from "./JobTable";
import RecommendedJobs from "./RecommendedJobs";
import Header from "./Header";
import IconRail from "./IconRail";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      <Header />

      <div className="flex">

        <div className="hidden lg:block w-20 p-4">
          <div className="sticky top-20">
            <IconRail />
          </div>
        </div>

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">

          <HeroSection />

          <div className="mt-6">
            <StatsSection />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2 space-y-6">
              <VacancyStats />
              <JobTable />
            </div>

            <div>
              <RecommendedJobs />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
