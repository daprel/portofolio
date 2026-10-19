import { asset } from '../utils/asset';

// Projects section. `featured: true` items get the large showcase layout, the rest become cards.
// `location` is optional: set it to null to hide the location line.
export const projects = [
  {
    id: "riksa",
    featured: true,
    title: "RIKSA: Spatial Decision Support System & WebGIS Waste Management",
    category: "WebGIS & Spatial Systems",
    badge: "Undergraduate Thesis & BP2D West Java",
    location: "Bandung, Indonesia",
    activity: "thesis",
    summary: "Integrated WebGIS spatial decision support system for mapping and mitigating plastic waste generation across Bandung's HOREKA sector under Indonesia's Extended Producer Responsibility (EPR) mandate.",
    problem: "Hospitality sector stakeholders and regulatory bodies lacked integrated geospatial data to monitor plastic waste generation and audit EPR compliance in real time.",
    solution: "Architected an interactive WebGIS platform integrating spatial data services to model waste generation estimates, track EPR compliance indices, and generate circular routing recommendations.",
    impact: "Adopted as a strategic research model in formal partnership with BP2D (West Java Regional Research and Development Agency).",
    deliverables: ["Interactive WebGIS Platform", "Spatial Waste Generation Model", "EPR Policy Recommendation Report"],
    tags: ["WebGIS", "Leaflet", "Spatial Data Analysis", "EPR Policy", "SRS / UML", "Laravel"],
    images: [
      asset('images/projects/riksa/riksa-thesis-presentation-group-2.jpg'),
      asset('images/projects/riksa/riksa-thesis-presentation-group.jpg'),
      asset('images/projects/riksa/riksa-webgis-heatmap-display.jpg'),
      asset('images/projects/riksa/riksa-webgis-dashboard-demo.jpg'),
      asset('images/projects/riksa/riksa-stakeholder-discussion.jpg'),
      asset('images/projects/riksa/riksa-bank-sampah-interview.jpg'),
      asset('images/projects/riksa/riksa-field-visit-recycling-facility.jpg'),
      asset('images/projects/riksa/riksa-thesis-presentation.jpg'),
      asset('images/projects/riksa/riksa-team-photo.jpg')
    ],
    videoUrl: null
  },
  {
    id: "maspintar",
    featured: true,
    title: "MASPINTAR: Smart Bottle Sorter & Computer Vision GIS Dashboard",
    category: "IoT & Embedded AI",
    badge: "1st Best Product Capstone Design 2026",
    location: "Telkom University, Bandung",
    activity: "expo",
    summary: "MASPINTAR, an integrated plastic packaging waste management system: an IoT-enabled smart trash bin paired with a computer-vision classification model to automatically categorize plastic bottle waste and synchronize telemetry data to a cloud GIS dashboard for EPR compliance.",
    problem: "Low plastic sorting rates at source severely hindered waste recovery tracing and manufacturer EPR recycling quota auditing.",
    solution: "Engineered a smart bin utilizing embedded camera computer-vision detection to classify bottles, mechanical sorting servos, ultrasonic capacity sensors, and real-time cloud data telemetry.",
    impact: "Awarded 1st Best Product in Capstone Design 2026 at School of Industrial Engineering Telkom University and granted 2 official Computer Program IPR certificates.",
    deliverables: ["Physical Smart Sorter Prototype", "Registered Copyrights No. 001230732 & 001230725", "Telemetry & GIS Dashboard"],
    tags: ["Computer Vision", "Arduino", "Microcontroller", "ESP32", "EPR Compliance"],
    images: [
      asset('images/projects/capstone-design-epr/capstone-design-epr-2.jpg'),
      asset('images/projects/smart-bottle-sorter/smart-bottle-sorter-team-with-prototype.jpg'),
      asset('images/projects/capstone-design-epr/capstone-design-epr-3.jpg'),
      asset('images/projects/capstone-design-epr/capstone-design-epr-1.jpg'),
      asset('images/projects/smart-bottle-sorter/smart-bottle-sorter-prototype.jpg'),
      asset('images/projects/smart-bottle-sorter/smart-bottle-sorter-electronics-wiring.jpg'),
      asset('images/projects/smart-bottle-sorter/smart-bottle-sorter-internal-mechanism.jpg'),
      asset('images/projects/smart-bottle-sorter/smart-bottle-sorter-3d-printing-parts.jpg'),
      asset('images/projects/smart-bottle-sorter/smart-bottle-sorter-product-leaflet.jpg')
    ],
    videoUrl: null
  },
  {
    id: "isilogic-smart-bin",
    title: "IoT Smart Trash Can with Real-Time Fill Telemetry",
    category: "IoT & Embedded AI",
    badge: "2nd Place Karsa Cipta ISILOGIC 2024",
    location: "Bandung, Indonesia",
    activity: "competition",
    summary: "Engineered an IoT-connected trash bin monitoring real-time fill capacity by waste category to replace static campus waste collection schedules.",
    problem: "Inefficient static waste collection schedules on campus, with no real-time visibility of bin capacity per waste category.",
    solution: "Led an IoT engineering team to deploy real-time ultrasonic telemetry hardware that monitors fill capacity by waste category.",
    impact: "Won 2nd Place in Karsa Cipta (IoT Innovation) at the national ISILOGIC 2024 competition.",
    deliverables: ["IoT Smart Bin Hardware Prototype", "Real-Time Fill Capacity Telemetry"],
    tags: ["IoT Hardware", "Arduino", "Team Leadership"],
    images: [
      asset('images/projects/isilogic-2024/isilogic-2024.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-team.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-smart-bin-cad.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-bin-body-fabrication.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-sensor-module.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-sensor-test.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-site-survey-1.jpg'),
      asset('images/projects/isilogic-2024/isilogic-karsa-cipta-site-survey-2.jpg')
    ],
    videoUrl: null
  },
  {
    id: "isilogic-sentiment-research",
    title: "Sentiment Mining on Campus Sanitation Facility Perception",
    category: "Machine Learning",
    badge: "3rd Place Social Humanities Research ISILOGIC 2024",
    location: "Bandung, Indonesia",
    activity: "competition",
    summary: "Applied text mining and sentiment analysis to student survey responses to capture qualitative perceptions of campus waste management and sanitation infrastructure.",
    problem: "Lack of qualitative user perception feedback regarding campus sanitation infrastructure.",
    solution: "Analyzed thousands of student survey responses using NLP-based text mining and sentiment analysis.",
    impact: "Won 3rd Place in Social Humanities Research at the national ISILOGIC 2024 competition.",
    deliverables: ["Sentiment Analysis Pipeline", "Published Research Paper (SINTA 3)"],
    tags: ["Text Mining", "Sentiment Analysis", "NLP", "Data Science"],
    images: [
      asset('images/projects/isilogic-2024/isilogic-research-team-award.jpg'),
      asset('images/projects/isilogic-2024/isilogic-2024.jpg')
    ],
    videoUrl: null
  },
  {
    id: "iscea-case-competition-2026",
    title: "Re-Architecting GC Logistics for Profitable and Green Growth",
    category: "Supply Chain & Logistics Strategy",
    badge: "ISCEA Global Supply Chain Case Competition 2026",
    location: "Online",
    activity: "competition",
    summary: "Team Warung Nenden A7's case solution: a unified strategy to restructure operational networks, streamline last-mile bottlenecks, and scale decarbonized logistics across Indonesia.",
    problem: "Parcel demand fluctuates sharply across the year, with shocks concentrated in e-commerce volume, so sorting hubs must absorb surges without a network-wide capacity shortfall.",
    solution: "Dynamic sorting-hub load-balancing and buffer capacity strategy: three stress scenarios (low, base, peak) and an operational escalation ladder, from normal operation and direct surge handling to internal reallocation of overflow to the lowest-cost eligible hub, temporary external capacity, and a permanent capacity study only when the gap is structural.",
    impact: "Participated in the ISCEA Global Supply Chain Case Competition 2026 (July 18 – September 30, 2026), awarded a Certificate of Appreciation by ISCEA.",
    deliverables: ["Case Solution Deck", "Volume Stress Scenarios & Escalation Ladder", "Certificate of Appreciation"],
    tags: ["Logistics Network Design", "Capacity Planning Model", "Scenario Analysis", "Macro Supply Chain Strategy"],
    // Only the cover, Q2, and certificate are public; the full deck stays in private/.
    images: [
      asset('images/projects/iscea-2026/iscea-slide-01-cover.jpg'),
      asset('images/projects/iscea-2026/iscea-slide-04-volume-shocks.png'),
      asset('images/projects/iscea-2026/iscea-certificate.jpg')
    ],
    videoUrl: null
  }
];
