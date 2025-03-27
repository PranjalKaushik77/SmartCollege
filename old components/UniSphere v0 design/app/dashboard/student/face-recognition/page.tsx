"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Camera, CheckCircle2, AlertCircle, RefreshCw, Clock, Calendar } from "lucide-react"

export default function FaceRecognitionPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [attendanceStatus, setAttendanceStatus] = useState<"none" | "success" | "error">("none")
  const [attendanceMessage, setAttendanceMessage] = useState("")
  const [currentClass, setCurrentClass] = useState<any>(null)

  // Mock class schedule data
  const classSchedule = [
    {
      id: 1,
      name: "Computer Science 101",
      time: "9:00 AM - 10:30 AM",
      room: "CS-201",
      building: "Tech Center",
      instructor: "Dr. Johnson",
      isNow: true,
    },
    {
      id: 2,
      name: "Mathematics 202",
      time: "11:00 AM - 12:30 PM",
      room: "M-105",
      building: "Science Hall",
      instructor: "Prof. Smith",
      isNow: false,
    },
    {
      id: 3,
      name: "Physics Lab",
      time: "2:00 PM - 4:00 PM",
      room: "P-302",
      building: "Science Hall",
      instructor: "Dr. Williams",
      isNow: false,
    },
  ]

  useEffect(() => {
    // Find current class
    const current = classSchedule.find((c) => c.isNow)
    setCurrentClass(current || null)
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      setAttendanceStatus("error")
      setAttendanceMessage("Could not access camera. Please check permissions and try again.")
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setIsCameraActive(false)
    }
  }

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current || !isCameraActive) return

    setIsProcessing(true)

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    if (!context) return

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    // In a real app, you would send this image to your backend for face recognition
    // For demo purposes, we'll simulate a response after a delay
    setTimeout(() => {
      // Simulate successful face recognition
      if (currentClass) {
        setAttendanceStatus("success")
        setAttendanceMessage(`Attendance marked for ${currentClass.name}`)
      } else {
        setAttendanceStatus("error")
        setAttendanceMessage("No class is currently in session")
      }
      setIsProcessing(false)
      stopCamera()
    }, 2000)
  }

  const resetAttendance = () => {
    setAttendanceStatus("none")
    setAttendanceMessage("")
    stopCamera()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Face Recognition Attendance</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Mark Attendance</CardTitle>
            <CardDescription>Use face recognition to mark your attendance for current class</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-video bg-muted rounded-lg overflow-hidden mb-4">
              {isCameraActive ? (
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover"></video>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Camera className="h-16 w-16 text-muted-foreground opacity-50" />
                </div>
              )}
              <canvas ref={canvasRef} className="hidden"></canvas>
            </div>

            {attendanceStatus === "success" && (
              <Alert className="mb-4 bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>{attendanceMessage}</AlertDescription>
              </Alert>
            )}

            {attendanceStatus === "error" && (
              <Alert className="mb-4 bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-800">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{attendanceMessage}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-2 w-full">
              {!isCameraActive && attendanceStatus === "none" && (
                <Button onClick={startCamera} className="flex-1">
                  <Camera className="mr-2 h-4 w-4" />
                  Start Camera
                </Button>
              )}

              {isCameraActive && !isProcessing && (
                <Button onClick={captureImage} className="flex-1" variant="default">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Capture & Verify
                </Button>
              )}

              {isProcessing && (
                <Button disabled className="flex-1">
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </Button>
              )}

              {(isCameraActive || attendanceStatus !== "none") && (
                <Button onClick={resetAttendance} variant="outline">
                  Reset
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your classes for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {classSchedule.map((classItem) => (
                <div
                  key={classItem.id}
                  className={`p-4 border rounded-lg ${classItem.isNow ? "bg-primary/10 border-primary/20" : ""}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{classItem.name}</h3>
                    {classItem.isNow ? (
                      <Badge variant="default">Current</Badge>
                    ) : (
                      <Badge variant="outline">Upcoming</Badge>
                    )}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        Room: {classItem.room}, {classItem.building}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="ml-6">Instructor: {classItem.instructor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>Your attendance record for this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">92%</div>
                <div className="text-sm text-muted-foreground">Computer Science 101</div>
                <div className="mt-2 text-xs">
                  <span className="text-green-600 dark:text-green-400">23/25 classes attended</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">88%</div>
                <div className="text-sm text-muted-foreground">Mathematics 202</div>
                <div className="mt-2 text-xs">
                  <span className="text-green-600 dark:text-green-400">21/24 classes attended</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">79%</div>
                <div className="text-sm text-muted-foreground">Physics 101</div>
                <div className="mt-2 text-xs">
                  <span className="text-amber-600 dark:text-amber-400">19/24 classes attended</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">96%</div>
                <div className="text-sm text-muted-foreground">English Literature</div>
                <div className="mt-2 text-xs">
                  <span className="text-green-600 dark:text-green-400">24/25 classes attended</span>
                </div>
              </div>
            </div>

            <Alert className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Attendance Warning</AlertTitle>
              <AlertDescription>
                Your attendance in Physics 101 is at 79%. If it falls below 75%, you may be debarred from the final
                exam.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Detailed Attendance Report
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

