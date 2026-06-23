// Portfolio Data - Centralized data for all components

// ============================================
// CONSTANTS - Reusable Data
// ============================================

// Personal Information
export const PERSONAL_INFO = {
  name: "Gavi Prasad",
  email: "gaviprasadsiddu@gmail.com",
  location: "Hyderabad, Telangana",
};

// Brand/Company Names
const BRAND_INFO = {
  company: "Salesforce",
  framework: "Salesforce",
  frameworkLowercase: "salesforce",
};

// Social Media URLs
export const SOCIAL_URLS = {
  github: "https://github.com/gaviprasad",
  linkedin: "https://www.linkedin.com/in/gavi-prasad-b5a203225",
  twitter: "https://x.com/gaviprasadsiddu",
  facebook: "https://www.facebook.com/gaviprasadsiddu9/",
  instagram: "https://instagram.com/gaviprasadsiddu/",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=gaviprasadsiddu@gmail.com",
};

// Common Colors (for skills/UI)
const COLORS = {
  white: "#FFFFFF",
  cyan: "#38B2AC",
  blue: "#61DAFB",
  darkBlue: "#3178C6",
  green: "#339933",
  darkGreen: "#47A248",
  purple: "#764ABC",
  orange: "#FF9900",
  red: "#E34F26",
  lightBlue: "#1572B6",
  yellow: "#FCC624",
  pink: "#F24E1E",
  gray: "#9CA3AF",
  amber: "#F59E0B",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  git: "#F05032",
  vscode: "#007ACC",
  jest: "#C21325",
  webpack: "#8DD6F9",
  firebase: "#FFCA28",
  vite: "#646CFF",
  graphql: "#E10098",
  restapi: "#FF6C37",
  python: "#3776AB",
  postgresql: "#336791",
  nodejs: "#339933",
  mongodb: "#47A248",
  nextjs: "#FFFFFF",
  typescript: "#3178C6",
  tailwind: "#38B2AC",
  html: "#E34F26",
  css: "#1572B6",
  react: "#61DAFB",
  aws: "#FF9900",
  cicd: "#FFFFFF",
  linux: "#FCC624",
  figma: "#F24E1E",
  vercel: "#FFFFFF",
};

const experience = 2;
// Hero Section Data
export const heroData = {
  name: PERSONAL_INFO.name,
  roles: [
    "Salesforce Developer & Cloud Specialist",
    "Full-Stack Web Developer",
    "MERN Stack & Spring Boot Developer",
  ],
  description: `Passionate developer crafting scalable, secure systems 🚀 | ${BRAND_INFO.framework} (Apex, LWC, Data Cloud, Agentforce) 🔧 | Spring Boot + MERN | Splunk + Grafana observability | MCP-powered workflows 💻✨`,
  resumeUrl:
    "https://drive.google.com/file/d/1_a6sPTbj4PYwcG23gAA_FYRywEF40PxZ/view?usp=sharing",
  projectsUrl: "#projects",
  stats: [
    { label: "Projects", value: "15+", iconName: "Rocket" },
    { label: "Experience", value: experience + " years+", iconName: "Zap" },
    { label: "Technologies", value: "15+", iconName: "Terminal" },
  ],
  codeWindow: {
    filename: "developer.js",
    title: "Full-Stack Developer | Salesforce Developer",
    skills: [
      "Java",
      "JavaScript",
      "Python",
      "Apex",
      "LWC",
      "SOQL/SOSL",
      "Salesforce APIs",
      "React",
      "Spring Boot",
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "Docker",
      "Jenkins",
      "Git",
      "Splunk",
      "Grafana",
      "MCP Servers",
      "Agentic Workflows",
    ],
    // passion: "Building amazing things",
    available: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: experience + " years+",
    terminalText: "$ Ready to collaborate",
  },
  floatingBadges: [
    { text: "Code", color: "green", position: "top-left" },
    { text: "Fast Learner", iconName: "Zap", position: "bottom-right" },
  ],
};

