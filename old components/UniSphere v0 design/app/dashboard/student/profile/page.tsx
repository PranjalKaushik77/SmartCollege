import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Calendar, BookOpen, GraduationCap, Edit, Upload, FileText } from "lucide-react"

export default function StudentProfilePage() {
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
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Student avatar" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm text-muted-foreground">Student ID: ST-10045</p>
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
                <span>john.doe@university.edu</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>123 Campus Drive, University City</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Joined: September 2022</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-medium mb-2">Program</h3>
              <div className="flex items-center text-sm">
                <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Bachelor of Science in Computer Science</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-medium mb-2">Academic Status</h3>
              <div className="flex items-center text-sm">
                <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Sophomore (2nd Year)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
            <CardDescription>Your personal and academic details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                    <p>John Michael Doe</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                    <p>April 15, 2002</p>
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
                    <p>john.doe@university.edu</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p>123 Campus Drive, Apt 4B, University City, State 12345</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
                    <p>Jane Doe (Parent)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Emergency Phone</p>
                    <p>(555) 987-6543</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="academic" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Student ID</p>
                    <p>ST-10045</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Program</p>
                    <p>Bachelor of Science in Computer Science</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Department</p>
                    <p>Computer Science and Engineering</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Academic Year</p>
                    <p>2nd Year (Sophomore)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Enrollment Date</p>
                    <p>September 5, 2022</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Expected Graduation</p>
                    <p>May 2026</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Current GPA</p>
                    <p>3.75 / 4.0</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Credits Completed</p>
                    <p>45 / 120</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Academic Standing</p>
                    <p>Good Standing</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Advisor</p>
                    <p>Dr. Sarah Johnson</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="documents" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">High School Transcript</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Sep 1, 2022</p>
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
                        <p className="font-medium">ID Verification</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Sep 1, 2022</p>
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
                        <p className="font-medium">Medical Records</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Sep 3, 2022</p>
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
                        <p className="font-medium">Financial Aid Documents</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Sep 5, 2022</p>
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

