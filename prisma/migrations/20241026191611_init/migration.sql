-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "teamLeadId" INTEGER NOT NULL,
    "employeeCount" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "projectId" INTEGER,
    CONSTRAINT "Team_teamLeadId_fkey" FOREIGN KEY ("teamLeadId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Team_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectDivision" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AnnualReport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "yearStart" DATETIME NOT NULL,
    "yearEnd" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "AnnualReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MonthlyReport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monthStart" DATETIME NOT NULL,
    "monthEnd" DATETIME NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "comments" TEXT,
    "annualReportId" INTEGER NOT NULL,
    CONSTRAINT "MonthlyReport_annualReportId_fkey" FOREIGN KEY ("annualReportId") REFERENCES "AnnualReport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WorkUnit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "days" REAL NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "projectDivisionId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "weeklyReportid" INTEGER NOT NULL,
    CONSTRAINT "WorkUnit_projectDivisionId_fkey" FOREIGN KEY ("projectDivisionId") REFERENCES "ProjectDivision" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WorkUnit_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WorkUnit_weeklyReportid_fkey" FOREIGN KEY ("weeklyReportid") REFERENCES "WeeklyReport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeeklyReport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weekStart" DATETIME NOT NULL,
    "weekEnd" DATETIME NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "notes" TEXT,
    "monthlyReportId" INTEGER NOT NULL,
    CONSTRAINT "WeeklyReport_monthlyReportId_fkey" FOREIGN KEY ("monthlyReportId") REFERENCES "MonthlyReport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
