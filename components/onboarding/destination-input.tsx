"use client"

interface DestinationInputProps {
  value: string
  onChange: (value: string) => void
  isDark: boolean
}

export default function DestinationInput({ value, onChange, isDark }: DestinationInputProps) {
  return (
    <div className="mb-6">
      <label className={`text-sm mb-2 block ${isDark ? "text-white" : "text-black"}`}>
        Where would you like to go?
      </label>
      <div className={`${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"} rounded-md p-3 flex items-center`}>
        <div className="w-4 h-4 rounded-full border border-[#666666] flex items-center justify-center mr-2">
          <div className="w-1 h-1 bg-[#666666] rounded-full"></div>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter Destination"
          className={`bg-transparent border-none outline-none w-full text-sm ${isDark ? "text-white" : "text-black"} placeholder:text-[#666666]`}
        />
      </div>
    </div>
  )
}
