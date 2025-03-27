import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  BookOpen,
  Calendar,
  FileText,
  BarChart3,
  Bell,
  CheckCircle2,
  AlertCircle,
  UserPlus,
  BookPlus,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Current Semester:</span>
          <span className="text-sm font-medium">Spring 2023</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+86 from last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-muted-foreground">+4 new hires this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Across 12 departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resource Utilization</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">+5% from last semester</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment Statistics</CardTitle>
            <CardDescription>Student enrollment by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Computer Science</p>
                  <p className="text-sm text-muted-foreground">312 Students</p>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Business Administration</p>
                  <p className="text-sm text-muted-foreground">287 Students</p>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Engineering</p>
                  <p className="text-sm text-muted-foreground">245 Students</p>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Arts & Humanities</p>
                  <p className="text-sm text-muted-foreground">198 Students</p>
                </div>
                <Progress value={54} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Medicine & Health</p>
                  <p className="text-sm text-muted-foreground">176 Students</p>
                </div>
                <Progress value={48} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="h-auto py-4 justify-start" variant="outline">
                <UserPlus className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Add Student</div>
                  <div className="text-xs text-muted-foreground">Register a new student</div>
                </div>
              </Button>
              <Button className="h-auto py-4 justify-start" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Add Faculty</div>
                  <div className="text-xs text-muted-foreground">Register a new faculty member</div>
                </div>
              </Button>
              <Button className="h-auto py-4 justify-start" variant="outline">
                <BookPlus className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Create Course</div>
                  <div className="text-xs text-muted-foreground">Add a new course</div>
                </div>
              </Button>
              <Button className="h-auto py-4 justify-start" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Schedule</div>
                  <div className="text-xs text-muted-foreground">Manage academic calendar</div>
                </div>
              </Button>
              <Button className="h-auto py-4 justify-start" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Reports</div>
                  <div className="text-xs text-muted-foreground">Generate system reports</div>
                </div>
              </Button>
              <Button className="h-auto py-4 justify-start" variant="outline">
                <Settings className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Settings</div>
                  <div className="text-xs text-muted-foreground">System configuration</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList>
          <TabsTrigger value="notifications">Recent Notifications</TabsTrigger>
          <TabsTrigger value="activity">System Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Latest system updates and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Bell className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">System Update Scheduled</p>
                    <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                    <p className="text-sm">A system update is scheduled for this weekend. Please inform all users.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">New Faculty Onboarding Complete</p>
                    <p className="text-sm text-muted-foreground">Yesterday at 3:45 PM</p>
                    <p className="text-sm">All new faculty members have completed the onboarding process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                    <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Resource Allocation Warning</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                    <p className="text-sm">
                      Computer Lab 3 is reaching capacity limits. Consider redistributing classes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Activity</CardTitle>
              <CardDescription>Recent actions performed in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">New Student Registration</p>
                    <p className="text-xs text-muted-foreground">Admin: Sarah Johnson</p>
                  </div>
                  <p className="text-sm text-muted-foreground">10 minutes ago</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Course Schedule Updated</p>
                    <p className="text-xs text-muted-foreground">Admin: Michael Chen</p>
                  </div>
                  <p className="text-sm text-muted-foreground">45 minutes ago</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Faculty Assignment Changed</p>
                    <p className="text-xs text-muted-foreground">Admin: Robert Davis</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">System Backup Completed</p>
                    <p className="text-xs text-muted-foreground">System: Automated Task</p>
                  </div>
                  <p className="text-sm text-muted-foreground">3 hours ago</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">New Announcement Posted</p>
                    <p className="text-xs text-muted-foreground">Admin: Jennifer Wilson</p>
                  </div>
                  <p className="text-sm text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

