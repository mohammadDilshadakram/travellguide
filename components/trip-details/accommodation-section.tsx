import HotelCard from "./hotel-card"

interface AccommodationSectionProps {
  isDark: boolean
}

export default function AccommodationSection({ isDark }: AccommodationSectionProps) {
  const hotels = [
    {
      id: 1,
      name: "Shinagawa Prince Hotel",
      checkIn: "01/27/2024, 11:00 am",
      checkOut: "01/31/2024, 9:00 am",
      nights: 3,
      status: "confirmed",
      imageSrc: "/placeholder.svg?height=60&width=110",
    },
    {
      id: 2,
      name: "Mercure Tokyo Hotel",
      checkIn: "01/27/2024, 11:00 am",
      checkOut: "01/31/2024, 9:00 am",
      nights: 3,
      status: "pending",
      imageSrc: "/placeholder.svg?height=60&width=110",
    },
  ]

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-sm ${isDark ? "text-white" : "text-black"}`}>Accommodation</h3>
        <span className="text-[#666666] text-xs cursor-pointer">See all</span>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            name={hotel.name}
            checkIn={hotel.checkIn}
            checkOut={hotel.checkOut}
            nights={hotel.nights}
            status={hotel.status as "confirmed" | "pending"}
            imageSrc={hotel.imageSrc}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  )
}
