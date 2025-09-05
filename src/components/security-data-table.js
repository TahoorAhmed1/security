import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "./ui/progress"

async function getSecurityData() {
  const res = await fetch("http://localhost:3000/api/agent", { cache: "no-store" })
  return res.json()
}

export async function SecurityDataTable() {
  const data = await getSecurityData()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto ">
        <Card className="bg-white shadow-sm border border-gray-200">
          <CardHeader className="border-b border-gray-100 px-6 py-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-gray-900">Security Dashboard</CardTitle>
              <div className="text-sm text-gray-500">
                <div>Total Records: {data.length}</div>
                <div>Last Updated: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Machine Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Security Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hardware
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Disk Usage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Top Processes
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((row, index) => {
                    const isFirewallOn = row.FirewallStatus.includes("ON")
                    const totalDiskSpace = row.DiskInfo.reduce((acc, disk) => acc + disk.TotalGB, 0)
                    const totalFreeSpace = row.DiskInfo.reduce((acc, disk) => acc + disk.FreeGB, 0)
                    const totalUsedSpace = totalDiskSpace - totalFreeSpace
                    const usagePercent = (totalUsedSpace / totalDiskSpace) * 100

                    const osVersion = row.OSVersion.includes("10.0.22631") ? "Windows 11" : "Windows 10"
                    const antivirusName = row.Antivirus.includes("Windows Defender") ? "Defender" : "Other"
                    const cpuName = row.CpuInfo.replace("Intel(R) Core(TM) ", "").replace(" CPU", "")

                    return (
                      <tr key={row.id || index} className="hover:bg-gray-50">
                        {/* Machine Info */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-900">{row.MachineName}</div>
                            <div className="text-sm text-gray-500">User: {row.UserName}</div>
                            <div className="text-xs text-gray-400">{osVersion}</div>
                            <div className="text-xs text-gray-400">Browser: {row.DefaultBrowser}</div>
                          </div>
                        </td>

                        {/* Security Status */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">Firewall:</span>
                              <Badge variant={isFirewallOn ? "default" : "destructive"} className="text-xs">
                                {isFirewallOn ? "ON" : "OFF"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">Antivirus:</span>
                              <Badge variant="secondary" className="text-xs">
                                {antivirusName}
                              </Badge>
                            </div>
                          </div>
                        </td>

                        {/* Hardware */}
                        <td className="px-6 py-4">
                          <div className="space-y-2 max-w-48">
                            <div className="text-xs text-gray-500">CPU:</div>
                            <div className="text-xs font-medium text-gray-900 leading-tight">{cpuName}</div>
                            <div className="text-xs text-gray-500 mt-2">RAM: {row.RamInfo}</div>
                          </div>
                        </td>

                        {/* Disk Usage */}
                        <td className="px-6 py-4">
                          <div className="space-y-3 min-w-48">
                            <div className="text-xs text-gray-500">
                              Total: {totalDiskSpace.toFixed(0)} GB | Used: {totalUsedSpace.toFixed(0)} GB
                            </div>
                            <Progress value={usagePercent} className="h-2" />
                            <div className="space-y-1">
                              {row.DiskInfo.map((disk, diskIndex) => {
                                const diskUsage = ((disk.TotalGB - disk.FreeGB) / disk.TotalGB) * 100
                                return (
                                  <div key={diskIndex} className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-gray-700">{disk.Name}</span>
                                    <span className="text-gray-500">
                                      {diskUsage.toFixed(0)}% ({disk.FreeGB.toFixed(0)}GB free)
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </td>

                        {/* Top Processes */}
                        <td className="px-6 py-4">
                          <div className="space-y-2 min-w-44">
                            <div className="text-xs text-gray-500 mb-2">Memory Usage (MB):</div>
                            {row.TopProcesses.slice(0, 5).map((process, processIndex) => (
                              <div key={processIndex} className="flex justify-between items-center text-xs">
                                <span className="font-medium text-gray-700 truncate">{process.ProcessName}</span>
                                <Badge variant="outline" className="text-xs ml-2">
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
