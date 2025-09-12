import { Search, Bell, Menu } from "lucide-react"
import Image from "next/image"
import logo from "@/assets/logo.png"

export function Header() {
  return (
    <div className="flex-shrink-0">
      <header className="bg-white/70 backdrop-blur-md border-b border-gray-200/20 px-4 md:px-8 py-4 md:py-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4 flex-1">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for template and documents"
                className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder-gray-400 text-sm font-medium transition-all hover:bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:block text-sm font-medium text-gray-600 whitespace-nowrap">
              Last Scan: 10 hrs Ago
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all">
              Scan Now
            </button>

            <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="User"
                className="w-9 h-9 rounded-full border-2 border-gray-200"
                width={36}
                height={36}
              />
              <div className="flex items-center gap-1">
                <Image src={logo} alt="EN" className="w-5 h-4" width={20} height={16} />
                <span className="text-sm font-medium text-gray-700">EN</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
