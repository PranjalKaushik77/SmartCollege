"use client"
import React, { useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Sun, Moon, Camera, UserCircle2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Student interface with attendance tracking
interface Student {
  id: number;
  name: string;
  course: string;
  presentAtStart: boolean;
  presentAtEnd: boolean;
  cameraActiveStart: boolean;
  cameraActiveEnd: boolean;
  cameraErrorStart: string | null;
  cameraErrorEnd: string | null;
}

// Course interface to manage course-specific details
interface Course {
  id: string;
  name: string;
  time: string;
  room: string;
  students: Student[];
}

export default function FacultyDashboard() {
  // State to manage dashboard and facial recognition views
  const [isFacialRecognitionActive, setIsFacialRecognitionActive] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const [attendancePhase, setAttendancePhase] = useState<'start' | 'end'>('start');

  // Video refs for camera access
  const videoRefs = useRef<{[key: number]: HTMLVideoElement}>({});

  // Comprehensive courses and students data
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 'CS101',
      name: 'Computer Science 101',
      time: '9:00 AM - 10:30 AM',
      room: 'CS-201, Tech Center',
      students: [
        { 
          id: 1, 
          name: "Emily Johnson", 
          course: 'Computer Science 101',
          presentAtStart: false,
          presentAtEnd: false,
          cameraActiveStart: false,
          cameraActiveEnd: false,
          cameraErrorStart: null,
          cameraErrorEnd: null
        },
        { 
          id: 2, 
          name: "Michael Chen", 
          course: 'Computer Science 101',
          presentAtStart: false,
          presentAtEnd: false,
          cameraActiveStart: false,
          cameraActiveEnd: false,
          cameraErrorStart: null,
          cameraErrorEnd: null
        },
        { 
          id: 3, 
          name: "Sarah Rodriguez", 
          course: 'Computer Science 101',
          presentAtStart: false,
          presentAtEnd: false,
          cameraActiveStart: false,
          cameraActiveEnd: false,
          cameraErrorStart: null,
          cameraErrorEnd: null
        }
      ]
    },
    {
      id: 'PROG201',
      name: 'Advanced Programming',
      time: '11:00 AM - 12:30 PM',
      room: 'CS-302, Innovation Building',
      students: [
        { 
          id: 4, 
          name: "Alex Kim", 
          course: 'Advanced Programming',
          presentAtStart: false,
          presentAtEnd: false,
          cameraActiveStart: false,
          cameraActiveEnd: false,
          cameraErrorStart: null,
          cameraErrorEnd: null
        },
        { 
          id: 5, 
          name: "Rachel Green", 
          course: 'Advanced Programming',
          presentAtStart: false,
          presentAtEnd: false,
          cameraActiveStart: false,
          cameraActiveEnd: false,
          cameraErrorStart: null,
          cameraErrorEnd: null
        }
      ]
    }
  ]);

  // Handle attendance button click
  const handleAttendance = (course: Course, phase: 'start' | 'end') => {
    setCurrentCourse(course);
    setAttendancePhase(phase);
    setIsFacialRecognitionActive(true);
  };

  // Return to dashboard view
  const handleBackToDashboard = () => {
    setIsFacialRecognitionActive(false);
    setCurrentCourse(null);
    resetAttendance();
  };

  // Start camera for a specific student
  const startCamera = async (studentId: number) => {
    try {
      // Check if camera access is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera access not supported in this browser")
      }

      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      })

      // Update courses state
      setCourses(prevCourses => 
        prevCourses.map(course => ({
          ...course,
          students: course.students.map(student => {
            if (student.id === studentId) {
              // Set video source for this student
              const videoElement = videoRefs.current[studentId];
              if (videoElement) {
                videoElement.srcObject = stream;
                videoElement.play().catch((e: Error) => {
                  console.error("Error playing video:", e)
                })
              }

              // Update camera active state based on attendance phase
              return { 
                ...student, 
                [`cameraActive${attendancePhase === 'start' ? 'Start' : 'End'}`]: true,
                [`cameraError${attendancePhase === 'start' ? 'Start' : 'End'}`]: null
              }
            }
            // Deactivate cameras for other students
            return { 
              ...student, 
              cameraActiveStart: false,
              cameraActiveEnd: false,
              cameraErrorStart: null,
              cameraErrorEnd: null
            }
          })
        }))
      )

      // Simulate face detection after 3 seconds
      setTimeout(() => {
        captureAndDetectFace(studentId, stream)
      }, 3000)

    } catch (error) {
      console.error("Camera access error:", error)
      
      // Update courses state with error
      setCourses(prevCourses => 
        prevCourses.map(course => ({
          ...course,
          students: course.students.map(student => 
            student.id === studentId
              ? { 
                  ...student, 
                  [`cameraActive${attendancePhase === 'start' ? 'Start' : 'End'}`]: false, 
                  [`cameraError${attendancePhase === 'start' ? 'Start' : 'End'}`]: 
                    error instanceof Error ? error.message : "Failed to access camera"
                }
              : student
          )
        }))
      )
    }
  };

  // Simulate face detection
  const captureAndDetectFace = (studentId: number, stream: MediaStream) => {
    // Stop camera stream
    if (stream) {
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
    }

    // Update courses state
    setCourses(prevCourses => 
      prevCourses.map(course => ({
        ...course,
        students: course.students.map(student => 
          student.id === studentId 
            ? { 
                ...student, 
                [`present${attendancePhase === 'start' ? 'AtStart' : 'AtEnd'}`]: true,
                [`cameraActive${attendancePhase === 'start' ? 'Start' : 'End'}`]: false 
              } 
            : student
        )
      }))
    )
  };

  // Reset attendance
  const resetAttendance = () => {
    setCourses(prevCourses => 
      prevCourses.map(course => ({
        ...course,
        students: course.students.map(student => ({ 
          ...student, 
          presentAtStart: false,
          presentAtEnd: false,
          cameraActiveStart: false,
          cameraActiveEnd: false,
          cameraErrorStart: null,
          cameraErrorEnd: null
        }))
      }))
    )
  };

  // Render facial recognition content
  const renderFacialRecognition = () => {
    if (!currentCourse) return null;

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {`Facial Recognition Attendance - ${currentCourse.name} `}
              <Badge variant={attendancePhase === 'start' ? 'default' : 'secondary'}>
                {attendancePhase === 'start' ? 'Class Start' : 'Class End'}
              </Badge>
            </span>
            <div className="space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetAttendance}
              >
                Reset
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={handleBackToDashboard}
              >
                Back to Dashboard
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentCourse.students.map((student) => (
              <div 
                key={student.id} 
                className={`relative flex items-center justify-between p-4 border rounded-md ${
                  (attendancePhase === 'start' ? student.presentAtStart : student.presentAtEnd)
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                {/* Student Camera Preview */}
                {(attendancePhase === 'start' ? student.cameraActiveStart : student.cameraActiveEnd) && (
                  <div className="absolute top-0 left-0 w-full h-full z-10">
                    <video 
                      ref={(el) => {
                        if (el) videoRefs.current[student.id] = el;
                      }}
                      autoPlay 
                      playsInline
                      muted
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                )}

                {/* Student Info */}
                <div className="flex items-center space-x-4 z-20 relative">
                  <UserCircle2 className="h-10 w-10 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.course}</p>
                  </div>
                </div>

                {/* Camera Error Message */}
                {(attendancePhase === 'start' ? student.cameraErrorStart : student.cameraErrorEnd) && (
                  <div className="flex items-center text-red-500">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    <span className="text-sm">
                      {attendancePhase === 'start' ? student.cameraErrorStart : student.cameraErrorEnd}
                    </span>
                  </div>
                )}

                {/* Action Button */}
                {(attendancePhase === 'start' ? student.presentAtStart : student.presentAtEnd) ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle2 className="mr-2 h-6 w-6" />
                    <span>Attendance Marked</span>
                  </div>
                ) : (
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => startCamera(student.id)}
                    disabled={(attendancePhase === 'start' ? student.cameraActiveStart : student.cameraActiveEnd)}
                    className="z-20 relative"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Detect Face
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  // Main dashboard render
  return (
    <div className="space-y-6">
      {/* If facial recognition is active, render facial recognition component */}
      {isFacialRecognitionActive ? (
        renderFacialRecognition()
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h1 className="text-2xl font-bold tracking-tight">Faculty Dashboard</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Current Semester:</span>
              <span className="text-sm font-medium">Spring 2025</span>
            </div>
          </div>

          <Tabs defaultValue="schedule">
            <TabsList>
              <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
              <TabsTrigger value="courses">Course Status</TabsTrigger>
              <TabsTrigger value="notifications">Recent Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Classes</CardTitle>
                  <p className="text-sm text-muted-foreground">Monday, March 26, 2025</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div 
                        key={course.id} 
                        className="flex items-start space-x-4 rounded-md border p-4"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="space-y-1 flex-grow">
                          <p className="text-sm font-medium leading-none">{course.name}</p>
                          <p className="text-sm text-muted-foreground">{course.time}</p>
                          <p className="text-sm">{course.room}</p>
                          <div className="flex items-center pt-2 space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleAttendance(course, 'start')}
                            >
                              <Sun className="mr-2 h-4 w-4" />
                              Start of Class
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleAttendance(course, 'end')}
                            >
                              <Moon className="mr-2 h-4 w-4" />
                              End of Class
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}