import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, Users, BarChart3, Bell, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function FacultyDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Faculty Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Current Semester:</span>
          <span className="text-sm font-medium">Spring 2023</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assigned Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">12 credit hours total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Grades</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Due by April 5</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Office Hours</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 hrs</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="schedule">
        <TabsList>
          <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
          <TabsTrigger value="courses">Course Status</TabsTrigger>
          <TabsTrigger value="notifications">Recent Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Classes</CardTitle>
              <CardDescription>Monday, March 26, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Computer Science 101</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 10:30 AM</p>
                    <p className="text-sm">Room: CS-201, Building: Tech Center</p>
                    <div className="flex items-center pt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        Take Attendance
                      </Button>
                      <Button variant="outline" size="sm">
                        View Materials
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Advanced Programming</p>
                    <p className="text-sm text-muted-foreground">1:00 PM - 2:30 PM</p>
                    <p className="text-sm">Room: CS-305, Building: Tech Center</p>
                    <div className="flex items-center pt-2">
                      <Button variant="outline" size="sm" className="mr-2">
                        Take Attendance
                      </Button>
                      <Button variant="outline" size="sm">
                        View Materials
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Office Hours</p>
                    <p className="text-sm text-muted-foreground">3:00 PM - 5:00 PM</p>
                    <p className="text-sm">Room: F-120, Building: Faculty Office</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Status</CardTitle>
              <CardDescription>Progress and completion status for current courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Computer Science 101</p>
                    <p className="text-sm text-muted-foreground">65% Complete</p>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>32 Students</span>
                    <span>8 Weeks Remaining</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Advanced Programming</p>
                    <p className="text-sm text-muted-foreground">48% Complete</p>
                  </div>
                  <Progress value={48} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>24 Students</span>
                    <span>10 Weeks Remaining</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Database Systems</p>
                    <p className="text-sm text-muted-foreground">72% Complete</p>
                  </div>
                  <Progress value={72} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>41 Students</span>
                    <span>6 Weeks Remaining</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Web Development</p>
                    <p className="text-sm text-muted-foreground">55% Complete</p>
                  </div>
                  <Progress value={55} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>30 Students</span>
                    <span>9 Weeks Remaining</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Latest updates and announcements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Bell className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Department Meeting</p>
                    <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                    <p className="text-sm">Reminder: Department meeting at 4 PM in Conference Room A.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Grade Submission Reminder</p>
                    <p className="text-sm text-muted-foreground">Yesterday at 3:45 PM</p>
                    <p className="text-sm">Please submit all midterm grades by April 5.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                    <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">System Maintenance</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                    <p className="text-sm">
                      The grading system will be down for maintenance on Saturday from 10 PM to 2 AM.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