// Skills Section Data
export const skillsData = {
  categories: [
    {
      iconName: "Code2",
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "HTML5", iconName: "BsFileEarmarkCode", color: "text-[#E34F26]" },
        { name: "CSS3", iconName: "BsFileEarmarkCode", color: "text-[#1572B6]" },
        { name: "React", iconName: "FaReact", color: "text-[#61DAFB]" },
        { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "text-[#38B2AC]" },
        { name: "TypeScript", iconName: "SiTypescript", color: "text-[#3178C6]" },
        { name: "Zustand", iconName: "BsGrid1X2", color: "text-[#F59E0B]" },
      ],
    },
    {
      iconName: "Database",
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Java", iconName: "FaJava", color: "text-[#3776AB]" },
        { name: "Spring Boot", iconName: "FaJava", color: "text-[#3776AB]" },
        { name: "Node.js", iconName: "FaNodeJs", color: "text-[#339933]" },
        { name: "Python", iconName: "FaPython", color: "text-[#3776AB]" },
        { name: "Flask", iconName: "FaPython", color: "text-[#3776AB]" },
        { name: "MySQL", iconName: "FaDatabase", color: "text-[#336791]" },
        { name: "MongoDB", iconName: "SiMongodb", color: "text-[#47A248]" },
        { name: "PostgreSQL", iconName: "FaDatabase", color: "text-[#336791]" },
        { name: "Redis", iconName: "FaDatabase", color: "text-[#D82C20]" },
        { name: "REST APIs", iconName: "BsGrid1X2", color: "text-[#FF6C37]" },
        { name: "GraphQL", iconName: "SiGraphql", color: "text-[#E10098]" },
      ],
    },
    {
      iconName: "Cloud",
      title: "Salesforce Ecosystem",
      color: "text-cyan-400",
      skills: [
        { name: "Apex", iconName: "FaSalesforce", color: "text-[#00A1E0]" },
        { name: "Apex Triggers", iconName: "FaSalesforce", color: "text-[#00A1E0]" },
        { name: "LWC", iconName: "FaSalesforce", color: "text-[#00A1E0]" },
        { name: "Visualforce", iconName: "FaSalesforce", color: "text-[#00A1E0]" },
        { name: "SOQL / SOSL", iconName: "FaDatabase", color: "text-[#00A1E0]" },
        { name: "Salesforce APIs", iconName: "BsGrid1X2", color: "text-[#00A1E0]" },
        { name: "Data Cloud", iconName: "FaSalesforce", color: "text-[#00A1E0]" },
        { name: "Agentforce", iconName: "FaSalesforce", color: "text-[#00A1E0]" },
        { name: "Salesforce Flows", iconName: "FcWorkflow", color: "" },
      ],
    },
    {
      iconName: "Cpu",
      title: "AI / Agentic Development",
      color: "text-fuchsia-400",
      skills: [
        { name: "MCP Servers", iconName: "Cpu", color: "text-[#A855F7]" },
        { name: "Agentic Workflows", iconName: "FcWorkflow", color: "" },
        { name: "AI-Assisted Code Review", iconName: "BsGrid1X2", color: "text-[#A855F7]" },
        { name: "Prompt Engineering", iconName: "BsGrid1X2", color: "text-[#A855F7]" },
        { name: "RAG Patterns", iconName: "FaDatabase", color: "text-[#A855F7]" },
        { name: "Intelligent Automation", iconName: "FcWorkflow", color: "" },
      ],
    },
    {
      iconName: "Database",
      title: "Monitoring & Observability",
      color: "text-emerald-400",
      skills: [
        { name: "Splunk", iconName: "FaDatabase", color: "text-[#65A637]" },
        { name: "Grafana", iconName: "FaDatabase", color: "text-[#F46800]" },
        { name: "Gadget", iconName: "FcWorkflow", color: "" },
        { name: "Tableau", iconName: "BsGrid1X2", color: "text-[#E97627]" },
        { name: "Log Analysis", iconName: "BsFileEarmarkCode", color: "text-[#10B981]" },
        { name: "Anomaly Detection", iconName: "BsGrid1X2", color: "text-[#10B981]" },
        { name: "Alerting & Dashboards", iconName: "BsGrid1X2", color: "text-[#10B981]" },
        { name: "SRE Practices", iconName: "BsGrid1X2", color: "text-[#10B981]" },
      ],
    },
    {
      iconName: "Layout",
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", iconName: "FaFigma", color: "text-[#F24E1E]" },
        {
          name: "Responsive Design",
          iconName: "Layout",
          color: "text-[#38B2AC]",
        },
        { name: "Wireframing", iconName: "BsGrid1X2", color: "text-[#9CA3AF]" },
        {
          name: "Prototyping",
          iconName: "MdAnimation",
          color: "text-[#F59E0B]",
        },
      ],
    },
    {
      iconName: "Cloud",
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        {
          name: "Salesforce",
          iconName: "FaSalesforce",
          color: "text-[#FCC624]",
        },
        { name: "AWS", iconName: "FaAws", color: "text-[#FF9900]" },
        { name: "Docker", iconName: "FaDocker", color: "text-[#2496ED]" },
        { name: "CI/CD", iconName: "FcWorkflow", color: "" },
        { name: "Kubernetes", iconName: "BsGrid1X2", color: "text-[#326CE5]" },
        { name: "Jenkins", iconName: "FaJenkins", color: "text-[#FCC624]" },
        { name: "Nginx", iconName: "BsGrid1X2", color: "text-[#009639]" },
        { name: "Git", iconName: "FaGitAlt", color: "text-[#F05032]" },
        { name: "GitOps", iconName: "FaGitAlt", color: "text-[#F05032]" },
        { name: "Linux", iconName: "FaLinux", color: "text-[#FCC624]" },
      ],
    },
    {
      iconName: "Cpu",
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", iconName: "TbBrandVscode", color: "text-[#007ACC]" },
        { name: "Webpack", iconName: "SiWebpack", color: "text-[#8DD6F9]" },
        { name: "Redux", iconName: "SiRedux", color: "text-[#764ABC]" },
        { name: "Firebase", iconName: "SiFirebase", color: "text-[#FFCA28]" },
        { name: "Vercel", iconName: "SiVercel", color: "text-white" },
        { name: "Vite", iconName: "SiVite", color: "text-[#646CFF]" },
        { name: "Jira", iconName: "FaJira", color: "text-[#646CFF]" },
        { name: "Postman", iconName: "BsGrid1X2", color: "text-[#FF6C37]" },
        { name: "Slack Automations", iconName: "BsGrid1X2", color: "text-[#4A154B]" },
      ],
    },
    {
      iconName: "Paintbrush",
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "UI Animation",
          iconName: "MdAnimation",
          color: "text-[#FF4081]",
        },
        {
          name: "SVG Animation",
          iconName: "MdAnimation",
          color: "text-[#00C853]",
        },
        { name: "3D Modeling", iconName: "Cpu", color: "text-[#7C4DFF]" },
        {
          name: "Photo and video Editing",
          iconName: "MdAnimation",
          color: "text-[#FF6D00]",
        },
      ],
    },
  ],
};

