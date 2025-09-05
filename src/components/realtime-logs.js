import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CarIcon as ChartColumn, Shield, Code, Star, Trash2, MoreHorizontal } from "lucide-react"

const logs = [
  { name: "Scan started", date: "Jun 9 2024, 10:41", icon: ChartColumn, bgColor: "bg-purple-100" },
  { name: "Agent online", date: "Jun 9 2024, 10:41", icon: Shield, bgColor: "bg-green-100" },
  { name: "Script triggered", date: "Jun 9 2024, 10:41", icon: Code, bgColor: "bg-orange-100" },
]

export function RealtimeLogs() {
  return (
    <Card className="w-full bg-white/80 backdrop-blur-md shadow-xl border-0 rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-4 px-6 pt-6">
        <CardTitle className="text-lg font-bold text-gray-800 tracking-tight">Real-time logs</CardTitle>
        <button className="text-purple-600 hover:text-purple-700 text-sm font-semibold">See more →</button>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="overflow-hidden rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm">
          <table className="w-full">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {logs.map((log, index) => {
                const Icon = log.icon
                return (
                  <tr key={index} className="hover:bg-purple-50/30 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${log.bgColor} rounded-xl flex items-center justify-center shadow-sm`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{log.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-sm font-medium text-gray-600">{log.date}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-yellow-500 transition-colors">
                          <Star className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
