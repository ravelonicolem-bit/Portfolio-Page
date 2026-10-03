import { profile } from "./profile";

export type Experience = {
  title: string;
  organization: string;
  assignment?: string;
  dates: string;
  highlights: string[];
};

export type Service = {
  icon: string;
  title: string;
  items: string[];
};

export type SkillGroup = {
  icon: string;
  title: string;
  skills: string[];
};

export type Project = {
  icon: string;
  title: string;
  category: string;
  type: "practice" | "work";
  image?: string;
  status?: string;
  url?: string | null;
  summary: string;
  outcome: string;
  skills: string[];
  sectionTitle?: string;
  sectionIcon?: string;
};

export type ProjectSection = {
  key: string;
  title: string;
  icon: string;
  description: string;
  projects: Project[];
};

export const experiences: Experience[] = [
  {
    title: "ERP Data Encoder | System Accounting Staff",
    organization: "Tomodachi Global Resources Inc.",
    assignment: "Assigned to CyberPower Systems Manufacturing Inc.",
    dates: "December 2025 – May 2026",
    highlights: [
      "Maintained real-time inventory data and encoded accurate Bills of Materials (BOM) for UPS manufacturing in the ERP system.",
      "Reconciled stock levels with production and warehouse teams to align inventory with active manufacturing schedules.",
      "Generated ERP reports for planning and verified about 20 production and accounting records daily with 100% accuracy.",
    ],
  },
  {
    title: "IT Intern",
    organization: "Mater Dei Academy of Tagaytay, Inc.",
    assignment: "Registrar’s Office & ICT Department",
    dates: "February 26, 2025 – June 16, 2025",
    highlights: [
      "Processed and verified administrative and technical records with 100% accuracy, streamlining digital documentation and file accessibility.",
      "Assisted with software updates, hardware troubleshooting, and continuous system monitoring to support daily operations.",
      "Managed setup, configuration, and maintenance of workstations, printers, and network connections for staff.",
      "Provided first-level technical support, helping reduce IT issue resolution times for team members.",
    ],
  },
];

