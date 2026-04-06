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
        description: "A fast-growing fashion house was managing production across scattered spreadsheets. Intake, task tracking, quality checks, and payment calculations were loosely connected and prone to errors. Payments were disputed weekly, reports were misleading, and management had no clear view of what was actually happening on the production floor.",
        challenge: {
            title: "The Problem",
            quote: "We had no way to track individual garments, payments were disputed every week, and reports were based on when items came in, not when they were actually finished."
        },
        strategy: [
            {
                title: "Phase 1 - Step 1: Structured the Data",
                description: "Replaced scattered spreadsheets with a structured Google Sheets system. Introduced garment-level tracking using a unique key per item combining Ticket ID, Product Type, and Item Number."
            },
            {
                title: "Phase 1 - Step 2: Automated the Calculations",
                description: "Built a centralized rate database and used Google Apps Script to automate payment calculations and production summaries, removing manual reconciliation entirely."
            },
            {
                title: "Phase 1 - Step 3: Fixed Reporting Logic",
                description: "Redesigned reports so output was based on completion date, not intake date, aligning performance data with operational reality for the first time."
            },
            {
                title: "Phase 2 - Step 1: Identified the Ceiling",
                description: "The spreadsheet system worked but could not scale. There were no access controls, no real-time visibility, and no audit trail. A proper software system was needed."
            },
            {
                title: "Phase 2 - Step 2: Built the ERP",
                description: "Designed and directed the development of a full web application using Next.js and Supabase. Implemented role-based access control across five roles: Admin, Production, QC, Accounts, and Completion."
            },
            {
                title: "Phase 2 - Step 3: Production-Grade Architecture",
                description: "Built with a band-based payment engine, garment-level work assignment tracking, and automated payroll calculation across all tailors, replacing every manual process from Phase 1."
            }
        ],
        execution: {
            title: "The Execution",
            description: "The system evolved in two deliberate phases, first proving the concept with structured spreadsheets and automation, then designing and directing the build of a production-grade web application when the operation outgrew what spreadsheets could support.",
            image: "https://portfolio-site-2-ecru.vercel.app/Maison%20Account%20Page.png",
            caption: "Fig 1.1: Accounts and Payroll Module"
        },
        results: {
            stats: [
                { value: "80%", label: "Less Reconciliation" },
                { value: "100%", label: "Traceable Payments" },
                { value: "Live", label: "Production System" }
            ],
            testimonial: {
                quote: "We went from chasing payments in spreadsheets to having a live system where every garment, every tailor, and every payment is tracked in real time.",
                author: "Operations Director"
            }
        }
    }
];