// Experience Section Data
export const experienceData = [
  {
    title: "Associate Proactive Monitoring Engineer",
    company: "Salesforce",
    period: "Aug 2024 - Present",
    description:
      "Engineering internal Chrome extensions and automation utilities by integrating React.js, Zustand, and JavaScript with Apex, Salesforce APIs, SOQL, and SOSL — productionizing custom Apex Triggers that automate complex cross-org operations and convert manual monitoring tasks into scalable, code-driven workflows with strong data-consistency guarantees. Architected enterprise-grade observability using Splunk for deep-dive log analysis and Grafana for real-time metrics dashboards and alerting — proactively detecting anomalies, reducing mean-time-to-detect (MTTD), and measurably improving org reliability. Developed predictive monitoring solutions with Gadget, Splunk, and Grafana that alert key customers to potential service disruptions before business impact occurs, shifting reliability work decisively left. Built Slack workflow automations to streamline cross-functional communication and incident handoffs, and designed interactive Tableau dashboards unifying multiple data sources to deliver real-time insights and data-driven decision-making. Integrated MCP-powered (Model Context Protocol) agentic workflows and modern AI tooling into engineering, code review, and incident triage to deliver intelligent, context-aware automation. Designed and shipped custom Salesforce Flows, validation rules, reports, and dashboards with Lightning components and declarative automation to streamline business processes, improve KPI visibility, and drive operational efficiency. Partnered directly with Salesforce customers to investigate and resolve org-level disruptions, contributing to a seamless user experience through minimized downtime and improved system performance.",
    iconName: "FaSalesforce",
  },
  {
    title: "Proactive Monitoring Intern",
    company: "Salesforce",
    period: "Feb 2024 - Aug 2024",
    description:
      "Partnered cross-functionally with the engineering team to design visibility tools and monitoring utilities that streamlined task execution across complex, multi-tenant Salesforce Org environments. Specialized in implementing custom Salesforce configurations and building robust automation tools via Salesforce APIs to streamline operations. Leveraged Splunk for advanced debugging, log analysis, and root-cause analysis — a strategy that drove faster incident resolution and sustained system reliability across complex Salesforce organizations. Laid the foundation for the monitoring and automation suite later expanded in the full-time role.",
    iconName: "FaSalesforce",
  },
  {
    title: "Software Developer",
    company: "Care4Edu",
    period: "July 2023 - Jan 2024",
    description:
      "Architected and shipped secure, production-grade full-stack web applications using Spring Boot, React.js, MySQL, Docker, and Nginx — engineered for scalable user traffic and seamless digital experiences. Designed and deployed secure RESTful APIs backed by MySQL with normalized relational schemas and indexed query paths, achieving sub-second data retrieval and robust performance under load. Implemented JWT-based authentication and role-based access control across user tiers (students, instructors, admins) with password hashing for privacy-by-default. Built reusable React component libraries and responsive Tailwind-based UI primitives to accelerate frontend feature delivery and ensure consistent UX. Productionized CI/CD pipelines on Jenkins and Docker, automating the build-test-deploy lifecycle alongside Shell-scripted task automation. Configured Nginx web servers and reverse proxies to harden security, terminate TLS, and improve request-handling efficiency. Containerized the full stack with Docker Compose for reproducible local development and production parity. Owned end-to-end feature delivery in an Agile environment — from requirement gathering and API design to deployment and post-release monitoring — gaining hands-on experience in full-cycle development and software engineering best practices.",
    iconName: "Code2",
  },
];

