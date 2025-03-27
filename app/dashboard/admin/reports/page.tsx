"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Calendar,
  Search,
  Users,
  GraduationCap,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Printer,
} from "lucide-react"
import { DatePickerWithRange } from "./date-range-picker"
import type { DateRange } from "react-day-picker"
import { addDays } from "date-fns"

export default function AdminReportsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedReport, setSelectedReport] = useState("enrollment")
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search reports..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedReport} onValueChange={setSelectedReport}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select report type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="enrollment">Enrollment Statistics</SelectItem>
            <SelectItem value="academic">Academic Performance</SelectItem>
            <SelectItem value="attendance">Attendance Reports</SelectItem>
            <SelectItem value="faculty">Faculty Reports</SelectItem>
            <SelectItem value="financial">Financial Reports</SelectItem>
            <SelectItem value="system">System Usage</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange date={date} setDate={setDate} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">+7.4%</span> from last semester
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.42</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">+0.12</span> from last semester
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.5%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500 font-medium">-2.3%</span> from last semester
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500 font-medium">+12.5%</span> from last year
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="enrollment">
        <TabsList>
          <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="enrollment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Enrollment Statistics</CardTitle>
              <CardDescription>Student enrollment by department and year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Enrollment by Department</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Computer Science</p>
                        <p className="text-sm text-muted-foreground">312 Students (25%)</p>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Business Administration</p>
                        <p className="text-sm text-muted-foreground">287 Students (23%)</p>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Engineering</p>
                        <p className="text-sm text-muted-foreground">245 Students (20%)</p>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Arts & Humanities</p>
                        <p className="text-sm text-muted-foreground">198 Students (16%)</p>
                      </div>
                      <Progress value={16} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Medicine & Health</p>
                        <p className="text-sm text-muted-foreground">176 Students (14%)</p>
                      </div>
                      <Progress value={14} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Other Departments</p>
                        <p className="text-sm text-muted-foreground">30 Students (2%)</p>
                      </div>
                      <Progress value={2} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Enrollment by Year</h3>
                  <div className="h-[300px] flex items-end justify-between gap-2">
                    {[
                      { year: "1st Year", count: 380, percent: 30 },
                      { year: "2nd Year", count: 350, percent: 28 },
                      { year: "3rd Year", count: 290, percent: 23 },
                      { year: "4th Year", count: 228, percent: 18 },
                    ].map((item, i) => (
                      <div key={i} className="relative h-full flex items-end">
                        <div
                          className="w-16 bg-primary/90 rounded-t text-center pt-2"
                          style={{ height: `${item.percent * 3}%` }}
                        >
                          <span className="text-xs font-medium text-primary-foreground">{item.count}</span>
                        </div>
                        <span className="absolute -bottom-6 text-xs text-muted-foreground w-16 text-center">
                          {item.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Enrollment Trends (Last 5 Years)</h3>
                <div className="h-[300px] flex items-end justify-between gap-2">
                  {[
                    { year: "2021", count: 980, percent: 78 },
                    { year: "2022", count: 1050, percent: 84 },
                    { year: "2023", count: 1120, percent: 90 },
                    { year: "2024", count: 1180, percent: 94 },
                    { year: "2025", count: 1248, percent: 100 },
                  ].map((item, i) => (
                    <div key={i} className="relative h-full flex items-end">
                      <div
                        className="w-24 bg-primary/90 rounded-t text-center pt-2"
                        style={{ height: `${item.percent}%` }}
                      >
                        <span className="text-xs font-medium text-primary-foreground">{item.count}</span>
                      </div>
                      <span className="absolute -bottom-6 text-xs text-muted-foreground w-24 text-center">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Data period: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance Reports</CardTitle>
              <CardDescription>GPA distribution and course performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">GPA Distribution</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">3.5 - 4.0</p>
                        <p className="text-sm text-muted-foreground">312 Students (25%)</p>
                      </div>
                      <Progress value={25} className="h-2 bg-green-100 dark:bg-green-900">
                        <div className="h-full bg-green-500 rounded-full" />
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">3.0 - 3.49</p>
                        <p className="text-sm text-muted-foreground">437 Students (35%)</p>
                      </div>
                      <Progress value={35} className="h-2 bg-blue-100 dark:bg-blue-900">
                        <div className="h-full bg-blue-500 rounded-full" />
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">2.5 - 2.99</p>
                        <p className="text-sm text-muted-foreground">312 Students (25%)</p>
                      </div>
                      <Progress value={25} className="h-2 bg-yellow-100 dark:bg-yellow-900">
                        <div className="h-full bg-yellow-500 rounded-full" />
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">2.0 - 2.49</p>
                        <p className="text-sm text-muted-foreground">125 Students (10%)</p>
                      </div>
                      <Progress value={10} className="h-2 bg-orange-100 dark:bg-orange-900">
                        <div className="h-full bg-orange-500 rounded-full" />
                      </Progress>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Below 2.0</p>
                        <p className="text-sm text-muted-foreground">62 Students (5%)</p>
                      </div>
                      <Progress value={5} className="h-2 bg-red-100 dark:bg-red-900">
                        <div className="h-full bg-red-500 rounded-full" />
                      </Progress>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Average GPA by Department</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Computer Science</p>
                        <p className="text-sm font-medium">3.65</p>
                      </div>
                      <Progress value={91.25} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Business Administration</p>
                        <p className="text-sm font-medium">3.42</p>
                      </div>
                      <Progress value={85.5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Engineering</p>
                        <p className="text-sm font-medium">3.38</p>
                      </div>
                      <Progress value={84.5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Arts & Humanities</p>
                        <p className="text-sm font-medium">3.51</p>
                      </div>
                      <Progress value={87.75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Medicine & Health</p>
                        <p className="text-sm font-medium">3.72</p>
                      </div>
                      <Progress value={93} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Course Success Rates</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 p-4 font-medium border-b">
                    <div className="col-span-4">Course</div>
                    <div className="col-span-2">Department</div>
                    <div className="col-span-2">Students</div>
                    <div className="col-span-2">Pass Rate</div>
                    <div className="col-span-2">Avg. Grade</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        course: "Introduction to Computer Science",
                        department: "CS",
                        students: 120,
                        passRate: 92,
                        avgGrade: "B+",
                      },
                      {
                        course: "Calculus I",
                        department: "Math",
                        students: 150,
                        passRate: 85,
                        avgGrade: "B",
                      },
                      {
                        course: "Introduction to Psychology",
                        department: "Psych",
                        students: 180,
                        passRate: 94,
                        avgGrade: "B+",
                      },
                      {
                        course: "Organic Chemistry",
                        department: "Chem",
                        students: 90,
                        passRate: 78,
                        avgGrade: "C+",
                      },
                      {
                        course: "World History",
                        department: "History",
                        students: 110,
                        passRate: 91,
                        avgGrade: "B+",
                      },
                    ].map((course, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-4 font-medium">{course.course}</div>
                        <div className="col-span-2">{course.department}</div>
                        <div className="col-span-2">{course.students}</div>
                        <div className="col-span-2">
                          <Badge
                            variant={
                              course.passRate >= 90 ? "default" : course.passRate >= 80 ? "secondary" : "destructive"
                            }
                          >
                            {course.passRate}%
                          </Badge>
                        </div>
                        <div className="col-span-2">{course.avgGrade}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Data period: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
              <CardDescription>Attendance rates and patterns across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Attendance by Department</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Computer Science</p>
                        <p className="text-sm font-medium">89%</p>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Business Administration</p>
                        <p className="text-sm font-medium">85%</p>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Engineering</p>
                        <p className="text-sm font-medium">92%</p>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Arts & Humanities</p>
                        <p className="text-sm font-medium">83%</p>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Medicine & Health</p>
                        <p className="text-sm font-medium">94%</p>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Attendance by Day of Week</h3>
                  <div className="h-[250px] flex items-end justify-between gap-2">
                    {[
                      { day: "Monday", rate: 82 },
                      { day: "Tuesday", rate: 88 },
                      { day: "Wednesday", rate: 85 },
                      { day: "Thursday", rate: 87 },
                      { day: "Friday", rate: 78 },
                    ].map((item, i) => (
                      <div key={i} className="relative h-full flex items-end">
                        <div
                          className="w-16 bg-primary/90 rounded-t text-center pt-2"
                          style={{ height: `${item.rate}%` }}
                        >
                          <span className="text-xs font-medium text-primary-foreground">{item.rate}%</span>
                        </div>
                        <span className="absolute -bottom-6 text-xs text-muted-foreground w-16 text-center">
                          {item.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Students with Low Attendance</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 p-4 font-medium border-b">
                    <div className="col-span-1">ID</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-3">Department</div>
                    <div className="col-span-2">Year</div>
                    <div className="col-span-2">Attendance</div>
                    <div className="col-span-1">Status</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        id: "STU1004",
                        name: "Jessica Davis",
                        department: "Computer Science",
                        year: "1st Year",
                        attendance: 68,
                        status: "At Risk",
                      },
                      {
                        id: "STU1007",
                        name: "James Taylor",
                        department: "Business Administration",
                        year: "2nd Year",
                        attendance: 65,
                        status: "At Risk",
                      },
                      {
                        id: "STU1015",
                        name: "Michael Johnson",
                        department: "Engineering",
                        year: "1st Year",
                        attendance: 72,
                        status: "Warning",
                      },
                      {
                        id: "STU1023",
                        name: "Sarah Williams",
                        department: "Arts & Humanities",
                        year: "3rd Year",
                        attendance: 70,
                        status: "Warning",
                      },
                      {
                        id: "STU1031",
                        name: "Robert Brown",
                        department: "Computer Science",
                        year: "2nd Year",
                        attendance: 69,
                        status: "At Risk",
                      },
                    ].map((student, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-1 text-muted-foreground">{student.id}</div>
                        <div className="col-span-3 font-medium">{student.name}</div>
                        <div className="col-span-3">{student.department}</div>
                        <div className="col-span-2">{student.year}</div>
                        <div className="col-span-2">
                          <Badge variant="destructive">{student.attendance}%</Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge
                            variant={student.status === "At Risk" ? "destructive" : "outline"}
                            className={
                              student.status === "Warning"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700"
                                : ""
                            }
                          >
                            {student.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Data period: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="faculty" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Faculty Reports</CardTitle>
              <CardDescription>Faculty performance and workload metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Faculty by Department</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Computer Science</p>
                        <p className="text-sm text-muted-foreground">18 Faculty (25%)</p>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Business Administration</p>
                        <p className="text-sm text-muted-foreground">15 Faculty (21%)</p>
                      </div>
                      <Progress value={21} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Engineering</p>
                        <p className="text-sm text-muted-foreground">14 Faculty (19%)</p>
                      </div>
                      <Progress value={19} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Arts & Humanities</p>
                        <p className="text-sm text-muted-foreground">12 Faculty (17%)</p>
                      </div>
                      <Progress value={17} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Medicine & Health</p>
                        <p className="text-sm text-muted-foreground">13 Faculty (18%)</p>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Teaching Load Distribution</h3>
                  <div className="h-[250px] flex items-end justify-between gap-2">
                    {[
                      { load: "1-2 Courses", count: 15, percent: 21 },
                      { load: "3-4 Courses", count: 38, percent: 53 },
                      { load: "5-6 Courses", count: 12, percent: 17 },
                      { load: "7+ Courses", count: 7, percent: 9 },
                    ].map((item, i) => (
                      <div key={i} className="relative h-full flex items-end">
                        <div
                          className="w-16 bg-primary/90 rounded-t text-center pt-2"
                          style={{ height: `${item.percent * 3}%` }}
                        >
                          <span className="text-xs font-medium text-primary-foreground">{item.count}</span>
                        </div>
                        <span className="absolute -bottom-6 text-xs text-muted-foreground w-16 text-center">
                          {item.load}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Faculty Performance Metrics</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 p-4 font-medium border-b">
                    <div className="col-span-3">Faculty Name</div>
                    <div className="col-span-2">Department</div>
                    <div className="col-span-2">Courses</div>
                    <div className="col-span-2">Students</div>
                    <div className="col-span-2">Avg. Rating</div>
                    <div className="col-span-1">Status</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        name: "Dr. Johnson",
                        department: "Computer Science",
                        courses: 4,
                        students: 120,
                        rating: 4.8,
                        status: "Active",
                      },
                      {
                        name: "Prof. Smith",
                        department: "Business",
                        courses: 3,
                        students: 95,
                        rating: 4.5,
                        status: "Active",
                      },
                      {
                        name: "Dr. Williams",
                        department: "Engineering",
                        courses: 5,
                        students: 145,
                        rating: 4.2,
                        status: "Active",
                      },
                      {
                        name: "Prof. Davis",
                        department: "Arts",
                        courses: 3,
                        students: 85,
                        rating: 4.7,
                        status: "Active",
                      },
                      {
                        name: "Dr. Wilson",
                        department: "Medicine",
                        courses: 4,
                        students: 110,
                        rating: 4.6,
                        status: "Active",
                      },
                    ].map((faculty, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-3 font-medium">{faculty.name}</div>
                        <div className="col-span-2">{faculty.department}</div>
                        <div className="col-span-2">{faculty.courses}</div>
                        <div className="col-span-2">{faculty.students}</div>
                        <div className="col-span-2">
                          <Badge
                            variant={
                              faculty.rating >= 4.5 ? "default" : faculty.rating >= 4.0 ? "secondary" : "outline"
                            }
                          >
                            {faculty.rating}/5.0
                          </Badge>
                        </div>
                        <div className="col-span-1">
                          <Badge variant="outline">{faculty.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Data period: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Revenue, expenses, and financial metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Revenue by Source</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Tuition Fees</p>
                        <p className="text-sm text-muted-foreground">$850,000 (70.8%)</p>
                      </div>
                      <Progress value={70.8} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Government Grants</p>
                        <p className="text-sm text-muted-foreground">$180,000 (15%)</p>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Private Donations</p>
                        <p className="text-sm text-muted-foreground">$120,000 (10%)</p>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Research Grants</p>
                        <p className="text-sm text-muted-foreground">$50,000 (4.2%)</p>
                      </div>
                      <Progress value={4.2} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Expenses by Category</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Faculty Salaries</p>
                        <p className="text-sm text-muted-foreground">$520,000 (52%)</p>
                      </div>
                      <Progress value={52} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Administrative Costs</p>
                        <p className="text-sm text-muted-foreground">$180,000 (18%)</p>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Facilities & Maintenance</p>
                        <p className="text-sm text-muted-foreground">$150,000 (15%)</p>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Research & Development</p>
                        <p className="text-sm text-muted-foreground">$100,000 (10%)</p>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Student Services</p>
                        <p className="text-sm text-muted-foreground">$50,000 (5%)</p>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Financial Trends (Last 5 Years)</h3>
                <div className="h-[300px] flex items-end justify-between gap-2">
                  {[
                    { year: "2021", revenue: 0.8, expenses: 0.75, profit: 0.05 },
                    { year: "2022", revenue: 0.9, expenses: 0.82, profit: 0.08 },
                    { year: "2023", revenue: 1.0, expenses: 0.9, profit: 0.1 },
                    { year: "2024", revenue: 1.1, expenses: 0.95, profit: 0.15 },
                    { year: "2025", revenue: 1.2, expenses: 1.0, profit: 0.2 },
                  ].map((item, i) => (
                    <div key={i} className="relative h-full flex items-end gap-1">
                      <div
                        className="w-10 bg-green-500 rounded-t text-center pt-1"
                        style={{ height: `${item.revenue * 250}px` }}
                      >
                        <span className="text-xs font-medium text-white">${item.revenue}M</span>
                      </div>
                      <div
                        className="w-10 bg-red-500 rounded-t text-center pt-1"
                        style={{ height: `${item.expenses * 250}px` }}
                      >
                        <span className="text-xs font-medium text-white">${item.expenses}M</span>
                      </div>
                      <div
                        className="w-10 bg-blue-500 rounded-t text-center pt-1"
                        style={{ height: `${item.profit * 250}px` }}
                      >
                        <span className="text-xs font-medium text-white">${item.profit}M</span>
                      </div>
                      <span className="absolute -bottom-6 text-xs text-muted-foreground w-32 text-center">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8 gap-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Revenue</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-sm">Expenses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">Profit</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Data period: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Usage Reports</CardTitle>
              <CardDescription>System performance and usage metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">User Activity by Role</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Students</p>
                        <p className="text-sm text-muted-foreground">1,248 Users (85%)</p>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Faculty</p>
                        <p className="text-sm text-muted-foreground">72 Users (5%)</p>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Administrators</p>
                        <p className="text-sm text-muted-foreground">15 Users (1%)</p>
                      </div>
                      <Progress value={1} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Staff</p>
                        <p className="text-sm text-muted-foreground">120 Users (8%)</p>
                      </div>
                      <Progress value={8} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Guests</p>
                        <p className="text-sm text-muted-foreground">15 Users (1%)</p>
                      </div>
                      <Progress value={1} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">System Access by Device</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Desktop</p>
                        <p className="text-sm text-muted-foreground">45%</p>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Mobile</p>
                        <p className="text-sm text-muted-foreground">35%</p>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Tablet</p>
                        <p className="text-sm text-muted-foreground">15%</p>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Other</p>
                        <p className="text-sm text-muted-foreground">5%</p>
                      </div>
                      <Progress value={5} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">System Performance Metrics</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 p-4 font-medium border-b">
                    <div className="col-span-3">Metric</div>
                    <div className="col-span-2">Current</div>
                    <div className="col-span-2">Average</div>
                    <div className="col-span-2">Peak</div>
                    <div className="col-span-3">Status</div>
                  </div>
                  <div className="divide-y">
                    {[
                      {
                        metric: "Server Response Time",
                        current: "120ms",
                        average: "150ms",
                        peak: "350ms",
                        status: "Healthy",
                      },
                      {
                        metric: "Database Load",
                        current: "45%",
                        average: "50%",
                        peak: "85%",
                        status: "Healthy",
                      },
                      {
                        metric: "Memory Usage",
                        current: "65%",
                        average: "60%",
                        peak: "90%",
                        status: "Healthy",
                      },
                      {
                        metric: "CPU Utilization",
                        current: "55%",
                        average: "45%",
                        peak: "95%",
                        status: "Healthy",
                      },
                      {
                        metric: "Storage Capacity",
                        current: "78%",
                        average: "75%",
                        peak: "85%",
                        status: "Warning",
                      },
                    ].map((metric, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-3 font-medium">{metric.metric}</div>
                        <div className="col-span-2">{metric.current}</div>
                        <div className="col-span-2">{metric.average}</div>
                        <div className="col-span-2">{metric.peak}</div>
                        <div className="col-span-3">
                          <Badge
                            variant={metric.status === "Healthy" ? "default" : "warning"}
                            className={
                              metric.status === "Warning"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700"
                                : ""
                            }
                          >
                            {metric.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Data period: {date?.from?.toLocaleDateString()} - {date?.to?.toLocaleDateString()}
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

