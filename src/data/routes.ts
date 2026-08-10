export interface TravelRoute {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
  countries: string[];
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestSeason: string;
  budget: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  tips: string[];
}

export const travelRoutes: TravelRoute[] = [
  {
    id: "digital-transformation-programme",
    title: "Digital Transformation Programme",
    subtitle: "Discover, design, build, deploy, optimize",
    description:
      "Our end-to-end transformation engagement. We start with your business model and operating reality, define a funded roadmap, then deliver it in 90-day increments that each produce a measurable outcome.",
    duration: "6 – 12 months",
    image: "/work1.png",
    countries: ["Strategy", "Process Automation", "Cloud Migration", "Change Enablement"],
    difficulty: "Challenging",
    bestSeason: "Enterprise & Government",
    budget: "Scoped per organization",
    highlights: [
      "A transformation roadmap your leadership can fund and defend",
      "Value mapping across processes, journeys, and decision points",
      "90-day increments, each with a measurable business outcome",
      "Legacy systems modernized without a big-bang rewrite",
      "Cloud, data, and security foundations established early",
      "Capability transferred to your internal teams throughout",
    ],
    itinerary: [
      { day: "Phase 1", title: "Discover", description: "We understand your business. Stakeholder interviews, process mapping, systems inventory, and a value map showing where effort, cost, and revenue are being lost today." },
      { day: "Phase 2", title: "Design", description: "We create the right digital strategy. Target operating model, technology roadmap, prioritized use cases, and a business case with expected outcomes and investment sequencing." },
      { day: "Phase 3", title: "Build", description: "We engineer scalable solutions. Delivery runs in short increments with working software reviewed by your team every sprint, backed by automated testing and CI/CD pipelines." },
      { day: "Phase 4", title: "Deploy", description: "We launch with confidence. Staged rollout, migration of data and users, monitoring in place before go-live, and rollback paths that have been tested rather than assumed." },
      { day: "Phase 5", title: "Optimize", description: "We continuously improve using analytics and AI. Post-launch we track the metrics defined in Phase 1 and keep improving the system against them as a long-term partner." },
    ],
    tips: [
      "Name an executive sponsor with authority to make trade-off decisions",
      "Agree the success metrics before delivery starts, not after launch",
      "Sequence for early visible wins to sustain organizational momentum",
      "Fund change management alongside engineering, not as an afterthought",
      "Plan for the operating model after go-live from the very first phase",
    ],
  },
  {
    id: "ai-enablement-journey",
    title: "AI Enablement Journey",
    subtitle: "From readiness assessment to governed production AI",
    description:
      "A structured path for organizations that want AI to produce measurable value rather than demos. We assess readiness, prove impact on a narrow use case, then build the platform and governance that make the next use cases faster.",
    duration: "3 – 6 months",
    image: "/work2.png",
    countries: ["AI Readiness", "Generative AI", "Predictive Analytics", "AI Governance"],
    difficulty: "Moderate",
    bestSeason: "All sectors",
    budget: "Scoped per use case",
    highlights: [
      "Honest assessment of data, process, and skills readiness",
      "A prioritized use case shortlist with expected business impact",
      "A grounded pilot in production with real users, not a sandbox demo",
      "Reusable AI platform: retrieval, evaluation, and monitoring",
      "Governance framework proportional to the risk of each use case",
      "Internal team enabled to own and extend the capability",
    ],
    itinerary: [
      { day: "Stage 1", title: "AI Readiness Assessment", description: "We evaluate your data availability and quality, process maturity, technical foundations, and internal skills — then tell you plainly where AI will work today and where it will not." },
      { day: "Stage 2", title: "Use Case Prioritization", description: "Candidate use cases are scored on business impact, data dependency, delivery effort, and risk. You leave with a shortlist and a business case for the first two." },
      { day: "Stage 3", title: "Grounded Pilot", description: "We build the first solution against real data and real users — typically an assistant, a document processing pipeline, or a predictive model wired into an existing decision." },
      { day: "Stage 4", title: "Platform & Governance", description: "The pilot becomes reusable infrastructure: retrieval, evaluation harnesses, monitoring, access policies, audit logging, and a review process for new deployments." },
      { day: "Stage 5", title: "Scale & Optimize", description: "Subsequent use cases ship against the platform in a fraction of the time. Models are monitored for drift and reviewed against the metrics agreed at the start." },
    ],
    tips: [
      "Start with a use case where being wrong is cheap and being right is measurable",
      "Invest in data quality first — no model compensates for unreliable inputs",
      "Keep a human in the loop wherever the decision carries real consequence",
      "Log every interaction from day one; you will need it for evaluation",
      "Review the roadmap quarterly — the capability landscape changes fast",
    ],
  },
  {
    id: "product-launch-sprint",
    title: "Product Launch Sprint",
    subtitle: "Idea to live product with a team that stays after launch",
    description:
      "For organizations launching a new digital product. Discovery validates the opportunity, design proves the experience, and engineering delivers a production-ready platform built to scale beyond version one.",
    duration: "8 – 20 weeks",
    image: "/work3.png",
    countries: ["Product Discovery", "UI/UX Design", "Mobile & Web", "DevOps"],
    difficulty: "Moderate",
    bestSeason: "Startups, SMEs & Enterprises",
    budget: "Scoped per product",
    highlights: [
      "Validated scope and a clickable prototype before engineering begins",
      "Design system that keeps quality consistent as the product grows",
      "Offline-first, low-bandwidth engineering for real network conditions",
      "API-first architecture ready for partner and payment integrations",
      "Automated pipelines, monitoring, and test coverage from day one",
      "Post-launch support and improvement cadence agreed up front",
    ],
    itinerary: [
      { day: "Weeks 1-2", title: "Product Discovery", description: "User research, journey mapping, competitive review, and a validated scope. We prototype the proposed experience and test it with real users before committing engineering budget." },
      { day: "Weeks 3-4", title: "Design & Architecture", description: "Interface design, design system foundations, data modelling, and the technical architecture — including integration points for payments, identity, and reporting." },
      { day: "Weeks 5-12", title: "Engineering", description: "Delivery in two-week sprints with working software at the end of each. Automated testing, CI/CD, and staged environments are in place from the first sprint." },
      { day: "Weeks 13-16", title: "Launch", description: "Beta with a controlled user group, performance and security review, monitoring and alerting configured, then a staged public release with rollback ready." },
      { day: "Ongoing", title: "Iterate", description: "Product analytics guide the roadmap after launch. We continue as an engineering partner or transfer ownership to your internal team — whichever fits your plan." },
    ],
    tips: [
      "Cut scope, not quality — a smaller product launched is worth more than a larger one delayed",
      "Test on the devices and networks your actual users have",
      "Instrument the product before launch so day-one data is usable",
      "Decide the post-launch ownership model before you go live",
      "Treat the API as a product from the first sprint",
    ],
  },
  {
    id: "intelligent-automation-programme",
    title: "Intelligent Automation Programme",
    subtitle: "Remove the repetitive work that consumes your operating budget",
    description:
      "We measure your processes, identify the automation candidates with the strongest return, then deliver automation combining workflow engines, RPA, and AI — with monitoring so nothing fails silently.",
    duration: "3 – 9 months",
    image: "/work4.png",
    countries: ["Process Analytics", "RPA", "Workflow Automation", "Document Automation"],
    difficulty: "Easy",
    bestSeason: "Operations-heavy organizations",
    budget: "Scoped per process",
    highlights: [
      "Real cycle-time and error-rate baselines before any investment",
      "Automation candidates ranked by measurable return",
      "Workflow, RPA, and AI combined according to what each process needs",
      "Human review queues where judgement and accountability matter",
      "Monitoring and alerting so failures surface immediately",
      "Documented bots with a planned retirement path",
    ],
    itinerary: [
      { day: "Step 1", title: "Process Analytics", description: "We instrument the current processes for several weeks to establish true cycle times, volumes, exception rates, and cost — the baseline everything else is measured against." },
      { day: "Step 2", title: "Candidate Selection", description: "Processes are ranked by volume, rule stability, error cost, and integration feasibility. You approve a shortlist with expected savings for each." },
      { day: "Step 3", title: "Automation Delivery", description: "We build the automation using the right mechanism per process — workflow orchestration where systems can integrate, RPA where they cannot, AI where judgement is required." },
      { day: "Step 4", title: "Parallel Running", description: "The automated route runs alongside the manual one until accuracy is proven, then the manual process is retired with confidence rather than hope." },
      { day: "Step 5", title: "Monitor & Extend", description: "Dashboards track throughput, exceptions, and savings realized. The same patterns are then extended across departments." },
    ],
    tips: [
      "Automate the process you have measured, not the process you assume",
      "Fix a broken process before automating it — speed multiplies errors too",
      "Always design the exception path; it is where the real work ends up",
      "Treat RPA bots as temporary bridges with documented expiry",
      "Report savings monthly so the programme keeps its mandate",
    ],
  },
];

export function getRouteById(id: string) {
  return travelRoutes.find(r => r.id === id);
}
