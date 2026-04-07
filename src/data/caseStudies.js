export const caseStudies = [
    {
        id: "pois-production-system",
        title: "Production Operations Intelligence System",
        subtitle: "Bespoke Fashion House System",
        role: "Systems Architect",
        year: "2025 — 2026",
        outcome: "End-to-End Production Visibility",
        roi: "Live Production System",
        image: "https://portfolio-site-2-ecru.vercel.app/Maison%20Dashboard.png",
        codeImage: "https://portfolio-site-2-ecru.vercel.app/Maison%20Production%20Page.png",
        description: "A fashion brand with a growing production operation was managing everything across spreadsheets and paper records. Tracking was manual, payments were calculated by hand and prone to disputes, and reports could break from a single wrong entry. There was no central place to see what was actually happening on the production floor.",
        challenge: {
            title: "The Problem",
            quote: "Everything was scattered, calculations were done manually, and there was no single place to track where any item stood. We needed structure before we could scale."
        },
        strategy: [
            {
                title: "Phase 1 - Step 1: Centralised the Data",
                description: "Replaced scattered sheets and paper records with a single structured Google Sheet. Introduced garment-level tracking using a unique key per item combining Ticket ID, Product Type, and Item Number, giving every garment a traceable identity for the first time."
            },
            {
                title: "Phase 1 - Step 2: Automated Payments and Summaries",
                description: "Built a centralised rate database and used Google Apps Script to automate payment calculations and weekly summaries. What previously took hours of manual work ran automatically with consistent, accurate outputs."
            },
            {
                title: "Phase 1 - Step 3: Designed Production Reports",
                description: "Designed real-time reports covering items produced per category, backlog status, and average production time by category. For the first time, management could see what was happening on the floor without chasing the data."
            },
            {
                title: "Phase 2 - Step 1: Identified the Ceiling",
                description: "The spreadsheet system worked but could not scale. There were no access controls, real-time collaboration was unreliable, and the logic had grown complex enough that it belonged in a proper system."
            },
            {
                title: "Phase 2 - Step 2: Translated Workflow into Software Architecture",
                description: "The production workflow, already broken down and validated in the spreadsheet phase, was redesigned as a structured software system. Additional logic was introduced covering role-based permissions, task assignment, QC verification, and payment processing."
            },
            {
                title: "Phase 2 - Step 3: Directed the Build",
                description: "Working as systems architect, the workflow and data model were translated into a full web application built on Next.js and Supabase. PostgreSQL handles structured data storage, Supabase Auth manages authentication, and Row Level Security enforces access control at the database level, ensuring each role only sees and does what they are permitted to."
            }
        ],
        execution: {
            title: "The Execution",
            description: "The system evolved in two deliberate phases, first proving the concept through structured spreadsheets and automation, then translating that validated workflow into a production-grade web application. The architecture was designed before a line of code was written.",
            image: "https://portfolio-site-2-ecru.vercel.app/Maison%20Account%20Page.png",
            caption: "Fig 1.1: Accounts and Payroll Module"
        },
        demoCallout: {
            url: "https://maison-production-intelligence-demo.vercel.app",
            note: "The system is live and available to explore. Log in with any of the accounts below to experience each role firsthand.",
            credentials: [
                { role: "Admin", email: "admin@demo.maison.com", password: "Demo@Maison2026", description: "Full access to all modules" },
                { role: "Production", email: "production@demo.maison.com", password: "Demo@Maison2026", description: "Create tickets and log items" },
                { role: "QC", email: "qc@demo.maison.com", password: "Demo@Maison2026", description: "Assign tasks and verify work" },
                { role: "Accounts", email: "accounts@demo.maison.com", password: "Demo@Maison2026", description: "Process payments and payroll" },
                { role: "Completion", email: "completion@demo.maison.com", password: "Demo@Maison2026", description: "Mark items as completed" }
            ]
        },
        results: {
            stats: [
                { value: "80%", label: "Less Reconciliation" },
                { value: "100%", label: "Traceable Payments" },
                { value: "Live", label: "Production System" }
            ],
            testimonial: {
                quote: "We went from chasing payments in spreadsheets to having a live system where every garment, every tailor, and every payment is tracked in real time.",
                author: "Production Manager"
            }
        }
    },
    
    {
        id: "2929-clothing",
        title: "2929 Clothing",
        subtitle: "Digital Retail Infrastructure for a Streetwear Brand",
        role: "Digital Systems Consultant",
        year: "2025",
        outcome: "Market-Ready eCommerce Operation",
        roi: "Live Store",
        image: "https://portfolio-site-2-ecru.vercel.app/2929%20Homepage.png",
        description: "A streetwear brand targeting international markets needed a full ecommerce operation built from the ground up. The brief was clear — the store had to look and feel custom, be easy for a non-technical team to manage, and have all the operational systems in place to run a real retail business from launch day.",
        challenge: {
            title: "The Problem",
            quote: "The brand had a strong identity and product range but no digital infrastructure. The goal was a store that looked custom-built, could be managed without a developer on call, and was wired for international retail from the start."
        },
        strategy: [
            {
                title: "Custom Frontend on WordPress",
                description: "The frontend was written from scratch inside WordPress, giving the brand full design control with no template constraints. WordPress handles content management and ecommerce through WooCommerce on the backend — combining the feel of a custom-built site with the maintainability of the most widely used CMS on the internet, powering over 43% of all websites globally."
            },
            {
                title: "Built for International Retail",
                description: "The store was structured for a global customer base with the UK as the primary launch market. Navigation, product categories, and policy pages were all set up with that customer in mind. Products are priced in GBP, with a clean category architecture for Men and Women covering Hoodies, T-Shirts, Tracksuits, and Bags."
            },
            {
                title: "Email Marketing with Klaviyo",
                description: "Klaviyo was connected directly to WooCommerce. Automated welcome sequences and abandoned cart flows were configured before launch, so the brand was capturing and converting from day one rather than retrofitting email marketing after going live."
            },
            {
                title: "Location-Based Payment Configuration",
                description: "Payment methods were configured dynamically based on the customer's location, presenting the most relevant checkout options for each market. This reduces friction at the most critical point in the funnel and ensures the checkout experience matches what each market expects."
            },
            {
                title: "SMS Order Notifications",
                description: "SMS notification flows were set up for order confirmations and shipping updates, keeping customers informed automatically at every stage without any manual intervention."
            },
            {
                title: "Analytics and Tracking Foundation",
                description: "Google Analytics and Meta Pixel were installed and configured correctly before launch. The brand went live with full visibility into where traffic was coming from and how customers were behaving, not guessing after the fact."
            }
        ],
        execution: {
            title: "The Execution",
            description: "Every system was treated as part of the retail operation, not an optional extra. The store launched with the infrastructure of an established brand, not a startup figuring things out after going live.",
            image: "https://portfolio-site-2-ecru.vercel.app/2929%20Homepage.png",
            caption: "Fig 1.1: 2929 Clothing Homepage"
        },
        demoCallout: {
            url: "https://29twentynineclothing.com",
            note: "The store is live. Visit it to see the custom frontend, product structure, and checkout experience firsthand.",
            credentials: []
        },
        results: {
            stats: [
                { value: "6", label: "Integrated Systems" },
                { value: "GBP", label: "Market-Aligned Pricing" },
                { value: "Live", label: "Operational Store" }
            ],
            testimonial: {
                quote: "We launched with everything in place. The store looked exactly how we wanted it, and the backend was simple enough for us to manage ourselves.",
                author: "Brand Founder"
            }
        }
    }
];
