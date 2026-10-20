import { asset } from '../utils/asset';

// Issuer logos shown on the certification cards.
const logos = {
  sap: asset('images/tools/sap.webp'),
  telkomUniversity: asset('images/organizations/telkom-university-logo.png'),
};

export const certifications = [
  {
    name: "SAP SCM600: Business Processes in Sales Order Management",
    issuer: "Edugate Indonesia / SAP Certified",
    credentialId: "ID: 550192399",
    category: "ERP / SAP",
    logo: logos.sap
  },
  {
    name: "SAP SCM500: Business Processes in Procurement",
    issuer: "Edugate Indonesia / SAP Certified",
    credentialId: "ID: 550188744",
    category: "ERP / SAP",
    logo: logos.sap
  },
  {
    name: "SAP01: SAP Fundamentals",
    issuer: "Edugate Indonesia",
    credentialId: "ID: 1201223016",
    category: "ERP / SAP",
    logo: logos.sap
  },
  {
    name: "ECCT® (English Communicative Competence Test)",
    issuer: "Tel-U Language Center",
    credentialId: "Score: 4.0 / 4.0 (Proficient)",
    category: "Language",
    logo: logos.telkomUniversity
  },
  {
    name: "EPrT® (English Proficiency Test)",
    issuer: "Tel-U Language Center",
    credentialId: "Score: 537 / 677 (CEFR B1+)",
    category: "Language",
    logo: logos.telkomUniversity
  }
];

// Research section. `featured: true` papers get the text-only showcase layout (with the extra
// case-study fields); the rest become compact text cards. `doi` is optional.
export const publications = [
  {
    id: 1,
    title: "Uncovering Sustainability-Oriented SME Profiles: A Clustering Study of Knowledge Management and Green Innovation in Batik Industry",
    conference: "2026 International Conference on Enterprise and Industrial System (ICOEINS)",
    year: "2026",
    type: "International Conference",
    indexed: "IEEE Xplore",
    doi: "10.1109/ICOEINS69996.2026.11605823",
    featured: true,
    location: "Yogyakarta, Indonesia",
    summary: "Uncovered sustainability-oriented SME profiles by clustering 56 batik SMEs based on their knowledge management and green innovation practices.",
    problem: "Sustainability challenges in traditional textile industries have intensified the need for batik SMEs to adopt effective knowledge management and green innovation practices.",
    solution: "Surveyed 56 batik SMEs with structured questionnaires on knowledge creation, acquisition, sharing, and application, as well as green product and green process innovation; analyzed with K-Means clustering, with the optimal cluster count set via the elbow method and silhouette coefficient.",
    impact: "Revealed two distinct clusters, Sustainable Innovation Ready SMEs and Sustainability Transition Lagging SMEs, showing that SMEs with stronger knowledge sharing and application practices exhibit higher green innovation. Presented at the 2026 International Conference on Enterprise and Industrial System (ICOEINS).",
    deliverables: ["International Conference Publication (ICOEINS 2026)", "Data-Driven SME Clustering Framework", "Two-Cluster Sustainability Profile of Batik SMEs"],
    tags: ["K-Means Clustering", "Elbow & Silhouette Analysis", "Knowledge Management", "Green Innovation", "Batik SMEs"]
  },
  {
    id: 2,
    title: "Data-Driven Clustering for Smart Technology Adoption Profiling in Manufacturing SMEs",
    conference: "2026 2nd International Conference on Smart Mechatronics (ICSMech)",
    year: "2026",
    type: "International Conference",
    indexed: "IEEE Xplore",
    doi: "10.1109/ICSMECH69390.2026.11647129",
    featured: true,
    location: "Bandung, Indonesia",
    summary: "Mapped manufacturing SMEs through data-driven clustering based on green innovation, organizational performance, and technology adoption to support smart and energy-efficient manufacturing.",
    problem: "Manufacturing SMEs face increasing pressure to improve organizational performance and sustain technology adoption amid environmental and digital transformation demands, yet empirical evidence on how they are positioned by green innovation and performance remains limited.",
    solution: "Applied cluster analysis to survey data from manufacturing SMEs, measuring green innovation (green product & green process innovation), organizational performance (operational & financial indicators), and technology adoption (production efficiency, process improvement, competitiveness capabilities).",
    impact: "Identified clear performance-based clusters: SMEs with higher green product and process innovation achieve stronger technology adoption and organizational performance. Published at the 2026 2nd International Conference on Smart Mechatronics (ICSMech) in IEEE Xplore.",
    deliverables: ["International Conference Publication (ICSMech 2026, IEEE Xplore)", "Survey-Based Cluster Analysis", "SME Segmentation for Targeted Technology Adoption"],
    tags: ["Cluster Analysis", "Green Innovation", "Technology Adoption", "Organizational Performance", "Manufacturing SMEs"]
  },
  {
    id: 3,
    title: "Exploring User Perception of Higher Education Sanitation Facilities Using Sentiment Analysis and Text Mining",
    conference: "Technologia: Scientific Journal 16 (2), 329-336",
    year: "2025",
    type: "National Journal",
    indexed: "SINTA 3"
  },
  {
    id: 4,
    title: "Development of SMEs Promotion Media Through SECI-Based Digital Catalog in Bandung Regency",
    conference: "Jurnal Inkofar 9 (1)",
    year: "2025",
    type: "National Journal",
    indexed: "SINTA 3"
  }
];

// Registered intellectual property rights (HKI) at DGIP Indonesia.
// `featured: true` items get the showcase layout; `relatedProject` names the project they came from.
export const intellectualProperty = [
  {
    title: "SMART BOTTLE SORTER Automatic Plastic Bottle Waste Sorting Machine",
    number: "EC00202641032 / 001230732",
    featured: true,
    relatedProject: "MASPINTAR (1st Best Product Capstone Design 2026)",
    date: "May 13, 2026",
    type: "Registered Computer Program"
  },
  {
    title: "MASPINTAR - Integrated Plastic Packaging Waste Management System",
    number: "EC00202641025 / 001230725",
    featured: true,
    relatedProject: "Capstone Design 2026 (1st Best Product)",
    date: "May 13, 2026",
    type: "Registered Computer Program"
  },
  {
    title: "SME E-Business Adoption Readiness Self-Assessment System",
    number: "EC00202631245 / 001186169",
    featured: true,
    date: "April 7, 2026",
    type: "Registered Computer Program"
  }
];
