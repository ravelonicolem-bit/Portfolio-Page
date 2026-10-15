export type Experience = {
  title: string;
  organization: string;
  assignment?: string;
  dates: string;
  dateNote?: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  relevance: "primary" | "secondary" | "minor";
  skills: string[];
  proof?: string[];
};

export type WorkSample = {
  title: string;
  image: string;
  imageAlt: string;
  downloadHref: string;
  downloadLabel: string;
  task: string;
  process: string;
  result: string;
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  title: string;
  category: string;
  type: "practice" | "work";
  status?: string;
  image: string;
  imageAlt: string;
  summary: string;
  outcome: string;
  skills: string[];
  /** Live site, Google Sheet, or external proof link (opens in new tab). */
  url?: string | null;
  urlLabel?: string;
  /** Always set so recruiters can open the sample and verify. Defaults to image. */
  verifyUrl: string;
  verifyLabel?: string;
  downloadHref?: string;
  downloadLabel?: string;
  /** Optional before-file (e.g. raw .xlsx) for before/after verification. */
  beforeFileHref?: string;
  beforeFileLabel?: string;
  /** Extra screenshots shown in a grid + carousel viewer. */
  gallery?: ProjectGalleryImage[];
};

export type ProjectSection = {
  key: string;
  title: string;
  description: string;
  projects: Project[];
};

export type EducationItem = {
  title: string;
  organization: string;
  dates: string;
  details?: string;
  pdfHref?: string;
  pdfLabel?: string;
};

