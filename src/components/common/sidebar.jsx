import {
  CarIcon as ChartColumn,
  Shield,
  Cloud,
  Users,
  Globe,
  TriangleAlert,
  Monitor,
  Mail,
  Earth,
  Lightbulb,
  Wrench,
  FileText,
  Settings,
  LogOut,
} from "lucide-react"
import Image from "next/image"
import logo from "@/assets/logo.png"

const navigationItems = [
  { icon: ChartColumn, active: true },
  { icon: Shield },
  { icon: Cloud },
  { icon: Users },
  { icon: Globe },
  { icon: TriangleAlert },
  { icon: Monitor },
  { icon: Mail },
  { icon: Earth },
  { icon: Lightbulb },
  { icon: Wrench },
  { icon: FileText },
]

export function Sidebar() {
  return (
    <div className="flex-shrink-0">
      <aside className="relative w-16 h-screen flex flex-col bg-gradient-to-br from-purple-200 via-purple-50 to-purple-200 shadow-md transition-all duration-300 z-20">
        <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
          <div className="px-2 pt-8 pb-2">
            <div className="text-lg font-bold text-gray-800 mb-8 tracking-tight text-center">L</div>

            <div className="flex justify-center mb-8">
              <Image
                className="w-10 h-10 rounded-full border-2 border-white shadow"
                src={logo}
                alt="User avatar"
                width={40}
                height={40}
              />
            </div>

            <nav className="space-y-1 overflow-x-hidden">
              {navigationItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index}>
                    <div
                      className={`flex items-center justify-center px-2 py-2 rounded-lg cursor-pointer transition font-medium text-sm select-none ${
                        item.active
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                          : "text-gray-600 hover:bg-purple-100 hover:text-purple-700"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                  </div>
                )
              })}
            </nav>
          </div>
        </div>

        <div className="flex-shrink-0 px-2 pb-6">
          <div className="mb-2">
            <div className="flex items-center justify-center px-2 py-2 rounded-lg cursor-pointer transition font-medium text-sm select-none text-gray-600 hover:bg-purple-100 hover:text-purple-700">
              <Settings className="w-5 h-5 flex-shrink-0" />
            </div>

            <button className="w-full flex items-center justify-center text-gray-500 hover:text-purple-600 text-sm py-2 rounded-lg transition font-medium">
              <LogOut className="w-5 h-5 flex-shrink-0" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
