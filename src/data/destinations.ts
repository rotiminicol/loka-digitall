export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  content?: string[];
  author?: string;
}

export interface Country {
  name: string;
  slug: string;
  heroImage: string;
  about: string;
  articles: Article[];
  bestMonths: number[];
  phrases?: { original: string; translation: string; language: string }[];
  categories?: string[];
  regions?: string[];
}

export interface Continent {
  name: string;
  slug: string;
  heroImage: string;
  introduction: string;
  countries: Country[];
}

export const continents: Continent[] = [
  {
    name: "Digital Transformation",
    slug: "digital-transformation",
    heroImage: "/hero1.png",
    introduction:
      "Modernize your organization with technology that improves productivity, customer experience, and operational efficiency. We combine business strategy, engineering, and cloud infrastructure so transformation delivers measurable outcomes rather than expensive experiments.",
    countries: [
      {
        name: "Transformation Strategy",
        slug: "transformation-strategy",
        heroImage: "/work1.png",
        about:
          "We start with the business, not the technology. Together we map your operating model, identify where value leaks, and build a transformation roadmap your leadership team can fund, sequence, and defend.",
        categories: ["Strategy", "Advisory", "Operations", "Data", "Cloud"],
        regions: ["Digital Transformation Strategy", "Digital Advisory", "Operating Model Design", "Technology Roadmaps", "Change Enablement", "Business Case Development"],
        bestMonths: [1, 2, 5, 9],
        phrases: [
          { original: "Outcome First", translation: "How we scope", language: "LOKA" },
          { original: "90-Day Wins", translation: "How we sequence", language: "LOKA" },
          { original: "Measure Everything", translation: "How we prove value", language: "LOKA" },
        ],
        articles: [
          {
            id: "dt1",
            title: "How to Build a Digital Transformation Roadmap Your Board Will Approve",
            excerpt: "A practical sequence for turning ambition into a funded, measurable programme.",
            image: "/work1.png",
            category: "Strategy",
            date: "2026-06-18",
            author: "LOKA Strategy Team",
            content: [
              "Most transformation programmes fail long before the first line of code is written. They fail because the roadmap is a wish list of technologies rather than a sequence of business outcomes with owners, budgets, and measurement.",
              "We begin every engagement with a value map: which processes cost the most, which customer journeys leak revenue, and which decisions are slowed by missing data. Only then do we ask what technology is required.",
              "The result is a roadmap sequenced into 90-day increments. Each increment delivers something measurable — a shorter cycle time, a lower cost to serve, a new revenue channel — so funding decisions are based on evidence rather than optimism.",
            ],
          },
          {
            id: "dt2",
            title: "Technology Should Simplify Complexity, Not Create It",
            excerpt: "Our core philosophy and what it means for the systems we design.",
            image: "/work2.png",
            category: "Advisory",
            date: "2026-05-02",
            author: "LOKA Strategy Team",
            content: [
              "Every organization accumulates complexity: overlapping systems, manual workarounds, spreadsheets holding critical processes together. Adding new software on top of that usually makes things worse.",
              "Our approach is subtractive first. Before we build, we look for processes to retire, integrations to consolidate, and approvals to automate away entirely.",
              "The measure of a good digital transformation is not how many platforms you now own. It is how much less effort it takes your people to do meaningful work.",
            ],
          },
        ],
      },
      {
        name: "Process Automation",
        slug: "process-automation",
        heroImage: "/work2.png",
        about:
          "Digitize workflows, remove manual handoffs, and give your teams back the hours they currently spend on repetitive administration. We automate the processes that quietly consume your operating budget.",
        categories: ["Operations", "Automation", "Data", "Advisory"],
        regions: ["Process Automation", "Workflow Digitization", "Approval Workflows", "Document Automation", "Reporting Automation", "Operational Dashboards"],
        bestMonths: [2, 3, 6, 10],
        articles: [
          {
            id: "dt3",
            title: "Where Automation Pays Back Fastest in African Enterprises",
            excerpt: "Finance approvals, onboarding, and reporting are usually the first wins.",
            image: "/work3.png",
            category: "Automation",
            date: "2026-04-14",
            author: "LOKA Engineering",
            content: [
              "Automation returns the most value where volume is high, rules are stable, and errors are expensive. In practice that means finance approvals, employee onboarding, compliance reporting, and customer document handling.",
              "We instrument the process before we automate it. Knowing the true cycle time and error rate gives you a baseline, and a baseline gives you a business case.",
              "Teams typically recover between twenty and forty percent of the hours spent on administrative work within the first two quarters of a focused automation programme.",
            ],
          },
          {
            id: "dt4",
            title: "Digitizing Paper Workflows Without Disrupting Operations",
            excerpt: "A staged migration path that keeps the business running.",
            image: "/work4.png",
            category: "Operations",
            date: "2026-03-08",
            author: "LOKA Engineering",
            content: [
              "Organizations rarely have the luxury of pausing operations to modernize. Our staged approach runs the digital workflow in parallel with the existing one until confidence is established.",
              "We start with a single high-volume form or approval chain, prove the results, and then extend the same pattern across departments.",
              "Adoption is a design problem, not a training problem. If the digital route is faster than the paper route, people switch on their own.",
            ],
          },
        ],
      },
      {
        name: "Legacy Modernization",
        slug: "legacy-modernization",
        heroImage: "/work3.png",
        about:
          "Aging systems hold organizations back with brittle integrations, security risk, and rising maintenance costs. We modernize them incrementally, protecting the business logic you depend on while removing the constraints you do not.",
        categories: ["Cloud", "Advisory", "Operations"],
        regions: ["Legacy System Modernization", "Enterprise System Integration", "Cloud Migration", "Data Migration", "API Enablement", "Security Hardening"],
        bestMonths: [3, 4, 7, 11],
        articles: [
          {
            id: "dt5",
            title: "Modernizing Legacy Systems Without a Risky Big-Bang Rewrite",
            excerpt: "Strangle the old system gradually and keep the lights on.",
            image: "/think1.png",
            category: "Cloud",
            date: "2026-02-20",
            author: "LOKA Engineering",
            content: [
              "Full rewrites are the most expensive way to modernize and the most likely to fail. We prefer to place an API layer in front of the legacy system and move capabilities out of it one at a time.",
              "Each migrated capability is independently deployable and independently reversible. That keeps risk contained and lets the business feel progress every quarter.",
              "By the end of the programme the legacy system is no longer the system of record for anything critical, and it can be retired quietly rather than dramatically.",
            ],
          },
          {
            id: "dt6",
            title: "Cloud Migration: What to Move, What to Rebuild, What to Retire",
            excerpt: "A decision framework for migrating enterprise workloads.",
            image: "/think2.png",
            category: "Cloud",
            date: "2026-01-16",
            author: "LOKA Engineering",
            content: [
              "Not every workload deserves to move to the cloud in its current form. We classify each system by business criticality, change frequency, and cost profile before recommending an approach.",
              "Stable, low-change systems are usually rehosted. High-change, customer-facing systems are rebuilt cloud-native. A surprising number of systems can simply be retired once their real usage is measured.",
              "Governance, cost controls, and security baselines are established before the first workload moves, not after the first invoice arrives.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "AI Strategy",
    slug: "ai-strategy",
    heroImage: "/hero2.png",
    introduction:
      "Turn artificial intelligence into measurable business value. We help organizations identify where AI creates real impact rather than following trends, then design, deploy, and govern the solutions that deliver it.",
    countries: [
      {
        name: "AI Readiness",
        slug: "ai-readiness",
        heroImage: "/logistic1.png",
        about:
          "Before you invest in AI, you need an honest view of your data, processes, and skills. Our readiness assessment tells you where AI will work today, where it will not, and what it will take to close the gap.",
        categories: ["Strategy", "Data", "Advisory", "Governance"],
        regions: ["AI Readiness Assessment", "AI Strategy & Roadmaps", "Data Strategy", "Use Case Prioritization", "AI Operating Model", "Skills & Capability Planning"],
        bestMonths: [1, 4, 8, 12],
        phrases: [
          { original: "Value Over Novelty", translation: "How we choose use cases", language: "LOKA" },
          { original: "Data Before Models", translation: "How we prepare", language: "LOKA" },
          { original: "Human In The Loop", translation: "How we deploy", language: "LOKA" },
        ],
        articles: [
          {
            id: "ai1",
            title: "AI Readiness: The Five Questions to Answer Before You Spend a Naira",
            excerpt: "Data quality, process clarity, and governance decide whether AI works.",
            image: "/think1.png",
            category: "Strategy",
            date: "2026-07-01",
            author: "LOKA AI Practice",
            content: [
              "Organizations often approach AI with a solution in mind and a problem to be found later. We reverse that. The first question is always which decision or task is slow, costly, or inconsistent today.",
              "Then we test feasibility: is the data available, is it clean enough, is the process well enough defined for a model to add value, and can a human review the output where it matters?",
              "The assessment produces a prioritized shortlist with expected impact, data dependencies, and delivery effort — so leadership can invest with clear eyes.",
            ],
          },
          {
            id: "ai2",
            title: "Building an AI Roadmap That Survives Contact With Reality",
            excerpt: "Sequencing pilots, platforms, and governance in the right order.",
            image: "/think2.png",
            category: "Advisory",
            date: "2026-05-25",
            author: "LOKA AI Practice",
            content: [
              "A credible AI roadmap balances three tracks: quick-win use cases that build confidence, platform work that makes future use cases cheaper, and governance that keeps the organization safe.",
              "Running these tracks in parallel prevents the common failure mode where a successful pilot cannot be scaled because no platform or policy exists behind it.",
              "We revisit the roadmap quarterly. The AI landscape moves quickly, and a plan that cannot absorb new capability is already out of date.",
            ],
          },
        ],
      },
      {
        name: "Generative AI",
        slug: "generative-ai",
        heroImage: "/think1.png",
        about:
          "We build generative AI solutions grounded in your own knowledge — assistants, copilots, and document intelligence that answer from your policies, contracts, and operational data rather than guessing.",
        categories: ["Automation", "Data", "Operations"],
        regions: ["Generative AI Solutions", "AI Assistants & Chatbots", "Knowledge Management AI", "Intelligent Document Processing", "Retrieval Augmented Generation", "Vector Search"],
        bestMonths: [2, 5, 9, 11],
        articles: [
          {
            id: "ai3",
            title: "Grounded AI Assistants: Making Models Answer From Your Own Knowledge",
            excerpt: "Retrieval, citations, and guardrails turn a chatbot into a trusted tool.",
            image: "/think3.png",
            category: "Automation",
            date: "2026-06-05",
            author: "LOKA AI Practice",
            content: [
              "A general model knows the internet. Your staff need answers from your policy manuals, contracts, product catalogue, and support history. Grounding is what closes that gap.",
              "We index your knowledge into a retrieval layer, force the assistant to cite its sources, and constrain it to decline when the answer is not in the corpus.",
              "The result is an assistant your compliance team can accept: every answer is traceable to a document, and every gap in the knowledge base becomes visible.",
            ],
          },
          {
            id: "ai4",
            title: "Intelligent Document Processing for High-Volume Operations",
            excerpt: "Extracting structured data from invoices, claims, and forms at scale.",
            image: "/logistic1.png",
            category: "Operations",
            date: "2026-04-28",
            author: "LOKA AI Practice",
            content: [
              "Document-heavy operations — claims, KYC, procurement, logistics paperwork — are where AI delivers immediate, quantifiable savings.",
              "We combine extraction models with validation rules and a human review queue for low-confidence cases, so accuracy improves without removing accountability.",
              "Throughput typically increases several times over while exception handling becomes the only human task left in the pipeline.",
            ],
          },
        ],
      },
      {
        name: "AI Governance",
        slug: "ai-governance",
        heroImage: "/think2.png",
        about:
          "Responsible AI is a business requirement, not a compliance afterthought. We put policies, monitoring, and review processes in place so your AI systems remain accurate, explainable, and defensible.",
        categories: ["Governance", "Advisory", "Data"],
        regions: ["AI Governance", "Model Risk Management", "Data Privacy", "Bias & Quality Monitoring", "Audit Trails", "Usage Policies"],
        bestMonths: [3, 6, 10, 12],
        articles: [
          {
            id: "ai5",
            title: "Predictive Analytics: Turning Operational Data Into Decisions",
            excerpt: "Forecasting demand, risk, and churn with the data you already hold.",
            image: "/hero2.png",
            category: "Data",
            date: "2026-03-19",
            author: "LOKA AI Practice",
            content: [
              "Most organizations already collect enough operational data to forecast demand, detect risk, and anticipate churn. What is usually missing is the pipeline and the decision process around the prediction.",
              "We build both. A forecast that nobody acts on is a report; a forecast wired into scheduling, pricing, or credit decisions is an asset.",
              "Every model ships with monitoring, so drift is detected before it quietly degrades the decisions it supports.",
            ],
          },
          {
            id: "ai6",
            title: "Governing AI: Policies, Guardrails, and Human Oversight",
            excerpt: "What a workable AI governance framework looks like in practice.",
            image: "/hero5.png",
            category: "Governance",
            date: "2026-02-06",
            author: "LOKA AI Practice",
            content: [
              "Good governance answers four questions: what data may be used, who approves a deployment, how outputs are monitored, and who is accountable when the system is wrong.",
              "We keep the framework proportional. A low-risk internal assistant should not carry the same review burden as a model influencing credit or clinical decisions.",
              "Documented decisions, logged interactions, and periodic review turn AI from an unmanaged risk into a governed capability.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Product Engineering",
    slug: "product-engineering",
    heroImage: "/hero3.png",
    introduction:
      "From idea to launch. We design and build digital products that people love — discovery, design, engineering, infrastructure, and quality assurance under one accountable team.",
    countries: [
      {
        name: "Product Discovery",
        slug: "product-discovery",
        heroImage: "/work4.png",
        about:
          "The cheapest version of your product is the one you validate before building. Discovery aligns the business case, the user need, and the technical approach before engineering budget is committed.",
        categories: ["Strategy", "Design", "Advisory"],
        regions: ["Product Discovery", "UI/UX Design", "Design Systems", "Prototyping", "User Research", "Roadmap Definition"],
        bestMonths: [1, 3, 7, 9],
        phrases: [
          { original: "Validate Early", translation: "How we de-risk", language: "LOKA" },
          { original: "Ship Small", translation: "How we deliver", language: "LOKA" },
          { original: "Stay After Launch", translation: "How we partner", language: "LOKA" },
        ],
        articles: [
          {
            id: "pe1",
            title: "Product Discovery: How to Avoid Building the Wrong Thing Well",
            excerpt: "Two weeks of structured discovery saves months of engineering.",
            image: "/hero3.png",
            category: "Strategy",
            date: "2026-06-27",
            author: "LOKA Product Team",
            content: [
              "The most expensive engineering is engineering spent on features nobody needed. Discovery exists to make that mistake cheap and early.",
              "We run structured interviews, map the current journey, prototype the proposed one, and put it in front of real users before a sprint is planned.",
              "The output is a validated scope, a clickable prototype, and an estimate the business can actually rely on.",
            ],
          },
          {
            id: "pe2",
            title: "Designing Products People Actually Enjoy Using",
            excerpt: "Simplicity is an engineering decision as much as a design one.",
            image: "/work3.png",
            category: "Design",
            date: "2026-05-11",
            author: "LOKA Product Team",
            content: [
              "Users do not reward complexity. They reward products that get them to the outcome in fewer steps, with fewer decisions and less uncertainty.",
              "Our design practice is grounded in real usage contexts — intermittent connectivity, shared devices, mixed literacy levels, and the realities of the markets we build for.",
              "A design system keeps that quality consistent as the product grows and as more teams contribute to it.",
            ],
          },
        ],
      },
      {
        name: "Applications & Platforms",
        slug: "applications-platforms",
        heroImage: "/think3.png",
        about:
          "We build mobile apps, web applications, SaaS products, and enterprise platforms engineered for scale, security, and long-term maintainability.",
        categories: ["Engineering", "Design", "Cloud"],
        regions: ["Mobile App Development", "Web Applications", "Enterprise Platforms", "SaaS Products", "API Development", "Integrations"],
        bestMonths: [2, 4, 8, 10],
        articles: [
          {
            id: "pe3",
            title: "Building Mobile Products for Real African Network Conditions",
            excerpt: "Offline-first design, lean payloads, and graceful degradation.",
            image: "/work4.png",
            category: "Engineering",
            date: "2026-04-03",
            author: "LOKA Product Team",
            content: [
              "A product that only works on strong connectivity will fail most of your users most of the time. We design for intermittent networks from the first sprint.",
              "That means offline-first data handling, optimistic updates, small payloads, and clear feedback when the app is syncing rather than broken.",
              "The same discipline improves the experience everywhere else — fast on a weak network means instant on a strong one.",
            ],
          },
          {
            id: "pe4",
            title: "API-First Architecture for Products That Need to Integrate",
            excerpt: "Designing platforms that other systems can build on.",
            image: "/think3.png",
            category: "Engineering",
            date: "2026-03-01",
            author: "LOKA Product Team",
            content: [
              "Enterprise and marketplace products rarely live alone. Payments, identity, logistics, and reporting all need clean integration points.",
              "We treat the API as the product's first interface: versioned, documented, and tested independently of any user interface.",
              "This makes partner integrations a configuration exercise rather than a new engineering project each time.",
            ],
          },
        ],
      },
      {
        name: "DevOps & Quality",
        slug: "devops-quality",
        heroImage: "/work3.png",
        about:
          "Reliable delivery is a capability, not a phase. We set up the pipelines, environments, monitoring, and test automation that let your teams ship confidently and frequently.",
        categories: ["Cloud", "Engineering", "Operations"],
        regions: ["DevOps & Cloud Infrastructure", "CI/CD Pipelines", "Quality Assurance", "Test Automation", "Observability", "Performance Engineering"],
        bestMonths: [5, 6, 11, 12],
        articles: [
          {
            id: "pe5",
            title: "CI/CD for Teams That Cannot Afford Downtime",
            excerpt: "Automated pipelines, staged environments, and safe rollbacks.",
            image: "/hero1.png",
            category: "Cloud",
            date: "2026-02-13",
            author: "LOKA Engineering",
            content: [
              "Deployment should be routine. When releases are rare and manual, every release becomes an event — and events go wrong.",
              "We automate build, test, and deployment through staged environments, with rollback paths that are tested rather than theoretical.",
              "Teams move from monthly release windows to daily deployments without increasing incident rates.",
            ],
          },
          {
            id: "pe6",
            title: "Quality Assurance That Scales With the Product",
            excerpt: "Where to automate, where to test manually, and how to measure.",
            image: "/hero4.png",
            category: "Operations",
            date: "2026-01-09",
            author: "LOKA Engineering",
            content: [
              "Automating every test is as wasteful as automating none. We automate the paths that break the business and keep exploratory testing where human judgement matters.",
              "Observability closes the loop: production telemetry tells you which flows deserve more coverage.",
              "Quality becomes a shared metric rather than a gate at the end of the process.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Enterprise Solutions",
    slug: "enterprise-solutions",
    heroImage: "/hero4.png",
    introduction:
      "Helping organizations run smarter. We develop scalable enterprise systems that manage people, money, learning, care, and operations — built for the way your organization actually works.",
    countries: [
      {
        name: "ERP & Finance",
        slug: "erp-finance",
        heroImage: "/logistic3.png",
        about:
          "Enterprise resource planning and financial systems that give leadership a single, trustworthy view of operations, spend, and performance.",
        categories: ["Operations", "Data", "Engineering"],
        regions: ["ERP Platforms", "Financial Applications", "Procurement Systems", "Budgeting & Reporting", "Asset Management", "Audit & Compliance"],
        bestMonths: [1, 4, 7, 10],
        phrases: [
          { original: "One Source Of Truth", translation: "What we build toward", language: "LOKA" },
          { original: "Built To Scale", translation: "How we engineer", language: "LOKA" },
          { original: "Secure By Default", translation: "How we protect", language: "LOKA" },
        ],
        articles: [
          {
            id: "es1",
            title: "Choosing Between Off-the-Shelf ERP and a Custom Platform",
            excerpt: "A clear framework for a decision most organizations get wrong.",
            image: "/hero4.png",
            category: "Operations",
            date: "2026-06-11",
            author: "LOKA Enterprise Team",
            content: [
              "Standard processes should run on standard software. Differentiating processes — the ones your customers actually notice — usually deserve a custom platform.",
              "We map your processes against that distinction before recommending a route, and we are comfortable recommending that you buy rather than build.",
              "The worst outcome is a heavily customized package that is expensive to run and impossible to upgrade.",
            ],
          },
          {
            id: "es2",
            title: "Financial Applications: Controls, Reconciliation, and Trust",
            excerpt: "What separates a reporting tool from a system of record.",
            image: "/payraty.png",
            category: "Data",
            date: "2026-05-16",
            author: "LOKA Enterprise Team",
            content: [
              "Financial systems earn trust through controls: immutable audit trails, enforced approval limits, and reconciliation that runs automatically rather than at month end.",
              "We design those controls into the data model from the start, because retrofitting them is painful and rarely complete.",
              "The payoff is a close process measured in days instead of weeks.",
            ],
          },
        ],
      },
      {
        name: "People & Learning",
        slug: "people-learning",
        heroImage: "/esecondary.png",
        about:
          "Human resource, payroll, and learning platforms that reduce administrative load and give your organization a clear picture of its people and their capability.",
        categories: ["Operations", "Design", "Engineering"],
        regions: ["Human Resource Systems", "Payroll Systems", "Learning Management Systems", "Performance Management", "Employee Self-Service", "Workforce Analytics"],
        bestMonths: [2, 5, 8, 11],
        articles: [
          {
            id: "es3",
            title: "Payroll Systems Built for Complex, Multi-Entity Organizations",
            excerpt: "Handling allowances, statutory deductions, and audit requirements.",
            image: "/esecondary.png",
            category: "Operations",
            date: "2026-04-21",
            author: "LOKA Enterprise Team",
            content: [
              "Payroll is unforgiving. It must be accurate, on time, compliant with local statutory rules, and explainable to every employee who queries a payslip.",
              "We model allowances, deductions, and tax rules as configurable policy rather than code, so changes in regulation do not require a release.",
              "Self-service access reduces payroll queries dramatically and gives the finance team their month back.",
            ],
          },
          {
            id: "es4",
            title: "Learning Platforms That People Finish",
            excerpt: "Completion rates are a design problem, not a content problem.",
            image: "/work1.png",
            category: "Design",
            date: "2026-03-26",
            author: "LOKA Enterprise Team",
            content: [
              "Most learning management systems are content warehouses. Completion suffers because the experience is heavy, slow, and disconnected from daily work.",
              "We design for short sessions, mobile access, offline content, and progress that is visible to both the learner and their manager.",
              "When learning fits into the working day, completion stops being something you have to chase.",
            ],
          },
        ],
      },
      {
        name: "Sector Platforms",
        slug: "sector-platforms",
        heroImage: "/payraty.png",
        about:
          "Healthcare, logistics, education, and government platforms built around regulated workflows, sensitive data, and demanding availability requirements.",
        categories: ["Engineering", "Governance", "Operations"],
        regions: ["Healthcare Platforms", "Logistics Platforms", "Government Solutions", "Education Systems", "Citizen Services", "Regulatory Reporting"],
        bestMonths: [3, 6, 9, 12],
        articles: [
          {
            id: "es5",
            title: "Building Healthcare Platforms Around Clinical Workflows",
            excerpt: "Software that respects how care is actually delivered.",
            image: "/logistic3.png",
            category: "Engineering",
            date: "2026-02-27",
            author: "LOKA Enterprise Team",
            content: [
              "Clinical software fails when it adds keystrokes to a consultation. Every screen has to earn its place in a workflow that is already under time pressure.",
              "We shadow the actual workflow before designing, then optimize for the shortest safe path through each task.",
              "Data protection, access control, and auditability are designed in from day one rather than added before go-live.",
            ],
          },
          {
            id: "es6",
            title: "Delivering Government Technology Projects That Ship",
            excerpt: "Procurement realities, phased delivery, and public accountability.",
            image: "/work2.png",
            category: "Governance",
            date: "2026-01-23",
            author: "LOKA Enterprise Team",
            content: [
              "Public sector programmes carry additional constraints: procurement cycles, multiple stakeholders, and a duty to be transparent about progress and cost.",
              "Phased delivery with visible milestones is the single most effective way to keep these programmes on track and publicly defensible.",
              "We build capability alongside the software, so the agency can operate and extend the platform after handover.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Intelligent Automation",
    slug: "intelligent-automation",
    heroImage: "/hero5.png",
    introduction:
      "Automate repetitive work so your people can focus on innovation. We combine robotic process automation, workflow engines, and AI to remove the manual steps that slow your operations down.",
    countries: [
      {
        name: "Robotic Process Automation",
        slug: "robotic-process-automation",
        heroImage: "/work1.png",
        about:
          "Software robots that operate your existing systems the way a person would — ideal where integration is impossible and volumes are high.",
        categories: ["Automation", "Operations", "Data"],
        regions: ["Robotic Process Automation (RPA)", "Screen & System Bots", "Data Entry Automation", "Reconciliation Bots", "Exception Handling", "Bot Monitoring"],
        bestMonths: [1, 5, 8, 11],
        phrases: [
          { original: "Automate The Repetitive", translation: "What we remove", language: "LOKA" },
          { original: "Elevate The Human", translation: "What we protect", language: "LOKA" },
          { original: "Monitor Everything", translation: "How we operate", language: "LOKA" },
        ],
        articles: [
          {
            id: "ia1",
            title: "When RPA Is the Right Answer — and When It Is a Trap",
            excerpt: "Bots are a bridge, not a permanent architecture.",
            image: "/hero5.png",
            category: "Automation",
            date: "2026-06-02",
            author: "LOKA Automation Team",
            content: [
              "RPA is excellent when a system has no API and replacing it is not yet viable. It is a poor choice when a proper integration would take the same effort.",
              "We use bots deliberately and document them as technical debt with an expiry date, so they do not quietly become critical infrastructure.",
              "Monitoring matters: an unattended bot that fails silently is worse than the manual process it replaced.",
            ],
          },
          {
            id: "ia2",
            title: "Customer Service Automation Without Frustrating Customers",
            excerpt: "Deflect the routine, escalate the rest, and always offer a human.",
            image: "/work4.png",
            category: "Operations",
            date: "2026-04-09",
            author: "LOKA Automation Team",
            content: [
              "Automation should shorten the path to resolution. If it becomes a wall between the customer and a person who can help, satisfaction collapses.",
              "We automate the high-volume, low-complexity requests and route everything else to an agent with full context already gathered.",
              "Handled well, teams see response times fall while agent workload becomes more meaningful, not just smaller.",
            ],
          },
        ],
      },
      {
        name: "Workflow Automation",
        slug: "workflow-automation",
        heroImage: "/work2.png",
        about:
          "Orchestrated, monitored workflows that move work between people and systems automatically — with clear ownership at every step.",
        categories: ["Automation", "Operations", "Engineering"],
        regions: ["Workflow Automation", "Document Automation", "Customer Service Automation", "AI-powered Operations", "Notifications & SLAs", "Process Analytics"],
        bestMonths: [2, 6, 9, 12],
        articles: [
          {
            id: "ia3",
            title: "AI-Powered Operations: Combining Rules, Models, and People",
            excerpt: "The most effective automation is rarely fully autonomous.",
            image: "/think2.png",
            category: "Automation",
            date: "2026-03-13",
            author: "LOKA Automation Team",
            content: [
              "The strongest operational systems combine deterministic rules for the predictable path, models for judgement-heavy steps, and people for exceptions.",
              "Designing the handoffs between these three is where most of the value — and most of the difficulty — lies.",
              "We instrument each handoff so you can see exactly where work slows down and where confidence thresholds should move.",
            ],
          },
          {
            id: "ia4",
            title: "Process Analytics: You Cannot Automate What You Cannot See",
            excerpt: "Measuring cycle time and exception rates before you invest.",
            image: "/work2.png",
            category: "Data",
            date: "2026-01-30",
            author: "LOKA Automation Team",
            content: [
              "Teams routinely underestimate how long their processes take and how often they fail. Measurement almost always changes the priority list.",
              "We instrument the current process for a few weeks and use real data to select the automation candidates with the best return.",
              "That same instrumentation becomes the baseline you use to prove the value delivered.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Industries",
    slug: "industries",
    heroImage: "/hero1.png",
    introduction:
      "Every industry is becoming a technology company. We help organizations across logistics, aviation, government, healthcare, education, finance, retail, manufacturing, agriculture, hospitality, and professional services build the digital capability their sector now demands.",
    countries: [
      {
        name: "Logistics & Mobility",
        slug: "logistics-mobility",
        heroImage: "/logistic3.png",
        about:
          "Delivery, fleet, and mobility operators run on coordination. We build the tracking, dispatch, and optimization systems that make that coordination reliable at scale.",
        categories: ["Operations", "Engineering", "Data"],
        regions: ["Logistics & Transportation", "Aviation", "Fleet Operations", "Last-mile Delivery", "Route Optimization", "Real-time Tracking"],
        bestMonths: [1, 4, 6, 10],
        phrases: [
          { original: "Every Industry Is Digital", translation: "Our starting assumption", language: "LOKA" },
          { original: "Built In Africa", translation: "Where we work", language: "LOKA" },
          { original: "Global Standards", translation: "How we engineer", language: "LOKA" },
        ],
        articles: [
          {
            id: "in1",
            title: "What Modern Logistics Operators Need From Their Technology",
            excerpt: "Visibility, dispatch intelligence, and rider economics.",
            image: "/logistic3.png",
            category: "Operations",
            date: "2026-05-29",
            author: "LOKA Industry Team",
            content: [
              "Logistics margins are won and lost in coordination. Idle riders, poor routing, and failed deliveries all trace back to missing or delayed information.",
              "Real-time tracking, intelligent dispatch, and clear rider incentives address most of that gap without any change to the physical operation.",
              "The platforms that win are the ones that treat merchants, riders, and customers as three products, not one.",
            ],
          },
          {
            id: "in2",
            title: "Aviation and Airport Operations: Digitizing the Ground Experience",
            excerpt: "Ground transport, passenger services, and vendor coordination.",
            image: "/work1.png",
            category: "Engineering",
            date: "2026-02-17",
            author: "LOKA Industry Team",
            content: [
              "Airports are dense operational environments where dozens of independent parties must coordinate on a tight schedule.",
              "Digitizing ground transport, vendor dispatch, and passenger services produces immediate improvements in throughput and passenger satisfaction.",
              "We design these systems to integrate with existing airport infrastructure rather than replace it.",
            ],
          },
        ],
      },
      {
        name: "Public & Social Sector",
        slug: "public-social-sector",
        heroImage: "/hero2.png",
        about:
          "Government agencies, healthcare providers, and educational institutions serve everyone — which makes accessibility, reliability, and accountability non-negotiable design constraints.",
        categories: ["Governance", "Design", "Operations"],
        regions: ["Government", "Healthcare", "Education", "Citizen Services", "Public Health Data", "Digital Inclusion"],
        bestMonths: [3, 5, 9, 11],
        articles: [
          {
            id: "in3",
            title: "Designing Public Services for Every Level of Digital Literacy",
            excerpt: "Accessibility is the difference between a service and a barrier.",
            image: "/hero2.png",
            category: "Design",
            date: "2026-04-17",
            author: "LOKA Industry Team",
            content: [
              "A public service is only as good as its least confident user. Design decisions that inconvenience an expert can exclude a citizen entirely.",
              "We test with real users across literacy levels, device types, and network conditions before rollout.",
              "Plain language, forgiving forms, and offline fallbacks consistently outperform visually impressive interfaces.",
            ],
          },
          {
            id: "in4",
            title: "Education Technology That Works Outside the Capital City",
            excerpt: "Low bandwidth, shared devices, and intermittent power.",
            image: "/esecondary.png",
            category: "Operations",
            date: "2026-01-12",
            author: "LOKA Industry Team",
            content: [
              "Education platforms are frequently designed for conditions that only exist in a handful of urban schools.",
              "Building for shared devices, low bandwidth, and unreliable power expands reach far more than adding features does.",
              "Offline-capable content and lightweight synchronization are the two decisions that matter most.",
            ],
          },
        ],
      },
      {
        name: "Commerce & Finance",
        slug: "commerce-finance",
        heroImage: "/hero4.png",
        about:
          "Retailers, marketplaces, manufacturers, and financial institutions competing on speed, trust, and customer experience.",
        categories: ["Engineering", "Data", "Strategy"],
        regions: ["Financial Services", "Retail & Commerce", "Manufacturing", "Agriculture", "Hospitality", "Professional Services"],
        bestMonths: [2, 7, 8, 12],
        articles: [
          {
            id: "in5",
            title: "Digital Payments and Trust in Emerging Markets",
            excerpt: "Reliability, reconciliation, and transparent failure handling.",
            image: "/payraty.png",
            category: "Engineering",
            date: "2026-03-05",
            author: "LOKA Industry Team",
            content: [
              "In markets where payment failures are common, the differentiator is not the payment itself but how clearly and quickly failures are resolved.",
              "We build reconciliation, retry logic, and transparent status communication into every payment flow.",
              "Trust compounds: customers who have seen a failed payment resolved cleanly become the most loyal ones.",
            ],
          },
          {
            id: "in6",
            title: "Retail and Marketplace Platforms Built to Scale",
            excerpt: "Catalogue, inventory, and multi-vendor operations done properly.",
            image: "/logistic1.png",
            category: "Data",
            date: "2026-02-02",
            author: "LOKA Industry Team",
            content: [
              "Multi-vendor commerce introduces complexity in catalogue quality, inventory accuracy, settlement, and dispute handling.",
              "Getting the data model right early is what allows a marketplace to add vendors without adding operational headcount.",
              "We design for the second thousand vendors, not the first ten.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Who We Work With",
    slug: "who-we-work-with",
    heroImage: "/hero3.png",
    introduction:
      "LOKA partners with government agencies, startups, SMEs, enterprise organizations, NGOs, educational institutions, healthcare providers, and financial institutions across Africa. Different scale, same expectation: technology that produces measurable business results.",
    countries: [
      {
        name: "Startups & SMEs",
        slug: "startups-smes",
        heroImage: "/work4.png",
        about:
          "Founders and growing businesses need speed without the technical debt that makes the next stage expensive. We build lean, extendable foundations and stay involved as you scale.",
        categories: ["Strategy", "Design", "Engineering"],
        regions: ["Startups", "SMEs", "MVP Delivery", "Fractional CTO", "Investor-Ready Architecture", "Growth Engineering"],
        bestMonths: [1, 3, 6, 9],
        phrases: [
          { original: "Business First", translation: "How we think", language: "LOKA" },
          { original: "Long-Term Partnership", translation: "How we work", language: "LOKA" },
          { original: "Measurable Impact", translation: "How we are judged", language: "LOKA" },
        ],
        articles: [
          {
            id: "ww1",
            title: "Building an MVP That Does Not Become a Liability",
            excerpt: "Speed and maintainability are not opposites.",
            image: "/work4.png",
            category: "Strategy",
            date: "2026-05-07",
            author: "LOKA Product Team",
            content: [
              "The point of an MVP is to learn quickly. The mistake is treating that as permission to ignore architecture entirely.",
              "We keep the scope ruthlessly small but the foundations sound: clean data modelling, sane deployment, and a clear seam where the next feature will attach.",
              "Founders who do this reach their Series A without a rewrite standing between them and their roadmap.",
            ],
          },
        ],
      },
      {
        name: "Enterprise & Government",
        slug: "enterprise-government",
        heroImage: "/hero5.png",
        about:
          "Large organizations need partners who understand procurement, governance, and stakeholder complexity as well as they understand engineering.",
        categories: ["Governance", "Advisory", "Operations"],
        regions: ["Enterprise Organizations", "Government Agencies", "NGOs", "Educational Institutions", "Healthcare Providers", "Financial Institutions"],
        bestMonths: [2, 4, 8, 11],
        articles: [
          {
            id: "ww2",
            title: "What Enterprises Should Expect From a Technology Partner",
            excerpt: "Accountability after launch is the real differentiator.",
            image: "/hero5.png",
            category: "Advisory",
            date: "2026-04-24",
            author: "LOKA Strategy Team",
            content: [
              "Delivery is the easy part to contract for. Operating, improving, and supporting the system afterwards is where most partnerships break down.",
              "We commit to the post-launch phase explicitly: support levels, improvement cadence, and knowledge transfer to your internal team.",
              "A partner who stays is a partner whose incentives match yours.",
            ],
          },
        ],
      },
    ],
  },
];

export const featuredArticles: Article[] = [
  {
    id: "f1",
    title: "AI Strategy in 2026: From Experiments to Operating Capability",
    excerpt: "How African organizations are moving beyond pilots to AI that runs in production.",
    image: "/think1.png",
    category: "AI Strategy",
    date: "2026-07-15",
    author: "LOKA AI Practice",
    content: [
      "Two years of experimentation have taught most organizations what AI can do. The harder question now is how to operate it: who owns the models, how outputs are governed, and how value is measured.",
      "The organizations pulling ahead have treated AI as an operating capability rather than a project. They have a platform, a governance framework, and a prioritized pipeline of use cases tied to business metrics.",
      "That shift is unglamorous and decisive. It is the difference between an impressive demo and a permanent reduction in cost to serve.",
      "At LOKA we help clients make that transition deliberately: assess readiness, prove value on a narrow use case, then build the platform and governance that let the next ten use cases move faster.",
    ],
  },
  {
    id: "f2",
    title: "LOKA Logistics: Building an Intelligent Delivery Ecosystem",
    excerpt: "Inside the platform connecting merchants, riders, fleets, and customers in one system.",
    image: "/think2.png",
    category: "Products",
    date: "2026-06-30",
    author: "LOKA Product Team",
    content: [
      "LOKA Logistics began as a solution to a coordination problem: merchants, dispatch riders, fleet operators, and customers all working from different, incomplete pictures of the same delivery.",
      "The platform brings them into one ecosystem — a multi-vendor marketplace, rider and merchant applications, dispatch management, route optimization, and real-time tracking with digital payments underneath.",
      "It is deployed by businesses, marketplaces, logistics providers, airports, estates, and cities that need mobility and commerce to work together.",
      "Every operational decision generates data, and that data feeds route optimization, demand forecasting, and the analytics our clients use to run their networks profitably.",
    ],
  },
  {
    id: "f3",
    title: "Legacy Modernization: The Quiet Cost of Doing Nothing",
    excerpt: "Aging systems rarely fail dramatically. They fail slowly, in maintenance budgets and lost speed.",
    image: "/think3.png",
    category: "Digital Transformation",
    date: "2026-06-12",
    author: "LOKA Engineering",
    content: [
      "Legacy systems seldom collapse. They erode — each year a little more of the budget goes to keeping them alive and a little less to building what the business needs next.",
      "The cost shows up as delayed launches, integration workarounds, security exposure, and an inability to answer questions the data should easily support.",
      "Modernization does not have to be a rewrite. Incremental migration behind an API layer lets you retire the old system capability by capability, with the business running throughout.",
      "The right first question is not what the new platform should be, but which capability is costing you the most to keep where it is.",
    ],
  },
];

export const months = [
  "Strategy",
  "Discovery",
  "Design",
  "Architecture",
  "Build",
  "Integration",
  "Automation",
  "AI Enablement",
  "Cloud",
  "Security",
  "Launch",
  "Optimization",
];

export function getContinentBySlug(slug: string) {
  return continents.find(c => c.slug === slug);
}

export function getCountryBySlug(continentSlug: string, countrySlug: string) {
  const continent = getContinentBySlug(continentSlug);
  return continent?.countries.find(c => c.slug === countrySlug);
}

export function getArticleById(id: string): { article: Article; country?: Country; continent?: Continent } | undefined {
  // Check featured articles first
  const featured = featuredArticles.find(a => a.id === id);
  if (featured) return { article: featured };

  // Search through all service areas
  for (const continent of continents) {
    for (const country of continent.countries) {
      const article = country.articles.find(a => a.id === id);
      if (article) return { article, country, continent };
    }
  }
  return undefined;
}

export function getAllArticles(): Article[] {
  const articles: Article[] = [...featuredArticles];
  for (const continent of continents) {
    for (const country of continent.countries) {
      articles.push(...country.articles);
    }
  }
  return articles;
}
