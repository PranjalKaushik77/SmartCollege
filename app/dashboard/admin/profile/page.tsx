import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Calendar, Shield, Key, Edit, Upload, FileText, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-col items-center space-y-4 pb-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Admin avatar" />
              <AvatarFallback className="text-2xl">AD</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-bold">Admin User</h2>
              <p className="text-sm text-muted-foreground">Admin ID: ADM-10001</p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="mt-2">
                  <Upload className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>admin@university.edu</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Office: A-100, Admin Building</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Joined: January 2020</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-medium mb-2">Role</h3>
              <div className="flex items-center text-sm">
                <Shield className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>System Administrator</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-medium mb-2">Access Level</h3>
              <div className="flex items-center text-sm">
                <Key className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Full System Access</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Administrator Information</CardTitle>
            <CardDescription>Your personal and administrative details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="activity">Activity Log</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                    <p>Admin User</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                    <p>January 15, 1985</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Gender</p>
                    <p>Male</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Nationality</p>
                    <p>United States</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>admin@university.edu</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p>123 Admin Street, University City, State 12345</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
                    <p>Jane Doe (Spouse)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Emergency Phone</p>
                    <p>(555) 987-6543</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="security" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Last Password Change</p>
                    <p>March 15, 2025</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Two-Factor Authentication</p>
                    <p className="flex items-center">
                      <Badge variant="default" className="mr-2">
                        Enabled
                      </Badge>
                      Via Authenticator App
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Account Recovery Email</p>
                    <p>backup-admin@university.edu</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Security Questions</p>
                    <p>Set (3/3)</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-sm font-medium">Recent Security Events</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">Password Changed</p>
                        <p className="text-sm text-muted-foreground">March 15, 2025</p>
                      </div>
                      <p className="text-sm text-muted-foreground">IP: 192.168.1.1</p>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">New Device Login</p>
                        <p className="text-sm text-muted-foreground">March 10, 2025</p>
                      </div>
                      <p className="text-sm text-muted-foreground">Device: MacBook Pro, IP: 192.168.1.1</p>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">Two-Factor Authentication Enabled</p>
                        <p className="text-sm text-muted-foreground">February 28, 2025</p>
                      </div>
                      <p className="text-sm text-muted-foreground">IP: 192.168.1.1</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">
                    <Key className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                  <Button>
                    <Settings className="mr-2 h-4 w-4" />
                    Security Settings
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="activity" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">System Backup Initiated</p>
                      <p className="text-sm text-muted-foreground">Today at 03:00 AM</p>
                    </div>
                    <Badge>System</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">New Faculty Account Created</p>
                      <p className="text-sm text-muted-foreground">Yesterday at 2:30 PM</p>
                    </div>
                    <Badge>User Management</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">Course Schedule Updated</p>
                      <p className="text-sm text-muted-foreground">March 25, 2025</p>
                    </div>
                    <Badge>Academic</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">System Settings Modified</p>
                      <p className="text-sm text-muted-foreground">March 23, 2025</p>
                    </div>
                    <Badge>Configuration</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <p className="font-medium">Database Maintenance Performed</p>
                      <p className="text-sm text-muted-foreground">March 20, 2025</p>
                    </div>
                    <Badge>System</Badge>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    View Full Activity Log
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="documents" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Administrator Contract</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Jan 15, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">System Administration Guidelines</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Feb 10, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Emergency Procedures Manual</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Mar 5, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Data Privacy Policy</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Apr 12, 2020</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <Button className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Document
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

