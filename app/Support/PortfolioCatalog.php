<?php

namespace App\Support;

class PortfolioCatalog
{
    /**
     * Professional experience from the resume.
     */
    public static function experiences(): array
    {
        return [
            [
                'title' => 'ERP Data Encoder | System Accounting Staff',
                'organization' => 'Tomodachi Global Resources Inc.',
                'assignment' => 'Assigned to CyberPower Systems Manufacturing Inc.',
                'dates' => 'December 2025 – May 2026',
                'highlights' => [
                    'Maintained real-time inventory data and encoded accurate Bills of Materials (BOM) for UPS manufacturing in the ERP system.',
                    'Reconciled stock levels with production and warehouse teams to align inventory with active manufacturing schedules.',
                    'Generated ERP reports for planning and verified about 20 production and accounting records daily with 100% accuracy.',
                ],
            ],
            [
                'title' => 'IT Intern',
                'organization' => 'Mater Dei Academy of Tagaytay, Inc.',
                'assignment' => 'Registrar’s Office & ICT Department',
                'dates' => 'February 26, 2025 – June 16, 2025',
                'highlights' => [
                    'Processed and verified administrative and technical records with 100% accuracy, streamlining digital documentation and file accessibility.',
                    'Assisted with software updates, hardware troubleshooting, and continuous system monitoring to support daily operations.',
                    'Managed setup, configuration, and maintenance of workstations, printers, and network connections for staff.',
                    'Provided first-level technical support, helping reduce IT issue resolution times for team members.',
                ],
            ],
        ];
    }

    /**
     * Static service offerings. Replace with a Service model later.
     */
    public static function services(): array
    {
        return [
            [
                'icon' => 'bi-keyboard',
                'title' => 'Data Entry & Encoding',
                'items' => [
                    'Encode and update records in spreadsheets and office systems',
                    'Maintain structured data with consistent formatting',
                    'Support ERP-style encoding and inventory-related data tasks',
                    'Follow required templates, fields, and instructions carefully',
                ],
            ],
            [
                'icon' => 'bi-check2-square',
                'title' => 'Data Verification & Cleaning',
                'items' => [
                    'Check for missing, inconsistent, or duplicate entries',
                    'Validate records before final submission',
                    'Reconcile data against source documents',
                    'Prepare clean, review-ready files',
                ],
            ],
            [
                'icon' => 'bi-folder2-open',
                'title' => 'Records & Document Management',
                'items' => [
                    'Organize digital and physical files',
                    'Apply clear naming and folder structures',
                    'Update and retrieve documents efficiently',
                    'Support confidential handling of records',
                ],
            ],
            [
                'icon' => 'bi-briefcase',
                'title' => 'Administrative & Office Support',
                'items' => [
                    'Prepare documents, forms, and basic reports',
                    'Track tasks, deadlines, and follow-ups',
                    'Assist with day-to-day office coordination',
                    'Communicate clearly with teams and stakeholders',
                ],
            ],
            [
                'icon' => 'bi-people',
                'title' => 'HR & Recruitment Support',
                'items' => [
                    'Organize resumes and applicant files',
                    'Update candidate trackers and status logs',
                    'Assist with interview scheduling notes',
                    'Maintain recruitment documentation for review',
                ],
            ],
            [
                'icon' => 'bi-laptop',
                'title' => 'Virtual Assistance',
                'items' => [
                    'Remote data entry and spreadsheet updates',
                    'Inbox and document organization support',
                    'Schedule and task list coordination',
                    'Clear written updates on assigned work',
                ],
            ],
        ];
    }

