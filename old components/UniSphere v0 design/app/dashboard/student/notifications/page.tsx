import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle2, AlertCircle, Calendar, FileText, Settings, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function StudentNotificationsPage() {
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
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="administrative">Administrative</TabsTrigger>
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
                    <p className="text-sm font-medium leading-none">Class Canceled: Computer Science 101</p>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                  <p className="text-sm">Professor Johnson is ill. Class will resume next week.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Assignment Due: Mathematics 202</p>
                    <Badge variant="outline">1 day ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Yesterday at 2:30 PM</p>
                  <p className="text-sm">Reminder: Your problem set is due tomorrow by 11:59 PM.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Grade Posted: English Literature</p>
                    <Badge variant="outline">2 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                  <p className="text-sm">Your midterm essay has been graded. You received an A-.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Deadline Extended: Physics Lab Report</p>
                    <Badge variant="outline">3 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">3 days ago</p>
                  <p className="text-sm">The deadline has been extended to April 5, 2025.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Registration Period Opening</p>
                    <Badge variant="outline">5 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                  <p className="text-sm">Course registration for the Fall 2025 semester opens on April 15.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Info className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Campus Event: Career Fair</p>
                    <Badge variant="outline">1 week ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                  <p className="text-sm">Don't miss the Spring Career Fair on April 10 in the Student Union.</p>
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
                    <p className="text-sm font-medium leading-none">Class Canceled: Computer Science 101</p>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                  <p className="text-sm">Professor Johnson is ill. Class will resume next week.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Notifications</CardTitle>
              <CardDescription>Notifications related to your courses and academics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4 bg-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Class Canceled: Computer Science 101</p>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Today at 8:15 AM</p>
                  <p className="text-sm">Professor Johnson is ill. Class will resume next week.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Assignment Due: Mathematics 202</p>
                    <Badge variant="outline">1 day ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Yesterday at 2:30 PM</p>
                  <p className="text-sm">Reminder: Your problem set is due tomorrow by 11:59 PM.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Grade Posted: English Literature</p>
                    <Badge variant="outline">2 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                  <p className="text-sm">Your midterm essay has been graded. You received an A-.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="administrative" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Administrative Notifications</CardTitle>
              <CardDescription>Notifications about administrative matters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Registration Period Opening</p>
                    <Badge variant="outline">5 days ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                  <p className="text-sm">Course registration for the Fall 2025 semester opens on April 15.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Info className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">Campus Event: Career Fair</p>
                    <Badge variant="outline">1 week ago</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                  <p className="text-sm">Don't miss the Spring Career Fair on April 10 in the Student Union.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

