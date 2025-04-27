"use client"

import { useState } from "react"
import OnboardingScreen from "@/components/onboarding/onboarding-screen"
import TripDetailsScreen from "@/components/trip-details/trip-details-screen"
import ThirdPaneScreen from "@/components/third-pane/third-pane-screen"
import { ThemeProvider } from "@/components/theme-provider"

export type AppScreen = "onboarding" | "trip-details" | "third-pane"
export type ThemeMode = "dark" | "light"

export default function TravelApp() {
  // App state
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding")
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark")
  const [destination, setDestination] = useState("")
  const [duration, setDuration] = useState("")
  const [travelCompanions, setTravelCompanions] = useState<string[]>([])

  // Navigation handlers
  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen)
  }

  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark")
  }

  // Form handlers
  const handleDestinationChange = (value: string) => {
    setDestination(value)
  }

  const handleDurationChange = (value: string) => {
    setDuration(value)
  }

  const handleTravelCompanionToggle = (companion: string) => {
    if (travelCompanions.includes(companion)) {
      setTravelCompanions(travelCompanions.filter((item) => item !== companion))
    } else {
      setTravelCompanions([...travelCompanions, companion])
    }
  }

  const handleContinue = () => {
    navigateTo("trip-details")
  }

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className={`min-h-screen ${themeMode === "dark" ? "dark" : ""}`}>
        <div className="flex flex-wrap justify-center gap-4 p-4 md:p-8">
          {/* Screen display logic */}
          {currentScreen === "onboarding" && (
            <OnboardingScreen
              themeMode={themeMode}
              toggleTheme={toggleTheme}
              destination={destination}
              onDestinationChange={handleDestinationChange}
              duration={duration}
              onDurationChange={handleDurationChange}
              travelCompanions={travelCompanions}
              onTravelCompanionToggle={handleTravelCompanionToggle}
              onContinue={handleContinue}
            />
          )}

          {currentScreen === "trip-details" && (
            <TripDetailsScreen
              themeMode={themeMode}
              toggleTheme={toggleTheme}
              onOpenThirdPane={() => navigateTo("third-pane")}
            />
          )}

          {currentScreen === "third-pane" && (
            <ThirdPaneScreen
              themeMode={themeMode}
              toggleTheme={toggleTheme}
              onBack={() => navigateTo("trip-details")}
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}
