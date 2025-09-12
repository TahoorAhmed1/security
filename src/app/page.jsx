import { StatsCards } from "@/components/home/stats-cards";
import { SecurityRadar } from "@/components/home/security-radar";
import { RiskDistribution } from "@/components/home/risk-distribution";
import { RecentIssues } from "@/components/home/recent-issues";
import { SecurityDataTable } from "@/components/security-data-table";
import { RealtimeLogs } from "@/components/home/realtime-logs";
import { LoginHistory } from "@/components/home/login-history";

async function getSecurityData() {
  const res = await fetch("https://security-orcin.vercel.app/api/agent", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Dashboard() {
  const data = await getSecurityData();
  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-br from-white/50 via-transparent to-purple-50/30">
      <div className="p-4 md:p-6 lg:p-8">
        <StatsCards data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <SecurityRadar />

          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <RiskDistribution />
            <RecentIssues />
          </div>
        </div>

        <SecurityDataTable data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-8">
          <RealtimeLogs />
          <LoginHistory />
        </div>
      </div>
    </main>
  );
}
