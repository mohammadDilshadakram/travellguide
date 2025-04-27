import Image from "next/image"

interface HotelCardProps {
  name: string
  checkIn: string
  checkOut: string
  nights: number
  status: "confirmed" | "pending"
  imageSrc: string
  isDark: boolean
}

export default function HotelCard({ name, checkIn, checkOut, nights, status, imageSrc, isDark }: HotelCardProps) {
  const statusColor = status === "confirmed" ? "bg-[#313ddf]" : "bg-[#ff6525]"
  const statusText = status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <div className={`${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"} rounded-lg p-2 min-w-[120px]`}>
      <div className={`${statusColor} text-white text-xs px-2 py-0.5 rounded w-fit mb-1`}>{statusText}</div>
      <Image
        src={imageSrc || "/placeholder.svg"}
        width={110}
        height={60}
        alt={name}
        className="w-full h-[60px] object-cover rounded mb-1"
      />
      <h4 className={`text-xs font-medium ${isDark ? "text-white" : "text-black"}`}>{name}</h4>
      <p className="text-[#666666] text-[10px]">Check in: {checkIn}</p>
      <p className="text-[#666666] text-[10px]">Check out: {checkOut}</p>
      <div className="flex items-center mt-1">
        <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>{nights} nights</span>
        <div className={`${statusColor} text-white text-[10px] px-2 py-0.5 rounded ml-2`}>{statusText}</div>
      </div>
    </div>
  )
}
