export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  pages: number;
  format: string;
  contents: string[];
}

export const products: Product[] = [
  {
    id: "loka-logistics",
    name: "LOKA Logistics",
    price: 1500,
    rating: 4.9,
    image: "/hero-desert.jpg",
    description:
      "Smart mobility, smarter commerce. LOKA Logistics is our intelligent logistics and delivery ecosystem built to power modern commerce — connecting customers, merchants, dispatch riders, and fleet operators through one integrated digital platform. Designed for businesses, marketplaces, logistics providers, airports, estates, and cities.",
    features: [
      "Multi-vendor marketplace with merchant portal",
      "Last-mile delivery, dispatch and ride hailing",
      "Fleet, driver and route optimization tools",
      "Real-time tracking and digital payments",
      "Customer, rider and business applications",
      "Analytics and reporting across the network",
    ],
    pages: 14,
    format: "Cloud platform + mobile apps",
    contents: [
      "Multi-vendor Marketplace — onboard merchants, manage catalogues and inventory, and settle vendors automatically with full dispute handling.",
      "Last-mile Delivery & Dispatch Management — intelligent assignment of orders to the right rider based on location, capacity, and service level.",
      "Ride Hailing & Mobility — passenger trips alongside deliveries on the same fleet, ideal for airports, estates, and city deployments.",
      "Fleet & Driver Management — vehicle records, driver onboarding and verification, performance tracking, and earnings management.",
      "Route Optimization & Real-time Tracking — live visibility for customers, merchants, and operators, with optimized multi-drop routing.",
      "Digital Payments & Settlement — integrated payment collection, wallet management, reconciliation, and automated payouts.",
      "Business Dashboard & Analytics — operational reporting on delivery performance, rider utilisation, revenue, and demand patterns.",
      "Deployment Options — perfect for airports, smart cities, estates, retail businesses, logistics companies, and government projects.",
    ],
  },
  {
    id: "payraty",
    name: "Payraty",
    price: 900,
    rating: 4.8,
    image: "/travel-books.jpg",
    description:
      "A digital payments and financial operations product from the LOKA portfolio. Payraty handles collections, disbursements, reconciliation, and reporting for businesses that need payment flows to be reliable, transparent, and auditable.",
    features: [
      "Collections and disbursements in one platform",
      "Automated reconciliation and settlement reporting",
      "Transparent failure handling and retry logic",
      "Role-based approvals and audit trails",
      "API-first integration with existing systems",
      "Real-time transaction dashboards",
    ],
    pages: 8,
    format: "Cloud platform + API",
    contents: [
      "Collections — accept payments across channels with clear, real-time status communicated to both your team and your customer.",
      "Disbursements — bulk and scheduled payouts with maker-checker approval limits and complete audit trails.",
      "Reconciliation — automated matching of transactions against settlement files, with exceptions surfaced for review rather than discovered at month end.",
      "Controls & Compliance — role-based access, immutable transaction history, and reporting built for auditors.",
      "Integrations — an API-first design that connects to your ERP, commerce platform, or internal systems without bespoke work each time.",
      "Analytics — transaction volumes, success rates, settlement timing, and revenue reporting in one dashboard.",
    ],
  },
  {
    id: "esecondaryschool",
    name: "eSecondarySchool",
    price: 750,
    rating: 4.7,
    image: "/asia-temple.jpg",
    description:
      "A learning and school management platform built for the realities of education outside major cities — shared devices, low bandwidth, and intermittent power. Combines learning delivery with the administration schools actually run on.",
    features: [
      "Offline-capable learning content delivery",
      "Student records, attendance and results management",
      "Teacher tools for assessment and grading",
      "Parent and guardian communication",
      "Fee management and reporting",
      "Works on low bandwidth and shared devices",
    ],
    pages: 10,
    format: "Web platform + mobile apps",
    contents: [
      "Learning Delivery — structured courses and lessons that download for offline study and synchronize progress when connectivity returns.",
      "Assessment & Grading — continuous assessment, examinations, automated scoring where appropriate, and results publication.",
      "Student Information — enrolment, attendance, academic history, and transcripts held in one reliable record.",
      "Teacher Tools — lesson planning, class management, and workload-aware grading workflows designed with teachers, not for them.",
      "Parent Engagement — attendance, results, and school communication delivered to guardians on the devices they already use.",
      "School Administration — fee management, staff records, and the operational reporting school leadership needs each term.",
    ],
  },
  {
    id: "loka-ai-platform",
    name: "LOKA AI Platform",
    price: 1200,
    rating: 4.9,
    image: "/northern-lights.jpg",
    description:
      "The foundation we deploy for organizations running AI in production. Grounded assistants, document intelligence, and predictive workflows on top of a governed platform with retrieval, evaluation, monitoring, and audit built in.",
    features: [
      "Grounded AI assistants that cite your own sources",
      "Intelligent document processing pipelines",
      "Predictive models wired into real decisions",
      "Evaluation harnesses and drift monitoring",
      "Access policies, usage logging and audit trails",
      "Model-agnostic: OpenAI, Anthropic, Google AI",
    ],
    pages: 9,
    format: "Cloud platform + integrations",
    contents: [
      "Knowledge Grounding — your policies, contracts, and operational data indexed into a retrieval layer so answers are traceable to a source document.",
      "AI Assistants — internal and customer-facing assistants with configurable guardrails and a clear escalation path to a human.",
      "Intelligent Document Processing — extraction, validation rules, and a human review queue for low-confidence cases.",
      "Predictive Analytics — demand, risk, and churn models connected to the scheduling, pricing, or credit decisions they should influence.",
      "Evaluation & Monitoring — automated evaluation sets, quality tracking, and drift alerts before accuracy quietly degrades.",
      "Governance — usage policies, access control, complete interaction logging, and a proportional review process for new deployments.",
    ],
  },
];

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
