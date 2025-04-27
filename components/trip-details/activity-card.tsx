import Image from "next/image"
import { cn } from "@/lib/utils"

interface ActivityCardProps {
  name: string
  timing: string
  duration: string
  pickUp: string
  imageSrc: string
  isDark: boolean
  isHighlighted?: boolean
}

export default function ActivityCard({
  name,
  timing,
  duration,
  pickUp,
  imageSrc,
  isDark,
  isHighlighted = false,
}: ActivityCardProps) {
  return (
    <div
      className={cn(
        `${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"} rounded-lg p-2`,
        isHighlighted && `border ${isDark ? "border-[#313ddf]" : "border-[#313ddf]"}`,
      )}
    >
      <div className="flex gap-2">
        <Image
          src={imageSrc || "/placeholder.svg"}
          width={50}
          height={50}
          alt={name}
          className="w-[50px] h-[50px] object-cover rounded"
        />
        <div>
          <h4 className={`text-xs font-medium ${isDark ? "text-white" : "text-black"}`}>{name}</h4>
          <p className="text-[#666666] text-[10px]">Timing: {timing}</p>
          <p className="text-[#666666] text-[10px]">Duration: {duration}</p>
          <p className="text-[#666666] text-[10px]">Pick-up: {pickUp}</p>
        </div>
      </div>
    </div>
  )
}
