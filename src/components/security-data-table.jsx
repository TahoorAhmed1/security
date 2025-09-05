import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "./ui/progress"

async function getSecurityData() {
  const res = await fetch("https://security-orcin.vercel.app/api/agent", { cache: "no-store" })
  return res.json()
}

export async function SecurityDataTable() {
  const data = await getSecurityData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className=" ">
        <Card className="bg-white shadow-lg border-0 ring-1 ring-slate-200">
          <CardHeader className="border-b border-slate-100 px-6 py-5 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Security Dashboard
              </CardTitle>
              <div className="text-sm text-slate-600 text-right">
                <div className="font-medium">Total Records: {data.length}</div>
                <div>Last Updated: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-100 to-blue-100 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Machine Info
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Security Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Hardware
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Disk Usage
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Top Processes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  {data.map((row, index) => {
                    const isFirewallOn = row.FirewallStatus.includes("ON")
                    const totalDiskSpace = row.DiskInfo.reduce((acc, disk) => acc + disk.TotalGB, 0)
                    const totalFreeSpace = row.DiskInfo.reduce((acc, disk) => acc + disk.FreeGB, 0)
                    const totalUsedSpace = totalDiskSpace - totalFreeSpace
                    const usagePercent = (totalUsedSpace / totalDiskSpace) * 100

                    const osVersion = row.OSVersion.includes("10.0.22631") ? "Windows 11" : "Windows 10"
                    const antivirusName = row.Antivirus.includes("Windows Defender") ? "Defender" : "Other"
                    const cpuName = row.CpuInfo.replace("Intel(R) Core(TM) ", "").replace(" CPU", "")

                    const getDiskUsageColor = (percent) => {
                      if (percent >= 85) return "bg-red-100 text-red-800 border-red-200"
                      if (percent >= 70) return "bg-amber-100 text-amber-800 border-amber-200"
                      return "bg-green-100 text-green-800 border-green-200"
                    }

                    return (
                      <tr key={row.id || index} className="hover:bg-slate-50 transition-colors duration-150">
                        {/* Machine Info */}
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="space-y-1">
                            <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              {row.MachineName}
                            </div>
                            <div className="text-sm text-slate-600">User: {row.UserName}</div>
                            <div className="text-xs text-slate-500">{osVersion}</div>
                            <div className="text-xs text-slate-500">Browser: {row.DefaultBrowser}</div>
                          </div>
                        </td>

                        {/* Security Status */}
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-slate-600">Firewall:</span>
                              <Badge
                                className={`text-xs font-medium px-2 py-1 ${
                                  isFirewallOn
                                    ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-200"
                                    : "bg-red-100 text-red-800 border-red-200 hover:bg-red-200"
                                }`}
                              >
                                {isFirewallOn ? "🛡️ ON" : "⚠️ OFF"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-slate-600">Antivirus:</span>
                              <Badge className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
                                🔒 {antivirusName}
                              </Badge>
                            </div>
                          </div>
                        </td>

                        {/* Hardware */}
                        <td className="px-6 py-5">
                          <div className="space-y-2 max-w-48">
                            <div className="text-xs font-medium text-slate-600">CPU:</div>
                            <div className="text-xs font-semibold text-slate-900 leading-tight">{cpuName}</div>
                            <div className="text-xs text-slate-600 mt-2 flex items-center gap-1">
                              <span>💾</span> RAM: {row.RamInfo}
                            </div>
                          </div>
                        </td>

                        {/* Disk Usage */}
                        <td className="px-6 py-5">
                          <div className="space-y-3 min-w-48">
                            <div className="text-xs text-slate-600 flex items-center gap-1">
                              <span>💽</span> Total: {totalDiskSpace.toFixed(0)} GB | Used: {totalUsedSpace.toFixed(0)}{" "}
                              GB
                            </div>
                            <div className="relative">
                              <Progress value={usagePercent} className="h-3" />
                              <Badge
                                className={`absolute -top-1 -right-1 text-xs px-2 py-0.5 ${getDiskUsageColor(usagePercent)}`}
                              >
                                {usagePercent.toFixed(0)}%
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              {row.DiskInfo.map((disk, diskIndex) => {
                                const diskUsage = ((disk.TotalGB - disk.FreeGB) / disk.TotalGB) * 100
                                return (
                                  <div key={diskIndex} className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-slate-700">{disk.Name}</span>
                                    <Badge className={`text-xs px-2 py-0.5 ${getDiskUsageColor(diskUsage)}`}>
                                      {diskUsage.toFixed(0)}% ({disk.FreeGB.toFixed(0)}GB free)
                                    </Badge>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </td>

                        {/* Top Processes */}
                        <td className="px-6 py-5">
                          <div className="space-y-2 min-w-44">
                            <div className="text-xs font-medium text-slate-600 mb-2 flex items-center gap-1">
                              <span>⚡</span> Memory Usage (MB):
                            </div>
                            {row.TopProcesses.slice(0, 5).map((process, processIndex) => (
                              <div key={processIndex} className="flex justify-between items-center text-xs">
                                <span className="font-medium text-slate-700 truncate">{process.ProcessName}</span>
                                <Badge className="text-xs ml-2 px-2 py-0.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200 hover:from-purple-200 hover:to-blue-200">
                                  {process.MemoryMB.toFixed(0)} MB
                                </Badge>
                              </div>
                            ))}
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
      </div>
    </div>
  )
}
