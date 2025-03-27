"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle2, Calendar, Settings, Database, Server, ShieldAlert, HardDrive } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function AdminNotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "Database Server Reaching Capacity",
      description: "The main database server is at 85% capacity. Consider adding more storage or optimizing queries.",
      time: "Today at 8:15 AM",
      category: "system",
      priority: "high",
      isNew: true,
    },
    {
      id: 2,
      title: "System Backup Completed",
      description: "Daily system backup completed successfully. All data has been securely stored.",
      time: "Today at 3:45 AM",
      category: "system",
      priority: "low",
      isNew: true,
    },
    {
      id: 3,
      title: "Security Alert: Multiple Failed Login Attempts",
      description:
        "Multiple failed login attempts detected for user 'faculty103'. Account has been temporarily locked.",
      time: "Yesterday at 7:22 PM",
      category: "security",
      priority: "high",
      isNew: false,
    },
    {
      id: 4,
      title: "New Academic Year Setup Required",
      description: "The new academic year needs to be configured in the system before April 15.",
      time: "Yesterday at 10:30 AM",
      category: "administrative",
      priority: "medium",
      isNew: false,
    },
    {
      id: 5,
      title: "Server Performance Degradation",
      description: "The application server is experiencing slower response times. Technical team has been notified.",
      time: "2 days ago",
      category: "system",
      priority: "medium",
      isNew: false,
    },
    {
      id: 6,
      title: "License Renewal Required",
      description: "The database management system license will expire in 15 days. Renewal is required.",
      time: "3 days ago",
      category: "administrative",
      priority: "medium",
      isNew: false,
    },
    {
      id: 7,
      title: "System Update Available",
      description: "A new system update (v2.5.3) is available with security patches and performance improvements.",
      time: "4 days ago",
      category: "system",
      priority: "medium",
      isNew: false,
    },
    {
      id: 8,
      title: "Unusual Network Activity Detected",
      description: "Unusual network traffic detected from IP 192.168.1.45. Security team has been alerted.",
      time: "5 days ago",
      category: "security",
      priority: "high",
      isNew: false,
    },
  ]

  const filteredNotifications = notifications.filter(
    (notification) =>
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const systemNotifications = filteredNotifications.filter((n) => n.category === "system")
  const securityNotifications = filteredNotifications.filter((n) => n.category === "security")
  const administrativeNotifications = filteredNotifications.filter((n) => n.category === "administrative")
  const unreadNotifications = filteredNotifications.filter((n) => n.isNew)

  const getIconForNotification = (notification) => {
    if (notification.category === "system") {
      if (notification.title.includes("Database")) return <Database className="h-6 w-6 text-primary" />
      if (notification.title.includes("Backup")) return <HardDrive className="h-6 w-6 text-primary" />
      if (notification.title.includes("Server")) return <Server className="h-6 w-6 text-primary" />
      return <Settings className="h-6 w-6 text-primary" />
    }
    if (notification.category === "security") return <ShieldAlert className="h-6 w-6 text-primary" />
    if (notification.category === "administrative") return <Calendar className="h-6 w-6 text-primary" />
    return <Bell className="h-6 w-6 text-primary" />
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge variant="default">Medium</Badge>
      case "low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">System Notifications</h1>
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

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search notifications..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemNotifications.length}</div>
            <p className="text-xs text-muted-foreground">System-related notifications</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securityNotifications.length}</div>
            <p className="text-xs text-muted-foreground">Security alerts and warnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Administrative</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{administrativeNotifications.length}</div>
            <p className="text-xs text-muted-foreground">Administrative tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadNotifications.length}</div>
            <p className="text-xs text-muted-foreground">Unread notifications</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="administrative">Administrative</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 rounded-md border p-4 ${
                      notification.isNew ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      {getIconForNotification(notification)}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <div className="flex items-center gap-2">
                          {notification.isNew && <Badge variant="secondary">New</Badge>}
                          {getPriorityBadge(notification.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                      <p className="text-sm">{notification.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <Bell className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No notifications found</h3>
                  <p className="text-muted-foreground">Try adjusting your search criteria.</p>
                </div>
              )}
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
              {unreadNotifications.length > 0 ? (
                unreadNotifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-4 rounded-md border p-4 bg-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      {getIconForNotification(notification)}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">New</Badge>
                          {getPriorityBadge(notification.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                      <p className="text-sm">{notification.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <CheckCircle2 className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No unread notifications</h3>
                  <p className="text-muted-foreground">You're all caught up!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>Notifications related to system performance and maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemNotifications.length > 0 ? (
                systemNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 rounded-md border p-4 ${
                      notification.isNew ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      {getIconForNotification(notification)}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <div className="flex items-center gap-2">
                          {notification.isNew && <Badge variant="secondary">New</Badge>}
                          {getPriorityBadge(notification.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                      <p className="text-sm">{notification.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <Server className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No system notifications</h3>
                  <p className="text-muted-foreground">All systems are running smoothly.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Notifications</CardTitle>
              <CardDescription>Security alerts and warnings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityNotifications.length > 0 ? (
                securityNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 rounded-md border p-4 ${
                      notification.isNew ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      {getIconForNotification(notification)}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <div className="flex items-center gap-2">
                          {notification.isNew && <Badge variant="secondary">New</Badge>}
                          {getPriorityBadge(notification.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                      <p className="text-sm">{notification.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <ShieldAlert className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No security notifications</h3>
                  <p className="text-muted-foreground">Your system is secure.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="administrative" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Administrative Notifications</CardTitle>
              <CardDescription>Administrative tasks and reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {administrativeNotifications.length > 0 ? (
                administrativeNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 rounded-md border p-4 ${
                      notification.isNew ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      {getIconForNotification(notification)}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{notification.title}</p>
                        <div className="flex items-center gap-2">
                          {notification.isNew && <Badge variant="secondary">New</Badge>}
                          {getPriorityBadge(notification.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                      <p className="text-sm">{notification.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <Calendar className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No administrative notifications</h3>
                  <p className="text-muted-foreground">No pending administrative tasks.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