    /**
     * Static skill groups. Replace with a Skill model later.
     */
    public static function skillGroups(): array
    {
        return [
            [
                'icon' => 'bi-database',
                'title' => 'Data & Records',
                'skills' => [
                    'Data Entry',
                    'Data Encoding',
                    'Data Verification',
                    'Data Cleaning',
                    'ERP Data Encoding',
                    'Records Management',
                    'File Organization',
                    'Typing 50+ WPM',
                ],
            ],
            [
                'icon' => 'bi-briefcase',
                'title' => 'Administrative Support',
                'skills' => [
                    'Document Preparation',
                    'Report Generation',
                    'Task Tracking',
                    'Administrative Assistance',
                    'Document Handling',
                    'Office Coordination',
                ],
            ],
            [
                'icon' => 'bi-people',
                'title' => 'HR / Recruitment Support',
                'skills' => [
                    'Applicant File Organization',
                    'Candidate Tracking',
                    'Interview Scheduling Support',
                    'Recruitment Documentation',
                    'Confidentiality',
                ],
            ],
            [
                'icon' => 'bi-file-earmark-spreadsheet',
                'title' => 'Tools & Productivity',
                'skills' => [
                    'Microsoft Excel',
                    'Google Sheets',
                    'Microsoft Word',
                    'Google Docs',
                    'Microsoft Office',
                    'Windows',
                ],
            ],
            [
                'icon' => 'bi-pc-display',
                'title' => 'Technical Support',
                'skills' => [
                    'Basic Troubleshooting',
                    'Software Installation',
                    'Computer Maintenance',
                    'Printer Support',
                    'Basic Networking',
                ],
            ],
            [
                'icon' => 'bi-person-check',
                'title' => 'Professional Strengths',
                'skills' => [
                    'Attention to Detail',
                    'Organization',
                    'Accuracy',
                    'Time Management',
                    'Team Collaboration',
                    'Adaptability',
                ],
            ],
        ];
    }

    /**
     * VA / Administrative Assistant sample project ideas.
     */
    public static function sampleProjectIdeas(): array
    {
        return [
            [
                'icon' => 'bi-table',
                'title' => 'Data Entry Tracker',
                'category' => 'Practice Sample',
                'type' => 'practice',
                'image' => 'images/projects/Data Entry.png',
                'summary' => 'Practice spreadsheet showing structured encoding fields, status tracking, and clean formatting for administrative records.',
                'outcome' => 'Illustrates how I organize source data before verification and submission.',
                'skills' => ['Data Entry', 'Excel', 'Google Sheets', 'Accuracy'],
            ],
            [
                'icon' => 'bi-person-vcard',
                'title' => 'Applicant Tracking Sheet',
                'category' => 'Practice Sample',
                'type' => 'practice',
                'image' => 'images/projects/Email.jpg',
                'summary' => 'Practice recruitment tracker for applicant names, stages, interview dates, and follow-up notes.',
                'outcome' => 'Shows how I would support HR/recruitment assistants with organized candidate logs.',
                'skills' => ['Applicant Tracking', 'Documentation', 'Organization'],
            ],
            [
                'icon' => 'bi-calendar3',
                'title' => 'Task & Schedule Board',
                'category' => 'Practice Sample',
                'type' => 'practice',
                'image' => 'images/projects/Calendar.png',
                'summary' => 'Practice virtual assistance sample for weekly schedules, meeting blocks, and assigned task monitoring.',
                'outcome' => 'Demonstrates clear coordination support for office and remote admin workflows.',
                'skills' => ['Scheduling', 'Task Tracking', 'Virtual Assistance'],
            ],
            [
                'icon' => 'bi-folder-check',
                'title' => 'Employee Records Index',
                'category' => 'Practice Sample',
                'type' => 'practice',
                'image' => 'images/projects/Document.jpg',
                'summary' => 'Practice filing structure and naming convention for active, previous, and supporting employee documents.',
                'outcome' => 'Shows a confidential, easy-to-retrieve approach to HR/admin document organization.',
                'skills' => ['Records Management', 'File Organization', 'Confidentiality'],
            ],
        ];
    }