export const experiences: Experience[] = [
  {
    title: "ERP Data Encoder / System Accounting Staff",
    organization: "Tomodachi Global Resources Inc.",
    assignment: "Assigned to CyberPower Systems Manufacturing Inc.",
    dates: "December 2025 – May 2026",
    dateNote:
      "Dates reflect the agency assignment period with Tomodachi Global Resources Inc.",
    highlights: [
      "Encoded Bills of Materials (BOM) and maintained inventory data in the ERP system for UPS manufacturing so production teams worked from current records.",
      "Reconciled stock levels with production and warehouse teams to keep inventory aligned with active manufacturing schedules.",
      "Generated ERP reports for planning and verified about 20 production and accounting records daily, completing checks before final submission.",
      "Coordinated with production and warehouse contacts on stock discrepancies and encoding updates to reduce delayed corrections.",
      "[PLACEHOLDER: ERP modules/transactions handled, accuracy rate if measured separately, additional verification or reconciliation steps]",
    ],
  },
  {
    title: "IT Intern",
    organization: "Mater Dei Academy of Tagaytay, Inc.",
    assignment: "Registrar’s Office & ICT Department",
    dates: "February 26, 2025 – June 16, 2025",
    highlights: [
      "Encoded and updated student and administrative records, then verified entries against source documents before filing.",
      "Verified Transcript of Records (TORs) and related documents for completeness and consistency before release or archive.",
      "Updated digital files and folders so staff could retrieve records without searching through unstructured storage.",
      "Supported basic system troubleshooting, workstation and printer setup, and first-level user support for day-to-day school operations.",
      "[PLACEHOLDER: daily/weekly volume of records processed, if available]",
    ],
  },
  {
    title: "Freelance Web Developer",
    organization: "Self-employed (two-person team)",
    dates: "February 2024 – Present",
    highlights: [
      "Built an inventory management system using Laravel, PHP, and Tailwind CSS as a secondary technical skill alongside office and encoding work.",
      "[PLACEHOLDER: one additional client outcome or tech detail, optional — keep brief]",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & Office (Primary)",
    relevance: "primary",
    skills: [
      "Microsoft Excel (VLOOKUP, INDEX-MATCH, pivot tables, data validation)",
      "Google Sheets",
      "ERP systems",
      "Data encoding and verification",
      "Records management",
      "Filing",
    ],
    proof: [
      "Typing: 55–58 WPM · 95–98% accuracy (Monkeytype screenshots in Quick Facts)",
      "Work samples: Cleaned Orders Table; Job Tracker; Data Encoding & Verification Batch",
    ],
  },
  {
    title: "Technical Extras (Secondary)",
    relevance: "secondary",
    skills: [
      "IT support / troubleshooting",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Python",
      "PHP / Laravel",
      "JavaScript",
      "HTML / CSS",
      "React",
      "Git / GitHub",
    ],
  },
  {
    title: "Design Tools (Minor)",
    relevance: "minor",
    skills: ["Canva", "Photoshop", "Illustrator", "CapCut"],
  },
];

export const workSamples: WorkSample[] = [
  {
    title: "Data Encoding & Verification Batch",
    image: "/images/projects/Encode.png",
    imageAlt:
      "Screenshot of a sanitized Excel dashboard showing encoding batches, status, and verified versus pending records",
    downloadHref: "/images/projects/Encode.png",
    downloadLabel: "Download sample screenshot",
    task: "Practice sample: encode a batch of records into a structured sheet and mark each row as verified or pending without using real company or student data.",
    process:
      "Received a sanitized source list → reviewed required fields → encoded entries in Excel → checked for blanks, duplicates, and inconsistent formats → flagged pending items for follow-up → updated batch status on a simple dashboard.",
    result:
      "Produces a clear verified-versus-pending view so a supervisor can see what is ready and what still needs correction before submission.",
  },
];

export const projectSections: ProjectSection[] = [
  {
    key: "excel-admin",
    title: "Excel & Admin Samples",
    description:
      "Primary samples for data encoding, verification, and tracking. Sanitized practice work — no real company or student data.",
    projects: [
      {
        title: "Cleaned Orders Table",
        category: "Excel / Google Sheets",
        type: "practice",
        status: "Practice sample · Before / After",
        image: "/images/projects/cleaned-orders/after-clean-data.png",
        imageAlt: "Cleaned orders table in Excel with verified and incomplete records marked",
        summary:
          "Practice data-cleaning sample: started from a messy orders workbook (missing regions, inconsistent category and payment labels, misspelled Quantity header, incomplete totals), then cleaned and summarized the file for review.",
        outcome:
          "Produced a cleaned orders table with Incomplete Record flags where data was missing, plus Category and Region pivot charts for quick verification of 300 order rows.",
        skills: [
          "Data Cleaning",
          "Data Verification",
          "Microsoft Excel",
          "Google Sheets",
          "Pivot Tables",
          "Charts",
        ],
        url: "https://docs.google.com/spreadsheets/d/1BCZUvAdOPQaYa8kDgjDWhGbulqlL-o4AuPQRh8nBgR8/edit?usp=sharing",
        urlLabel: "View cleaned sheet (Google Sheets)",
        verifyUrl:
          "https://docs.google.com/spreadsheets/d/1BCZUvAdOPQaYa8kDgjDWhGbulqlL-o4AuPQRh8nBgR8/edit?usp=sharing",
        verifyLabel: "View / Verify cleaned data",
        beforeFileHref: "/files/samples/orders_table.xlsx",
        beforeFileLabel: "Download before file (.xlsx)",
        downloadHref: "/files/samples/orders_table.xlsx",
        downloadLabel: "Download before (.xlsx)",
        gallery: [
          {
            src: "/images/projects/cleaned-orders/before-raw-data.png",
            alt: "Before: raw practice sales data with missing values and inconsistent labels",
            label: "Before — raw data",
          },
          {
            src: "/images/projects/cleaned-orders/after-clean-data.png",
            alt: "After: cleaned orders table with Incomplete Record flags",
            label: "After — cleaned data",
          },
          {
            src: "/images/projects/cleaned-orders/category-chart.png",
            alt: "Pivot chart showing total sales by category",
            label: "Category chart",
          },
          {
            src: "/images/projects/cleaned-orders/region-chart.png",
            alt: "Pivot chart showing total sales by region",
            label: "Region chart",
          },
        ],
      },
      {
        title: "Job Tracker",
        category: "Google Sheets",
        type: "practice",
        status: "Personal admin tracker",
        image: "/images/projects/job-tracker.jpg",
        imageAlt:
          "Job Tracker dashboard with application charts, status summaries, and a sortable applications table",
        summary:
          "Google Sheets job hunt tracker that logs position, company, application source, status, date applied, and salary range, with simple status progress summaries.",
        outcome:
          "Keeps applications organized so follow-ups and status checks are easy to review without searching through emails or notes.",
        skills: ["Google Sheets", "Records Management", "Task Tracking", "Data Organization"],
        url: "https://docs.google.com/spreadsheets/d/1zz6xgIIEa_qXw5q3pLiQ7kt1HQ06bdclI4odP3ALLtQ/edit?usp=sharing",
        urlLabel: "View Job Tracker (Google Sheets)",
        verifyUrl:
          "https://docs.google.com/spreadsheets/d/1zz6xgIIEa_qXw5q3pLiQ7kt1HQ06bdclI4odP3ALLtQ/edit?usp=sharing",
        verifyLabel: "View / Verify Job Tracker",
      },
      {
        title: "Data Encoding & Verification Batch",
        category: "Excel / Sheets",
        type: "practice",
        image: "/images/projects/Encode.png",
        imageAlt: "Excel dashboard for encoding batches with verified and pending status",
        summary:
          "Structured encoding and verification workflow for missing information, inconsistent entries, duplicates, and formatting issues.",
        outcome:
          "Shows Receive → Review → Encode → Verify → Clean → Final Review so a supervisor can see verified vs pending records.",
        skills: ["Data Entry", "Data Verification", "Excel", "Record Management"],
        verifyUrl: "/images/projects/Encode.png",
        verifyLabel: "View / Verify sample",
        downloadHref: "/images/projects/Encode.png",
      },
    ],
  },
  {
    key: "website",
    title: "Website (Additional Skill)",
    description:
      "Secondary technical work. Useful as proof of system thinking and tool familiarity — not the primary job target.",
    projects: [
      {
        title: "PACAI Website",
        category: "Website",
        type: "work",
        status: "Client · Live",
        image: "/images/projects/pacai-website.png",
        imageAlt: "PACAI website homepage layout screenshot",
        summary:
          "Building the Philippine Association of Collection Agencies site with membership CTAs, agency verification, and a member overview layout.",
        outcome:
          "Gives PACAI a professional public presence while membership and verification features continue to develop.",
        skills: ["Web design", "Frontend", "Corporate UI"],
        url: "https://mediumseagreen-duck-823790.hostingersite.com/",
        urlLabel: "Visit live site",
        verifyUrl: "https://mediumseagreen-duck-823790.hostingersite.com/",
        verifyLabel: "Visit live site",
      },
      {
        title: "Crochet Cloude",
        category: "Website",
        type: "work",
        status: "Self Project · Live",
        image: "/images/projects/crochet-cloude.png",
        imageAlt: "Crochet Cloude handmade crochet shop homepage screenshot",
        summary:
          "Full crochet shop site for handmade bouquets: product catalog, cart/checkout, Instagram order flow, custom bouquet builder, and an admin dashboard for products and orders.",
        outcome:
          "A live buyer-and-admin platform with ₱ pricing, order tracking, and Instagram-based confirmation — no online payment required.",
        skills: [
          "Content Organization",
          "UI Design",
          "HTML",
          "CSS",
          "JavaScript",
          "E-commerce UI",
        ],
        url: "https://crochet-landing-page-gray.vercel.app/",
        urlLabel: "Visit live site",
        verifyUrl: "https://crochet-landing-page-gray.vercel.app/",
        verifyLabel: "Visit live site",
      },
      {
        title: "Self-Study Tracker",
        category: "Website",
        type: "work",
        status: "Self Project",
        image: "/images/projects/self-study-tracker.png",
        imageAlt: "Self-study tracker dashboard with calendar and task list",
        summary:
          "Personal study dashboard with daily progress, streak tracking, a study calendar, and a task list saved locally in the browser.",
        outcome: "Makes daily study habits easier to track with a clean calendar and task workflow.",
        skills: ["Dashboard UI", "JavaScript", "Local storage"],
        url: null,
        verifyUrl: "/images/projects/self-study-tracker.png",
        verifyLabel: "View / Verify screenshot",
      },
      {
        title: "Inventory Management System",
        category: "Website / App",
        type: "work",
        status: "Freelance · Two-person team",
        image: "/images/projects/inventory-data-entry.png",
        imageAlt: "Inventory management system related data entry interface",
        summary:
          "Built an inventory management system using Laravel, PHP, and Tailwind CSS as freelance work with a two-person team.",
        outcome:
          "Supports structured inventory records and day-to-day operational data entry for the client workflow.",
        skills: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
        url: null,
        verifyUrl: "/images/projects/inventory-data-entry.png",
        verifyLabel: "View / Verify screenshot",
      },
    ],
  },
  {
    key: "design",
    title: "Design (Minor)",
    description: "Poster and composite artwork created in Photoshop and Illustrator.",
    projects: [
      {
        title: "Delphinidin Blue-Tulip Poster",
        category: "Design",
        type: "work",
        image: "/images/projects/delphinidin-tulip.png",
        imageAlt: "Vertical tulip poster with typography and clipping-mask treatment",
        summary:
          "Vertical poster with script typography and a clipping-mask treatment that reveals a tulip field through bold letterforms.",
        outcome: "Shows typography, masking, and photo composition skills in Photoshop and Illustrator.",
        skills: ["Photoshop", "Illustrator", "Typography"],
        verifyUrl: "/images/projects/delphinidin-tulip.png",
        verifyLabel: "View / Verify artwork",
      },
      {
        title: "Vintage Automotive Poster",
        category: "Design",
        type: "work",
        image: "/images/projects/vintage-poster.jpg",
        imageAlt: "Retro automotive poster with classic station wagon",
        summary:
          "Retro-styled poster featuring a classic station wagon with outlined type, barcode accent, and warm color grading.",
        outcome: "Demonstrates brand-style layout, photo treatment, and clean typographic overlays.",
        skills: ["Photoshop", "Illustrator", "Layout"],
        verifyUrl: "/images/projects/vintage-poster.jpg",
        verifyLabel: "View / Verify artwork",
      },
      {
        title: "Storybook Forest Composite",
        category: "Design",
        type: "work",
        image: "/images/projects/storybook-forest.jpg",
        imageAlt: "Open book composited into a sunlit forest scene",
        summary:
          "Composited an open book into a sunlit forest scene, with a painterly narrative illustrated across the pages.",
        outcome: "Highlights photo compositing, lighting, and visual storytelling.",
        skills: ["Photoshop", "Compositing", "Lighting"],
        verifyUrl: "/images/projects/storybook-forest.jpg",
        verifyLabel: "View / Verify artwork",
      },
      {
        title: "BMW M4 Poster",
        category: "Design",
        type: "work",
        image: "/images/projects/bmw-m4-poster.jpg",
        imageAlt: "Dynamic BMW M4 automotive poster with collage layout",
        summary:
          "Dynamic automotive poster with diagonal photo panels, outlined type, and a sharp vehicle cutout over a clean product footer.",
        outcome: "Shows collage layout, masking, and promotional poster design.",
        skills: ["Photoshop", "Illustrator", "Product poster"],
        verifyUrl: "/images/projects/bmw-m4-poster.jpg",
        verifyLabel: "View / Verify artwork",
      },
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    title: "Bachelor of Science in Information Technology",
    organization: "Cavite State University – Silang Campus",
    dates: "Graduated September 2025",
  },
];

export const trainings: EducationItem[] = [
  {
    title: "BS Information Technology — Diploma / Certificate",
    organization: "Cavite State University – Silang Campus",
    dates: "September 2025",
    details: "Official diploma / certificate of graduation.",
    pdfHref: "/files/Ravelo_Nicole_Certificate.pdf",
    pdfLabel: "View certificate (PDF)",
  },
];

export const navLinks = [
  { href: "/#quick-facts", label: "Quick Facts", type: "hash" as const },
  { href: "/#about", label: "About", type: "hash" as const },
  { href: "/#experience", label: "Experience", type: "hash" as const },
  { href: "/#skills", label: "Skills", type: "hash" as const },
  { href: "/projects", label: "Projects", type: "page" as const },
  { href: "/#education", label: "Education", type: "hash" as const },
  { href: "/#contact", label: "Contact", type: "hash" as const },
] as const;
