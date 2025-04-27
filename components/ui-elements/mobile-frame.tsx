import type { ReactNode } from "react"
import type { ThemeMode } from "@/app/page"
import StatusBar from "./status-bar"

interface MobileFrameProps {
  children: ReactNode
  themeMode: ThemeMode
}

export default function MobileFrame({ children, themeMode }: MobileFrameProps) {
  const isDark = themeMode === "dark"

  return (
    <div
      className={`w-[280px] h-[600px] ${isDark ? "bg-[#0d0d0e]" : "bg-white"} rounded-3xl overflow-hidden relative shadow-lg`}
    >
      <StatusBar themeMode={themeMode} />
      <div className="h-[calc(100%-1.5rem)] overflow-y-auto">{children}</div>
    </div>
  )
}
