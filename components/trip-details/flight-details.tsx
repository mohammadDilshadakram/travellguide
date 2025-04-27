interface FlightDetailsProps {
  departureDate: string
  departureCode: string
  departureCity: string
  arrivalCode: string
  arrivalCity: string
  price: number
  isDark: boolean
}

export default function FlightDetails({
  departureDate,
  departureCode,
  departureCity,
  arrivalCode,
  arrivalCity,
  price,
  isDark,
}: FlightDetailsProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-sm ${isDark ? "text-white" : "text-black"}`}>Flight Details</h3>
        <span className="text-[#666666] text-xs">${price.toFixed(2)}</span>
      </div>
      <div className={`${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"} rounded-lg p-3`}>
        <div className="text-[#666666] text-xs mb-1">{departureDate}</div>
        <div className="flex items-center justify-between">
          <div>
            <div className={`font-bold ${isDark ? "text-white" : "text-black"}`}>{departureCode}</div>
            <div className="text-[#666666] text-xs">{departureCity}</div>
          </div>
          <div className="flex items-center">
            <div className="h-[1px] w-10 bg-[#666666]"></div>
            <div className="w-2 h-2 rounded-full bg-[#666666]"></div>
            <div className="h-[1px] w-10 bg-[#666666]"></div>
          </div>
          <div>
            <div className={`font-bold ${isDark ? "text-white" : "text-black"}`}>{arrivalCode}</div>
            <div className="text-[#666666] text-xs">{arrivalCity}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
