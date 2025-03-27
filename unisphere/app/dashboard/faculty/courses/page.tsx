"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Users, Clock, ExternalLink, Search, BarChart3, Calendar, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FacultyCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock courses data
  const courses = [
    {
      id: "CS101",
      name: "Computer Science 101",
      description: "Introduction to Programming",
      students: 32,
      progress: 65,
      schedule: "Mon, Wed, Fri 9:00 AM - 10:30 AM",
      room: "CS-201",
      building: "Tech Center",
      credits: 3,
      status: "active",
    },
    {
      id: "CS202",
      name: "Data Structures and Algorithms",
      description: "Advanced programming concepts and algorithms",
      students: 26,
      progress: 58,
      schedule: "Tue, Thu 11:00 AM - 12:30 PM",
      room: "CS-305",
      building: "Tech Center",
      credits: 4,
      status: "active",
    },
    {
      id: "CS305",
      name: "Artificial Intelligence",
      description: "Introduction to AI concepts and applications",
      students: 28,
      progress: 42,
      schedule: "Mon, Wed 2:00 PM - 3:30 PM",
      room: "CS-401",
      building: "Tech Center",
      credits: 4,
      status: "active",
    },
    {
      id: "CS210",
      name: "Web Development",
      description: "Modern web technologies and frameworks",
      students: 30,
      progress: 70,
      schedule: "Tue, Thu 1:00 PM - 2:30 PM",
      room: "CS-302",
      building: "Tech Center",
      credits: 3,
      status: "active",
    },
    {
      id: "CS401",
      name: "Machine Learning",
      description: "Advanced ML algorithms and applications",
      students: 22,
      progress: 0,
      schedule: "Mon, Wed 4:00 PM - 5:30 PM",
      room: "CS-405",
      building: "Tech Center",
      credits: 4,
      status: "upcoming",
    },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const activeCourses = filteredCourses.filter((c) => c.status === "active")
  const upcomingCourses = filteredCourses.filter((c) => c.status === "upcoming")
  const pastCourses = filteredCourses.filter((c) => c.status === "past")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">My Courses</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-8 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCourses.length}</div>
            <p className="text-xs text-muted-foreground">Currently teaching</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCourses.reduce((sum, course) => sum + course.students, 0)}</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Teaching Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCourses.length * 3}</div>
            <p className="text-xs text-muted-foreground">Weekly hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                activeCourses.reduce((sum, course) => sum + course.progress, 0) / (activeCourses.length || 1),
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Course completion</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Courses</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Courses</TabsTrigger>
          <TabsTrigger value="past">Past Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2">Active</Badge>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        {course.room}, {course.building}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.credits} Credits</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Course Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                  <Button size="sm">Manage Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      Upcoming
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>
                        {course.room}, {course.building}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.credits} Credits</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Prepare Materials
                  </Button>
                  <Button size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Courses</CardTitle>
              <CardDescription>Courses you've taught in previous semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Introduction to Programming</p>
                      <p className="text-sm text-muted-foreground">Fall 2024 • 35 Students • 4.8/5 Rating</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced Algorithms</p>
                      <p className="text-sm text-muted-foreground">Fall 2024 • 28 Students • 4.6/5 Rating</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Database Systems</p>
                      <p className="text-sm text-muted-foreground">Spring 2024 • 32 Students • 4.7/5 Rating</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Student Roster</CardTitle>
          <CardDescription>Students enrolled in your courses</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="CS101">
            <TabsList className="mb-4">
              {activeCourses.map((course) => (
                <TabsTrigger key={course.id} value={course.id}>
                  {course.id}
                </TabsTrigger>
              ))}
            </TabsList>

            {activeCourses.map((course) => (
              <TabsContent key={course.id} value={course.id}>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 p-4 font-medium border-b">
                    <div className="col-span-1">#</div>
                    <div className="col-span-4">Name</div>
                    <div className="col-span-3">ID</div>
                    <div className="col-span-2">Attendance</div>
                    <div className="col-span-2">Current Grade</div>
                  </div>
                  <div className="divide-y">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 items-center">
                        <div className="col-span-1 text-muted-foreground">{index + 1}</div>
                        <div className="col-span-4 font-medium flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Student avatar" />
                            <AvatarFallback>S{index + 1}</AvatarFallback>
                          </Avatar>
                          <span>Student {index + 1}</span>
                        </div>
                        <div className="col-span-3 text-muted-foreground">STU-{1000 + index}</div>
                        <div className="col-span-2">
                          <Badge variant={index % 3 === 0 ? "outline" : "default"}>{85 + index}%</Badge>
                        </div>
                        <div className="col-span-2">
                          <Badge variant={index % 2 === 0 ? "default" : "outline"}>
                            {["A", "A-", "B+", "B", "A"][index]}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button>View Full Roster</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