export const services: Service[] = [
  {
    icon: "bi-keyboard",
    title: "Data Entry & Encoding",
    items: [
      "Encode and update records in spreadsheets and office systems",
      "Maintain structured data with consistent formatting",
      "Support ERP-style encoding and inventory-related data tasks",
      "Follow required templates, fields, and instructions carefully",
    ],
  },
  {
    icon: "bi-check2-square",
    title: "Data Verification & Cleaning",
    items: [
      "Check for missing, inconsistent, or duplicate entries",
      "Validate records before final submission",
      "Reconcile data against source documents",
      "Prepare clean, review-ready files",
    ],
  },
  {
    icon: "bi-folder2-open",
    title: "Records & Document Management",
    items: [
      "Organize digital and physical files",
      "Apply clear naming and folder structures",
      "Update and retrieve documents efficiently",
      "Support confidential handling of records",
    ],
  },
  {
    icon: "bi-briefcase",
    title: "Administrative & Office Support",
    items: [
      "Prepare documents, forms, and basic reports",
      "Track tasks, deadlines, and follow-ups",
      "Assist with day-to-day office coordination",
      "Communicate clearly with teams and stakeholders",
    ],
  },
  {
    icon: "bi-people",
    title: "HR & Recruitment Support",
    items: [
      "Organize resumes and applicant files",
      "Update candidate trackers and status logs",
      "Assist with interview scheduling notes",
      "Maintain recruitment documentation for review",
    ],
  },
  {
    icon: "bi-laptop",
    title: "Virtual Assistance",
    items: [
      "Remote data entry and spreadsheet updates",
      "Inbox and document organization support",
      "Schedule and task list coordination",
      "Clear written updates on assigned work",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: "bi-database",
    title: "Data & Records",
    skills: [
      "Data Entry",
      "Data Encoding",
      "Data Verification",
      "Data Cleaning",
      "ERP Data Encoding",
      "Records Management",
      "File Organization",
      "Typing 50+ WPM",
    ],
  },
  {
    icon: "bi-briefcase",
    title: "Administrative Support",
    skills: [
      "Document Preparation",
      "Report Generation",
      "Task Tracking",
      "Administrative Assistance",
      "Document Handling",
      "Office Coordination",
    ],
  },
  {
    icon: "bi-people",
    title: "HR / Recruitment Support",
    skills: [
      "Applicant File Organization",
      "Candidate Tracking",
      "Interview Scheduling Support",
      "Recruitment Documentation",
      "Confidentiality",
    ],
  },
  {
    icon: "bi-file-earmark-spreadsheet",
    title: "Tools & Productivity",
    skills: [
      "Microsoft Excel",
      "Google Sheets",
      "Microsoft Word",
      "Google Docs",
      "Microsoft Office",
      "Windows",
    ],
  },
  {
    icon: "bi-pc-display",
    title: "Technical Support",
    skills: [
      "Basic Troubleshooting",
      "Software Installation",
      "Computer Maintenance",
      "Printer Support",
      "Basic Networking",
    ],
  },
  {
    icon: "bi-person-check",
    title: "Professional Strengths",
    skills: [
      "Attention to Detail",
      "Organization",
      "Accuracy",
      "Time Management",
      "Team Collaboration",
      "Adaptability",
    ],
  },
];

export const sampleProjectIdeas: Project[] = [
  {
    icon: "bi-table",
    title: "Data Entry Tracker",
    category: "Practice Sample",
    type: "practice",
    image: "/images/projects/Data Entry.png",
    summary:
      "Practice spreadsheet showing structured encoding fields, status tracking, and clean formatting for administrative records.",
    outcome: "Illustrates how I organize source data before verification and submission.",
    skills: ["Data Entry", "Excel", "Google Sheets", "Accuracy"],
  },
  {
    icon: "bi-person-vcard",
    title: "Applicant Tracking Sheet",
    category: "Practice Sample",
    type: "practice",
    image: "/images/projects/Email.jpg",
    summary:
      "Practice recruitment tracker for applicant names, stages, interview dates, and follow-up notes.",
    outcome: "Shows how I would support HR/recruitment assistants with organized candidate logs.",
    skills: ["Applicant Tracking", "Documentation", "Organization"],
  },
  {
    icon: "bi-calendar3",
    title: "Task & Schedule Board",
    category: "Practice Sample",
    type: "practice",
    image: "/images/projects/Calendar.png",
    summary:
      "Practice virtual assistance sample for weekly schedules, meeting blocks, and assigned task monitoring.",
    outcome: "Demonstrates clear coordination support for office and remote admin workflows.",
    skills: ["Scheduling", "Task Tracking", "Virtual Assistance"],
  },
  {
    icon: "bi-folder-check",
    title: "Employee Records Index",
    category: "Practice Sample",
    type: "practice",
    image: "/images/projects/Document.jpg",
    summary:
      "Practice filing structure and naming convention for active, previous, and supporting employee documents.",
    outcome: "Shows a confidential, easy-to-retrieve approach to HR/admin document organization.",
    skills: ["Records Management", "File Organization", "Confidentiality"],
  },
];

export const projectSections: ProjectSection[] = [
  {
    key: "excel-sheets",
    title: "Excel / Sheets",
    icon: "bi-file-earmark-spreadsheet",
    description:
      "Practice spreadsheet samples for encoding, verification, reporting, and file organization. Clearly labeled as practice work.",
    projects: [
      {
        icon: "bi-table",
        title: "Data Encoding & Verification",
        category: "Excel / Sheets",
        type: "practice",
        image: "/images/projects/Encode.png",
        summary:
          "Practice sample: structured encoding and verification for missing information, inconsistent entries, duplicates, and formatting issues.",
        outcome:
          "Shows a clear workflow: Receive Data → Review → Encode → Verify → Clean & Organize → Final Review.",
        skills: ["Data Entry", "Data Verification", "Data Cleaning", "Excel", "Record Management"],
      },
      {
        icon: "bi-bar-chart",
        title: "Weekly Administrative Report",
        category: "Excel / Sheets",
        type: "practice",
        image: "/images/projects/Report.png",
        summary:
          "Practice sample: organizes completed, pending, and ongoing tasks for progress monitoring and follow-up.",
        outcome: "Provides a clear weekly summary of administrative activities and document-related tasks.",
        skills: ["Microsoft Excel", "Reporting", "Task Tracking", "Data Organization"],
      },
      {
        icon: "bi-folder2-open",
        title: "Records Management & File Organization",
        category: "Excel / Sheets",
        type: "practice",
        image: "/images/projects/Tracker.png",
        summary:
          "Practice sample: structured folders and naming convention such as SURNAME_DOCUMENT_TYPE_DATE.",
        outcome: "Makes digital records easier to access, update, and retrieve in shared office files.",
        skills: ["File Organization", "Records Management", "Documentation", "Attention to Detail"],
      },
    ],
  },
  {
    key: "website",
    title: "Website",
    icon: "bi-globe2",
    description: "Client and self-built web projects with clear layouts, product flows, and practical UI.",
    projects: [
      {
        icon: "bi-building",
        title: "PACAI Website",
        category: "Website",
        status: "Client · Under Development",
        type: "work",
        image: "/images/projects/pacai-website.png",
        url: profile.projectUrls.pacai || null,
        summary:
          "Building the Philippine Association of Collection Agencies site with membership CTAs, agency verification, and a member overview dashboard.",
        outcome:
          "Gives PACAI a professional public presence while membership and verification features are still being developed for the client.",
        skills: ["Web design", "Frontend", "Corporate UI", "Dashboard layout"],
      },
      {
        icon: "bi-flower2",
        title: "Crochet Cloude",
        category: "Website",
        status: "Self Project · Not Deployed",
        type: "work",
        image: "/images/projects/crochet-cloude.png",
        url: profile.projectUrls.crochet_cloude || null,
        summary:
          "Personal project for a small-business website concept: organizing business information, planning content, designing UI, and building the front-end structure.",
        outcome:
          "Demonstrates content organization, information management, UI design, and front-end development for a simple user-friendly experience.",
        skills: ["Content Organization", "UI Design", "HTML", "CSS", "JavaScript"],
      },
      {
        icon: "bi-journal-check",
        title: "Self-Study Tracker",
        category: "Website",
        status: "Self Project",
        type: "work",
        image: "/images/projects/self-study-tracker.png",
        url: profile.projectUrls.self_study_tracker || null,
        summary:
          "Built a personal study dashboard with daily progress, streak tracking, a study calendar, and a task list saved locally in the browser.",
        outcome: "Makes daily study habits easier to track with a clean calendar and task workflow.",
        skills: ["Dashboard UI", "JavaScript", "Local storage", "Habit tracking"],
      },
    ],
  },
  {
    key: "design",
    title: "Design",
    icon: "bi-palette",
    description: "Poster and composite artwork created in Photoshop and Illustrator.",
    projects: [
      {
        icon: "bi-flower1",
        title: "Delphinidin Blue-Tulip Poster",
        category: "Design",
        type: "work",
        image: "/images/projects/delphinidin-tulip.png",
        summary:
          "Designed a vertical poster with elegant script typography and a clipping-mask treatment that reveals a tulip field through bold TULIP letterforms.",
        outcome: "Showcases typography, masking, and photo composition skills in Photoshop and Illustrator.",
        skills: ["Photoshop", "Illustrator", "Typography", "Clipping masks"],
      },
      {
        icon: "bi-car-front",
        title: "Vintage Automotive Poster",
        category: "Design",
        type: "work",
        image: "/images/projects/vintage-poster.jpg",
        summary:
          "Created a retro-styled poster featuring a classic station wagon with outlined VINTAGE type, barcode accent, and warm golden-hour color grading.",
        outcome: "Demonstrates brand-style layout, photo treatment, and clean typographic overlays.",
        skills: ["Photoshop", "Illustrator", "Color grading", "Layout"],
      },
      {
        icon: "bi-book",
        title: "Storybook Forest Composite",
        category: "Design",
        type: "work",
        image: "/images/projects/storybook-forest.jpg",
        summary:
          "Composited an open book into a sunlit forest scene, with a painterly ocean narrative illustrated across the pages.",
        outcome: "Highlights advanced photo compositing, lighting, and storytelling visuals.",
        skills: ["Photoshop", "Compositing", "Lighting", "Visual storytelling"],
      },
      {
        icon: "bi-speedometer2",
        title: "BMW M4 Poster",
        category: "Design",
        type: "work",
        image: "/images/projects/bmw-m4-poster.jpg",
        summary:
          "Built a dynamic automotive poster with diagonal photo panels, outlined BMW type, and a sharp vehicle cutout over a clean product footer.",
        outcome: "Shows collage layout, masking, and promotional poster design for product visuals.",
        skills: ["Photoshop", "Illustrator", "Collage layout", "Product poster"],
      },
    ],
  },
];

export function featuredProjects(): Project[] {
  return projectSections
    .filter((section) => section.projects[0])
    .map((section) => ({
      ...section.projects[0],
      sectionTitle: section.title,
      sectionIcon: section.icon,
    }));
}
