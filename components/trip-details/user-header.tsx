interface UserHeaderProps {
  userName: string
  isDark: boolean
}

export default function UserHeader({ userName, isDark }: UserHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>Hello {userName}!</h2>
        <p className="text-[#666666] text-xs">Ready for the trip?</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-[#ff6525] flex items-center justify-center">
        <span className="text-white font-bold">{userName.charAt(0)}</span>
      </div>
    </div>
  )
}
