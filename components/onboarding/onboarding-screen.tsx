"use client"

import type { ThemeMode } from "@/app/page"
import MobileFrame from "../ui-elements/mobile-frame"
import DestinationInput from "./destination-input"
import DurationSelector from "./duration-selector"
import TravelCompanionSelector from "./travel-companion-selector"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface OnboardingScreenProps {
  themeMode: ThemeMode
  toggleTheme: () => void
  destination: string
  onDestinationChange: (value: string) => void
  duration: string
  onDurationChange: (value: string) => void
  travelCompanions: string[]
  onTravelCompanionToggle: (companion: string) => void
  onContinue: () => void
}

export default function OnboardingScreen({
  themeMode,
  toggleTheme,
  destination,
  onDestinationChange,
  duration,
  onDurationChange,
  travelCompanions,
  onTravelCompanionToggle,
  onContinue,
}: OnboardingScreenProps) {
  const isDark = themeMode === "dark"

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="absolute -top-4 -right-4 z-10 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <MobileFrame themeMode={themeMode}>
        <div className="p-4">
          <h2 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>
            Plan Your Journey, Your Way!
          </h2>
          <p className="text-[#666666] text-xs mb-6">Let's shape your personalized travel experience</p>

          <DestinationInput value={destination} onChange={onDestinationChange} isDark={isDark} />

          <DurationSelector value={duration} onChange={onDurationChange} isDark={isDark} />

          <TravelCompanionSelector
            selectedCompanions={travelCompanions}
            onToggle={onTravelCompanionToggle}
            isDark={isDark}
          />

          <Button onClick={onContinue} className="w-full bg-[#313ddf] text-white py-3 rounded-md mt-6">
            Continue
          </Button>
        </div>
      </MobileFrame>
    </div>
  )
}
