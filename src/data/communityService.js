import { asset } from '../utils/asset';

// Community service section. Same shape as `projects`; `featured: true` items get the showcase layout.
// Source documents (papers, certificates) live in private/community-service/.
export const communityService = [
  {
    id: "sjph-mr-mangkok",
    featured: true,
    title: "Halal Certification Assistance (SJPH) for Mr. Mangkok Ricebowl",
    category: "Halal Assurance & MSME Development",
    badge: "Telkom University Community Service · 2025",
    location: "Bandung, Indonesia",
    activity: "communityService",
    summary: "Training and assistance for the culinary MSME Mr. Mangkok Ricebowl to prepare halal certification based on Halal Product Assurance System (SJPH) documents across its two outlets.",
    problem: "Core SJPH documents and supporting evidence were incomplete, ingredient purchase records were not yet organized, and staff understanding of the SJPH manual and new-ingredient approval procedures varied.",
    solution: "Participatory hybrid assistance: needs diagnosis through observation, interviews, and FGD; on-site training for five participants on halal–haram concepts, najis, and SJPH; document preparation and facility layout mapping of halal critical points at both outlets.",
    impact: "Prepared the SJPH document set and facility layouts for both outlets; pre-test to post-test correct answers rose from 44 to 53 (58.7% to 70.7%). Published in COSECANT Vol. 5, Issue 2 (2025).",
    doi: "10.25124/cosecant.v5i2.10376",
    deliverables: ["SJPH Document Set (Halal Policy, Halal Team, Ingredient List)", "Facility Layouts for Two Outlets", "Pre-Test & Post-Test Evaluation", "COSECANT 2025 Publication (Co-Author)"],
    tags: ["Halal Assurance System", "SJPH", "MSME", "Facility Layout", "Training Evaluation"],
    images: [
      asset('images/community-service/sjph-mr-mangkok/sjph-mr-mangkok-team.jpg'),
      asset('images/community-service/sjph-mr-mangkok/sjph-mr-mangkok-kitchen-assessment.jpg')
    ]
  },
  {
    id: "digital-marketing-arafah",
    featured: true,
    title: "Digital Marketing Training for Pesantren Arafah Tempe Chips Business",
    category: "Digital Marketing & MSME Development",
    badge: "Telkom University Community Service · 2024",
    location: "Cililin, West Bandung Regency",
    activity: "communityService",
    summary: "Introduced and trained the tempe chips business unit of Pondok Pesantren Arafah in digital marketing to build brand awareness and expand its market through Instagram.",
    problem: "The business had not yet applied digital marketing and wanted to introduce its brand and expand its market share.",
    solution: "Hybrid program: online proposal and discussion, on-site observation, setup of email, WhatsApp, and Instagram, weekly content introduction, and on-site training for six participants covering idea generation, visual concepts, Canva editing, and copywriting.",
    impact: "Participants' digital content skills improved on all four measured indicators after the training.",
    deliverables: ["Digital Marketing Platform Setup", "Weekly Instagram Content", "Content Creation Training (Canva & Copywriting)", "Community Service Paper (Co-Author)"],
    tags: ["Digital Marketing", "Content Creation", "Canva", "Copywriting", "MSME"],
    images: [
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-team-visit.jpg'),
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-content-training.jpg'),
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-discussion.jpg'),
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-instagram-content.jpg'),
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-content-sharing.png'),
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-content-nationwide-shipping.png'),
      asset('images/community-service/digital-marketing-arafah/digital-marketing-arafah-content-packaging-sizes.png')
    ]
  },
  {
    id: "ekrafpreneur-bandung",
    title: "Ekrafpreneur Platform for MSME & Tourism Promotion",
    category: "Knowledge Management & MSME Promotion",
    badge: "Committee · with Bandung Regency Culture & Tourism Office",
    location: "Bandung Regency, Indonesia",
    activity: "communityService",
    summary: "Community service program using the Ekrafpreneur platform as a knowledge-management-based promotion medium for MSMEs and tourism to strengthen competitiveness in Bandung Regency (June 2025).",
    deliverables: [],
    tags: ["Knowledge Management", "MSME Promotion", "Tourism"],
    // No photos yet; the card shows a "TBA" placeholder.
    images: []
  },
  {
    id: "open-class-ie",
    title: "Open Class Industrial Engineering",
    category: "Education Outreach",
    badge: "Open Class IE · December 2025",
    location: null,
    activity: "communityService",
    summary: "Industrial Engineering open class held on 13 December 2025, featuring a hands-on group activity for participants.",
    deliverables: [],
    tags: ["Industrial Engineering", "Education Outreach", "Hands-on Learning"],
    images: [
      asset('images/community-service/open-class-ie/open-class-ie-committee.jpg'),
      asset('images/community-service/open-class-ie/open-class-ie-hands-on-activity.jpg'),
      asset('images/community-service/open-class-ie/open-class-ie-classroom.jpg'),
      asset('images/community-service/open-class-ie/open-class-ie-activity-setup.jpg'),
      asset('images/community-service/open-class-ie/open-class-ie-certificates.jpg')
    ]
  }
];
