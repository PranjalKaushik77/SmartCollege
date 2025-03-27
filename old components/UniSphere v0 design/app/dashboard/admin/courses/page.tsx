"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Download, Filter, MoreHorizontal, Users, FileText, Edit, Trash2, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AdminCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Mock course data
  const courses = [
    {
      id: "CS101",
      name: "Introduction to Computer Science",
      department: "Computer Science",
      credits: 3,
      instructor: "Dr. Johnson",
      students: 32,
      status: "active",
    },
    {
      id: "BUS202",
      name: "Business Management",
      department: "Business Administration",
      credits: 3,
      instructor: "Prof. Smith",
      students: 45,
      status: "active",
    },
    {
      id: "ENG101",
      name: "Engineering Principles",
      department: "Engineering",
      credits: 4,
      instructor: "Dr. Williams",
      students: 28,
      status: "active",
    },
    {
      id: "MED105",
      name: "Introduction to Medical Sciences",
      department: "Medicine & Health",
      credits: 4,
      instructor: "Dr. Brown",
      students: 24,
      status: "inactive",
    },
    {
      id: "ART110",
      name: "Art History",
      department: "Arts & Humanities",
      credits: 3,
      instructor: "Prof. Davis",
      students: 38,
      status: "active",
    },
    {
      id: "CS202",
      name: "Data Structures and Algorithms",
      department: "Computer Science",
      credits: 4,
      instructor: "Dr. Wilson",
      students: 26,
      status: "active",
    },
    {
      id: "BUS305",
      name: "Marketing Strategies",
      department: "Business Administration",
      credits: 3,
      instructor: "Prof. Martinez",
      students: 35,
      status: "active",
    },
    {
      id: "ENG220",
      name: "Electrical Engineering Fundamentals",
      department: "Engineering",
      credits: 4,
      instructor: "Dr. Taylor",
      students: 22,
      status: "active",
    },
    {
      id: "MED210",
      name: "Anatomy and Physiology",
      department: "Medicine & Health",
      credits: 4,
      instructor: "Dr. Anderson",
      students: 30,
      status: "active",
    },
    {
      id: "ART205",
      name: "Modern Art and Design",
      department: "Arts & Humanities",
      credits: 3,
      instructor: "Prof. Thomas",
      students: 32,
      status: "inactive",
    },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Course Management</h1>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Courses</CardTitle>
          <CardDescription>Manage course offerings and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 p-4 font-medium border-b">
              <div className="col-span-1">ID</div>
              <div className="col-span-3">Course Name</div>
              <div className="col-span-2">Department</div>
              <div className="col-span-1">Credits</div>
              <div className="col-span-2">Instructor</div>
              <div className="col-span-1">Students</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredCourses.map((course) => (
                <div key={course.id} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-1 text-muted-foreground">{course.id}</div>
                  <div className="col-span-3 font-medium">{course.name}</div>
                  <div className="col-span-2">{course.department}</div>
                  <div className="col-span-1">{course.credits}</div>
                  <div className="col-span-2">{course.instructor}</div>
                  <div className="col-span-1">{course.students}</div>
                  <div className="col-span-1">
                    <Badge variant={course.status === "active" ? "default" : "secondary"}>
                      {course.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <div className="col-span-1 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Course
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          Manage Students
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Course</DialogTitle>
            <DialogDescription>Enter the course details to create a new offering.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="courseId">Course ID</Label>
                <Input id="courseId" placeholder="e.g., CS101" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="credits">Credits</Label>
                <Select>
                  <SelectTrigger id="credits">
                    <SelectValue placeholder="Select credits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Credit</SelectItem>
                    <SelectItem value="2">2 Credits</SelectItem>
                    <SelectItem value="3">3 Credits</SelectItem>
                    <SelectItem value="4">4 Credits</SelectItem>
                    <SelectItem value="5">5 Credits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="courseName">Course Name</Label>
              <Input id="courseName" placeholder="Course name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="business">Business Administration</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medicine">Medicine & Health</SelectItem>
                  <SelectItem value="arts">Arts & Humanities</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructor">Instructor</Label>
              <Select>
                <SelectTrigger id="instructor">
                  <SelectValue placeholder="Select instructor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="johnson">Dr. Johnson</SelectItem>
                  <SelectItem value="smith">Prof. Smith</SelectItem>
                  <SelectItem value="williams">Dr. Williams</SelectItem>
                  <SelectItem value="brown">Dr. Brown</SelectItem>
                  <SelectItem value="davis">Prof. Davis</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea id="description" placeholder="Enter course description" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="active">
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowAddDialog(false)}>Add Course</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

