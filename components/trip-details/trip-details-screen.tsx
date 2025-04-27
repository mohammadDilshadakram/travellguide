"use client"

import { useState } from "react"
import type { ThemeMode } from "@/app/page"
import MobileFrame from "../ui-elements/mobile-frame"
import BottomNavigation from "../ui-elements/bottom-navigation"
import UserHeader from "./user-header"
import TripCard from "./trip-card"
import FlightDetails from "./flight-details"
import AccommodationSection from "./accommodation-section"
import ActivitiesSection from "./activities-section"
import { Sun, Moon } from "lucide-react"

interface TripDetailsScreenProps {
  themeMode: ThemeMode
  toggleTheme: () => void
  onOpenThirdPane: () => void
}

export default function TripDetailsScreen({ themeMode, toggleTheme, onOpenThirdPane }: TripDetailsScreenProps) {
  const isDark = themeMode === "dark"
  const [activeTab, setActiveTab] = useState<"home" | "search" | "add" | "profile">("home")

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
        <div className="p-4 pb-16">
          <UserHeader userName="Chhavi" isDark={isDark} />

          <h3 className={`text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Your Upcoming Trip</h3>

          <TripCard
            destination="TOKYO"
            dateRange="27 JAN - 31 JAN, 2024"
            imageSrc="/placeholder.svg?height=150&width=280"
            isDark={isDark}
            onClick={onOpenThirdPane}
          />

          <FlightDetails
            departureDate="Sat, 01/26, 10:00 am"
            departureCode="DEL"
            departureCity="Delhi, India"
            arrivalCode="NRT"
            arrivalCity="Narita, Tokyo"
            price={54.99}
            isDark={isDark}
          />

          <AccommodationSection isDark={isDark} />

          <ActivitiesSection isDark={isDark} />
        </div>

        {!isDark && <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />}
      </MobileFrame>
    </div>
  )
}
