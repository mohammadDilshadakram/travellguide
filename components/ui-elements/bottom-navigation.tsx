"use client"

import { Home, Search, Plus, User } from "lucide-react"

interface BottomNavigationProps {
  activeTab?: "home" | "search" | "add" | "profile"
  onTabChange?: (tab: "home" | "search" | "add" | "profile") => void
}

export default function BottomNavigation({ activeTab = "home", onTabChange }: BottomNavigationProps) {
  const handleTabClick = (tab: "home" | "search" | "add" | "profile") => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-[#e5e5e5] flex items-center justify-around px-4">
      <button className="flex flex-col items-center" onClick={() => handleTabClick("home")}>
        <Home className={`w-5 h-5 ${activeTab === "home" ? "text-[#313ddf]" : "text-[#666666]"}`} />
        <span className={`text-[10px] ${activeTab === "home" ? "text-[#313ddf]" : "text-[#666666]"}`}>Home</span>
      </button>
      <button className="flex flex-col items-center" onClick={() => handleTabClick("search")}>
        <Search className={`w-5 h-5 ${activeTab === "search" ? "text-[#313ddf]" : "text-[#666666]"}`} />
        <span className={`text-[10px] ${activeTab === "search" ? "text-[#313ddf]" : "text-[#666666]"}`}>Search</span>
      </button>
      <button className="flex flex-col items-center" onClick={() => handleTabClick("add")}>
        <Plus className={`w-5 h-5 ${activeTab === "add" ? "text-[#313ddf]" : "text-[#666666]"}`} />
        <span className={`text-[10px] ${activeTab === "add" ? "text-[#313ddf]" : "text-[#666666]"}`}>Add</span>
      </button>
      <button className="flex flex-col items-center" onClick={() => handleTabClick("profile")}>
        <User className={`w-5 h-5 ${activeTab === "profile" ? "text-[#313ddf]" : "text-[#666666]"}`} />
        <span className={`text-[10px] ${activeTab === "profile" ? "text-[#313ddf]" : "text-[#666666]"}`}>Profile</span>
      </button>
    </div>
  )
}
