"use client"

import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface TravelCompanionSelectorProps {
  selectedCompanions: string[]
  onToggle: (companion: string) => void
  isDark: boolean
}

export default function TravelCompanionSelector({
  selectedCompanions,
  onToggle,
  isDark,
}: TravelCompanionSelectorProps) {
  const companions = [
    { id: "Solo", icon: <User className="w-4 h-4" /> },
    {
      id: "Couple",
      icon: (
        <div className="flex">
          <User className="w-4 h-4" />
          <User className="w-4 h-4 -ml-1" />
        </div>
      ),
    },
    {
      id: "Family",
      icon: (
        <div className="flex">
          <User className="w-3 h-3" />
          <User className="w-4 h-4 -ml-1" />
          <User className="w-3 h-3 -ml-1" />
        </div>
      ),
    },
    {
      id: "Friends",
      icon: (
        <div className="flex">
          <User className="w-3 h-3" />
          <User className="w-3 h-3 -ml-1" />
          <User className="w-3 h-3 -ml-1" />
          <User className="w-3 h-3 -ml-1" />
        </div>
      ),
    },
  ]

  return (
    <div className="mb-6">
      <label className={`text-sm mb-2 block ${isDark ? "text-white" : "text-black"}`}>
        Who are you travelling with?
      </label>
      <div className="grid grid-cols-2 gap-2">
        {companions.map((companion) => (
          <button
            key={companion.id}
            onClick={() => onToggle(companion.id)}
            className={cn(
              `rounded-md p-3 flex items-center justify-center gap-2`,
              isDark
                ? selectedCompanions.includes(companion.id)
                  ? "bg-[#313ddf]"
                  : "bg-[#1d1f24]"
                : selectedCompanions.includes(companion.id)
                  ? "bg-[#313ddf]"
                  : "bg-[#f5f5f5]",
              selectedCompanions.includes(companion.id) ? "text-white" : isDark ? "text-white" : "text-[#666666]",
            )}
          >
            <span
              className={
                selectedCompanions.includes(companion.id) ? "text-white" : isDark ? "text-white" : "text-[#666666]"
              }
            >
              {companion.icon}
            </span>
            <span
              className={`text-sm ${selectedCompanions.includes(companion.id) ? "text-white" : isDark ? "text-white" : "text-[#666666]"}`}
            >
              {companion.id}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
