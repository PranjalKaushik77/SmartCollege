import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle2, AlertCircle, Calendar, FileText, Settings, Info, BookOpen, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function FacultyNotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Mark All as Read
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="admin">From Admin</TabsTrigger>
          <TabsTrigger value="students">From Students</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your recent notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4 bg-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Department Meeting Scheduled</p>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                  <p className="text-sm">Department meeting scheduled for Friday at 2:00 PM in Conference Room A.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Student Request: Assignment Extension</p>
                    <Badge variant="outline">1 day ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Yesterday at 2:30 PM</p>
                  <p className="text-sm">
                    John Smith has requested an extension for the Algorithm Analysis assignment.
                  </p>
                  <p className="text-xs text-muted-foreground">From: John Smith (CS101)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Course Schedule Updated</p>
                    <Badge variant="outline">2 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                  <p className="text-sm">The schedule for CS101 has been updated. Please review the changes.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Grade Submission Deadline</p>
                    <Badge variant="outline">3 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                  <p className="text-sm">Reminder: All midterm grades must be submitted by April 5, 2025.</p>
                  <p className="text-xs text-muted-foreground">From: System</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Faculty Development Workshop</p>
                    <Badge variant="outline">5 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                  <p className="text-sm">Faculty development workshop on "Effective Teaching Methods" on April 15.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Info className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Research Grant Opportunity</p>
                    <Badge variant="outline">1 week ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                  <p className="text-sm">
                    New research grant opportunity in AI and Machine Learning. Application deadline: May 1.
                  </p>
                  <p className="text-xs text-muted-foreground">From: Research Office</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications you haven't read yet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4 bg-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Department Meeting Scheduled</p>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                  <p className="text-sm">Department meeting scheduled for Friday at 2:00 PM in Conference Room A.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admin Notifications</CardTitle>
              <CardDescription>Notifications from administration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4 bg-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Department Meeting Scheduled</p>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                  <p className="text-sm">Department meeting scheduled for Friday at 2:00 PM in Conference Room A.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Course Schedule Updated</p>
                    <Badge variant="outline">2 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                  <p className="text-sm">The schedule for CS101 has been updated. Please review the changes.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Faculty Development Workshop</p>
                    <Badge variant="outline">5 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                  <p className="text-sm">Faculty development workshop on "Effective Teaching Methods" on April 15.</p>
                  <p className="text-xs text-muted-foreground">From: Admin</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Notifications</CardTitle>
              <CardDescription>Notifications from your students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Student Request: Assignment Extension</p>
                    <Badge variant="outline">1 day ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Yesterday at 2:30 PM</p>
                  <p className="text-sm">
                    John Smith has requested an extension for the Algorithm Analysis assignment.
                  </p>
                  <p className="text-xs text-muted-foreground">From: John Smith (CS101)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Assignment Submission Question</p>
                    <Badge variant="outline">3 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                  <p className="text-sm">
                    Emily Johnson has a question about the format for the final project submission.
                  </p>
                  <p className="text-xs text-muted-foreground">From: Emily Johnson (CS101)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>Automated system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Grade Submission Deadline</p>
                    <Badge variant="outline">3 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                  <p className="text-sm">Reminder: All midterm grades must be submitted by April 5, 2025.</p>
                  <p className="text-xs text-muted-foreground">From: System</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Info className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">System Maintenance</p>
                    <Badge variant="outline">1 week ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                  <p className="text-sm">The system will be down for maintenance on Saturday from 10 PM to 2 AM.</p>
                  <p className="text-xs text-muted-foreground">From: System</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

