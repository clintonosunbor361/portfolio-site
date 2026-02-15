export const caseStudies = [
    {
        id: "pois-production-system",
        title: "Production Operations Intelligence System",
        subtitle: "Bespoke Fashion House System",
        role: "Systems Architect",
        year: "2024",
        outcome: "70-80% Less Reconciliation",
        roi: "Reduced Disputes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVftbrmzVif69fTyZsHSifgicK2NE3IEOZKLCTe7KRPeWahxh4_p-PfCDC1WyN6XrOXkjUQMvuZg5pdEsGloQIHvDjkrQKEe87-2NKa-WOaih8OD_UZs3vObcSjmpvU_bLHdB-war0nKrpy5V8yUCyL-VyEfpSMp86MF3G2v5EtSJMMOJ4wFx2p-bzEzjf3N_TEbItAdNffpjCXDbmlUjm_DcPZyT3JkiZPOzSzZLzPdOaskXfwMfrAxEXiCP15tCEcuyWzqAr30Bs", // Keeping existing image for layout
        codeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBItKeI7SnUm6PdASYU4GVo5A_TAxIGgS9AWAZ42UvWFYp61UOVDNpQZGR_3ZgP6Nrl5WELqNxGOVJqFSsjSmrt2Qr4f3hS0kQANWvFhc1Yfk23-AF9nIOukt75phSc1ggB2-y6Vg3TDI_L-l1iChy-m8HpXlE61130INO6yoaUQ-9POEgQeX_ES7TSyagopaCeldCgsTaanbXNyEq1xdi2mu8waLkdJ9h3C5H1dXDjdErLKCUWVcV20XGilxSKl3dLBuCoxIc7rER",
        description: "As the fashion house grew, production data became scattered across multiple spreadsheets. Production intake, task tracking, quality checks, and payment calculations were loosely connected. This made it difficult for management to clearly see how many garments were completed, who completed what, and whether payments were calculated correctly. Decisions were increasingly based on assumptions instead of structured data.",
        challenge: {
            title: "The Problem",
            quote: "Inconsistent payments, no garment-level tracking, misleading reports based on intake dates, and heavy manual reconciliation were costing us time and trust."
        },
        strategy: [
            {
                title: "1. Structured the Workflow",
                description: "Separated operations into clear layers: Production Intake, QC Validation, Payment Rate Engine, and Automated Reporting. This removed overlap and created clean data relationships."
            },
            {
                title: "2. Introduced Garment-Level Tracking",
                description: "Created a unique key for every garment (Ticket ID | Product Type | Item Number). This allowed accurate tracking per garment, clear performance measurement, and reliable payment calculations."
            },
            {
                title: "3. Automated Payment Calculations",
                description: "Built a centralized rate database. Payments were automatically calculated based on Garment type, Category, and Task completed. This eliminated manual rate referencing and reduced disputes."
            },
            {
                title: "4. Fixed Production Reporting Logic",
                description: "Redesigned reports so output depended on completion date, not intake date. This aligned performance reports with operational reality."
            },
            {
                title: "5. Automated Production Summaries",
                description: "Using Google Apps Script, I aggregated production intake and QC data, applied dynamic date filters, and generated automated production summaries. Manual reconciliation was largely removed."
            },
            {
                title: "6. Executive Dashboard Visualization",
                description: "Connected the structured production data to Looker Studio dashboards to visualize Weekly production output, Tailor-level performance, and Category workload distribution."
            }
        ],
        execution: {
            title: "The Execution",
            description: "I designed and implemented a structured production and compensation system that replaced fragmented tracking with a clear, rule-based framework. Tools used included Google Sheets (Structured Data System), Google Apps Script (Automation & Reporting Engine), and Looker Studio.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvgYY05vdGxc64sMYnRwLNWGYTANhunSZtQaG1ARVF0Ljc-_V-meJM7T6ZC4wlbsFBf_fPjzbTsPXZqO9jKFHO9X8-Tkt0p6QJvDCAb1_bvHHGe6VKFymSrB3Vz3EpsCX6IQ1s-Ly5XBaCivZgRFxnnz2NbsPciwf6OenAopKvW4E6RzcaIqt-vM1Zs5neysqWsJ9tJ2BxYJb2ri6BupsB9Ry_via5Ced_pNAsA2PNoo6S43qL9RP3hp-Gw4oC4WVapINI783vZ0N2",
            caption: "Fig 1.1: Production Data Flow"
        },
        results: {
            stats: [
                { value: "80%", label: "Less Reconciliation" },
                { value: "100%", label: "Traceable Payments" },
                { value: "Live", label: "Visibility" }
            ],
            testimonial: {
                quote: "Decisions are no longer based on assumptions. We have a clear, structured framework for our entire production line.",
                author: "Operations Director"
            }
        }
    }
];
