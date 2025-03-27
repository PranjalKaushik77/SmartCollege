"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Upload,
  MoreHorizontal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function FacultyAssignmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Mock assignments data
  const assignments = [
    {
      id: 1,
      title: "Algorithm Analysis",
      course: "Computer Science 101",
      dueDate: "April 5, 2025",
      status: "active",
      submissions: 12,
      totalStudents: 32,
      description: "Analyze the time and space complexity of the provided algorithms.",
    },
    {
      id: 2,
      title: "Calculus Problem Set",
      course: "Mathematics 202",
      dueDate: "April 8, 2025",
      status: "active",
      submissions: 8,
      totalStudents: 24,
      description: "Complete problems 1-20 in Chapter 5.",
    },
    {
      id: 3,
      title: "Lab Report: Forces and Motion",
      course: "Physics 101",
      dueDate: "April 12, 2025",
      status: "active",
      submissions: 15,
      totalStudents: 28,
      description: "Write a comprehensive lab report on the forces and motion experiment.",
    },
    {
      id: 4,
      title: "Literary Analysis Essay",
      course: "English Literature",
      dueDate: "April 15, 2025",
      status: "active",
      submissions: 5,
      totalStudents: 30,
      description: "Write a 1500-word analysis of the themes in 'To Kill a Mockingbird'.",
    },
    {
      id: 5,
      title: "Programming Project: Database System",
      course: "Computer Science 101",
      dueDate: "April 20, 2025",
      status: "active",
      submissions: 3,
      totalStudents: 32,
      description: "Develop a simple database management system using the concepts learned in class.",
    },
    {
      id: 6,
      title: "Research Methodology",
      course: "Research Methods",
      dueDate: "March 25, 2025",
      status: "past",
      submissions: 22,
      totalStudents: 25,
      description: "Submit a research proposal on a topic of your choice.",
    },
    {
      id: 7,
      title: "Midterm Paper",
      course: "English Literature",
      dueDate: "March 15, 2025",
      status: "past",
      submissions: 28,
      totalStudents: 30,
      description: "Write a comparative analysis of two literary works discussed in class.",
    },
  ]

  const filteredAssignments = assignments.filter(
    (assignment) =>
      (selectedCourse === "all" || assignment.course === selectedCourse) &&
      (assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const activeAssignments = filteredAssignments.filter((a) => a.status === "active")
  const pastAssignments = filteredAssignments.filter((a) => a.status === "past")
  const draftAssignments = filteredAssignments.filter((a) => a.status === "draft")

  const courses = [...new Set(assignments.map((a) => a.course))]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Assignment Management</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={() => setShowAddDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Assignment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Currently active assignments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Submissions</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeAssignments.reduce((acc, curr) => acc + (curr.totalStudents - curr.submissions), 0)}
            </div>
            <p className="text-xs text-muted-foreground">Submissions due</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Graded Submissions</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pastAssignments.reduce((acc, curr) => acc + curr.submissions, 0)}</div>
            <p className="text-xs text-muted-foreground">Submissions graded</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Soon</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                activeAssignments.filter((a) => {
                  const dueDate = new Date(a.dueDate)
                  const today = new Date()
                  const diffTime = dueDate.getTime() - today.getTime()
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                  return diffDays <= 7
                }).length
              }
            </div>
            <p className="text-xs text-muted-foreground">Due within 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search assignments..."
            className="pl-8"
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
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Assignments</CardTitle>
              <CardDescription>Currently active assignments for your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeAssignments.length > 0 ? (
                  activeAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <Badge className="mt-1 md:mt-0">Active</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                          <div className="flex flex-col md:flex-row md:items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">Due: {assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <span className="text-sm">
                                Submissions: {assignment.submissions}/{assignment.totalStudents}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit Assignment</DropdownMenuItem>
                            <DropdownMenuItem>Extend Deadline</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete Assignment</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline">
                          View Submissions
                        </Button>
                        <Button size="sm">Manage</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No active assignments</h3>
                    <p className="text-muted-foreground">Create a new assignment to get started.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Assignments</CardTitle>
              <CardDescription>Completed assignments from previous terms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastAssignments.length > 0 ? (
                  pastAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                          <FileText className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <Badge variant="secondary" className="mt-1 md:mt-0">
                              Completed
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                          <div className="flex flex-col md:flex-row md:items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm">Due: {assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <span className="text-sm">
                                Submissions: {assignment.submissions}/{assignment.totalStudents}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Export
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No past assignments</h3>
                    <p className="text-muted-foreground">Past assignments will appear here.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Assignments</CardTitle>
              <CardDescription>Assignments you're still working on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {draftAssignments.length > 0 ? (
                  draftAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                          <FileText className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="font-medium">{assignment.title}</p>
                            <Badge variant="outline" className="mt-1 md:mt-0">
                              Draft
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          <p className="text-sm">{assignment.description}</p>
                        </div>
                      </div>
                      <div className="flex mt-4 md:mt-0 space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm">Publish</Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No draft assignments</h3>
                    <p className="text-muted-foreground">Drafts you create will appear here.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Assignment</DialogTitle>
            <DialogDescription>Add details for the new assignment.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Assignment Title</Label>
              <Input id="title" placeholder="Enter assignment title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Select>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter assignment description" rows={4} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueTime">Due Time</Label>
                <Input id="dueTime" type="time" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="points">Total Points</Label>
              <Input id="points" type="number" placeholder="Enter total points" />
            </div>
            <div className="space-y-2">
              <Label>Attachments</Label>
              <div className="border border-dashed rounded-md p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse files</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Browse Files
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Save as Draft
            </Button>
            <Button onClick={() => setShowAddDialog(false)}>Create Assignment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

