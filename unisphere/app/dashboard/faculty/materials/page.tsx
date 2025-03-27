"use client"

import { useState } from "react"
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
  Plus,
  Image,
  LinkIcon,
  ExternalLink,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function FacultyMaterialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [materialType, setMaterialType] = useState("file")

  // Mock courses data
  const courses = [
    { id: "CS101", name: "Computer Science 101" },
    { id: "CS202", name: "Data Structures and Algorithms" },
    { id: "CS305", name: "Artificial Intelligence" },
    { id: "CS210", name: "Web Development" },
  ]

  // Mock materials data
  const materials = [
    {
      id: 1,
      name: "Computer Science 101",
      type: "folder",
      course: "CS101",
      items: 12,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Data Structures and Algorithms",
      type: "folder",
      course: "CS202",
      items: 8,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "Artificial Intelligence",
      type: "folder",
      course: "CS305",
      items: 10,
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      name: "Web Development",
      type: "folder",
      course: "CS210",
      items: 15,
      lastUpdated: "5 days ago",
    },
    {
      id: 5,
      name: "Syllabus - Spring 2025.pdf",
      type: "file",
      fileType: "pdf",
      course: "CS101",
      size: "2.4 MB",
      lastUpdated: "Mar 15, 2025",
    },
    {
      id: 6,
      name: "Introduction to Algorithms - Lecture 1.mp4",
      type: "file",
      fileType: "video",
      course: "CS101",
      size: "156 MB",
      lastUpdated: "Mar 20, 2025",
    },
    {
      id: 7,
      name: "Programming Exercises - Week 1.docx",
      type: "file",
      fileType: "document",
      course: "CS101",
      size: "1.2 MB",
      lastUpdated: "Mar 22, 2025",
    },
    {
      id: 8,
      name: "Data Structures Overview.pptx",
      type: "file",
      fileType: "presentation",
      course: "CS202",
      size: "4.2 MB",
      lastUpdated: "Mar 24, 2025",
    },
    {
      id: 9,
      name: "Neural Networks Diagram.png",
      type: "file",
      fileType: "image",
      course: "CS305",
      size: "3.5 MB",
      lastUpdated: "Mar 25, 2025",
    },
    {
      id: 10,
      name: "Web Development Resources",
      type: "link",
      course: "CS210",
      url: "https://developer.mozilla.org/",
      lastUpdated: "Mar 26, 2025",
    },
  ]

  const filteredMaterials = materials.filter(
    (material) =>
      (selectedCourse === "all" || material.course === selectedCourse) &&
      material.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getIconForMaterial = (material) => {
    if (material.type === "folder") return <Folder className="h-6 w-6 text-primary" />
    if (material.type === "link") return <LinkIcon className="h-6 w-6 text-primary" />

    switch (material.fileType) {
      case "pdf":
        return <FileText className="h-6 w-6 text-primary" />
      case "video":
        return <Video className="h-6 w-6 text-primary" />
      case "document":
        return <BookOpen className="h-6 w-6 text-primary" />
      case "presentation":
        return <File className="h-6 w-6 text-primary" />
      case "image":
        return <Image className="h-6 w-6 text-primary" />
      default:
        return <File className="h-6 w-6 text-primary" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Course Materials</h1>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => {
              setMaterialType("folder")
              setShowAddDialog(true)
            }}
          >
            <FolderPlus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
          <Button
            onClick={() => {
              setMaterialType("file")
              setShowAddDialog(true)
            }}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Materials
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search materials..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Materials</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="presentations">Presentations</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>All Course Materials</CardTitle>
                  <CardDescription>Manage and organize your teaching materials</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-primary/10 rounded-md">{getIconForMaterial(material)}</div>
                      <div>
                        <p className="font-medium">{material.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {material.type === "folder"
                            ? `${material.items} items • Last updated: ${material.lastUpdated}`
                            : material.type === "link"
                              ? `External Link • Added: ${material.lastUpdated}`
                              : `${material.fileType.toUpperCase()} • ${material.size} • Uploaded: ${material.lastUpdated}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {material.type === "link" && (
                        <Button variant="ghost" size="icon" className="mr-2">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          {material.type !== "folder" && <DropdownMenuItem>Download</DropdownMenuItem>}
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing {filteredMaterials.length} items</div>
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
                {filteredMaterials
                  .filter((m) => m.type === "file" && (m.fileType === "pdf" || m.fileType === "document"))
                  .map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded-md">{getIconForMaterial(material)}</div>
                        <div>
                          <p className="font-medium">{material.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {material.fileType.toUpperCase()} • {material.size} • Uploaded: {material.lastUpdated}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
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
                {filteredMaterials
                  .filter((m) => m.type === "file" && m.fileType === "presentation")
                  .map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded-md">{getIconForMaterial(material)}</div>
                        <div>
                          <p className="font-medium">{material.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {material.fileType.toUpperCase()} • {material.size} • Uploaded: {material.lastUpdated}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
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
                {filteredMaterials
                  .filter((m) => m.type === "file" && m.fileType === "video")
                  .map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded-md">{getIconForMaterial(material)}</div>
                        <div>
                          <p className="font-medium">{material.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {material.fileType.toUpperCase()} • {material.size} • Uploaded: {material.lastUpdated}
                          </p>
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
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="links" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>External Links</CardTitle>
              <CardDescription>Links to external resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredMaterials
                  .filter((m) => m.type === "link")
                  .map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 border rounded-md hover:bg-secondary/50 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="mr-4 p-2 bg-primary/10 rounded-md">{getIconForMaterial(material)}</div>
                        <div>
                          <p className="font-medium">{material.name}</p>
                          <p className="text-sm text-muted-foreground">External Link • Added: {material.lastUpdated}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Link
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {materialType === "folder"
                ? "Create New Folder"
                : materialType === "link"
                  ? "Add External Link"
                  : "Upload Materials"}
            </DialogTitle>
            <DialogDescription>
              {materialType === "folder"
                ? "Create a new folder to organize your course materials."
                : materialType === "link"
                  ? "Add a link to an external resource."
                  : "Upload files to share with your students."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {materialType === "folder" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="folderName">Folder Name</Label>
                  <Input id="folderName" placeholder="Enter folder name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="folderCourse">Course</Label>
                  <Select>
                    <SelectTrigger id="folderCourse">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.id} - {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="folderDescription">Description (Optional)</Label>
                  <Textarea id="folderDescription" placeholder="Enter folder description" />
                </div>
              </>
            )}

            {materialType === "link" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="linkName">Link Name</Label>
                  <Input id="linkName" placeholder="Enter a name for this link" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkUrl">URL</Label>
                  <Input id="linkUrl" placeholder="https://example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkCourse">Course</Label>
                  <Select>
                    <SelectTrigger id="linkCourse">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.id} - {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkDescription">Description (Optional)</Label>
                  <Textarea id="linkDescription" placeholder="Enter a description for this link" />
                </div>
              </>
            )}

            {materialType === "file" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fileCourse">Course</Label>
                  <Select>
                    <SelectTrigger id="fileCourse">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.id} - {course.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Files</Label>
                  <div className="border border-dashed rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse files</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Browse Files
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fileDescription">Description (Optional)</Label>
                  <Textarea id="fileDescription" placeholder="Enter a description for these files" />
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setMaterialType("link")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Link Instead
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setMaterialType("folder")}>
                    <FolderPlus className="mr-2 h-4 w-4" />
                    Create Folder Instead
                  </Button>
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowAddDialog(false)}>
              {materialType === "folder" ? "Create Folder" : materialType === "link" ? "Add Link" : "Upload Files"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

