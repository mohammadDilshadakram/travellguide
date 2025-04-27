"use client"
import type { ThemeMode } from "@/app/page"
import MobileFrame from "../ui-elements/mobile-frame"
import { Sun, Moon, ArrowLeft, Calendar, MapPin, Clock, Users, Camera, Utensils } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ThirdPaneScreenProps {
  themeMode: ThemeMode
  toggleTheme: () => void
  onBack: () => void
}

export default function ThirdPaneScreen({ themeMode, toggleTheme, onBack }: ThirdPaneScreenProps) {
  const isDark = themeMode === "dark"

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="absolute -top-4 -right-4 z-10 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <MobileFrame themeMode={themeMode}>
        <div className="relative">
          <div className="relative h-[200px]">
            <Image
              src="/placeholder.svg?height=200&width=280"
              width={280}
              height={200}
              alt="Tokyo"
              className="w-full h-[200px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]"></div>
            <button onClick={onBack} className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full p-2">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="absolute bottom-4 left-4">
              <h1 className="text-white text-2xl font-bold">TOKYO</h1>
              <div className="flex items-center text-white text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                <span>27 JAN - 31 JAN, 2024</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center bg-[#313ddf] bg-opacity-10 rounded-full px-3 py-1">
                <MapPin className="w-3 h-3 text-[#313ddf] mr-1" />
                <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Japan</span>
              </div>
              <div className="flex items-center bg-[#313ddf] bg-opacity-10 rounded-full px-3 py-1">
                <Clock className="w-3 h-3 text-[#313ddf] mr-1" />
                <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>5 Days</span>
              </div>
              <div className="flex items-center bg-[#313ddf] bg-opacity-10 rounded-full px-3 py-1">
                <Users className="w-3 h-3 text-[#313ddf] mr-1" />
                <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Solo</span>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-4">
                  <div>
                    <h2 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>
                      About This Trip
                    </h2>
                    <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      Experience the vibrant culture and stunning landscapes of Tokyo. From ancient temples to modern
                      skyscrapers, this trip offers a perfect blend of tradition and innovation.
                    </p>
                  </div>

                  <div>
                    <h2 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>Highlights</h2>
                    <div className="grid grid-cols-2 gap-2">
                      <div className={`p-3 rounded-lg ${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"}`}>
                        <Camera className="w-5 h-5 text-[#313ddf] mb-1" />
                        <h3 className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>Iconic Sights</h3>
                        <p className="text-[#666666] text-xs">Tokyo Tower, Mt. Fuji views</p>
                      </div>
                      <div className={`p-3 rounded-lg ${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"}`}>
                        <Utensils className="w-5 h-5 text-[#ff6525] mb-1" />
                        <h3 className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>
                          Culinary Delights
                        </h3>
                        <p className="text-[#666666] text-xs">Sushi, Ramen, Street Food</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#313ddf]">Edit Trip Details</Button>
                </div>
              </TabsContent>

              <TabsContent value="itinerary">
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg ${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>Day 1 - Jan 27</h3>
                      <span className="text-[#313ddf] text-xs font-medium">Edit</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-[#313ddf] mt-1.5 mr-2"></div>
                        <div>
                          <p className={`text-xs ${isDark ? "text-white" : "text-black"}`}>
                            Senso-ji Temple & Nakamise Shopping Street
                          </p>
                          <p className="text-[#666666] text-[10px]">9:00 AM - 1:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-[#313ddf] mt-1.5 mr-2"></div>
                        <div>
                          <p className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Tokyo Sky Tree</p>
                          <p className="text-[#666666] text-[10px]">2:00 PM - 4:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-[#313ddf] mt-1.5 mr-2"></div>
                        <div>
                          <p className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Kimono Experience</p>
                          <p className="text-[#666666] text-[10px]">5:00 PM - 7:00 PM</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className={`p-3 rounded-lg ${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>Day 2 - Jan 28</h3>
                      <span className="text-[#313ddf] text-xs font-medium">Edit</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-[#313ddf] mt-1.5 mr-2"></div>
                        <div>
                          <p className={`text-xs ${isDark ? "text-white" : "text-black"}`}>
                            Meiji Shrine & Yoyogi Park
                          </p>
                          <p className="text-[#666666] text-[10px]">9:00 AM - 12:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-[#313ddf] mt-1.5 mr-2"></div>
                        <div>
                          <p className={`text-xs ${isDark ? "text-white" : "text-black"}`}>
                            Shibuya Crossing & Shopping
                          </p>
                          <p className="text-[#666666] text-[10px]">1:00 PM - 5:00 PM</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[#313ddf]">Add New Activity</Button>
                </div>
              </TabsContent>

              <TabsContent value="expenses">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>Total Budget</h2>
                    <span className={`text-lg font-bold ${isDark ? "text-white" : "text-black"}`}>$1,250.00</span>
                  </div>

                  <div className={`p-3 rounded-lg ${isDark ? "bg-[#1d1f24]" : "bg-[#f5f5f5]"}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDark ? "text-white" : "text-black"}`}>
                      Expenses Breakdown
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#313ddf] mr-2"></div>
                          <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Flight</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>$450.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#ff6525] mr-2"></div>
                          <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Accommodation</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>$350.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#90eb61] mr-2"></div>
                          <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Activities</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>$200.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#bfb5ff] mr-2"></div>
                          <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Food</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>$150.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-[#d9d9d9] mr-2"></div>
                          <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>Miscellaneous</span>
                        </div>
                        <span className={`text-xs ${isDark ? "text-white" : "text-black"}`}>$100.00</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#313ddf]">Add Expense</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </MobileFrame>
    </div>
  )
}
