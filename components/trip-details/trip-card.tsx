"use client"

import Image from "next/image"

interface TripCardProps {
  destination: string
  dateRange: string
  imageSrc: string
  isDark: boolean
  onClick: () => void
}

export default function TripCard({ destination, dateRange, imageSrc, isDark, onClick }: TripCardProps) {
  return (
    <div className="relative mb-4 rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        width={280}
        height={150}
        alt={destination}
        className="w-full h-[150px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]"></div>
      <div className="absolute bottom-2 left-2">
        <h3 className="text-white text-2xl font-bold">{destination}</h3>
        <p className="text-white text-xs">{dateRange}</p>
      </div>
      <div className="absolute bottom-2 right-2 flex gap-1">
        <div className="bg-black bg-opacity-50 rounded-full p-1">
          <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="bg-black bg-opacity-50 rounded-full p-1">
          <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="bg-black bg-opacity-50 rounded-full p-1">
          <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
