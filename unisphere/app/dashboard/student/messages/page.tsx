import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MoreHorizontal, Phone, Video } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentMessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-1">
          <CardHeader className="px-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all">
              <TabsList className="w-full justify-start rounded-none border-b px-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="m-0">
                <div className="divide-y">
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer bg-secondary/50">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Johnson" />
                      <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Dr. Johnson</p>
                        <span className="text-xs text-muted-foreground">10:42 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        I've reviewed your assignment and have some feedback...
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Prof. Smith" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Prof. Smith</p>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Don't forget about the quiz tomorrow!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Study Group" />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">CS101 Study Group</p>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Emily: Are we still meeting at the library at 7?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Academic Advisor" />
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Academic Advisor</p>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Let's schedule a meeting to discuss your course selection for next semester.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="unread" className="m-0">
                <div className="divide-y">
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Johnson" />
                      <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Dr. Johnson</p>
                        <span className="text-xs text-muted-foreground">10:42 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        I've reviewed your assignment and have some feedback...
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faculty" className="m-0">
                <div className="divide-y">
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Johnson" />
                      <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Dr. Johnson</p>
                        <span className="text-xs text-muted-foreground">10:42 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        I've reviewed your assignment and have some feedback...
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Prof. Smith" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Prof. Smith</p>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Don't forget about the quiz tomorrow!
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="students" className="m-0">
                <div className="divide-y">
                  <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Study Group" />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">CS101 Study Group</p>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Emily: Are we still meeting at the library at 7?
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Johnson" />
                  <AvatarFallback>DJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Dr. Johnson</CardTitle>
                  <CardDescription>Computer Science 101</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              <div className="flex items-start gap-2 max-w-[80%]">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Johnson" />
                  <AvatarFallback>DJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-sm">Hello John, I've reviewed your recent assignment on algorithms.</p>
                  </div>
                  <span className="text-xs text-muted-foreground">10:30 AM</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2 max-w-[80%]">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Johnson" />
                  <AvatarFallback>DJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-sm">Your solution was quite efficient, but I have some suggestions for improvement.</p>
                  </div>
                  <span className="text-xs text-muted-foreground">10:32 AM</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2 max-w-[80%] ml-auto flex-row-reverse">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <p className="text-sm">Thank you, Dr. Johnson. I'd appreciate any feedback to improve my work.</p>
                  </div>
                  <span className="text-xs text-muted-foreground block text-right">10:35 AM</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2 max-w-[80%]">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Johnson" />
                  <AvatarFallback>DJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-sm">I've attached some notes with specific suggestions. Let me know if you have any questions.</p>
                  </div>
                  <div className="mt-\[1px\] text-xs text-muted-foreground">10:40 AM</div>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <Input type="text" placeholder="Type a message..." />
          </div>
        </Card>
      </div>
    </div>
  )
}
