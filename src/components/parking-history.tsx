import { ArrowLeft, Calendar, MapPin, Clock, DollarSign, TrendingUp, Car, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ParkingHistoryProps {
  onNavigate: (screen: string) => void;
}

export function ParkingHistory({ onNavigate }: ParkingHistoryProps) {
  const historyData = [
    {
      id: "PK2459",
      location: "Downtown Plaza",
      address: "123 Main Street",
      date: "Sep 9, 2025",
      duration: "4 hours",
      cost: 34.00,
      status: "completed",
      spotId: "A-23",
      startTime: "2:00 PM",
      endTime: "6:00 PM"
    },
    {
      id: "PK2458",
      location: "City Center Garage", 
      address: "456 Center Ave",
      date: "Sep 7, 2025",
      duration: "2 hours",
      cost: 13.00,
      status: "completed",
      spotId: "B-15",
      startTime: "10:00 AM",
      endTime: "12:00 PM"
    },
    {
      id: "PK2457",
      location: "Airport Terminal",
      address: "789 Airport Rd",
      date: "Sep 5, 2025",
      duration: "3 days",
      cost: 120.00,
      status: "completed",
      spotId: "C-08",
      startTime: "6:00 AM",
      endTime: "8:00 PM"
    },
    {
      id: "PK2456",
      location: "Mall Parking",
      address: "321 Shopping Blvd",
      date: "Sep 3, 2025",
      duration: "6 hours",
      cost: 24.00,
      status: "cancelled",
      spotId: "D-12",
      startTime: "11:00 AM",
      endTime: "5:00 PM"
    },
    {
      id: "PK2455",
      location: "Downtown Plaza",
      address: "123 Main Street",
      date: "Sep 1, 2025", 
      duration: "8 hours",
      cost: 64.00,
      status: "completed",
      spotId: "A-18",
      startTime: "9:00 AM",
      endTime: "5:00 PM"
    }
  ];

  const monthlyStats = {
    totalBookings: 12,
    totalSpent: 245.50,
    avgDuration: "3.2 hours",
    favLocation: "Downtown Plaza"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "ongoing":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1B1F73] text-white p-4 pt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="mr-4"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl">Parking History</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-white">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history" className="space-y-4 mt-4">
            {/* Filter Controls */}
            <div className="flex space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="month">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* History List */}
            <div className="space-y-3">
              {historyData.map((booking) => (
                <Card key={booking.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium">{booking.location}</h3>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">#{booking.id} • Spot {booking.spotId}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#1B1F73]">${booking.cost.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">{booking.duration}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{booking.startTime} - {booking.endTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.address}</span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4 mt-4">
            {/* Monthly Overview */}
            <Card className="p-4">
              <h3 className="font-medium mb-4">September 2025 Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span className="text-2xl font-medium text-blue-600">{monthlyStats.totalBookings}</span>
                  </div>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                </div>
                
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-2xl font-medium text-green-600">${monthlyStats.totalSpent}</span>
                  </div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                </div>
                
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-lg font-medium text-purple-600">{monthlyStats.avgDuration}</span>
                  </div>
                  <p className="text-sm text-gray-600">Avg Duration</p>
                </div>
                
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-600">{monthlyStats.favLocation}</span>
                  </div>
                  <p className="text-sm text-gray-600">Top Location</p>
                </div>
              </div>
            </Card>

            {/* Spending Trends */}
            <Card className="p-4">
              <h3 className="font-medium mb-4">Weekly Spending Trend</h3>
              <div className="space-y-3">
                {[
                  { week: "Week 1", amount: 45.50, percentage: 60 },
                  { week: "Week 2", amount: 78.20, percentage: 100 },
                  { week: "Week 3", amount: 67.80, percentage: 85 },
                  { week: "Week 4", amount: 54.00, percentage: 70 }
                ].map((week, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-16">{week.week}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-[#1B1F73] h-3 rounded-full transition-all duration-300"
                        style={{ width: `${week.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-16 text-right">${week.amount}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Frequent Locations */}
            <Card className="p-4">
              <h3 className="font-medium mb-4">Most Used Locations</h3>
              <div className="space-y-3">
                {[
                  { location: "Downtown Plaza", visits: 5, percentage: 100 },
                  { location: "City Center Garage", visits: 3, percentage: 60 },
                  { location: "Airport Terminal", visits: 2, percentage: 40 },
                  { location: "Mall Parking", visits: 2, percentage: 40 }
                ].map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{location.location}</p>
                      <div className="bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${location.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium ml-4">{location.visits} visits</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}