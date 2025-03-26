"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, AlertCircle, BarChart3, Mic } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function StudentAttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isListening, setIsListening] = useState(false)

  // Mock attendance data
  const courses = [
    {
      id: 1,
      name: "Computer Science 101",
      attendance: 92,
      classes: 25,
      present: 23,
      absent: 2,
      prediction: "high",
      schedule: [
        { date: "2025-03-20", status: "present" },
        { date: "2025-03-22", status: "present" },
        { date: "2025-03-24", status: "present" },
        { date: "2025-03-26", status: "present" },
      ],
    },
    {
      id: 2,
      name: "Mathematics 202",
      attendance: 88,
      classes: 24,
      present: 21,
      absent: 3,
      prediction: "medium",
      schedule: [
        { date: "2025-03-21", status: "present" },
        { date: "2025-03-23", status: "absent" },
        { date: "2025-03-25", status: "present" },
        { date: "2025-03-27", status: "present" },
      ],
    },
    {
      id: 3,
      name: "Physics 101",
      attendance: 79,
      classes: 24,
      present: 19,
      absent: 5,
      prediction: "low",
      schedule: [
        { date: "2025-03-20", status: "absent" },
        { date: "2025-03-22", status: "present" },
        { date: "2025-03-24", status: "present" },
        { date: "2025-03-26", status: "present" },
      ],
    },
    {
      id: 4,
      name: "English Literature",
      attendance: 96,
      classes: 25,
      present: 24,
      absent: 1,
      prediction: "high",
      schedule: [
        { date: "2025-03-21", status: "present" },
        { date: "2025-03-23", status: "present" },
        { date: "2025-03-25", status: "present" },
        { date: "2025-03-27", status: "present" },
      ],
    },
  ]

  const handleVoiceAssistant = () => {
    setIsListening(true)
    // In a real app, this would activate speech recognition
    setTimeout(() => {
      setIsListening(false)
      // Mock response - would be handled by a voice assistant API
      alert("Your next class is Computer Science 101 at 9:00 AM in Room CS-201.")
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Attendance Management</h1>
        <Button onClick={handleVoiceAssistant} className="flex items-center gap-2">
          <Mic className={`h-4 w-4 ${isListening ? "animate-pulse text-red-500" : ""}`} />
          {isListening ? "Listening..." : "Voice Assistant"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.attendance}%</div>
              <Progress value={course.attendance} className="h-2 mt-2" />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Present: {course.present}</span>
                <span>Absent: {course.absent}</span>
                <span>Total: {course.classes}</span>
              </div>
              {course.prediction === "low" && (
                <Alert className="mt-3 py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle className="text-xs font-medium">Attendance Warning</AlertTitle>
                  <AlertDescription className="text-xs">
                    Your attendance is below the required threshold.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="calendar">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="details">Detailed View</TabsTrigger>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Calendar</CardTitle>
              <CardDescription>View your attendance records by date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">
                      {date?.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {courses.map((course) => {
                      // Find if there's an attendance record for the selected date
                      const dateString = date?.toISOString().split("T")[0]
                      const attendanceRecord = course.schedule.find((s) => s.date === dateString)

                      return (
                        <div key={course.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{course.name}</p>
                            <p className="text-sm text-muted-foreground">9:00 AM - 10:30 AM</p>
                          </div>
                          <div>
                            {attendanceRecord ? (
                              <Badge variant={attendanceRecord.status === "present" ? "default" : "destructive"}>
                                {attendanceRecord.status === "present" ? "Present" : "Absent"}
                              </Badge>
                            ) : (
                              <Badge variant="outline">No Class</Badge>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Attendance Details</CardTitle>
                  <CardDescription>Detailed view of your attendance records</CardDescription>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id.toString()}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">{course.name}</h3>
                      <Badge
                        variant={
                          course.attendance >= 85 ? "default" : course.attendance >= 75 ? "outline" : "destructive"
                        }
                      >
                        {course.attendance}% Attendance
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {course.schedule.map((session, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                          <div className="flex items-center">
                            {session.status === "present" ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500 mr-2" />
                            )}
                            <span>
                              {new Date(session.date).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <Badge variant={session.status === "present" ? "outline" : "destructive"}>
                            {session.status === "present" ? "Present" : "Absent"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Attendance Predictions</CardTitle>
              <CardDescription>Smart predictions based on your attendance patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">{course.name}</h3>
                      <Badge
                        variant={
                          course.prediction === "high"
                            ? "default"
                            : course.prediction === "medium"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {course.prediction === "high"
                          ? "High Attendance Probability"
                          : course.prediction === "medium"
                            ? "Medium Attendance Risk"
                            : "Low Attendance Warning"}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      {course.prediction === "low" && (
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Attendance Risk Detected</AlertTitle>
                          <AlertDescription>
                            Based on your current attendance pattern, you are at risk of falling below the required
                            attendance threshold for this course. We recommend attending all upcoming classes.
                          </AlertDescription>
                        </Alert>
                      )}

                      {course.prediction === "medium" && (
                        <Alert variant="outline">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Moderate Attendance Risk</AlertTitle>
                          <AlertDescription>
                            Your attendance is currently acceptable but could improve. Try to maintain consistent
                            attendance for the remainder of the semester.
                          </AlertDescription>
                        </Alert>
                      )}

                      {course.prediction === "high" && (
                        <Alert
                          variant="default"
                          className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          <AlertTitle>Excellent Attendance</AlertTitle>
                          <AlertDescription>
                            You're maintaining excellent attendance in this course. Keep up the good work!
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Attendance Forecast</h4>
                        <div className="grid grid-cols-5 gap-2">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="text-center">
                              <div
                                className={`h-20 rounded-md flex items-center justify-center ${
                                  course.prediction === "high"
                                    ? "bg-green-100 dark:bg-green-900"
                                    : course.prediction === "medium" && i > 2
                                      ? "bg-amber-100 dark:bg-amber-900"
                                      : course.prediction === "low" && i > 1
                                        ? "bg-red-100 dark:bg-red-900"
                                        : "bg-green-100 dark:bg-green-900"
                                }`}
                              >
                                <span className="text-xs">
                                  {course.prediction === "high"
                                    ? "Present"
                                    : course.prediction === "medium" && i > 2
                                      ? "At Risk"
                                      : course.prediction === "low" && i > 1
                                        ? "Likely Absent"
                                        : "Present"}
                                </span>
                              </div>
                              <span className="text-xs text-muted-foreground">Week {i + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