// Education Section Data
export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Reva University, Bengaluru",
    mascot: "📗",
    year: "2020-2024",
    achievements: ["GPA: 9.70", "Subject: CSE"],
    skills: [
      "Data Structures and Algorithms (DSA)",
      "Computer Networks",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "etc..",
    ],
    description:
      "Developed strong analytical and critical thinking skills while gaining expertise in modern technologies, frameworks, and engineering practices. Acquired both theoretical and practical experience across databases, networking, security, cloud computing, web development, and software engineering — with a focus on solving real-world technical challenges efficiently. Collaborated on diverse projects, enhancing teamwork and communication skills while delivering high-quality solutions. Continuously stayed updated with emerging technologies — including MCP-powered agentic workflows and modern AI tooling — to adapt to the evolving tech landscape.",
  },
  {
    degree: "Pre University / 12th grade",
    school: "V.V Sangha's independent PU College",
    mascot: "📘",
    year: "2018-2020",
    achievements: ["GPA: 8.7", "Subject: Science"],
    skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
    description:
      "Focused extensively on core science subjects, emphasizing a strong foundation in theoretical concepts complemented by practical laboratory work. Gained hands-on experience in conducting experiments, analyzing data, and interpreting results. Developed a deep understanding of scientific research methodologies, including hypothesis formulation, experimental design, and critical evaluation of findings. This approach fostered a comprehensive skill set in both the practical and analytical aspects of scientific inquiry.",
  },
];