    /**
     * Sample projects grouped by specialty area.
     * Replace with a Project model later.
     */
    public static function projectSections(): array
    {
        return [
            [
                'key' => 'excel-sheets',
                'title' => 'Excel / Sheets',
                'icon' => 'bi-file-earmark-spreadsheet',
                'description' => 'Practice spreadsheet samples for encoding, verification, reporting, and file organization. Clearly labeled as practice work.',
                'projects' => [
                    [
                        'icon' => 'bi-table',
                        'title' => 'Data Encoding & Verification',
                        'category' => 'Excel / Sheets',
                        'type' => 'practice',
                        'image' => 'images/projects/Encode.png',
                        'summary' => 'Practice sample: structured encoding and verification for missing information, inconsistent entries, duplicates, and formatting issues.',
                        'outcome' => 'Shows a clear workflow: Receive Data → Review → Encode → Verify → Clean & Organize → Final Review.',
                        'skills' => ['Data Entry', 'Data Verification', 'Data Cleaning', 'Excel', 'Record Management'],
                    ],
                    [
                        'icon' => 'bi-bar-chart',
                        'title' => 'Weekly Administrative Report',
                        'category' => 'Excel / Sheets',
                        'type' => 'practice',
                        'image' => 'images/projects/Report.png',
                        'summary' => 'Practice sample: organizes completed, pending, and ongoing tasks for progress monitoring and follow-up.',
                        'outcome' => 'Provides a clear weekly summary of administrative activities and document-related tasks.',
                        'skills' => ['Microsoft Excel', 'Reporting', 'Task Tracking', 'Data Organization'],
                    ],
                    [
                        'icon' => 'bi-folder2-open',
                        'title' => 'Records Management & File Organization',
                        'category' => 'Excel / Sheets',
                        'type' => 'practice',
                        'image' => 'images/projects/Tracker.png',
                        'summary' => 'Practice sample: structured folders and naming convention such as SURNAME_DOCUMENT_TYPE_DATE.',
                        'outcome' => 'Makes digital records easier to access, update, and retrieve in shared office files.',
                        'skills' => ['File Organization', 'Records Management', 'Documentation', 'Attention to Detail'],
                    ],
                ],
            ],
            [
                'key' => 'website',
                'title' => 'Website',
                'icon' => 'bi-globe2',
                'description' => 'Client and self-built web projects with clear layouts, product flows, and practical UI.',
                'projects' => [
                    [
                        'icon' => 'bi-building',
                        'title' => 'PACAI Website',
                        'category' => 'Website',
                        'status' => 'Client · Under Development',
                        'type' => 'work',
                        'image' => 'images/projects/pacai-website.png',
                        'url' => config('portfolio.project_urls.pacai') ?: null,
                        'summary' => 'Building the Philippine Association of Collection Agencies site with membership CTAs, agency verification, and a member overview dashboard.',
                        'outcome' => 'Gives PACAI a professional public presence while membership and verification features are still being developed for the client.',
                        'skills' => ['Web design', 'Frontend', 'Corporate UI', 'Dashboard layout'],
                    ],
                    [
                        'icon' => 'bi-flower2',
                        'title' => 'Crochet Cloude',
                        'category' => 'Website',
                        'status' => 'Self Project · Not Deployed',
                        'type' => 'work',
                        'image' => 'images/projects/crochet-cloude.png',
                        'url' => config('portfolio.project_urls.crochet_cloude') ?: null,
                        'summary' => 'Personal project for a small-business website concept: organizing business information, planning content, designing UI, and building the front-end structure.',
                        'outcome' => 'Demonstrates content organization, information management, UI design, and front-end development for a simple user-friendly experience.',
                        'skills' => ['Content Organization', 'UI Design', 'HTML', 'CSS', 'JavaScript'],
                    ],
                    [
                        'icon' => 'bi-journal-check',
                        'title' => 'Self-Study Tracker',
                        'category' => 'Website',
                        'status' => 'Self Project',
                        'type' => 'work',
                        'image' => 'images/projects/self-study-tracker.png',
                        'url' => config('portfolio.project_urls.self_study_tracker') ?: null,
                        'summary' => 'Built a personal study dashboard with daily progress, streak tracking, a study calendar, and a task list saved locally in the browser.',
                        'outcome' => 'Makes daily study habits easier to track with a clean calendar and task workflow.',
                        'skills' => ['Dashboard UI', 'JavaScript', 'Local storage', 'Habit tracking'],
                    ],
                ],
            ],
            [
                'key' => 'design',
                'title' => 'Design',
                'icon' => 'bi-palette',
                'description' => 'Poster and composite artwork created in Photoshop and Illustrator.',
                'projects' => [
                    [
                        'icon' => 'bi-flower1',
                        'title' => 'Delphinidin Blue-Tulip Poster',
                        'category' => 'Design',
                        'type' => 'work',
                        'image' => 'images/projects/delphinidin-tulip.png',
                        'summary' => 'Designed a vertical poster with elegant script typography and a clipping-mask treatment that reveals a tulip field through bold TULIP letterforms.',
                        'outcome' => 'Showcases typography, masking, and photo composition skills in Photoshop and Illustrator.',
                        'skills' => ['Photoshop', 'Illustrator', 'Typography', 'Clipping masks'],
                    ],
                    [
                        'icon' => 'bi-car-front',
                        'title' => 'Vintage Automotive Poster',
                        'category' => 'Design',
                        'type' => 'work',
                        'image' => 'images/projects/vintage-poster.jpg',
                        'summary' => 'Created a retro-styled poster featuring a classic station wagon with outlined VINTAGE type, barcode accent, and warm golden-hour color grading.',
                        'outcome' => 'Demonstrates brand-style layout, photo treatment, and clean typographic overlays.',
                        'skills' => ['Photoshop', 'Illustrator', 'Color grading', 'Layout'],
                    ],
                    [
                        'icon' => 'bi-book',
                        'title' => 'Storybook Forest Composite',
                        'category' => 'Design',
                        'type' => 'work',
                        'image' => 'images/projects/storybook-forest.jpg',
                        'summary' => 'Composited an open book into a sunlit forest scene, with a painterly ocean narrative illustrated across the pages.',
                        'outcome' => 'Highlights advanced photo compositing, lighting, and storytelling visuals.',
                        'skills' => ['Photoshop', 'Compositing', 'Lighting', 'Visual storytelling'],
                    ],
                    [
                        'icon' => 'bi-speedometer2',
                        'title' => 'BMW M4 Poster',
                        'category' => 'Design',
                        'type' => 'work',
                        'image' => 'images/projects/bmw-m4-poster.jpg',
                        'summary' => 'Built a dynamic automotive poster with diagonal photo panels, outlined BMW type, and a sharp vehicle cutout over a clean product footer.',
                        'outcome' => 'Shows collage layout, masking, and promotional poster design for product visuals.',
                        'skills' => ['Photoshop', 'Illustrator', 'Collage layout', 'Product poster'],
                    ],
                ],
            ],
        ];
    }

