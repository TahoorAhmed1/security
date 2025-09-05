import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { SecurityRadar } from "@/components/security-radar"
import { RiskDistribution } from "@/components/risk-distribution"
import { RecentIssues } from "@/components/recent-issues"
import { SecurityDataTable } from "@/components/security-data-table"
import { RealtimeLogs } from "@/components/realtime-logs"
import { LoginHistory } from "@/components/login-history"

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-purple-50 via-slate-50 to-purple-100 font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen min-w-0">
        <Header />

        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-white/50 via-transparent to-purple-50/30">
          <div className="p-4 md:p-6 lg:p-8">
            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <SecurityRadar />

              <div className="lg:col-span-1 space-y-4 md:space-y-6">
                <RiskDistribution />
                <RecentIssues />
              </div>
            </div>

            <SecurityDataTable />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-8">
              <RealtimeLogs />
              <LoginHistory />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