// About Section Data
export const aboutData = {
  title: "Hi, I'm Gavi",
  imageUrl: "https://i.ibb.co/qkVRc5p/20240715-113411-1.jpg",
  paragraphs: [
    `I'm an ambitious Associate Proactive Monitoring Engineer at Salesforce, specializing in architecting internal tools,
    intelligent monitoring systems, and automation utilities for the Salesforce ecosystem. I combine strong full-stack
    engineering with deep Salesforce expertise — Apex, LWC, SOQL/SOSL, Salesforce APIs, Data Cloud, and Agentforce.`,
    `I bring enterprise-grade observability instincts sharpened by Splunk and Grafana — driving anomaly detection,
    predictive alerting, and measurable improvements in mean-time-to-detect (MTTD) across complex Salesforce orgs.
    I'm passionate about solving real-world problems through scalable, secure, industry-grade applications and thrive in
    collaborative Agile environments, with strong communication in English, Telugu, Kannada, and Hindi.`,
    `I also integrate MCP-powered agentic workflows and modern AI tooling into my engineering practice to deliver
    intelligent, context-aware automation — keeping quality high while moving fast.`,
    "My journey in tech started with curiosity and has evolved into a career focused on building innovative solutions that ship reliably and scale gracefully.",
  ],
  quote: "Code is like humor. When you have to explain it, it's bad.",
  author: "Cory House",
};

// About Section - Skills/Strengths
export const aboutSkills = [
  {
    iconName: "Brain",
    title: "Problem Solver",
    desc: "Love tackling complex, real-world engineering challenges",
  },
  {
    iconName: "Zap",
    title: "Fast Learner",
    desc: "Quick to adopt new tools, frameworks, and modern workflows",
  },
  {
    iconName: "Target",
    title: "Goal-Oriented",
    desc: "Focused on delivering measurable, production-grade results",
  },
  {
    iconName: "Sparkles",
    title: "Creative Builder",
    desc: "Pairs MCP agents and modern tooling with strong engineering fundamentals",
  },
];

// About Section - Tab Configuration
export const aboutTabs = [
  { id: "story", label: "My Story", iconName: "Sparkles" },
  { id: "skills", label: "Strengths", iconName: "Zap" },
  { id: "journey", label: "Journey", iconName: "Rocket" },
];