    /**
     * Flat project list for simple previews. Prefer projectSections() for full layout.
     */
    public static function projects(): array
    {
        $projects = [];

        foreach (self::projectSections() as $section) {
            foreach ($section['projects'] as $project) {
                $projects[] = $project;
            }
        }

        return $projects;
    }

    /**
     * One featured project from each specialty column.
     */
    public static function featuredProjects(): array
    {
        $featured = [];

        foreach (self::projectSections() as $section) {
            if (! empty($section['projects'][0])) {
                $project = $section['projects'][0];
                $project['section_title'] = $section['title'];
                $project['section_icon'] = $section['icon'];
                $featured[] = $project;
            }
        }

        return $featured;
    }

    /**
     * Mock job listings. Replace with Job Eloquent queries later.
     */
    public static function jobs(): array
    {
        return [
            [
                'slug' => 'general-virtual-assistant-northstar',
                'title' => 'General Virtual Assistant',
                'company' => 'Northstar Operations',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'setup' => 'Remote',
                'salary' => 'Competitive / part-time rate',
                'posted' => '2026-09-08',
                'deadline' => '2026-10-15',
                'schedule' => 'Weekday mornings, approximately 20 hours per week',
                'summary' => 'Provide dependable virtual support for email, calendars, file organization, and day-to-day administrative follow-through.',
                'description' => 'This part-time role supports a small operations team with general virtual assistance. The focus is accurate communication, organized records, and consistent handling of routine administrative work.',
                'responsibilities' => [
                    'Assist with inbox organization and professional email replies',
                    'Update shared folders, trackers, and document libraries',
                    'Complete online research and compile concise summaries',
                    'Support scheduling and meeting coordination',
                ],
                'qualifications' => [
                    'Comfortable with Google Workspace or Microsoft Office',
                    'Clear written communication',
                    'Reliable internet connection for remote work',
                    'Willingness to follow documented processes',
                ],
                'skills' => ['Virtual Assistance', 'Email Support', 'File Organization', 'Scheduling'],
            ],
            [
                'slug' => 'administrative-assistant-harborline',
                'title' => 'Administrative Assistant',
                'company' => 'Harborline Consulting',
                'type' => 'Part-Time',
                'location' => 'Makati / Hybrid',
                'setup' => 'Hybrid',
                'salary' => 'To be discussed',
                'posted' => '2026-09-10',
                'deadline' => '2026-10-20',
                'schedule' => '[e.g. 20 hours per week, hybrid two days on-site]',
                'summary' => 'Support document preparation, filing, scheduling, and office coordination for a professional services team.',
                'description' => 'Harborline is looking for a part-time administrative assistant who can keep documents, calendars, and office follow-ups organized with a high level of accuracy.',
                'responsibilities' => [
                    'Prepare and format documents, letters, and reports',
                    'Maintain physical and digital filing systems',
                    'Assist with appointment scheduling and reminders',
                    'Coordinate routine office and administrative tasks',
                ],
                'qualifications' => [
                    'Strong attention to detail',
                    'Professional verbal and written communication',
                    'Experience with Word, Excel, and shared drives is an advantage',
                    'Available for hybrid work when required',
                ],
                'skills' => ['Administrative Support', 'Document Management', 'Scheduling', 'Office Coordination'],
            ],
            [
                'slug' => 'office-staff-brightwell',
                'title' => 'Office Staff',
                'company' => 'Brightwell Shared Services',
                'type' => 'Part-Time',
                'location' => 'Quezon City',
                'setup' => 'On-site when required',
                'salary' => 'Part-time compensation package',
                'posted' => '2026-09-05',
                'deadline' => '2026-10-10',
                'schedule' => '[e.g. Monday–Friday, morning shift]',
                'summary' => 'Handle reports, spreadsheets, documents, and day-to-day administrative coordination in an office setting.',
                'description' => 'This office staff role supports internal teams with encoding, document handling, and administrative coordination. Reliability and neat record-keeping are essential.',
                'responsibilities' => [
                    'Encode and update office records',
                    'Assist with reports and spreadsheet maintenance',
                    'Organize incoming documents and correspondence',
                    'Provide general office support to the team',
                ],
                'qualifications' => [
                    'Organized and dependable work habits',
                    'Comfortable with Excel or Google Sheets',
                    'Able to work on-site when required',
                    'Professional and courteous with colleagues',
                ],
                'skills' => ['Office Support', 'Data Entry', 'Reports', 'Administrative Coordination'],
            ],
            [
                'slug' => 'hr-assistant-lumenhr',
                'title' => 'HR Assistant',
                'company' => 'LumenHR Partners',
                'type' => 'Part-Time',
                'location' => 'Remote / Hybrid',
                'setup' => 'Hybrid',
                'salary' => 'Negotiable',
                'posted' => '2026-09-12',
                'deadline' => '2026-10-25',
                'schedule' => '[e.g. 16–24 hours per week]',
                'summary' => 'Help organize resumes, maintain candidate information, and support interview scheduling and HR documentation.',
                'description' => 'LumenHR needs part-time administrative support for human resources activities. The work is process-oriented and requires confidentiality when handling applicant information.',
                'responsibilities' => [
                    'Organize resumes and applicant files',
                    'Update candidate information in tracking sheets',
                    'Assist with interview calendar coordination',
                    'Prepare recruitment and HR documentation',
                ],
                'qualifications' => [
                    'Discretion when handling personal information',
                    'Accurate data entry and file naming habits',
                    'Comfortable coordinating schedules by email',
                    'Interest in HR administration',
                ],
                'skills' => ['HR Assistance', 'Resume Organization', 'Interview Scheduling', 'Confidentiality'],
            ],
            [
                'slug' => 'recruitment-assistant-apexhire',
                'title' => 'Recruitment Assistant',
                'company' => 'ApexHire Talent',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'setup' => 'Remote',
                'salary' => 'Part-time rate, based on schedule',
                'posted' => '2026-09-14',
                'deadline' => '2026-10-30',
                'schedule' => '[e.g. Flexible afternoons, 15–20 hours per week]',
                'summary' => 'Support job posting, applicant tracking, candidate database updates, and interview coordination.',
                'description' => 'ApexHire is seeking a part-time recruitment assistant to keep hiring pipelines organized. The role emphasizes accurate tracking rather than independent recruiting decisions.',
                'responsibilities' => [
                    'Assist with job posting preparation and updates',
                    'Log applicants and keep status trackers current',
                    'Maintain candidate database records',
                    'Coordinate interview schedules with hiring contacts',
                ],
                'qualifications' => [
                    'High accuracy when updating records',
                    'Clear, professional communication',
                    'Familiarity with spreadsheets and shared inboxes',
                    'Able to follow recruitment process checklists',
                ],
                'skills' => ['Recruitment Assistance', 'Applicant Tracking', 'Candidate Database', 'Interview Coordination'],
            ],
            [
                'slug' => 'data-entry-specialist-ledgerly',
                'title' => 'Data Entry Specialist',
                'company' => 'Ledgerly Records',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'setup' => 'Remote',
                'salary' => 'Hourly, part-time',
                'posted' => '2026-09-01',
                'deadline' => '2026-10-05',
                'schedule' => '[e.g. 20 hours per week, weekday daytime]',
                'summary' => 'Encode, update, and verify records in spreadsheets and basic data entry systems with a focus on accuracy.',
                'description' => 'This encoding role is suited to someone who works carefully, checks their own work, and can maintain clean records without supervision on every line item.',
                'responsibilities' => [
                    'Encode source documents into designated templates',
                    'Update spreadsheets and shared trackers',
                    'Verify entries against original records',
                    'Flag inconsistencies for review',
                ],
                'qualifications' => [
                    'Strong attention to detail',
                    'Typing accuracy over speed',
                    'Experience with Excel or Google Sheets',
                    'Able to work independently on assigned batches',
                ],
                'skills' => ['Data Entry', 'Excel', 'Google Sheets', 'Data Verification'],
            ],
        ];
    }

