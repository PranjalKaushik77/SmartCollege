"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Settings,
  Users,
  BookOpen,
  Database,
  Lock,
  Bell,
  HardDrive,
  Server,
  Save,
  RefreshCw,
  AlertCircle,
} from "lucide-react"

export default function AdminSettingsPage() {
  const [maintenanceMode, setMaintenanceMode] = useState(false)
  const [debugMode, setDebugMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [autoBackup, setAutoBackup] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>
        <div className="flex items-center space-x-2">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save All Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <TabsList className="flex flex-col h-auto p-0 bg-transparent space-y-1">
              <TabsTrigger value="general" className="justify-start w-full">
                <Settings className="mr-2 h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="users" className="justify-start w-full">
                <Users className="mr-2 h-4 w-4" />
                User Management
              </TabsTrigger>
              <TabsTrigger value="academic" className="justify-start w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Academic Settings
              </TabsTrigger>
              <TabsTrigger value="database" className="justify-start w-full">
                <Database className="mr-2 h-4 w-4" />
                Database
              </TabsTrigger>
              <TabsTrigger value="security" className="justify-start w-full">
                <Lock className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start w-full">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="backup" className="justify-start w-full">
                <HardDrive className="mr-2 h-4 w-4" />
                Backup & Restore
              </TabsTrigger>
              <TabsTrigger value="system" className="justify-start w-full">
                <Server className="mr-2 h-4 w-4" />
                System Maintenance
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="general" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure basic system settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="institutionName">Institution Name</Label>
                    <Input id="institutionName" defaultValue="University College" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institutionAddress">Institution Address</Label>
                    <Textarea id="institutionAddress" defaultValue="123 University Avenue, College Town, State 12345" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input id="contactEmail" type="email" defaultValue="contact@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input id="contactPhone" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="america_new_york">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america_new_york">America/New York (UTC-5)</SelectItem>
                        <SelectItem value="america_chicago">America/Chicago (UTC-6)</SelectItem>
                        <SelectItem value="america_denver">America/Denver (UTC-7)</SelectItem>
                        <SelectItem value="america_los_angeles">America/Los Angeles (UTC-8)</SelectItem>
                        <SelectItem value="europe_london">Europe/London (UTC+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select defaultValue="mm_dd_yyyy">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm_dd_yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dd_mm_yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="yyyy_mm_dd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">System Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>User Management Settings</CardTitle>
                  <CardDescription>Configure user account settings and policies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="passwordPolicy">Password Policy</Label>
                    <Select defaultValue="strong">
                      <SelectTrigger id="passwordPolicy">
                        <SelectValue placeholder="Select password policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                        <SelectItem value="medium">Medium (8+ chars, letters & numbers)</SelectItem>
                        <SelectItem value="strong">Strong (8+ chars, upper/lower, numbers, symbols)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry">Password Expiry</Label>
                    <Select defaultValue="90days">
                      <SelectTrigger id="passwordExpiry">
                        <SelectValue placeholder="Select password expiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30days">30 Days</SelectItem>
                        <SelectItem value="60days">60 Days</SelectItem>
                        <SelectItem value="90days">90 Days</SelectItem>
                        <SelectItem value="180days">180 Days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                    </div>
                    <Switch id="twoFactorAuth" checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="accountLockout">Account Lockout Threshold</Label>
                    <Select defaultValue="5attempts">
                      <SelectTrigger id="accountLockout">
                        <SelectValue placeholder="Select lockout threshold" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3attempts">3 Failed Attempts</SelectItem>
                        <SelectItem value="5attempts">5 Failed Attempts</SelectItem>
                        <SelectItem value="10attempts">10 Failed Attempts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountLockoutDuration">Account Lockout Duration</Label>
                    <Select defaultValue="30min">
                      <SelectTrigger id="accountLockoutDuration">
                        <SelectValue placeholder="Select lockout duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">15 Minutes</SelectItem>
                        <SelectItem value="30min">30 Minutes</SelectItem>
                        <SelectItem value="1hour">1 Hour</SelectItem>
                        <SelectItem value="24hours">24 Hours</SelectItem>
                        <SelectItem value="manual">Until Manually Unlocked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoAccountCreation">Automatic Account Creation</Label>
                      <p className="text-sm text-muted-foreground">Allow automatic account creation for new students</p>
                    </div>
                    <Switch id="autoAccountCreation" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Settings</CardTitle>
                  <CardDescription>Configure academic calendar and course settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentAcademicYear">Current Academic Year</Label>
                    <Select defaultValue="2024_2025">
                      <SelectTrigger id="currentAcademicYear">
                        <SelectValue placeholder="Select academic year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023_2024">2023-2024</SelectItem>
                        <SelectItem value="2024_2025">2024-2025</SelectItem>
                        <SelectItem value="2025_2026">2025-2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentSemester">Current Semester</Label>
                    <Select defaultValue="spring_2025">
                      <SelectTrigger id="currentSemester">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fall_2024">Fall 2024</SelectItem>
                        <SelectItem value="spring_2025">Spring 2025</SelectItem>
                        <SelectItem value="summer_2025">Summer 2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="semesterStartDate">Semester Start Date</Label>
                      <Input id="semesterStartDate" type="date" defaultValue="2025-01-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="semesterEndDate">Semester End Date</Label>
                      <Input id="semesterEndDate" type="date" defaultValue="2025-05-15" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="registrationStartDate">Registration Start Date</Label>
                      <Input id="registrationStartDate" type="date" defaultValue="2024-11-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registrationEndDate">Registration End Date</Label>
                      <Input id="registrationEndDate" type="date" defaultValue="2025-01-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gradingSystem">Grading System</Label>
                    <Select defaultValue="letter">
                      <SelectTrigger id="gradingSystem">
                        <SelectValue placeholder="Select grading system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="letter">Letter Grades (A, B, C, D, F)</SelectItem>
                        <SelectItem value="percentage">Percentage (0-100%)</SelectItem>
                        <SelectItem value="gpa">GPA (0.0-4.0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attendanceThreshold">Attendance Threshold (%)</Label>
                    <Input id="attendanceThreshold" type="number" defaultValue="75" min="0" max="100" />
                    <p className="text-xs text-muted-foreground">Minimum attendance percentage required</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoGradeCalculation">Automatic Grade Calculation</Label>
                      <p className="text-sm text-muted-foreground">
                        Calculate final grades automatically based on assignments
                      </p>
                    </div>
                    <Switch id="autoGradeCalculation" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="database" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Database Settings</CardTitle>
                  <CardDescription>Configure database connection and optimization settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      Changes to database settings may affect system performance. Proceed with caution.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Label htmlFor="dbHost">Database Host</Label>
                    <Input id="dbHost" defaultValue="localhost" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dbPort">Database Port</Label>
                    <Input id="dbPort" defaultValue="3306" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dbName">Database Name</Label>
                    <Input id="dbName" defaultValue="university_db" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dbUsername">Database Username</Label>
                    <Input id="dbUsername" defaultValue="admin" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dbPassword">Database Password</Label>
                    <Input id="dbPassword" defaultValue="••••••••" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connectionPool">Connection Pool Size</Label>
                    <Input id="connectionPool" type="number" defaultValue="10" min="1" max="100" />
                    <p className="text-xs text-muted-foreground">Maximum number of database connections</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dbOptimization">Database Optimization</Label>
                      <p className="text-sm text-muted-foreground">Automatically optimize database tables weekly</p>
                    </div>
                    <Switch id="dbOptimization" defaultChecked />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Test Connection
                    </Button>
                    <Button variant="destructive">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Optimize Now
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure system security and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sslEncryption">SSL Encryption</Label>
                      <p className="text-sm text-muted-foreground">Enforce HTTPS for all connections</p>
                    </div>
                    <Switch id="sslEncryption" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ipRestriction">IP Restriction</Label>
                      <p className="text-sm text-muted-foreground">Restrict admin access to specific IP ranges</p>
                    </div>
                    <Switch id="ipRestriction" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="allowedIPs">Allowed IP Addresses/Ranges</Label>
                    <Textarea
                      id="allowedIPs"
                      placeholder="Enter IP addresses or ranges, one per line"
                      defaultValue="192.168.1.0/24&#10;10.0.0.1&#10;10.0.0.2"
                    />
                    <p className="text-xs text-muted-foreground">Enter one IP address or CIDR range per line</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input id="sessionTimeout" type="number" defaultValue="30" min="1" max="1440" />
                    <p className="text-xs text-muted-foreground">Time before inactive users are logged out</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auditLogging">Audit Logging</Label>
                      <p className="text-sm text-muted-foreground">Log all administrative actions</p>
                    </div>
                    <Switch id="auditLogging" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="auditLogRetention">Audit Log Retention (days)</Label>
                    <Input id="auditLogRetention" type="number" defaultValue="90" min="1" max="365" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dataEncryption">Data Encryption</Label>
                      <p className="text-sm text-muted-foreground">Encrypt sensitive data in the database</p>
                    </div>
                    <Switch id="dataEncryption" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure system notifications and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send system notifications via email</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  {emailNotifications && (
                    <div className="space-y-2 pl-6 border-l-2 border-muted">
                      <div className="space-y-2">
                        <Label htmlFor="smtpServer">SMTP Server</Label>
                        <Input id="smtpServer" defaultValue="smtp.university.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpPort">SMTP Port</Label>
                        <Input id="smtpPort" defaultValue="587" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpUsername">SMTP Username</Label>
                        <Input id="smtpUsername" defaultValue="notifications@university.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smtpPassword">SMTP Password</Label>
                        <Input id="smtpPassword" type="password" defaultValue="••••••••" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="smtpSsl" defaultChecked />
                        <Label htmlFor="smtpSsl">Use SSL/TLS</Label>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send critical alerts via SMS</p>
                    </div>
                    <Switch id="smsNotifications" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                  </div>
                  {smsNotifications && (
                    <div className="space-y-2 pl-6 border-l-2 border-muted">
                      <div className="space-y-2">
                        <Label htmlFor="smsProvider">SMS Provider</Label>
                        <Select defaultValue="twilio">
                          <SelectTrigger id="smsProvider">
                            <SelectValue placeholder="Select SMS provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="twilio">Twilio</SelectItem>
                            <SelectItem value="aws_sns">AWS SNS</SelectItem>
                            <SelectItem value="messagebird">MessageBird</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smsApiKey">API Key</Label>
                        <Input id="smsApiKey" type="password" defaultValue="••••••••" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="smsFrom">From Number</Label>
                        <Input id="smsFrom" defaultValue="+15551234567" />
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label>Notification Types</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifySystemErrors" defaultChecked />
                        <Label htmlFor="notifySystemErrors">System Errors</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifySecurityAlerts" defaultChecked />
                        <Label htmlFor="notifySecurityAlerts">Security Alerts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifyDatabaseBackups" defaultChecked />
                        <Label htmlFor="notifyDatabaseBackups">Database Backups</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifyUserLockouts" defaultChecked />
                        <Label htmlFor="notifyUserLockouts">User Account Lockouts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifySystemUpdates" defaultChecked />
                        <Label htmlFor="notifySystemUpdates">System Updates</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="backup" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Backup & Restore</CardTitle>
                  <CardDescription>Configure system backup and restore settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoBackup">Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Schedule regular system backups</p>
                    </div>
                    <Switch id="autoBackup" checked={autoBackup} onCheckedChange={setAutoBackup} />
                  </div>
                  {autoBackup && (
                    <div className="space-y-2 pl-6 border-l-2 border-muted">
                      <div className="space-y-2">
                        <Label htmlFor="backupFrequency">Backup Frequency</Label>
                        <Select defaultValue="daily">
                          <SelectTrigger id="backupFrequency">
                            <SelectValue placeholder="Select backup frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="backupTime">Backup Time</Label>
                        <Input id="backupTime" type="time" defaultValue="03:00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="backupRetention">Backup Retention (days)</Label>
                        <Input id="backupRetention" type="number" defaultValue="30" min="1" max="365" />
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="backupLocation">Backup Storage Location</Label>
                    <Select defaultValue="local">
                      <SelectTrigger id="backupLocation">
                        <SelectValue placeholder="Select storage location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local Storage</SelectItem>
                        <SelectItem value="network">Network Storage</SelectItem>
                        <SelectItem value="cloud_s3">Cloud Storage (AWS S3)</SelectItem>
                        <SelectItem value="cloud_azure">Cloud Storage (Azure)</SelectItem>
                        <SelectItem value="cloud_gcp">Cloud Storage (Google Cloud)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backupPath">Backup Path</Label>
                    <Input id="backupPath" defaultValue="/var/backups/university" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="compressBackups" defaultChecked />
                    <Label htmlFor="compressBackups">Compress Backups</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="encryptBackups" defaultChecked />
                    <Label htmlFor="encryptBackups">Encrypt Backups</Label>
                  </div>
                  <div className="space-y-2">
                    <Label>Last Backup</Label>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between">
                        <p className="font-medium">Full System Backup</p>
                        <Badge>Successful</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">March 26, 2025 at 03:00 AM</p>
                      <p className="text-sm text-muted-foreground">Size: 4.2 GB</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">
                      <HardDrive className="mr-2 h-4 w-4" />
                      Restore Backup
                    </Button>
                    <Button>
                      <HardDrive className="mr-2 h-4 w-4" />
                      Backup Now
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="system" className="space-y-4 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>System Maintenance</CardTitle>
                  <CardDescription>Configure system maintenance and performance settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      Enabling maintenance mode will make the system inaccessible to all users except administrators.
                    </AlertDescription>
                  </Alert>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                      <p className="text-sm text-muted-foreground">Put the system in maintenance mode</p>
                    </div>
                    <Switch id="maintenanceMode" checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                  </div>
                  {maintenanceMode && (
                    <div className="space-y-2 pl-6 border-l-2 border-muted">
                      <div className="space-y-2">
                        <Label htmlFor="maintenanceMessage">Maintenance Message</Label>
                        <Textarea
                          id="maintenanceMessage"
                          defaultValue="The system is currently undergoing scheduled maintenance. Please try again later."
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="maintenanceStart">Start Time</Label>
                          <Input id="maintenanceStart" type="datetime-local" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="maintenanceEnd">End Time</Label>
                          <Input id="maintenanceEnd" type="datetime-local" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="debugMode">Debug Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable detailed error reporting and logging</p>
                    </div>
                    <Switch id="debugMode" checked={debugMode} onCheckedChange={setDebugMode} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logLevel">Log Level</Label>
                    <Select defaultValue="error">
                      <SelectTrigger id="logLevel">
                        <SelectValue placeholder="Select log level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debug">Debug (Verbose)</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cacheLifetime">Cache Lifetime (minutes)</Label>
                    <Input id="cacheLifetime" type="number" defaultValue="60" min="0" max="1440" />
                    <p className="text-xs text-muted-foreground">0 to disable caching</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxUploadSize">Maximum Upload Size (MB)</Label>
                    <Input id="maxUploadSize" type="number" defaultValue="50" min="1" max="1000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sessionLifetime">Session Lifetime (minutes)</Label>
                    <Input id="sessionLifetime" type="number" defaultValue="120" min="1" max="1440" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Clear Cache
                    </Button>
                    <Button variant="destructive">
                      <Server className="mr-2 h-4 w-4" />
                      Restart Services
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

