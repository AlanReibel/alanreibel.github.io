export const useCvData = () => {
    const personalInfo = {
        name: "ALAN REIBEL PEREZ",
        title: "Fullstack Web Developer",
        location: "Pineda de Mar, Barcelona, Spain",
        phone: "+34 679 23 65 18",
        email: "reibeltel@gmail.com",
        github: "https://github.com/AlanReibel",
        linkedin: "https://linkedin.com/in/alan-reibel/",
        summary: "Fullstack Developer specialized in Vue3, Nuxt3, and Laravel. 12 years building high-performance, user-centric web applications with measurable business impact."
    };

    const experience = [
        {
            company: "HALL EDUCATIONAL TOOLS",
            role: "Tech Lead & CoFounder",
            techStack: ["Vue", "Nuxt", "Laravel"],
            period: "2021 - 2025",
            details: [
                "Built educational management platform as Tech Lead, defining MVP architecture and technical strategy",
                "Backend: Laravel REST APIs, Eloquent ORM, JWT auth, RBAC, real-time WebSockets notifications",
                "Frontend: Nuxt 3 + Vue 3 + TypeScript with SSR, Pinia state management, localStorage persistence",
                "Created management modules: student imports (XLS), staff, scheduling, course catalog, visual calendar",
                "Led architecture decisions, code reviews, PR management, and clean code standards enforcement",
                "Automated workflows with Artisan commands, migrations, seeders."
            ]
        },
        {
            company: "WILD BRANDERS",
            role: "Tech Lead - Fullstack",
            techStack: ["Vue", "React", "Next", "PHP", "Prestashop"],
            period: "2023 - 2024",
            details: [
                "Led the technical direction of 24segons.es, selecting technologies, managing code integration and deployment, and merging contributions from a 4-5 developer team, streamlining workflows and ensuring project alignment",
                "Engineered 5+ custom templates and modules for Prestashop using PHP, SQL, HTML, CSS, JavaScript, and TPL, enhancing site responsiveness and API integrations, leading to a 30% faster rendering time and a 25% improvement in user engagement.",
                "Contributed to the development and optimization of 24segons.es, an eCommerce platform generating over €5k in daily revenue, with peaks exceeding €30k during Black Friday weekends.",
                "Developed high-conversion landing pages with Vue and SASS, ensuring 100% responsiveness.",
                "Enhanced 3D animations and performance in a React, Next.js, and Three.js project, reducing load from 24s to 2s (91.7% improvement) and decreasing bounce rates by 15%."
            ],
            projects: ["24 Segons", "Anfora Global"]
        },
        {
            company: "NOVACASA EDITORIAL",
            role: "Fullstack",
            techStack: ["Prestashop"],
            period: "2022",
            details: [
                "Launched my first Prestashop module that automated shipping cost calculations, reducing manual input errors by 80% and cutting processing time by 50%.",
                "Modernized a mobile-friendly TPL template, boosting load speed by 50% and increasing mobile conversions by 18%.",
                "Revitalized site performance by 300%, optimizing key metrics like First Content Paint (FCP), Largest Content Paint (LCP), and Cumulative Layout Shift (CLS), leading to a 15% SEO boost and 20% growth in organic traffic."
            ],
            project: "Nova Casa Editorial"
        },
        {
            company: "COMMO IDEAS",
            role: "Fullstack Developer – SEO – Web Performance",
            period: "2020 – 2021",
            details: [
                "Revamped a responsive email template for the CASA SEAT campaign, ensuring 100% compatibility across major email clients, improving open rates by 25%.",
                "Implemented custom PHP functionalities for Suma Capital, enriching UX and improving navigation efficiency by 30%.",
                "Conducted UX and performance audits for Victoria Foods, identifying and resolving key bottlenecks that saved site speed by 35% and increased user retention by 20%."
            ],
            projects: ["Suma Capital", "Victoria Foods", "Otro Final es Posible"]
        },
        {
            company: "ETACTICA PROYECTOS DIGITALES",
            role: "LAMP DevOps - Fullstack - Inbound marketing (Mautic) - Helpdesk",
            period: "2019",
            details: [
                "Optimized 5+ Linux servers and databases in Google Cloud via SSH, reducing downtime by 90% and cutting maintenance costs by 40%.",
                "Prepared an event attendance web app using HTML5, CSS3, and JavaScript, facilitating 500+ attendees per event and reducing manual check-in time by 60%.",
                "Automated 80% of marketing processes by integrating Mautic API Rest, reducing campaign setup time by 50%.",
                "Redacted technical documentation, streamlining onboarding, reducing training time by 30%, and improving internal workflow efficiency."
            ]
        },
        {
            company: "FUJIFILM EUROPE GMBH SPAIN",
            role: "Fullstack - Marketing - Web Design",
            period: "2018 – 2019",
            details: [
                "Built interactive web sites using FreeMarker, JavaScript, increasing user engagement and session duration by 35%.",
                "Upgraded responsive layouts in HTML5 and CSS3, reducing mobile bounce rates by 20%.",
                "Proposed landing pages in Photoshop, improving conversion rates by 15% and generating 5,000+ leads monthly.",
                "Conducted SEO and performance evaluations, optimizing page speed and boosting organic traffic by 20%.",
                "Analyzed Google Analytics data, providing insights that enhanced marketing strategy and improved ad conversion rates by 12%."
            ],
            projects: ["My Fujifilm", "Fujifilm Shop"]
        },
        {
            company: "PUTPUT COMUNICACIONS",
            role: "Frontend developer",
            period: "2017",
            details: [
                "Composed of Liferay 6 web sites, ensuring integration, reducing errors and increasing efficiency for internal workflows.",
                "Integrated Google Maps, Street View, Facebook, and Twitter APIs, enhancing interactive features and engagement.",
                "Created animated landing pages using SVG and CSS3, increasing user retention by 30% and reducing exit rates by 18%.",
                "Produced technical reports and project documentation ensuring seamless knowledge transfer."
            ]
        },
        {
            company: "BCN3D TECHNOLOGIES",
            role: "Frontend Web Developer - Project Manager",
            period: "2015 - 2016",
            details: [
                "Built a custom eCommerce platform in WordPress with PHP, JavaScript, and MySQL, leading to a 20% sales increase and a 35% improvement in page load times.",
                "Designed custom page structures with HTML5 and CSS3, ensuring full responsiveness across mobile and tablet devices, reducing mobile drop-off rates by 22%.",
                "Implemented dynamic animations and effects, refining user engagement, increasing average session duration by 15%."
            ],
            project: "BCN3D Technologies"
        }
    ];

    const technologies = {
        AI: ["Claude Code", "Windsurf", "Agents", "Skills", "Workflows", "MCP integrations"],
        Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Vue.js", "Nuxt.js", "Astro", "React", "Next.js", "Three.js", "Web Components"],
        Backend: ["PHP", "Laravel", "SQL", "Node.js", "REST", "SOAP"],
        Quality: ["Vitest", "PHPUnit", "Code Reviews", "Clean Architecture"],
        DevOps: ["Docker", "Git (GitHub, GitLab)", "Linux Bash", "Apache", "nginx", "CI/CD"],
        Performance: ["Web Performance Optimization", "Core Web Vitals", "SEO (Technical_On-Page)"],
        Design: ["Figma", "Photoshop", "Adobe XD", "Sketch"],
        CMS: ["WordPress", "Prestashop"],
        Learning: ["PostgreSQL", "Kafka", "AWS S3", "TDD", "DDD", "FFB"]

    };

    const languages = [
        { name: "Spanish", level: "Native" },
        { name: "Catalan", level: "Native" },
        { name: "English", level: "Conversational (B2)" }
    ];

    const education = [
        "Certificate of Professionalism C2 in Web Development (HTML5, CSS3, JavaScript, PHP, MySQL)",
        "Higher Level Training Cycle in Computer and Telecommunication Systems"
    ];

    const softSkills = [
        "Problem Solving",
        "System Design Thinking",
        "Team Collaboration",
        "Continuous Learning",
        "Attention to Detail",
        "Self-Management",
        "Adaptability",
        "Ownership",
        "Critical Thinking",
        "Rapid Learning",
        "Code Quality Advocacy"
    ];

    return {
        personalInfo,
        experience,
        technologies,
        languages,
        education,
        softSkills
    };
};
