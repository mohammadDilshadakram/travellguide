import type { ThemeMode } from "@/app/page"

interface StatusBarProps {
  themeMode: ThemeMode
}

export default function StatusBar({ themeMode }: StatusBarProps) {
  const isDark = themeMode === "dark"

  return (
    <div className={`h-6 ${isDark ? "bg-black" : "bg-white"} flex items-center justify-between px-2`}>
      <div className={`text-xs ${isDark ? "text-white" : "text-black"}`}>9:41</div>
      <div className="flex items-center gap-1">
        <div className={`w-4 h-2 ${isDark ? "bg-white" : "bg-black"} rounded-sm`}></div>
        <div className={`text-xs ${isDark ? "text-white" : "text-black"}`}>●</div>
        <div className={`text-xs ${isDark ? "text-white" : "text-black"}`}>●</div>
      </div>
    </div>
  )
}
