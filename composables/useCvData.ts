export const useCvData = () => {
    const { t } = useI18n();

    const personalInfo = {
        name: "ALAN REIBEL PEREZ",
        title: 'hero.title',
        location: 'hero.location',
        phone: "+34 679 23 65 18",
        email: "reibeltel@gmail.com",
        github: "https://github.com/AlanReibel",
        linkedin: "https://linkedin.com/in/alan-reibel/",
        summary: 'hero.description'
    };

    const experience = [
        {
            id: 'hall',
            company: "HALL EDUCATIONAL TOOLS",
            techStack: ["Vue", "Nuxt", "Laravel"],
            period: "2021 - 2025"
        },
        {
            id: 'wild',
            company: "WILD BRANDERS",
            techStack: ["Vue", "React", "Next", "PHP", "Prestashop"],
            period: "2023 - 2024",
            projects: ["24 Segons", "Anfora Global"]
        },
        {
            id: 'novacasa',
            company: "NOVACASA EDITORIAL",
            techStack: ["Prestashop"],
            period: "2022",
            project: "Nova Casa Editorial"
        },
        {
            id: 'commo',
            company: "COMMO IDEAS",
            period: "2020 – 2021",
            projects: ["Suma Capital", "Victoria Foods", "Otro Final es Posible"]
        },
        {
            id: 'etactica',
            company: "ETACTICA PROYECTOS DIGITALES",
            period: "2019"
        },
        {
            id: 'fujifilm',
            company: "FUJIFILM EUROPE GMBH SPAIN",
            period: "2018 – 2019",
            projects: ["My Fujifilm", "Fujifilm Shop"]
        },
        {
            id: 'putput',
            company: "PUTPUT COMUNICACIONS",
            period: "2017"
        },
        {
            id: 'bcn3d',
            company: "BCN3D TECHNOLOGIES",
            period: "2015 - 2016",
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
        { name: 'languages.en', level: "Full Professional" },
        { name: 'languages.es', level: "Native" },
        { name: 'languages.ca', level: "Native" },
    ];

    const education = [
        'education.certificate',
        'education.degree'
    ];

    const softSkillsKeys = [
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
        { id: 'web', icon: "🌐" },
        { id: 'apps', icon: "📱" },
        { id: 'crm', icon: "🔗" },
        { id: 'ai', icon: "🤖" },
        { id: 'support', icon: "🔧" },
        { id: 'consulting', icon: "💡" },
        { id: 'mentoring', icon: "👨‍🏫" },
        { id: 'auto', icon: "⚙️" },
        { id: 'audit', icon: "🔍" },
        { id: 'performance', icon: "⚡" },
        { id: 'refactoring', icon: "🔄" },
        { id: 'ecommerce', icon: "🛒" }
    ];

    return {
        personalInfo,
        experience,
        technologies,
        languages,
        education,
        softSkillsKeys,
        techIcons,
        services
    };
};
