"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Upload, Clock, CheckCircle, AlertCircle, Search, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StudentAssignmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("all")

  // Mock assignments data
  const assignments = [
    {
      id: 1,
      title: "Algorithm Analysis",
      course: "Computer Science 101",
      dueDate: "April 5, 2025",
      status: "pending",
      progress: 0,
      description: "Analyze the time and space complexity of the provided algorithms.",
      priority: "high",
    },
    {
      id: 2,
      title: "Calculus Problem Set",
      course: "Mathematics 202",
      dueDate: "April 8, 2025",
      status: "in-progress",
      progress: 45,
      description: "Complete problems 1-20 in Chapter 5.",
      priority: "medium",
    },
    {
      id: 3,
      title: "Lab Report: Forces and Motion",
      course: "Physics 101",
      dueDate: "April 12, 2025",
      status: "in-progress",
      progress: 75,
      description: "Write a comprehensive lab report on the forces and motion experiment.",
      priority: "medium",
    },
    {
      id: 4,
      title: "Literary Analysis Essay",
      course: "English Literature",
      dueDate: "April 15, 2025",
      status: "pending",
      progress: 0,
      description: "Write a 1500-word analysis of the themes in 'To Kill a Mockingbird'.",
      priority: "low",
    },
    {
      id: 5,
      title: "Programming Project: Database System",
      course: "Computer Science 101",
      dueDate: "April 20, 2025",
      status: "in-progress",
      progress: 30,
      description: "Develop a simple database management system using the concepts learned in class.",
      priority: "high",
    },
    {
      id: 6,
      title: "Research Methodology",
      course: "Research Methods",
      dueDate: "March 25, 2025",
      status: "completed",
      progress: 100,
      description: "Submit a research proposal on a topic of your choice.",
      priority: "medium",
    },
    {
      id: 7,
      title: "Midterm Paper",
      course: "English Literature",
      dueDate: "March 15, 2025",
      status: "completed",
      progress: 100,
      description: "Write a comparative analysis of two literary works discussed in class.",
      priority: "high",
    },
  ]

  const filteredAssignments = assignments.filter(
    (assignment) =>
      (selectedCourse === "all" || assignment.course === selectedCourse) &&
      (assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const pendingAssignments = filteredAssignments.filter((a) => a.status === "pending")
  const inProgressAssignments = filteredAssignments.filter((a) => a.status === "in-progress")
  const completedAssignments = filteredAssignments.filter((a) => a.status === "completed")

  const courses = [...new Set(assignments.map((a) => a.course))]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Assignments</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search assignments..."
              className="pl-8 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Assignments not started</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Assignments being worked on</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Assignments submitted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Soon</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingAssignments.filter((a) => a.priority === "high").length}</div>
            <p className="text-xs text-muted-foreground">Due within 7 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Assignments</CardTitle>
              <CardDescription>View and manage all your assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAssignments.length > 0 ? (
                  filteredAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full ${
                            assignment.status === "completed"
                              ? "bg-green-100 dark:bg-green-900"
                              : assignment.status === "in-progress"
                                ? "bg-blue-100 dark:bg-blue-900"
                                : "bg-amber-100 dark:bg-amber-900"
                          }`}
                        >
                          <FileText
                            className={`h-6 w-6 ${
                              assignment.status === "completed"
                                ? "text-green-600 dark:text-green-400"
                                : assignment.status === "in-progress"
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-amber-600 dark:text-amber-400"
                            }`}
                          />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <div className="flex items-center mt-1 md:mt-0">
                              <Badge
                                variant={
                                  assignment.status === "completed"
                                    ? "default"
                                    : assignment.status === "in-progress"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="mr-2"
                              >
                                {assignment.status === "completed"
                                  ? "Completed"
                                  : assignment.status === "in-progress"
                                    ? "In Progress"
                                    : "Pending"}
                              </Badge>
                              <Badge
                                variant={
                                  assignment.priority === "high"
                                    ? "destructive"
                                    : assignment.priority === "medium"
                                      ? "outline"
                                      : "secondary"
                                }
                              >
                                {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">Due: {assignment.dueDate}</span>
                            </div>
                            {assignment.status !== "completed" && (
                              <div className="flex items-center space-x-2 w-full max-w-xs">
                                <Progress value={assignment.progress} className="h-2" />
                                <span className="text-sm">{assignment.progress}%</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        {assignment.status !== "completed" && (
                          <Button size="sm" variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Submit
                          </Button>
                        )}
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No assignments found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Assignments</CardTitle>
              <CardDescription>Assignments you haven't started yet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingAssignments.length > 0 ? (
                  pendingAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                          <FileText className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <Badge
                              variant={assignment.priority === "high" ? "destructive" : "outline"}
                              className="mt-1 md:mt-0"
                            >
                              {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                          <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">Due: {assignment.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        <Button size="sm">Start Assignment</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <CheckCircle className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No pending assignments</h3>
                    <p className="text-muted-foreground">You're all caught up!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>In Progress Assignments</CardTitle>
              <CardDescription>Assignments you're currently working on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inProgressAssignments.length > 0 ? (
                  inProgressAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <Badge
                              variant={assignment.priority === "high" ? "destructive" : "outline"}
                              className="mt-1 md:mt-0"
                            >
                              {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">Due: {assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center space-x-2 w-full max-w-xs">
                              <Progress value={assignment.progress} className="h-2" />
                              <span className="text-sm">{assignment.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        <Button size="sm" variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Submit
                        </Button>
                        <Button size="sm">Continue</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No assignments in progress</h3>
                    <p className="text-muted-foreground">Start working on your pending assignments.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Assignments</CardTitle>
              <CardDescription>Assignments you've submitted</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedAssignments.length > 0 ? (
                  completedAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <Badge variant="default" className="mt-1 md:mt-0">
                              Completed
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                          <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">Submitted: {assignment.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm">View Feedback</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No completed assignments</h3>
                    <p className="text-muted-foreground">You haven't submitted any assignments yet.</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {completedAssignments.length} completed assignments
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

