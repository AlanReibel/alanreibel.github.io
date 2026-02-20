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

    const techIcons = [
        {
            name: 'Vue.js', color: '#42b883',
            svg: '<path d="M2 3h3l7 12L19 3h3L12 21z" fill="currentColor" opacity=".3"/><path d="M8 3l4 7 4-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>'
        },
        {
            name: 'Nuxt', color: '#00dc82',
            svg: '<path d="M1 20L9 4l8 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M15 20l4-8 4 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
        },
        {
            name: 'JavaScript', color: '#f7df1e',
            svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">JS</text>'
        },
        {
            name: 'TypeScript', color: '#3178c6',
            svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">TS</text>'
        },
        {
            name: 'HTML5', color: '#e34f26',
            svg: '<path d="M4 2l1.5 17L12 22l6.5-3L20 2z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">5</text>'
        },
        {
            name: 'CSS3', color: '#264de4',
            svg: '<path d="M4 2l1.5 17L12 22l6.5-3L20 2z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">3</text>'
        },
        {
            name: 'React', color: '#61dafb',
            svg: '<ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(-60 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'
        },
        {
            name: 'PHP', color: '#777bb4',
            svg: '<ellipse cx="12" cy="12" rx="11" ry="7" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><text x="12" y="15" text-anchor="middle" font-size="7.5" font-weight="800" font-family="Arial,sans-serif" fill="currentColor">php</text>'
        },
        {
            name: 'Laravel', color: '#ff2d20',
            svg: '<path d="M7 4l3 5-2 2 3 4 5-6 2 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11v6c0 2 2 3 4 3h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        {
            name: 'Node.js', color: '#339933',
            svg: '<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">N</text>'
        },
        {
            name: 'Docker', color: '#2496ed',
            svg: '<path d="M21 11c1.5 0 2.5 1.5 2 3.5-1 3.5-5 6.5-11 6.5S1 18 1 14.5c0-2 1-3.5 3-3.5h17z" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 11V8m3 3V8m3 3V8m-3-3V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
        },
        {
            name: 'Git', color: '#f05032',
            svg: '<circle cx="6" cy="5" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="5" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="19" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><path d="M6 7.5v3c0 3 2 5 6 6m6-9v3c0 3-2 5-6 6" fill="none" stroke="currentColor" stroke-width="1.5"/>'
        },
        {
            name: 'Figma', color: '#a259ff',
            svg: '<rect x="5" y="1" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="12" y="1" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="5" y="8" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><circle cx="15.5" cy="11.5" r="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="5" y="15" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/>'
        },
        {
            name: 'Linux', color: '#fcc624',
            svg: '<rect x="2" y="3" width="20" height="18" rx="3" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><path d="M7 14l3-3-3-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 14h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
        },
        {
            name: 'Astro', color: '#bc52ee',
            svg: '<path d="M12 2l6 18c-2-2-4-3-6-3s-4 1-6 3z" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><circle cx="12" cy="14" r="2" fill="currentColor"/>'
        },
        {
            name: 'Next.js', color: '#e0e0e0',
            svg: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><path d="M9 7v10M9 7l7 10V7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        {
            name: 'Three.js', color: '#e0e0e0',
            svg: '<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M12 12l9-5M12 12v10M12 12L3 7" fill="none" stroke="currentColor" stroke-width="1.2"/>'
        },
        {
            name: 'Vite', color: '#a855f7',
            svg: '<path d="M2 4l10 18L22 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3l-3 8h5l-4 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        {
            name: 'npm', color: '#cb3837',
            svg: '<rect x="1" y="5" width="22" height="14" rx="2" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">npm</text>'
        },
        {
            name: 'Pinia', color: '#ffd859',
            svg: '<ellipse cx="12" cy="14" rx="5.5" ry="7.5" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.3"/><path d="M9 4c1-3 5-3 6 0M10 2.5c.5-1.5 3.5-1.5 4 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>'
        },
        {
            name: 'WordPress', color: '#21759b',
            svg: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" font-family="serif" fill="currentColor">W</text>'
        },
        {
            name: 'Photoshop', color: '#31a8ff',
            svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">Ps</text>'
        },
        {
            name: 'jQuery', color: '#0769ad',
            svg: '<text x="12" y="16" text-anchor="middle" font-size="8" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">jQ</text><path d="M5 18c4 3 10 3 14-1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
        },
    ];

    const services = [
        {
            title: "Desarrollo Web",
            description: "Sitios web modernos, responsivos y optimizados. Desde landing pages hasta plataformas complejas con tecnologías actuales.",
            icon: "🌐"
        },
        {
            title: "Desarrollo de Aplicaciones",
            description: "Aplicaciones web y móviles escalables. Full Stack con arquitecturas limpias y código mantenible.",
            icon: "📱"
        },
        {
            title: "Integraciones CRM/ERP",
            description: "Conecta tus sistemas: Salesforce, HubSpot, SAP, NetSuite. Automatiza flujos de datos entre plataformas.",
            icon: "🔗"
        },
        {
            title: "Automatización con IA",
            description: "Implementa agentes IA, workflows inteligentes y herramientas que automatizan procesos complejos.",
            icon: "🤖"
        },
        {
            title: "Mantenimiento y Soporte",
            description: "Soporte técnico continuo, actualizaciones, parches de seguridad y monitoreo proactivo de sistemas.",
            icon: "🔧"
        },
        {
            title: "Asesoramiento Técnico",
            description: "Consultoría en arquitectura de software, mejora de procesos y selección de tecnologías.",
            icon: "💡"
        },
        {
            title: "Mentoría y Capacitación",
            description: "Forma tu equipo en mejores prácticas, nuevas tecnologías y estándares de desarrollo profesional.",
            icon: "👨‍🏫"
        },
        {
            title: "Automatización de Procesos",
            description: "Scripts, bots y workflows que reducen tareas manuales. Integración con APIs y herramientas externas.",
            icon: "⚙️"
        },
        {
            title: "Auditoría de Código",
            description: "Análisis profundo de tu código, desempeño y seguridad. Recomendaciones de mejora y refactoring.",
            icon: "🔍"
        },
        {
            title: "Optimización de Rendimiento",
            description: "Mejora de Core Web Vitals, SEO técnico, velocidad de carga y experiencia de usuario.",
            icon: "⚡"
        },
        {
            title: "Migrations y Refactoring",
            description: "Migración entre tecnologías, modernización de código legacy y actualización de arquitecturas.",
            icon: "🔄"
        },
        {
            title: "eCommerce Solutions",
            description: "Plataformas de venta en línea con carrito, pagos, inventario y análisis de ventas.",
            icon: "🛒"
        }
    ];

    return {
        personalInfo,
        experience,
        technologies,
        languages,
        education,
        softSkills,
        techIcons,
        services
    };
};