// Projects Section Data
export const projectsData = [
  {
    title: "☁️ HelioScape",
    description:
      "Decentralized Zero-Knowledge Cloud Storage A 'Meta-Cloud' platform that aggregates free storage tiers from Google Drive, Dropbox, OneDrive, and MEGA into a single, infinite, secure virtual drive. HelioScape employs a Server-Side RAID-0 architecture: files are streamed to a Node.js backend where they are encrypted (AES-256-GCM) and split into shards in real-time memory streams, then distributed across multiple providers in parallel. This ensures Zero-Knowledge Privacy (no single provider holds the complete file) and High Throughput without buffering files to disk.",
    src: "https://images.ctfassets.net/0idwgenf7ije/5VlsclFu9SoqhlsYG3l4TV/e3de33232398b778441f34f7cca8580c/An_Overview_of_Decentralized_Cloud_Services-100.jpg?fm=webp&w=1024&q=100",
    link: "https://images.ctfassets.net/0idwgenf7ije/5VlsclFu9SoqhlsYG3l4TV/e3de33232398b778441f34f7cca8580c/An_Overview_of_Decentralized_Cloud_Services-100.jpg?fm=webp&w=1024&q=100",
    color: "#5196fd",
    githubLink: "https://github.com/GAVIPRASAD/HelioScape",
    liveLink: "https://github.com/GAVIPRASAD/HelioScape",
  },
  {
    title: "🗝️ PassKind",
    description:
      "A full-stack, self-hosted password manager built with Spring Boot and React. Features zero-knowledge AES-256-GCM encryption, JWT authentication, real-time audit logging, and Docker deployment. Includes forgot password flows, email OTP verification with custom HTML templates, and auto-lock security.",
    src: "https://github.com/user-attachments/assets/543fa474-f506-40e0-b152-25656c74fdc3",
    link: "https://github.com/user-attachments/assets/543fa474-f506-40e0-b152-25656c74fdc3",
    color: "#5196fd",
    githubLink: "https://github.com/GAVIPRASAD/passkind",
    liveLink: "https://passkind.onrender.com/",
  },
  {
    title: "🌾 Cultimax",
    description:
      "CultiMax is a dynamic, lightweight, mobile-compatible MERN-stack web application designed to help farmers buy agricultural products at the right time — connecting farmers directly to suppliers and replacing fragmented offline workflows with a seamless digital experience.",
    src: "https://user-images.githubusercontent.com/112298797/224025880-1e149f44-7eab-4447-9a4d-a1011e55e0e7.png",
    link: "https://user-images.githubusercontent.com/112298797/224025880-1e149f44-7eab-4447-9a4d-a1011e55e0e7.png",
    color: "#5196fd",
    githubLink: "https://github.com/GAVIPRASAD/CultiMaxServer",
    liveLink: "https://github.com/GAVIPRASAD/CultiMaxServer",
  },
  {
    title: "👨🏻‍💻 Portfolio site",
    description:
      "A modern and visually appealing portfolio designed using React, styled with Tailwind CSS, and enhanced with dynamic animations powered by Framer Motio to showcase skills, projects, and experience in a modern design.",
    src: "https://raw.githubusercontent.com/GAVIPRASAD/GAVI/refs/heads/main/pic/portfolio.jpg",
    link: "https://raw.githubusercontent.com/GAVIPRASAD/GAVI/refs/heads/main/pic/portfolio.jpg",
    color: "#00b9c0ff",
    githubLink: "https://github.com/GAVIPRASAD/past-portfolio",
    liveLink: "https://gaviprasad.onrender.com",
  },
  {
    title: "🌽 Cultimax CD and D2",
    description:
      "CultiMax CD and D2 is the intelligent backend microservice for the CultiMax ecosystem. Built with Python and Flask, it hosts trained Machine Learning models that deliver real-time agricultural predictions — such as crop suitability and fertilizer recommendations — to the main application, productionizing intelligent automation at the edge of the platform.",
    src: "water.jpg",
    link: "https://keymakr.com/blog/content/images/size/w2000/2024/10/KMmain--47-.jpg",
    color: "#fff",
    githubLink: "https://github.com/GAVIPRASAD/CULTIMAXD2",
    liveLink: "https://github.com/GAVIPRASAD/CULTIMAXD2",
  },
  {
    title: "Money Gaffer 💵",
    description:
      "Money gaffer is a comprehensive backend service for a personal finance management application. It provides a robust set of RESTful APIs to manage users, income, expenses, investments, loans, bank accounts, and insurance details. Built with Node.js, Express, and MongoDB, it features JWT-based authentication and detailed API documentation using Swagger.✨",
    src: "house.jpg",
    link: "https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2023/03/functions-of-financial-management.png",
    color: "#df911cff",
    githubLink: "https://github.com/GAVIPRASAD/money_gaffer",
    liveLink: "https://github.com/GAVIPRASAD/money_gaffer",
  },
  {
    title: "Tasker 📅",
    description:
      "A robust Task Manager application built using the MVC (Model-View-Controller) architecture. This project provides a RESTful API for task management operations and includes a frontend interface for user interaction.",
    src: "house.jpg",
    link: "https://www.sweetprocess.com/wp-content/uploads/2022/10/task-management-32-1.png",
    color: "#d3ff0dff",
    githubLink: "https://github.com/GAVIPRASAD/Tasker",
    liveLink: "https://github.com/GAVIPRASAD/Tasker",
  },
  {
    title: "GlanceAtPast 📝",
    description:
      "A MERN stack application designed for users to post, share, and revisit their cherished memories, creating a personal archive to look back on and relive special moments",
    src: "house.jpg",
    link: "https://user-images.githubusercontent.com/112298797/201332875-0e53eae3-b725-4ee8-b797-86eacc381aaa.png",
    color: "#00d9ffff",
    githubLink: "https://github.com/GAVIPRASAD/GlanceAtPast",
    liveLink: "https://github.com/GAVIPRASAD/GlanceAtPast",
  },
];

