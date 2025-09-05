import { Button } from "@/components/ui/button"
import Image from "next/image"

import {
  Shield,
  Users,
  Monitor,
  Mail,
} from "lucide-react" // <-- import Lucide icons

const statsData = [
  {
    title: "Security Score",
    value: "1,756",
    percentage: "72%",
    change: "+347",
    changeText: "Compared to last Week",
    color: "green",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
    badgeColor: "bg-green-500",
    icon: Shield, // Lucide icon
  },
  {
    title: "Users Scanned",
    value: "230 Total",
    percentage: "-8.6%",
    change: "4 Risky",
    changeText: "Compared to last Week",
    color: "purple",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-100",
    badgeColor: "bg-purple-500",
    icon: Users, // Lucide icon
  },
  {
    title: "Devices Scanned",
    value: "140 Total",
    percentage: "-5.2%",
    change: "6 Risky",
    changeText: "Compared to last Week",
    color: "pink",
    borderColor: "border-pink-500",
    bgColor: "bg-pink-100",
    badgeColor: "bg-pink-500",
    icon: Monitor, // Lucide icon
  },
  {
    title: "Mailboxes",
    value: "90 Total",
    percentage: "+7.1%",
    change: "2 risky",
    changeText: "Compared to last Week",
    color: "red",
    borderColor: "border-red-500",
    bgColor: "bg-red-100",
    badgeColor: "bg-red-500",
    icon: Mail, // Lucide icon
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`relative bg-white/80 backdrop-blur-md rounded-2xl p-6 ${stat.borderColor} border transition-all flex flex-col justify-between min-h-[180px]`}
        >
          <div className="flex justify-between items-center">
            <div
              className={`w-14 h-14 rounded-full ${stat.bgColor} flex items-center justify-center border-2 border-white`}
            >
                           <stat.icon className={`w-7 h-7 text-${stat.color}-600`} /> 

            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-medium border border-gray-300 bg-white hover:border-gray-400 transition px-4 py-1.5 rounded-full"
            >
              View Details
            </Button>
          </div>

          <div className="mt-6 mb-3">
            <div className={`text-base font-semibold mb-2 text-${stat.color}-600`}>{stat.title}</div>
            <div className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              {stat.value}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${stat.badgeColor} shadow-sm`}>
                {stat.percentage}
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-500 font-medium flex items-center gap-1">
            <span className="font-bold text-gray-800 mr-1">{stat.change}</span>
            <span>{stat.changeText}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