    public static function job(string $slug): ?array
    {
        foreach (self::jobs() as $job) {
            if ($job['slug'] === $slug) {
                return $job;
            }
        }

        return null;
    }

    /**
     * Mock application tracker rows. Replace with Application records later.
     */
    public static function applications(): array
    {
        return [
            [
                'company' => 'Northstar Operations',
                'position' => 'General Virtual Assistant',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'date_applied' => '2026-09-09',
                'status' => 'Applied',
                'slug' => 'general-virtual-assistant-northstar',
            ],
            [
                'company' => 'Harborline Consulting',
                'position' => 'Administrative Assistant',
                'type' => 'Part-Time',
                'location' => 'Makati / Hybrid',
                'date_applied' => '2026-09-11',
                'status' => 'Under Review',
                'slug' => 'administrative-assistant-harborline',
            ],
            [
                'company' => 'Brightwell Shared Services',
                'position' => 'Office Staff',
                'type' => 'Part-Time',
                'location' => 'Quezon City',
                'date_applied' => '2026-09-06',
                'status' => 'Interview',
                'slug' => 'office-staff-brightwell',
            ],
            [
                'company' => 'Ledgerly Records',
                'position' => 'Data Entry Specialist',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'date_applied' => '2026-09-03',
                'status' => 'Assessment',
                'slug' => 'data-entry-specialist-ledgerly',
            ],
            [
                'company' => 'LumenHR Partners',
                'position' => 'HR Assistant',
                'type' => 'Part-Time',
                'location' => 'Remote / Hybrid',
                'date_applied' => '2026-08-28',
                'status' => 'Final Interview',
                'slug' => 'hr-assistant-lumenhr',
            ],
            [
                'company' => 'ApexHire Talent',
                'position' => 'Recruitment Assistant',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'date_applied' => '2026-08-20',
                'status' => 'Offer',
                'slug' => 'recruitment-assistant-apexhire',
            ],
            [
                'company' => 'Sample Corp. (Demo)',
                'position' => 'Encoder',
                'type' => 'Part-Time',
                'location' => 'Remote',
                'date_applied' => '2026-08-12',
                'status' => 'Rejected',
                'slug' => 'data-entry-specialist-ledgerly',
            ],
        ];
    }

    public static function applicationStats(): array
    {
        $applications = self::applications();

        $underReview = collect($applications)->whereIn('status', ['Under Review', 'Applied'])->count();

        return [
            'applications' => count($applications),
            'under_review' => collect($applications)->where('status', 'Under Review')->count(),
            'interviews' => collect($applications)->whereIn('status', ['Interview', 'Final Interview'])->count(),
            'assessments' => collect($applications)->where('status', 'Assessment')->count(),
            'offers' => collect($applications)->where('status', 'Offer')->count(),
            'pipeline_note' => $underReview,
        ];
    }
}