// Contact Section Data
export const contactData = {
  title: "Get in Touch",
  subtitle: "Have a question or want to work together? Drop us a message!",
  contactInfo: [
    {
      icon: "Mail",
      title: "Email",
      value: PERSONAL_INFO.email,
      color: "purple",
    },
    {
      icon: "MapPin",
      title: "Location",
      value: PERSONAL_INFO.location,
      color: "pink",
    },
  ],
  web3FormsAccessKey: "90f4b8af-e590-42b0-beaf-10b18f66a703",
};

// Social Media Links (if needed)
export const socialLinks = {
  github: {
    url: SOCIAL_URLS.github,
    icon: "FaGithub",
  },
  linkedin: {
    url: SOCIAL_URLS.linkedin,
    icon: "FaLinkedin",
  },
  twitter: {
    url: SOCIAL_URLS.twitter,
    icon: "FaTwitter",
  },
  email: {
    url: SOCIAL_URLS.email,
    icon: "FaEnvelope",
  },
  facebook: {
    url: SOCIAL_URLS.facebook,
    icon: "FaFacebook",
  },
  instagram: {
    url: SOCIAL_URLS.instagram,
    icon: "FaInstagram",
  },
};

export const contactConfig = {
  // Sign up at https://www.emailjs.com/ to get these keys
  serviceId: "YOUR_SERVICE_ID", // Replace with your Service ID
  templateId: "YOUR_TEMPLATE_ID", // Replace with your Template ID
  publicKey: "YOUR_PUBLIC_KEY", // Replace with your Public Key
};

export const certificationsData = [
  {
    id: 1,
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    date: "2024",
    icon: "FaSalesforce",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  },
  {
    id: 2,
    name: "Salesforce Certified App Builder",
    issuer: "Salesforce",
    date: "2024",
    icon: "FaSalesforce",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  },
  {
    id: 3,
    name: "Salesforce Certified Platform Developer 1",
    issuer: "Salesforce",
    date: "2024",
    icon: "FaSalesforce",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  },
  {
    id: 4,
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
    icon: "FaSalesforce",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  },
  {
    id: 5,
    name: "Salesforce Certified Data Cloud Consultant",
    issuer: "Salesforce",
    date: "2024",
    icon: "FaSalesforce",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  },
  {
    id: 6,
    name: "Data Structure & Algorithms in java",
    issuer: "Great Learning",
    date: "2023",
    icon: "FaJava",
    link: "https://mygreatlearning.com",
  },
  {
    id: 7,
    name: "Full-Stack Web Development with MERN Stack",
    issuer: "Coursera",
    date: "2022",
    icon: "FaCoursera",
    link: "https://www.coursera.org/account/accomplishments/verify/HF4EKTFB967H",
  },
  {
    id: 8,
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "2021",
    icon: "FaIBM",
    link: "https://www.coursera.org/account/accomplishments/verify/E2BH9FFDDPDU",
  },
  {
    id: 9,
    name: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "2025",
    icon: "FaSalesforce",
    link: "https://trailhead.salesforce.com/en/credentials/verification/",
  }
  

];

// Navigation Links Data
export const navLinksData = [
  { id: "home", icon: "FaHome", text: "Home", path: "/" },
  { id: "skills", icon: "FaCode", text: "Skills", path: "/skills" },
  {
    id: "experience",
    icon: "FaBriefcase",
    text: "Experience",
    path: "/experience",
  },
  {
    id: "education",
    icon: "FaGraduationCap",
    text: "Education",
    path: "/education",
  },
  { id: "projects", icon: "FaLaptopCode", text: "Projects", path: "/projects" },
  {
    id: "certifications",
    icon: "FaCertificate",
    text: "Certifications",
    path: "/certifications",
  },
  { id: "contact", icon: "FaEnvelope", text: "Contact", path: "/contact" },
];
