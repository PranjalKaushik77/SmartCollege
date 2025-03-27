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

export default function AdminFacultyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)

  // Mock faculty data
  const faculty = [
    {
      id: "FAC1001",
      name: "Dr. Johnson",
      email: "dr.johnson@example.com",
      department: "Computer Science",
      position: "Associate Professor",
      courses: 2,
      status: "active",
    },
    {
      id: "FAC1002",
      name: "Prof. Smith",
      email: "prof.smith@example.com",
      department: "Mathematics",
      position: "Professor",
      courses: 3,
      status: "active",
    },
    {
      id: "FAC1003",
      name: "Dr. Williams",
      email: "dr.williams@example.com",
      department: "Physics",
      position: "Assistant Professor",
      courses: 2,
      status: "active",
    },
    {
      id: "FAC1004",
      name: "Prof. Davis",
      email: "prof.davis@example.com",
      department: "English",
      position: "Professor",
      courses: 3,
      status: "active",
    },
    {
      id: "FAC1005",
      name: "Dr. Wilson",
      email: "dr.wilson@example.com",
      department: "Computer Science",
      position: "Associate Professor",
      courses: 2,
      status: "active",
    },
    {
      id: "FAC1006",
      name: "Prof. Martinez",
      email: "prof.martinez@example.com",
      department: "Business",
      position: "Professor",
      courses: 3,
      status: "active",
    },
    {
      id: "FAC1007",
      name: "Dr. Taylor",
      email: "dr.taylor@example.com",
      department: "Engineering",
      position: "Assistant Professor",
      courses: 2,
      status: "leave",
    },
    {
      id: "FAC1008",
      name: "Prof. Anderson",
      email: "prof.anderson@example.com",
      department: "Medicine",
      position: "Professor",
      courses: 3,
      status: "active",
    },
  ]

  const filteredFaculty = faculty.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Faculty Management</h1>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Faculty
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Faculty</CardTitle>
          <CardDescription>Manage faculty members and their information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search faculty..."
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
              <div className="col-span-1">Courses</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y">
              {filteredFaculty.map((member) => (
                <div key={member.id} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-1 text-muted-foreground">{member.id}</div>
                  <div className="col-span-3 font-medium">{member.name}</div>
                  <div className="col-span-3">{member.email}</div>
                  <div className="col-span-2">{member.department}</div>
                  <div className="col-span-1">{member.courses}</div>
                  <div className="col-span-1">
                    <Badge variant={member.status === "active" ? "default" : "secondary"}>
                      {member.status === "active" ? "Active" : "On Leave"}
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
              Showing {filteredFaculty.length} of {faculty.length} faculty members
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
            <DialogTitle>Add New Faculty</DialogTitle>
            <DialogDescription>Enter the faculty member's information to create a new record.</DialogDescription>
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
              <Input id="email" type="email" placeholder="faculty@example.com" />
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
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Select>
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professor">Professor</SelectItem>
                    <SelectItem value="associate">Associate Professor</SelectItem>
                    <SelectItem value="assistant">Assistant Professor</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Faculty address" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="joinDate">Join Date</Label>
                <Input id="joinDate" type="date" />
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
            <Button onClick={() => setShowAddDialog(false)}>Add Faculty</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

