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
    tags: ["WebGIS", "Mapbox", "Spatial Data Analysis", "EPR Policy", "SRS / UML", "Python"],
    images: [
      asset('img/capstone_design_epr/capstone_design_epr_2.jpg'),
      asset('img/capstone_design_epr/capstone_design_epr_1.jpg')
    ],
    videoUrl: null
  },
  {
    id: "capstone-epr",
    featured: true,
    title: "Smart Bottle Sorter & Computer Vision GIS Dashboard",
    category: "IoT & Embedded AI",
    badge: "1st Best Product Capstone Design 2026",
    location: "Telkom University, Bandung",
    activity: "expo",
    summary: "IoT-enabled smart trash bin paired with a computer-vision classification model to automatically categorize plastic bottle waste and synchronize telemetry data to a cloud GIS dashboard for EPR compliance.",
    problem: "Low plastic sorting rates at source severely hindered waste recovery tracing and manufacturer EPR recycling quota auditing.",
    solution: "Engineered a smart bin utilizing embedded camera computer-vision detection to classify bottles, mechanical sorting servos, ultrasonic capacity sensors, and real-time cloud data telemetry.",
    impact: "Awarded 1st Best Product in Capstone Design 2026 at School of Industrial Engineering Telkom University and granted 2 official Computer Program IPR certificates.",
    deliverables: ["Physical Smart Sorter Prototype", "Registered Copyrights No. 001230732 & 001230725", "Telemetry Cloud Dashboard"],
    tags: ["Computer Vision", "IoT Sensors", "Microcontroller", "Cloud Telemetry", "EPR Compliance"],
    images: [
      asset('img/capstone_design_epr/capstone_design_epr_1.jpg'),
      asset('img/capstone_design_epr/capstone_design_epr_3.jpg')
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
    tags: ["IoT Hardware", "Ultrasonic Sensors", "Telemetry", "Team Leadership"],
    images: [
      asset('img/isilogic_2024/isilogic_2024.jpg')
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
      asset('img/isilogic_2024/isilogic_2024.jpg')
    ],
    videoUrl: null
  }
];
