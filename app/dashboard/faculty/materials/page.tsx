import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FileText,
  FolderPlus,
  Upload,
  Download,
  Search,
  File,
  Folder,
  BookOpen,
  Video,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function FacultyMaterialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Course Materials</h1>
        <div className="flex items-center space-x-2">
          <Button>
            <FolderPlus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Files
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Materials</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="presentations">Presentations</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>All Course Materials</CardTitle>
                  <CardDescription>Manage and organize your teaching materials</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search files..." className="pl-8 w-[200px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Computer Science 101</p>
                      <p className="text-sm text-muted-foreground">12 items • Last updated: 2 days ago</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced Programming</p>
                      <p className="text-sm text-muted-foreground">8 items • Last updated: 1 week ago</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Syllabus - Spring 2023.pdf</p>
                      <p className="text-sm text-muted-foreground">PDF • 2.4 MB • Uploaded: Mar 15, 2023</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Introduction to Algorithms - Lecture 1.mp4</p>
                      <p className="text-sm text-muted-foreground">MP4 • 156 MB • Uploaded: Mar 20, 2023</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Programming Exercises - Week 1.docx</p>
                      <p className="text-sm text-muted-foreground">DOCX • 1.2 MB • Uploaded: Mar 22, 2023</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 24 items</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>PDF, Word, and text documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Syllabus - Spring 2023.pdf</p>
                      <p className="text-sm text-muted-foreground">PDF • 2.4 MB • Uploaded: Mar 15, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Programming Exercises - Week 1.docx</p>
                      <p className="text-sm text-muted-foreground">DOCX • 1.2 MB • Uploaded: Mar 22, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Research Paper Guidelines.pdf</p>
                      <p className="text-sm text-muted-foreground">PDF • 1.8 MB • Uploaded: Mar 25, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="presentations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Presentations</CardTitle>
              <CardDescription>PowerPoint and other presentation files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <File className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Introduction to Programming Concepts.pptx</p>
                      <p className="text-sm text-muted-foreground">PPTX • 5.6 MB • Uploaded: Mar 18, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <File className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Data Structures Overview.pptx</p>
                      <p className="text-sm text-muted-foreground">PPTX • 4.2 MB • Uploaded: Mar 24, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Videos</CardTitle>
              <CardDescription>Lecture recordings and tutorial videos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Introduction to Algorithms - Lecture 1.mp4</p>
                      <p className="text-sm text-muted-foreground">MP4 • 156 MB • Uploaded: Mar 20, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge>45:12</Badge>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 bg-primary/10 rounded-md">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Sorting Algorithms Tutorial.mp4</p>
                      <p className="text-sm text-muted-foreground">MP4 • 128 MB • Uploaded: Mar 27, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge>32:45</Badge>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
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

