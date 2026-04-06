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
                title: "Phase 1: Centralised the Data",
                description: "Replaced scattered sheets and paper records with a single structured Google Sheet. Introduced garment-level tracking using a unique key per item combining Ticket ID, Product Type, and Item Number, giving every garment a traceable identity for the first time."
            },
            {
                title: "Phase 1: Automated Payments and Summaries",
                description: "Built a centralised rate database and used Google Apps Script to automate payment calculations and weekly summaries. What previously took hours of manual work ran automatically with consistent, accurate outputs."
            },
            {
                title: "Phase 1: Designed Production Reports",
                description: "Designed real-time reports covering items produced per category, backlog status, and average production time by category. For the first time, management could see what was happening on the floor without chasing the data."
            },
            {
                title: "Phase 2: Identified the Ceiling",
                description: "The spreadsheet system worked but could not scale. There were no access controls, real-time collaboration was unreliable, and the logic had grown complex enough that it belonged in a proper system."
            },
            {
                title: "Phase 2: Translated Workflow into Software Architecture",
                description: "The production workflow, already broken down and validated in the spreadsheet phase, was redesigned as a structured software system. Additional logic was introduced covering role-based permissions, task assignment, QC verification, and payment processing."
            },
            {
                title: "Phase 2: Directed the Build",
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
    }
];
