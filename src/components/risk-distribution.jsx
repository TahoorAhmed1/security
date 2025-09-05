import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

const riskData = [
  { level: "Critical", count: 5, percentage: 15, color: "bg-red-500" },
  { level: "High", count: 12, percentage: 40, color: "bg-orange-400" },
  { level: "Medium", count: 22, percentage: 70, color: "bg-yellow-400" },
  { level: "Low", count: 50, percentage: 100, color: "bg-green-500" },
]

export function RiskDistribution() {
  return (
    <Card className="w-full bg-white/80 backdrop-blur-md shadow-xl border-0 rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-4 px-6 pt-6">
        <CardTitle className="text-lg font-bold text-gray-800 tracking-tight">Current Risk Distribution</CardTitle>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </CardHeader>

      <CardContent className="space-y-5 px-6 pb-6">
        {riskData.map((risk) => (
          <div key={risk.level} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">{risk.level}</span>
              <span className="text-sm font-bold text-gray-800">{risk.count}</span>
            </div>
            <div className="w-full bg-gray-200/60 rounded-full h-3 overflow-hidden">
              <div
                className={`${risk.color} h-3 rounded-full transition-all duration-500 shadow-sm`}
                style={{ width: `${risk.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
