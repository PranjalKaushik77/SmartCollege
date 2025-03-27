"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { AlertCircle, Search, Download, BarChart3 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function FacultyAttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedCourse, setSelectedCourse] = useState("cs101")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock course data
  const courses = [
    { id: "cs101", name: "Computer Science 101", students: 32, attendanceRate: 92 },
    { id: "ap202", name: "Advanced Programming", students: 24, attendanceRate: 88 },
    { id: "db101", name: "Database Systems", students: 41, attendanceRate: 79 },
    { id: "web101", name: "Web Development", students: 30, attendanceRate: 85 },
  ]

  // Mock student data
  const students = [
    { id: 1, name: "John Smith", attendance: 95, present: true, atRisk: false },
    { id: 2, name: "Emily Johnson", attendance: 88, present: true, atRisk: false },
    { id: 3, name: "Michael Brown", attendance: 92, present: true, atRisk: false },
    { id: 4, name: "Jessica Davis", attendance: 75, present: false, atRisk: true },
    { id: 5, name: "David Wilson", attendance: 98, present: true, atRisk: false },
    { id: 6, name: "Sarah Martinez", attendance: 90, present: true, atRisk: false },
    { id: 7, name: "James Taylor", attendance: 72, present: false, atRisk: true },
    { id: 8, name: "Jennifer Anderson", attendance: 85, present: true, atRisk: false },
    { id: 9, name: "Robert Thomas", attendance: 93, present: true, atRisk: false },
    { id: 10, name: "Lisa Jackson", attendance: 68, present: false, atRisk: true },
  ]

  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const toggleAttendance = (studentId: number) => {
    // In a real app, this would update the student's attendance status
    console.log(`Toggled attendance for student ID: ${studentId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Attendance Management</h1>
        <div className="flex items-center space-x-2">
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <Card key={course.id} className={selectedCourse === course.id ? "border-primary" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.attendanceRate}%</div>
              <p className="text-xs text-muted-foreground">Average attendance rate</p>
              <div className="mt-2 text-xs">
                <span className="font-medium">{course.students}</span> students enrolled
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="take">
        <TabsList>
          <TabsTrigger value="take">Take Attendance</TabsTrigger>
          <TabsTrigger value="history">Attendance History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="take" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Take Attendance</CardTitle>
                  <CardDescription>
                    {courses.find((c) => c.id === selectedCourse)?.name} -{" "}
                    {date?.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search students..."
                      className="pl-8 w-[200px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 font-medium border-b">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5">Name</div>
                  <div className="col-span-2">ID</div>
                  <div className="col-span-2">Attendance %</div>
                  <div className="col-span-2 text-right">Present</div>
                </div>
                <div className="divide-y">
                  {filteredStudents.map((student, index) => (
                    <div key={student.id} className="grid grid-cols-12 p-4 items-center">
                      <div className="col-span-1 text-muted-foreground">{index + 1}</div>
                      <div className="col-span-5 font-medium flex items-center gap-2">
                        {student.name}
                        {student.atRisk && (
                          <Badge
                            variant="outline"
                            className="text-red-500 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800"
                          >
                            At Risk
                          </Badge>
                        )}
                      </div>
                      <div className="col-span-2 text-muted-foreground">STU-{1000 + student.id}</div>
                      <div className="col-span-2">
                        <Badge
                          variant={
                            student.attendance >= 85 ? "default" : student.attendance >= 75 ? "outline" : "destructive"
                          }
                        >
                          {student.attendance}%
                        </Badge>
                      </div>
                      <div className="col-span-2 text-right">
                        <Checkbox
                          id={`student-${student.id}`}
                          checked={student.present}
                          onCheckedChange={() => toggleAttendance(student.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Attendance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Attendance History</CardTitle>
                  <CardDescription>View past attendance records</CardDescription>
                </div>
              </div>
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
                    <p className="text-sm text-muted-foreground">
                      {courses.find((c) => c.id === selectedCourse)?.name}
                    </p>
                  </div>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 font-medium border-b">
                      <div className="col-span-1">#</div>
                      <div className="col-span-7">Name</div>
                      <div className="col-span-4 text-right">Status</div>
                    </div>
                    <div className="divide-y">
                      {students.map((student, index) => (
                        <div key={student.id} className="grid grid-cols-12 p-4 items-center">
                          <div className="col-span-1 text-muted-foreground">{index + 1}</div>
                          <div className="col-span-7 font-medium">{student.name}</div>
                          <div className="col-span-4 text-right">
                            <Badge variant={student.present ? "default" : "destructive"}>
                              {student.present ? "Present" : "Absent"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Analytics</CardTitle>
              <CardDescription>Insights and patterns from attendance data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Attendance Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-end justify-between gap-2">
                        {[85, 88, 92, 90, 94, 89, 92, 95].map((value, i) => (
                          <div key={i} className="relative h-full flex items-end">
                            <div className="w-9 bg-primary/90 rounded-t" style={{ height: `${value}%` }}></div>
                            <span className="absolute -bottom-6 text-xs text-muted-foreground">Week {i + 1}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 text-sm text-center">Attendance has been improving over the semester</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Students at Risk</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {students
                          .filter((student) => student.atRisk)
                          .map((student) => (
                            <div
                              key={student.id}
                              className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
                            >
                              <div className="font-medium">{student.name}</div>
                              <Badge variant="destructive">{student.attendance}%</Badge>
                            </div>
                          ))}
                        {students.filter((student) => student.atRisk).length === 0 && (
                          <div className="text-center py-4 text-muted-foreground">No students at risk currently</div>
                        )}
                      </div>
                      <Alert className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Attendance Alert</AlertTitle>
                        <AlertDescription>
                          3 students have attendance below 75% and are at risk of failing the course.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI-Powered Attendance Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Pattern Detection</h3>
                          <p className="text-sm text-muted-foreground">
                            Monday classes have 12% lower attendance than other days. Consider adjusting the schedule or
                            content to improve engagement.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Correlation Analysis</h3>
                          <p className="text-sm text-muted-foreground">
                            Students with attendance below 80% show a 35% decrease in exam performance. Early
                            intervention is recommended.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Predictive Insights</h3>
                          <p className="text-sm text-muted-foreground">
                            Based on current trends, overall attendance is predicted to increase by 5% by the end of the
                            semester.
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Generate Comprehensive Attendance Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

