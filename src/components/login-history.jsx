import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, Trash2 } from "lucide-react"

const loginHistory = [
  { date: "Jun 9 2024, 10:41" },
  { date: "Jun 9 2024, 10:41" },
  { date: "Jun 9 2024, 10:41" },
  { date: "Jun 9 2024, 10:41" },
]

export function LoginHistory() {
  return (
    <Card className="w-full bg-white/80 backdrop-blur-md shadow-xl border-0 rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-4 px-6 pt-6">
        <CardTitle className="text-lg font-bold text-gray-800 tracking-tight">Login History</CardTitle>
        <button className="text-gray-400 hover:text-purple-600 transition-colors p-1">
          <Filter className="w-5 h-5" />
        </button>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="max-h-72 overflow-y-auto rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm">
          <table className="w-full">
            <thead className="bg-gray-50/80 sticky top-0">
              <tr>
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50">
              {loginHistory.map((entry, index) => (
                <tr key={index} className="hover:bg-purple-50/30 transition-colors">
                  <td className="px-4 py-4 text-center text-sm font-medium text-gray-600">{entry.date}</td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400 font-semibold uppercase tracking-wider">
          SCROLL FOR MORE
        </div>
      </CardContent>
    </Card>
  )
}
