"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DurationSelectorProps {
  value: string
  onChange: (value: string) => void
  isDark: boolean
}

export default function DurationSelector({ value, onChange, isDark }: DurationSelectorProps) {
  const durations = ["1-3 days", "4-7 days", "1-2 weeks", "2-4 weeks", "1+ month"]

  return (
    <div className="mb-6">
      <label className={`text-sm mb-2 block ${isDark ? "text-white" : "text-black"}`}>How long will you stay?</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={`${isDark ? "bg-[#1d1f24] text-white" : "bg-[#f5f5f5] text-black"} border-none rounded-md p-3 h-auto`}
        >
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          {durations.map((duration) => (
            <SelectItem key={duration} value={duration}>
              {duration}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
