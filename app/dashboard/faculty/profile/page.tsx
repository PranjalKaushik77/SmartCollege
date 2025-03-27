import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Calendar, BookOpen, GraduationCap, Edit, Upload, FileText, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function FacultyProfilePage() {
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
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Faculty avatar" />
              <AvatarFallback className="text-2xl">DJ</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-bold">Dr. Johnson</h2>
              <p className="text-sm text-muted-foreground">Faculty ID: FAC-10045</p>
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
                <span>dr.johnson@university.edu</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>(555) 987-6543</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Office: F-120, Faculty Building</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Joined: September 2015</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-medium mb-2">Department</h3>
              <div className="flex items-center text-sm">
                <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Computer Science and Engineering</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-medium mb-2">Position</h3>
              <div className="flex items-center text-sm">
                <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Associate Professor</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Faculty Information</CardTitle>
            <CardDescription>Your personal and academic details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                    <p>Dr. David Johnson</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                    <p>June 12, 1975</p>
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
                    <p>dr.johnson@university.edu</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p>(555) 987-6543</p>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p>456 Faculty Lane, University City, State 12345</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
                    <p>Sarah Johnson (Spouse)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Emergency Phone</p>
                    <p>(555) 987-1234</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="academic" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Faculty ID</p>
                    <p>FAC-10045</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Department</p>
                    <p>Computer Science and Engineering</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Position</p>
                    <p>Associate Professor</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Specialization</p>
                    <p>Artificial Intelligence, Machine Learning</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Joining Date</p>
                    <p>September 15, 2015</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Office Hours</p>
                    <p>Mon, Wed: 2:00 PM - 4:00 PM</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Current Teaching Load</p>
                    <p>3 Courses (9 Credit Hours)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Research Group</p>
                    <p>Advanced AI Systems Lab</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-sm font-medium">Educational Qualifications</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">Ph.D. in Computer Science</p>
                        <p className="text-sm text-muted-foreground">2005-2010</p>
                      </div>
                      <p className="text-sm">Stanford University</p>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">M.S. in Computer Science</p>
                        <p className="text-sm text-muted-foreground">2003-2005</p>
                      </div>
                      <p className="text-sm">MIT</p>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">B.S. in Computer Engineering</p>
                        <p className="text-sm text-muted-foreground">1999-2003</p>
                      </div>
                      <p className="text-sm">University of California, Berkeley</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="publications" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Advances in Neural Network Architectures</p>
                        <p className="text-sm text-muted-foreground">Journal of Artificial Intelligence, 2023</p>
                      </div>
                    </div>
                    <Badge>Journal</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Efficient Deep Learning for Edge Computing</p>
                        <p className="text-sm text-muted-foreground">
                          International Conference on Machine Learning, 2022
                        </p>
                      </div>
                    </div>
                    <Badge>Conference</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">A Survey of Reinforcement Learning Techniques</p>
                        <p className="text-sm text-muted-foreground">IEEE Transactions on AI, 2021</p>
                      </div>
                    </div>
                    <Badge>Journal</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Optimizing Neural Networks for Mobile Applications</p>
                        <p className="text-sm text-muted-foreground">ACM Conference on Mobile Computing, 2020</p>
                      </div>
                    </div>
                    <Badge>Conference</Badge>
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
                        <p className="font-medium">Ph.D. Certificate</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Sep 15, 2015</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Teaching Excellence Award</p>
                        <p className="text-sm text-muted-foreground">Uploaded on May 10, 2022</p>
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
                        <p className="font-medium">Employment Contract</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Sep 15, 2015</p>
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
                        <p className="font-medium">Research Grant Documents</p>
                        <p className="text-sm text-muted-foreground">Uploaded on Jan 20, 2023</p>
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

