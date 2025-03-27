"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Download, Filter, MoreHorizontal, Mail, FileText, UserCog, Trash2 } from "lucide-react"
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
import { Checkbox } from "@/components/ui/checkbox"

export default function AdminStudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Mock student data
  const students = [
    {
      id: "STU1001",
      name: "John Smith",
      email: "john.smith@example.com",
      department: "Computer Science",
      year: "3rd Year",
      gpa: 3.8,
      status: "active",
    },
    {
      id: "STU1002",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      department: "Business Administration",
      year: "2nd Year",
      gpa: 3.5,
      status: "active",
    },
    {
      id: "STU1003",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      department: "Engineering",
      year: "4th Year",
      gpa: 3.9,
      status: "active",
    },
    {
      id: "STU1004",
      name: "Jessica Davis",
      email: "jessica.davis@example.com",
      department: "Medicine & Health",
      year: "1st Year",
      gpa: 3.2,
      status: "probation",
    },
    {
      id: "STU1005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      department: "Arts & Humanities",
      year: "3rd Year",
      gpa: 3.7,
      status: "active",
    },
    {
      id: "STU1006",
      name: "Sarah Martinez",
      email: "sarah.martinez@example.com",
      department: "Computer Science",
      year: "2nd Year",
      gpa: 3.4,
      status: "active",
    },
    {
      id: "STU1007",
      name: "James Taylor",
      email: "james.taylor@example.com",
      department: "Business Administration",
      year: "4th Year",
      gpa: 2.9,
      status: "probation",
    },
    {
      id: "STU1008",
      name: "Jennifer Anderson",
      email: "jennifer.anderson@example.com",
      department: "Engineering",
      year: "3rd Year",
      gpa: 3.6,
      status: "active",
    },
    {
      id: "STU1009",
      name: "Robert Thomas",
      email: "robert.thomas@example.com",
      department: "Medicine & Health",
      year: "2nd Year",
      gpa: 3.8,
      status: "active",
    },
    {
      id: "STU1010",
      name: "Lisa Jackson",
      email: "lisa.jackson@example.com",
      department: "Arts & Humanities",
      year: "1st Year",
      gpa: 3.1,
      status: "active",
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Student Management</h1>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Students</CardTitle>
          <CardDescription>Manage student records and information</CardDescription>
        </CardHeader>
        <CardContent>
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
              <div className="col-span-3">Name</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-2">Department</div>
              <div className="col-span-1">Year</div>
              <div className="col-span-1">GPA</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredStudents.map((student) => (
                <div key={student.id} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-1 text-muted-foreground">{student.id}</div>
                  <div className="col-span-3 font-medium">{student.name}</div>
                  <div className="col-span-3">{student.email}</div>
                  <div className="col-span-2">{student.department}</div>
                  <div className="col-span-1">{student.year}</div>
                  <div className="col-span-1">{student.gpa}</div>
                  <div className="col-span-1">
                    <Badge variant={student.status === "active" ? "default" : "destructive"}>
                      {student.status === "active" ? "Active" : "Probation"}
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
                          <UserCog className="mr-2 h-4 w-4" />
                          Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          View Records
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
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
              Showing {filteredStudents.length} of {students.length} students
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
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>Enter the student's information to create a new record.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="student@example.com" />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                <Label htmlFor="year">Year</Label>
                <Select>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Student address" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="sendCredentials" />
              <Label htmlFor="sendCredentials">Send login credentials via email</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowAddDialog(false)}>Add Student</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

