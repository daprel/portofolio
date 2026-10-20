import { asset } from '../utils/asset';

// Internships section. Same shape as `projects`; `featured: true` items get the showcase layout.
export const internships = [
  {
    id: "ptpn-supply-chain",
    featured: true,
    title: "Supply Chain Optimization & Feasibility Solver Modeling",
    category: "Supply Chain & Procurement",
    badge: "PT Perkebunan Nusantara I Regional 2",
    location: "Bandung, Indonesia",
    activity: "internship",
    summary: "Quantitative investment feasibility modeling and safety stock rationalization across 50+ tea commodity SKUs to resolve slow-moving SKU inventory pile-ups.",
    problem: "Accumulation of slow-moving inventory in distribution warehouses and the necessity for objective investment evaluations across four production facility scenarios.",
    solution: "Constructed linear optimization models in Excel Solver for resource investment scenarios and formulated dynamic safety stock thresholds across 50+ product SKUs.",
    impact: "Isolated root causes of overstocking in slow-moving SKUs and delivered robust investment feasibility recommendations to supply chain leadership.",
    deliverables: ["Multi-Scenario Excel Solver Model", "Safety Stock Policy Matrix (50+ SKUs)", "End-to-End Supply Chain Evaluation"],
    tags: ["Excel Solver", "Safety Stock", "SKU Rationalization", "Inventory Analytics", "Supply Chain Planning"],
    images: [
      asset('images/internships/ptpn/ptpn-internship-1.jpg'),
      asset('images/internships/ptpn/ptpn-internship-2.jpg'),
      asset('images/internships/ptpn/ptpn-internship-3.jpg'),
      asset('images/internships/ptpn/ptpn-production-process-presentation.jpg'),
      asset('images/internships/ptpn/ptpn-factory-team.jpg'),
      asset('images/internships/ptpn/ptpn-warehouse-visit.jpg')
    ],
    videoUrl: null
  },
  {
    id: "sinarmas-p2p",
    title: "End-to-End Asset Disposal & Strategic Sourcing (Coupa & SAP)",
    category: "Supply Chain & Procurement",
    badge: "Sinarmas Agribusiness & Food (CBS)",
    location: "Jakarta, Indonesia",
    activity: "internship",
    summary: "Managed end-to-end Procure-to-Pay (P2P) asset disposal requests (fleet, tractors, heavy machinery) across nationwide plantations and mills at Sinarmas Central Business Services.",
    problem: "Retiring non-productive assets across multi-regional operating sites required rigorous SAP data validation, vendor quorum tracking, and transparent commercial comparison under strict audit standards.",
    solution: "Extracted and audited ticketing and SAP asset data, conducted structured e-sourcing via Coupa (4 vendors per request), and formulated comprehensive Quotation Comparison Forms (QCF).",
    impact: "Accelerated commercial decision cycles for fleet asset disposal while ensuring 100% compliance with corporate procurement governance.",
    deliverables: ["Quotation Comparison Form (QCF) Framework", "Coupa Sourcing Pipeline", "SAP Asset Ticket Reconciliation"],
    tags: ["Coupa Sourcing", "SAP SCM500", "Procure-to-Pay (P2P)", "Asset Disposal", "Vendor Evaluation", "Commercial Terms"],
    // Ongoing internship: no documentation yet, the cards show a "TBA" placeholder.
    images: [],
    videoUrl: null
  }
];
