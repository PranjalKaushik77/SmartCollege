"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart3, BookOpen, FileText, Download, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function StudentGradesPage() {
  const [selectedSemester, setSelectedSemester] = useState("spring2023")

  // Mock grades data
  const courses = [
    {
      id: 1,
      name: "Computer Science 101",
      grade: "A",
      percentage: 92,
      credits: 3,
      instructor: "Dr. Johnson",
      assignments: [
        { name: "Assignment 1", grade: 88, maxGrade: 100, weight: 10 },
        { name: "Assignment 2", grade: 95, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 90, maxGrade: 100, weight: 30 },
        { name: "Project", grade: 94, maxGrade: 100, weight: 20 },
        { name: "Final Exam", grade: 92, maxGrade: 100, weight: 30 },
      ],
      trend: "up",
    },
    {
      id: 2,
      name: "Mathematics 202",
      grade: "A-",
      percentage: 88,
      credits: 4,
      instructor: "Prof. Smith",
      assignments: [
        { name: "Problem Set 1", grade: 85, maxGrade: 100, weight: 15 },
        { name: "Problem Set 2", grade: 88, maxGrade: 100, weight: 15 },
        { name: "Midterm Exam", grade: 87, maxGrade: 100, weight: 30 },
        { name: "Problem Set 3", grade: 90, maxGrade: 100, weight: 15 },
        { name: "Final Exam", grade: 89, maxGrade: 100, weight: 25 },
      ],
      trend: "stable",
    },
    {
      id: 3,
      name: "Physics 101",
      grade: "B+",
      percentage: 85,
      credits: 4,
      instructor: "Dr. Williams",
      assignments: [
        { name: "Lab Report 1", grade: 82, maxGrade: 100, weight: 10 },
        { name: "Lab Report 2", grade: 84, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 83, maxGrade: 100, weight: 25 },
        { name: "Lab Report 3", grade: 86, maxGrade: 100, weight: 10 },
        { name: "Lab Final", grade: 88, maxGrade: 100, weight: 15 },
        { name: "Final Exam", grade: 86, maxGrade: 100, weight: 30 },
      ],
      trend: "up",
    },
    {
      id: 4,
      name: "English Literature",
      grade: "A",
      percentage: 94,
      credits: 3,
      instructor: "Prof. Davis",
      assignments: [
        { name: "Essay 1", grade: 92, maxGrade: 100, weight: 15 },
        { name: "Presentation", grade: 95, maxGrade: 100, weight: 15 },
        { name: "Midterm Paper", grade: 94, maxGrade: 100, weight: 25 },
        { name: "Essay 2", grade: 93, maxGrade: 100, weight: 15 },
        { name: "Final Paper", grade: 95, maxGrade: 100, weight: 30 },
      ],
      trend: "up",
    },
  ]

  // Calculate GPA
  const calculateGPA = () => {
    const gradePoints = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      "D-": 0.7,
      F: 0.0,
    }

    let totalPoints = 0
    let totalCredits = 0

    courses.forEach((course) => {
      totalPoints += gradePoints[course.grade as keyof typeof gradePoints] * course.credits
      totalCredits += course.credits
    })

    return (totalPoints / totalCredits).toFixed(2)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Grades & Academic Performance</h1>
        <div className="flex items-center space-x-2">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spring2023">Spring 2023</SelectItem>
              <SelectItem value="fall2022">Fall 2022</SelectItem>
              <SelectItem value="spring2022">Spring 2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{calculateGPA()}</div>
            <p className="text-xs text-muted-foreground">On a 4.0 scale</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.credits, 0)}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
            <p className="text-xs text-muted-foreground">Currently enrolled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Academic Standing</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">Dean's List eligible</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">Current Grades</TabsTrigger>
          <TabsTrigger value="breakdown">Grade Breakdown</TabsTrigger>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Semester Grades</CardTitle>
              <CardDescription>Spring 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 p-4 font-medium border-b">
                  <div className="col-span-5">Course</div>
                  <div className="col-span-2">Credits</div>
                  <div className="col-span-2">Grade</div>
                  <div className="col-span-2">Percentage</div>
                  <div className="col-span-1">Trend</div>
                </div>
                <div className="divide-y">
                  {courses.map((course) => (
                    <div key={course.id} className="grid grid-cols-12 p-4 items-center">
                      <div className="col-span-5 font-medium">{course.name}</div>
                      <div className="col-span-2">{course.credits}</div>
                      <div className="col-span-2">
                        <Badge variant="outline" className="font-bold">
                          {course.grade}
                        </Badge>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-2">
                          <Progress value={course.percentage} className="h-2 w-16" />
                          <span className="text-sm">{course.percentage}%</span>
                        </div>
                      </div>
                      <div className="col-span-1">
                        {course.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : course.trend === "down" ? (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        ) : (
                          <Minus className="h-4 w-4 text-gray-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="breakdown" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Grade Breakdown</CardTitle>
                  <CardDescription>Detailed view of your grades by assignment</CardDescription>
                </div>
                <Select defaultValue={courses[0].id.toString()}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
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
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Badge variant="outline" className="font-bold">
                        {course.grade} ({course.percentage}%)
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      {course.assignments.map((assignment, index) => (
                        <div key={index} className="grid grid-cols-12 items-center gap-2">
                          <div className="col-span-5 text-sm">{assignment.name}</div>
                          <div className="col-span-2 text-sm text-muted-foreground">{assignment.weight}%</div>
                          <div className="col-span-3">
                            <Progress value={(assignment.grade / assignment.maxGrade) * 100} className="h-2" />
                          </div>
                          <div className="col-span-2 text-sm text-right">
                            {assignment.grade}/{assignment.maxGrade}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transcript" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Transcript</CardTitle>
              <CardDescription>Your complete academic record</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Spring 2023 (Current)</h3>
                  <div className="grid grid-cols-12 p-2 font-medium text-sm bg-muted rounded-md mb-2">
                    <div className="col-span-5">Course</div>
                    <div className="col-span-2">Credits</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-3">Status</div>
                  </div>
                  {courses.map((course) => (
                    <div key={course.id} className="grid grid-cols-12 p-2 text-sm border-b last:border-0">
                      <div className="col-span-5">{course.name}</div>
                      <div className="col-span-2">{course.credits}</div>
                      <div className="col-span-2">{course.grade}</div>
                      <div className="col-span-3">
                        <Badge variant="outline">In Progress</Badge>
                      </div>
                    </div>
                  ))}
                  <div className="mt-2 text-sm font-medium">
                    Term GPA: {calculateGPA()} | Credits: {courses.reduce((sum, course) => sum + course.credits, 0)}
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Fall 2022</h3>
                  <div className="grid grid-cols-12 p-2 font-medium text-sm bg-muted rounded-md mb-2">
                    <div className="col-span-5">Course</div>
                    <div className="col-span-2">Credits</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-3">Status</div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm border-b">
                    <div className="col-span-5">Introduction to Programming</div>
                    <div className="col-span-2">3</div>
                    <div className="col-span-2">A</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm border-b">
                    <div className="col-span-5">Calculus I</div>
                    <div className="col-span-2">4</div>
                    <div className="col-span-2">B+</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm border-b">
                    <div className="col-span-5">Introduction to Psychology</div>
                    <div className="col-span-2">3</div>
                    <div className="col-span-2">A-</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm">
                    <div className="col-span-5">Chemistry 101</div>
                    <div className="col-span-2">4</div>
                    <div className="col-span-2">B</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-medium">Term GPA: 3.42 | Credits: 14</div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Spring 2022</h3>
                  <div className="grid grid-cols-12 p-2 font-medium text-sm bg-muted rounded-md mb-2">
                    <div className="col-span-5">Course</div>
                    <div className="col-span-2">Credits</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-3">Status</div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm border-b">
                    <div className="col-span-5">English Composition</div>
                    <div className="col-span-2">3</div>
                    <div className="col-span-2">A</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm border-b">
                    <div className="col-span-5">World History</div>
                    <div className="col-span-2">3</div>
                    <div className="col-span-2">B+</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm border-b">
                    <div className="col-span-5">Introduction to Sociology</div>
                    <div className="col-span-2">3</div>
                    <div className="col-span-2">A-</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 p-2 text-sm">
                    <div className="col-span-5">Public Speaking</div>
                    <div className="col-span-2">2</div>
                    <div className="col-span-2">A</div>
                    <div className="col-span-3">
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-medium">Term GPA: 3.68 | Credits: 11</div>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <div>
                    <h3 className="font-medium">Cumulative Statistics</h3>
                    <p className="text-sm text-muted-foreground">Complete academic record</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      Cumulative GPA: <span className="font-bold">3.55</span>
                    </p>
                    <p className="text-sm">
                      Total Credits: <span className="font-bold">39</span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Official Transcript
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

