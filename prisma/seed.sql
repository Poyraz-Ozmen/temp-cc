-- seed.sql

-- Kullanıcıları ekle
INSERT INTO User (username, email, password, isActive) VALUES
('john_doe', 'john.doe@example.com', 'hashed_password_1', true);

-- Projeleri ekle
INSERT INTO Project (name, description, startDate, endDate, status) VALUES
('Project Alpha', 'This is the first project.', '2024-01-01', '2024-12-31', 'Active');

-- Takımları ekle
INSERT INTO Team (name, teamLeadId, employeeCount, order, projectId) VALUES
('Development Team', 1, 5, 1, 1);

-- Proje Bölümlerini ekle
INSERT INTO ProjectDivision (name, description, order) VALUES
('Frontend Development', 'This division focuses on the frontend aspects of the project.', 1);

-- Aylık raporları ekle
INSERT INTO MonthlyReport (monthStart, monthEnd, completed, comments, annualReportId) VALUES
('2024-01-01', '2024-01-31', false, 'First monthly report for the year.', 1);

-- Yıllık raporları ekle
INSERT INTO AnnualReport (yearStart, yearEnd, status, userId) VALUES
('2024-01-01', '2024-12-31', 'Draft', 1);

-- Haftalık raporları ekle
INSERT INTO WeeklyReport (weekStart, weekEnd, completed, notes, monthlyReportId) VALUES
('2024-01-01', '2024-01-07', false, 'First week of the year.', 1);

-- İş birimlerini ekle
INSERT INTO WorkUnit (days, description, status, projectDivisionId, projectId, weeklyReportid) VALUES
(5, 'Implement the user login feature.', 'In Progress', 1, 1, 1);
