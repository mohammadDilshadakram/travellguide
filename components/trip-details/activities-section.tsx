"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import ActivityCard from "./activity-card"

interface ActivitiesSectionProps {
  isDark: boolean
}

export default function ActivitiesSection({ isDark }: ActivitiesSectionProps) {
  const [activeTab, setActiveTab] = useState<"day-plan" | "all-activities">("day-plan")
  const [activeDay, setActiveDay] = useState(0)

  const days = [
    { day: "MON", date: 27 },
    { day: "TUE", date: 28 },
    { day: "WED", date: 29 },
    { day: "THU", date: 30 },
    { day: "FRI", date: 31 },
    { day: "SAT", date: 1 },
    { day: "SUN", date: 2 },
  ]

  const activities = [
    {
      id: 1,
      name: "Senso-ji Temple & Nakamise Shopping Street (Asakusa)",
      timing: "9:00 am to evening",
      duration: "3-4 hours",
      pickUp: "From Hotel",
      imageSrc: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Tokyo Sky Tree",
      timing: "1:00 pm to evening",
      duration: "2 hours",
      pickUp: "From Nakamise Street",
      imageSrc: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Kimono Wearing",
      timing: "Anytime before 8:00pm",
      duration: "1-2 hours",
      pickUp: "From Hotel",
      imageSrc: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-sm ${isDark ? "text-white" : "text-black"}`}>Activities</h3>
        <span className="text-[#666666] text-xs cursor-pointer">See all</span>
      </div>

      <div className="flex gap-1 mb-2">
        <button
          className={cn(
            "text-xs px-3 py-1 rounded-full",
            activeTab === "day-plan"
              ? "bg-[#313ddf] text-white"
              : isDark
                ? "bg-[#1d1f24] text-white"
                : "bg-[#f5f5f5] text-black",
          )}
          onClick={() => setActiveTab("day-plan")}
        >
          Day Plan
        </button>
        <button
          className={cn(
            "text-xs px-3 py-1 rounded-full",
            activeTab === "all-activities"
              ? "bg-[#313ddf] text-white"
              : isDark
                ? "bg-[#1d1f24] text-white"
                : "bg-[#f5f5f5] text-black",
          )}
          onClick={() => setActiveTab("all-activities")}
        >
          All Activities
        </button>
      </div>

      <div className="flex gap-1 mb-2 overflow-x-auto">
        {days.map((day, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center p-1 min-w-[30px] cursor-pointer",
              activeDay === index ? "bg-[#313ddf] rounded" : "",
            )}
            onClick={() => setActiveDay(index)}
          >
            <span className="text-[#666666] text-[10px]">{day.day}</span>
            <span
              className={`text-xs ${activeDay === index ? "text-white" : isDark ? "text-[#666666]" : "text-[#666666]"}`}
            >
              {day.date}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {activities.map((activity, index) => (
          <ActivityCard
            key={activity.id}
            name={activity.name}
            timing={activity.timing}
            duration={activity.duration}
            pickUp={activity.pickUp}
            imageSrc={activity.imageSrc}
            isDark={isDark}
            isHighlighted={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
