import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const issues = [
  { name: "Antivirus", color: "bg-green-500 hover:bg-green-600" },
  { name: "Firewall", color: "bg-pink-500 hover:bg-pink-600" },
  { name: "Patching", color: "bg-red-500 hover:bg-red-600" },
  { name: "MFA", color: "bg-purple-500 hover:bg-purple-600" },
]

export function RecentIssues() {
  return (
    <Card className="w-full bg-white/80 backdrop-blur-md shadow-xl border-0 rounded-2xl">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="text-lg font-bold text-gray-800 tracking-tight">Recent Issues Detected</CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {issues.map((issue) => (
            <Button
              key={issue.name}
              className={`${issue.color} text-white justify-between h-12 px-4 rounded-xl font-semibold text-sm shadow-md transition-all duration-200`}
            >
              <span>{issue.name}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          ))}
        </div>

        <div className="text-right">
          <Button
            variant="link"
            className="text-xs font-bold uppercase p-0 text-purple-600 hover:text-purple-700 tracking-wider"
          >
            VIEW DETAILS
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
