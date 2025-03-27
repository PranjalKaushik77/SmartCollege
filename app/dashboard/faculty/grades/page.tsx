"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter, BarChart3, FileText, Edit, CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function FacultyGradesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("CS101")
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)

  // Mock courses data
  const courses = [
    { id: "CS101", name: "Computer Science 101", students: 32 },
    { id: "CS202", name: "Data Structures and Algorithms", students: 26 },
    { id: "CS305", name: "Artificial Intelligence", students: 28 },
    { id: "CS210", name: "Web Development", students: 30 },
  ]

  // Mock students data
  const students = [
    {
      id: "STU1001",
      name: "John Smith",
      email: "john.smith@example.com",
      attendance: 92,
      currentGrade: "A",
      gradePercentage: 94,
      assignments: [
        { name: "Assignment 1", grade: 95, maxGrade: 100, weight: 10 },
        { name: "Assignment 2", grade: 88, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 92, maxGrade: 100, weight: 30 },
        { name: "Project", grade: 96, maxGrade: 100, weight: 20 },
        { name: "Final Exam", grade: 95, maxGrade: 100, weight: 30 },
      ],
    },
    {
      id: "STU1002",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      attendance: 88,
      currentGrade: "A-",
      gradePercentage: 91,
      assignments: [
        { name: "Assignment 1", grade: 90, maxGrade: 100, weight: 10 },
        { name: "Assignment 2", grade: 85, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 88, maxGrade: 100, weight: 30 },
        { name: "Project", grade: 94, maxGrade: 100, weight: 20 },
        { name: "Final Exam", grade: 92, maxGrade: 100, weight: 30 },
      ],
    },
    {
      id: "STU1003",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      attendance: 95,
      currentGrade: "A",
      gradePercentage: 96,
      assignments: [
        { name: "Assignment 1", grade: 98, maxGrade: 100, weight: 10 },
        { name: "Assignment 2", grade: 95, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 94, maxGrade: 100, weight: 30 },
        { name: "Project", grade: 97, maxGrade: 100, weight: 20 },
        { name: "Final Exam", grade: 96, maxGrade: 100, weight: 30 },
      ],
    },
    {
      id: "STU1004",
      name: "Jessica Davis",
      email: "jessica.davis@example.com",
      attendance: 75,
      currentGrade: "B",
      gradePercentage: 82,
      assignments: [
        { name: "Assignment 1", grade: 78, maxGrade: 100, weight: 10 },
        { name: "Assignment 2", grade: 80, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 82, maxGrade: 100, weight: 30 },
        { name: "Project", grade: 85, maxGrade: 100, weight: 20 },
        { name: "Final Exam", grade: 83, maxGrade: 100, weight: 30 },
      ],
    },
    {
      id: "STU1005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      attendance: 98,
      currentGrade: "A+",
      gradePercentage: 98,
      assignments: [
        { name: "Assignment 1", grade: 100, maxGrade: 100, weight: 10 },
        { name: "Assignment 2", grade: 98, maxGrade: 100, weight: 10 },
        { name: "Midterm Exam", grade: 96, maxGrade: 100, weight: 30 },
        { name: "Project", grade: 99, maxGrade: 100, weight: 20 },
        { name: "Final Exam", grade: 98, maxGrade: 100, weight: 30 },
      ],
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const selectedStudentData = selectedStudent ? students.find((student) => student.id === selectedStudent) : null

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Grade Management</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Grades
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            className={selectedCourse === course.id ? "border-primary" : ""}
            onClick={() => setSelectedCourse(course.id)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{course.name}</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.id}</div>
              <p className="text-xs text-muted-foreground">{course.students} students enrolled</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search students..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <CardDescription>
              {selectedCourse} - {courses.find((c) => c.id === selectedCourse)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className={`flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer ${
                    selectedStudent === student.id ? "bg-secondary/50" : ""
                  }`}
                  onClick={() => setSelectedStudent(student.id)}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{student.name}</p>
                      <Badge
                        variant={
                          student.gradePercentage >= 90
                            ? "default"
                            : student.gradePercentage >= 80
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {student.currentGrade}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{student.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedStudentData ? (
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>{selectedStudentData.name}</CardTitle>
                  <CardDescription>
                    {selectedStudentData.id} • {selectedStudentData.email}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Grades
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Current Grade</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{selectedStudentData.currentGrade}</span>
                    <span className="text-lg">({selectedStudentData.gradePercentage}%)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">{selectedStudentData.attendance}%</span>
                    <Badge
                      variant={
                        selectedStudentData.attendance >= 90
                          ? "default"
                          : selectedStudentData.attendance >= 80
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {selectedStudentData.attendance >= 90
                        ? "Excellent"
                        : selectedStudentData.attendance >= 80
                          ? "Good"
                          : "At Risk"}
                    </Badge>
                  </div>
                </div>
              </div>

              {selectedStudentData.attendance < 80 && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Attendance Warning</AlertTitle>
                  <AlertDescription>
                    This student's attendance is below the required threshold of 80%. Consider reaching out to discuss
                    improvement strategies.
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Grade Breakdown</h3>
                <div className="space-y-4">
                  {selectedStudentData.assignments.map((assignment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <p className="font-medium">{assignment.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{assignment.weight}%</Badge>
                          <span className="font-medium">
                            {assignment.grade}/{assignment.maxGrade}
                          </span>
                        </div>
                      </div>
                      <Progress value={(assignment.grade / assignment.maxGrade) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Performance Trend</h3>
                <div className="h-[200px] flex items-end justify-between gap-2">
                  {selectedStudentData.assignments.map((assignment, i) => (
                    <div key={i} className="relative h-full flex items-end">
                      <div
                        className="w-12 bg-primary/90 rounded-t"
                        style={{ height: `${(assignment.grade / assignment.maxGrade) * 100}%` }}
                      ></div>
                      <span className="absolute -bottom-6 text-xs text-muted-foreground w-12 text-center truncate">
                        {assignment.name.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Submit Final Grade
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="md:col-span-2">
            <CardContent className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
              <FileText className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Select a Student</h3>
              <p className="text-muted-foreground max-w-md">
                Select a student from the list to view their detailed grade information and performance metrics.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class Performance Overview</CardTitle>
          <CardDescription>
            {selectedCourse} - {courses.find((c) => c.id === selectedCourse)?.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Grade Distribution</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>A+ to A-</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span>B+ to B-</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span>C+ to C-</span>
                    <span>10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span>D or below</span>
                    <span>5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Assignment Performance</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Assignment 1</span>
                    <span>88% avg</span>
                  </div>
                  <Progress value={88} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span>Assignment 2</span>
                    <span>85% avg</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span>Midterm Exam</span>
                    <span>82% avg</span>
                  </div>
                  <Progress value={82} className="h-2" />
                  <div className="flex justify-between items-center">
                    <span>Project</span>
                    <span>90% avg</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">At-Risk Students</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="font-medium">Jessica Davis</div>
                    <Badge variant="destructive">75%</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="font-medium">Robert Taylor</div>
                    <Badge variant="destructive">72%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Lisa Jackson</div>
                    <Badge variant="destructive">68%</Badge>
                  </div>
                </div>
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Attention Required</AlertTitle>
                  <AlertDescription>
                    3 students are at risk of failing. Consider scheduling intervention meetings.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Generate Comprehensive Class Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

