import React, { useState, useEffect } from 'react';
import { motion, useTime, useTransform } from 'framer-motion';
import {
  Github, Linkedin, Mail, ExternalLink, Database, Brain, BarChart3,
  Server, LineChart, PieChart, FileSpreadsheet, Terminal, Send, Download,
  Bot, Workflow, BookOpen, Award, Users, Globe, Cloud, Code, Cpu,
  Zap, Shield, CheckCircle, Smartphone, MoreHorizontal
} from 'lucide-react';

// --- Shared Components for the "Data Theme" ---
// --- Shared Components for the "Data Theme" ---
const SectionHeader = ({ title, subtitle, label }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-[1px] w-8 bg-cyan-500/50"></div>
      <span className="mono-label">{label}</span>
    </div>
    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
      {title} <span className="gradient-text">{subtitle}</span>
    </h2>
  </div>
);

const TechCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`tech-card p-6 rounded-xl group relative ${className}`}
  >
    <div className="corner-accent top-left"></div>
    <div className="corner-accent bottom-right opacity-50 group-hover:opacity-100 transition-opacity"></div>
    {children}
  </motion.div>
);

// --- Navigation ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Certifications', 'Projects', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16 bg-[#0f172a]/90 backdrop-blur-md border-b border-white/5' : 'h-24 bg-transparent'}`}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center max-w-7xl">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-500/10 rounded flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
            <BarChart3 size={18} className="text-cyan-500" />
          </div>
          <span className="text-white font-sans font-bold tracking-tight text-lg">MOHAN <span className="text-cyan-500">| DATA</span></span>
        </a>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg-animated opacity-20 pointer-events-none"></div>

    <div className="container mx-auto px-6 pt-12 relative z-10 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-400 tracking-wide uppercase">Open to Work</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white tracking-tight">
            Turning Data into <br />
            <span className="gradient-text">Insights & Decisions</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
            Data Analyst focused on <strong>interactive dashboards</strong>, <strong>automated reporting</strong>, and <strong>workflow optimization</strong> using Power BI, Excel, SQL, and Python.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="px-8 py-4 bg-cyan-600 text-white font-semibold text-sm rounded-lg hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2">
              <BarChart3 size={18} />
              VIEW ANALYTICS
            </a>
            <a href="#" className="px-8 py-4 border border-white/10 text-white font-semibold text-sm rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 group">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              RESUME
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
            <div>
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Dashboards Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Automations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">2+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years Exp</div>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual - Dashboard Preview Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Floating Cards Mockup */}
          <div className="relative w-full max-w-lg">
            {/* Main Card (Power BI Style Report) */}
            <div className="absolute top-0 right-0 w-full bg-[#1e293b] rounded-xl border border-white/10 shadow-2xl p-4 rotate-3 lg:rotate-6 z-10 animate-float">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <div className="text-xs font-bold text-slate-300">Sales Performance Q4</div>
                <MoreHorizontal size={14} className="text-slate-500" />
              </div>
              <div className="flex gap-4 items-end h-32 px-2">
                <div className="w-8 bg-cyan-500/20 rounded-t h-[60%]"></div>
                <div className="w-8 bg-cyan-500/40 rounded-t h-[80%]"></div>
                <div className="w-8 bg-cyan-500/60 rounded-t h-[40%]"></div>
                <div className="w-8 bg-cyan-500 rounded-t h-[100%] shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
                <div className="w-8 bg-cyan-500/30 rounded-t h-[50%]"></div>
              </div>
            </div>

            {/* Secondary Card (Automation Flow) */}
            <div className="absolute top-40 -left-4 lg:-left-12 w-64 bg-[#0f172a] rounded-xl border border-white/10 shadow-xl p-4 -rotate-3 z-20 tech-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/20 rounded-md text-green-400"><CheckCircle size={16} /></div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Flow Success</div>
                  <div className="text-[10px] text-slate-500">Just now</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>Trigger</span>
                  <span>Action</span>
                  <span>Complete</span>
                </div>
              </div>
            </div>

            {/* Third Card (Data Source) */}
            <div className="absolute -bottom-12 right-12 w-56 bg-[#0f172a]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-4 z-30">
              <div className="flex items-center gap-3">
                <Database size={20} className="text-blue-400" />
                <div className="text-xs font-bold text-white">SQL Database</div>
              </div>
              <div className="mt-2 text-[10px] text-slate-400 font-mono">
                &gt; SELECT * FROM USERS<br />
                &gt; WHERE STATUS = 'ACTIVE'<br />
                &gt; ... 1,024 rows returned
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- 3D Atom Element Helper ---
const OrbitElement = ({ axis, offset, icon: Icon, label, color, speed }) => {
  const time = useTime();

  // Transform time into degrees (0-360) looping
  const t = useTransform(time, value => (value % speed) / speed * 360);

  // 3D Math for Atom Orbit
  const radius = 260;

  // Calculate X/Y based on the Axis tilt
  // radians = (degree * PI) / 180
  const tiltRad = axis * (Math.PI / 180);

  const x = useTransform(t, deg => {
    const rad = (deg + offset) * (Math.PI / 180);
    // X position is influenced by the rotation around the center + the tilt of the orbit plane
    return Math.cos(rad) * radius * Math.cos(tiltRad);
  });

  const y = useTransform(t, deg => {
    const rad = (deg + offset) * (Math.PI / 180);
    // Y position comes from the sine wave (vertical) + tilt factor
    // We squash the Y slightly (scale-y equivalent) to give depth
    return Math.sin(rad) * (radius * 0.3) + (Math.cos(rad) * radius * Math.sin(tiltRad));
  });

  // Z-Index / Scale logic
  const scale = useTransform(t, deg => {
    const rad = (deg + offset) * (Math.PI / 180);
    const z = Math.sin(rad); // Pseudo Z-depth (front/back)
    return 0.7 + (z + 1) * 0.3; // Scale 0.7 to 1.3
  });

  const zIndex = useTransform(t, deg => {
    const rad = (deg + offset) * (Math.PI / 180);
    return Math.sin(rad) > 0 ? 50 : 10;
  });

  const opacity = useTransform(t, deg => {
    const rad = (deg + offset) * (Math.PI / 180);
    return 0.5 + (Math.sin(rad) + 1) * 0.25;
  });

  return (
    <motion.div
      style={{ x, y, scale, zIndex, opacity }}
      className="absolute top-1/2 left-1/2 -ml-12 -mt-12 w-24 h-24 pointer-events-none"
    >
      <div className="w-full h-full relative cursor-pointer pointer-events-auto group">
        {/* 3D Card */}
        <div className="absolute inset-0 bg-[#080808] rounded-xl border border-white/10 shadow-xl group-hover:border-emerald-500/50 transition-colors duration-300"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transform group-hover:-translate-y-1 transition-transform duration-300">
          <div className={`p-2 rounded-lg bg-white/5 ${color} shadow-inner`}>
            <Icon size={24} />
          </div>
          <span className="text-[10px] font-mono font-bold text-neutral-400 group-hover:text-white uppercase tracking-wider">{label}</span>
        </div>
      </div>
    </motion.div>
  )
}

// --- About Me Section ---
const AboutMe = () => (
  <section id="about" className="py-24 relative bg-[#0b0f19]">
    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* About Content */}
        <div>
          <SectionHeader title="Professional" subtitle="Profile" label="ABOUT_ME" />

          <div className="text-slate-400 mb-8">
            <p className="text-lg leading-relaxed mb-4">
              I am <strong className="text-white">Beeraka Mohan Mani Shankar</strong>, a Data Analyst and Automation Engineer converting chaos into clarity.
            </p>
            <p className="text-lg leading-relaxed">
              Currently pursuing my B.Tech in <span className="text-cyan-400">Artificial Intelligence & Machine Learning</span> at Aditya Engineering College, I specialize in eliminating manual redundancy through <strong className="text-white">Power Automate KPIs</strong> and <strong className="text-white">Power BI visualization</strong>. My work ensures businesses don't just store data—they act on it.
            </p>
          </div>

          <div className="mb-8 pb-8 border-b border-white/5">
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest block mb-3">Core Competencies</span>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "Power Automate", "n8n", "Snowflake", "Python", "SQL", "Excel", "SharePoint"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white border border-white/5">{skill}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/5">
              <BookOpen className="text-cyan-400 mb-2" size={24} />
              <div className="text-sm font-bold text-white">Education</div>
              <div className="text-xs text-slate-400 mt-1">B.Tech AI & ML</div>
              <div className="text-xs text-slate-500">CGPA: 7.55</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5">
              <Globe className="text-blue-400 mb-2" size={24} />
              <div className="text-sm font-bold text-white">Languages</div>
              <div className="text-xs text-slate-400 mt-1">English (Fluent)</div>
              <div className="text-xs text-slate-400">Telugu (Native)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Technical Arsenal Section ---
const TechnicalArsenal = () => (
  <section className="py-20 bg-[#0f172a]/50 border-y border-white/5">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="flex items-center gap-3 mb-12 justify-center">
        <div className="h-[1px] w-8 bg-cyan-500/50"></div>
        <span className="mono-label">ANALYTICS & AUTOMATION STACK</span>
        <div className="h-[1px] w-8 bg-cyan-500/50"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {[
          { name: "n8n (Main)", icon: Zap, color: "text-red-400", bg: "bg-red-400/10" },
          { name: "Snowflake", icon: Cloud, color: "text-sky-300", bg: "bg-sky-300/10" },
          { name: "Power BI", icon: BarChart3, color: "text-amber-400", bg: "bg-amber-400/10" },
          { name: "Power Automate", icon: Workflow, color: "text-blue-400", bg: "bg-blue-400/10" },
          { name: "Excel", icon: FileSpreadsheet, color: "text-green-500", bg: "bg-green-500/10" },
          { name: "SQL", icon: Database, color: "text-cyan-400", bg: "bg-cyan-400/10" },
          { name: "Python", icon: Code, color: "text-yellow-300", bg: "bg-yellow-300/10" },
          { name: "SharePoint", icon: Globe, color: "text-teal-400", bg: "bg-teal-400/10" }
        ].map((tech, i) => (
          <TechCard key={i} delay={i * 0.05} className="flex flex-col items-center justify-center gap-4 text-center p-6 hover:-translate-y-2 transition-transform">
            <div className={`p-4 rounded-full ${tech.bg} ${tech.color}`}>
              <tech.icon size={28} />
            </div>
            <span className="text-sm font-bold text-slate-200">{tech.name}</span>
          </TechCard>
        ))}
      </div>
    </div>
  </section>
);

// --- Experience & Leadership Section ---
const ExperienceLeadership = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-5xl relative z-10">
      <SectionHeader title="Operational" subtitle="History" label="EXPERIENCE_LOGS" />

      <div className="space-y-6">
        {[
          {
            role: "Campus Ambassador",
            org: "GUESSS India",
            period: "2025",
            desc: "Representing entrepreneurship surveys and managing data collection from student bodies.",
            link: "#",
            tags: ["Leadership", "Outreach"],
            icon: Users
          },
          {
            role: "Data Specialist Intern",
            org: "Technical Hub (THUB)",
            period: "2024 - Present",
            desc: "Spearheading data cleaning initiatives and building automated reporting pipelines.",
            link: "https://drive.google.com/file/d/1kUGwi3qpmuEApCn9hjmzxER7irKUn9iZ/view",
            tags: ["Data Analysis", "Automation"],
            icon: Database
          },
          {
            role: "Director of Photography",
            org: "Leo Club",
            period: "2024 - Present",
            desc: "Leading media documentation and visual storytelling for club events.",
            link: "#",
            tags: ["Media", "Leadership"],
            icon: Award
          },
          {
            role: "Active Coordinator",
            org: "Red Cross",
            period: "2023 - Present",
            desc: "Coordinating blood donation camps and community health awareness programs.",
            link: "#",
            tags: ["Volunteering", "Coordination"],
            icon: Users
          },
          {
            role: "Member",
            org: "Rotaract Club",
            period: "2023 - Present",
            desc: "Active participation in social service events and team coordination.",
            link: "#",
            tags: ["Volunteering", "Planning"],
            icon: Users
          }
        ].map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative pl-8 border-l border-white/10 hover:border-emerald-500/50 transition-colors"
          >
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors"></div>

            <div className="bg-neutral-900/30 border border-white/5 rounded-xl p-6 hover:bg-neutral-900/50 transition-all flex flex-col md:flex-row gap-6 items-start">
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                <exp.icon size={24} />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="font-mono text-xs text-neutral-500 py-1 px-2 rounded bg-white/5">{exp.period}</span>
                </div>
                <div className="text-emerald-400 text-sm font-medium mb-2">{exp.org}</div>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{exp.desc}</p>
                {/* Links removed if '#' to keep it clean unless requested otherwise, but code structure kept */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Certifications Section ---
const Certifications = () => {
  // Corrected list of certifications
  const certs = [
    { title: "Cisco Networking Academy – Python Essentials", link: "https://drive.google.com/file/d/1qorMeET0hhMGbcFlNd260LL1eBbDoUhv/view", icon: Terminal, code: "CS-PY-2024" },
    { title: "Master Microsoft Power BI – LinkedIn Learning", link: "https://drive.google.com/file/d/1aee1ZQvq6lRbGVsHsy2lzKccYXuXRrNO/view", icon: BarChart3, code: "MS-BI-2024" },
    { title: "Google Cloud Career Launchpad – Generative AI Track", link: "#", icon: Cloud, code: "GC-AI-2024" }, // Link placeholder as not provided but requested in list
    { title: "Google Gemini API – Getting Started", link: "https://drive.google.com/file/d/1FAGogI7KllJXz-Ha4KAP8jVu5yK9F8OU/view", icon: Brain, code: "GO-AI-2024" },
    { title: "AI Tools Skill Up – GeeksforGeeks", link: "https://drive.google.com/file/d/1I8CiYtL73mLNFB46g8sAZ_9byVPDMdUd/view", icon: Code, code: "GFG-TL-2024" },
    { title: "Google Skill Boost – Cloud & AI Learning", link: "https://drive.google.com/file/d/1cbvPCd7A6LkU1lBpQe5hxlh03KWePIku/view", icon: Cloud, code: "GC-CL-2024" }
  ];

  return (
    <section id="certifications" className="py-24 bg-neutral-900/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader title="Verified" subtitle="Credentials" label="CERTITFD_DB" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              className="group relative block p-px rounded-xl overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-emerald-500/50 group-hover:to-cyan-500/50 transition-all duration-300"></div>

              <div className="relative h-full bg-[#050505] rounded-xl p-6 flex flex-col gap-4 group-hover:bg-[#0a0a0a] transition-colors">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-lg bg-white/5 text-neutral-300 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <cert.icon size={20} />
                  </div>
                  <div className="text-[10px] font-mono text-neutral-600 group-hover:text-emerald-500/50 transition-colors">{cert.code}</div>
                </div>
                <h3 className="font-bold text-neutral-200 group-hover:text-white transition-colors line-clamp-2 min-h-[3rem]">
                  {cert.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 group-hover:text-emerald-400 transition-colors">
                  <span>VERIFY CERTIFICATE</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Badges Section ---
const Badges = () => (
  <section className="py-12 border-y border-white/5 bg-neutral-900/10">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h3 className="text-xl font-mono text-emerald-400 mb-8 flex items-center justify-center gap-2">
        <Award size={20} /> // ACHIEVEMENTS_UNLOCKED
      </h3>
      <div className="flex justify-center">
        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
          <div className="w-16 h-16 rounded-full bg-black border border-emerald-500/30 flex items-center justify-center p-3">
            <img src="https://assets.leetcode.com/static_assets/public/images/badges/2024/gif/2024-03.gif" alt="Kaggle Badge" className="w-full h-full object-contain opacity-80" onError={(e) => { e.target.style.display = 'none'; }} />
            {/* Fallback Icon if image fails or placeholder */}
            <Terminal className="text-emerald-500 absolute" size={24} />
          </div>
          <div className="text-left">
            <h4 className="text-white font-bold">Kaggle – Python Coder</h4>
            <p className="text-xs text-neutral-400">Validated Python Competency</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Coding Profiles ---
const CodingProfiles = () => {
  const profiles = [
    { name: "LeetCode", link: "https://leetcode.com/u/mani_shankar005/", icon: Code, desc: "Algorithm Practice" },
    { name: "GitHub", link: "https://github.com/manishankar0922", icon: Github, desc: "Project Repos" },
    { name: "CodeChef", link: "https://www.codechef.com/users/mohanmanishank", icon: Terminal, desc: "Competitive Coding" },
    { name: "HackerRank", link: "https://www.hackerrank.com/", icon: Award, desc: "Skill Assessments" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-[#020202]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profiles.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-neutral-800 hover:border-emerald-500/30 transition-all group"
            >
              <p.icon size={32} className="text-neutral-400 mb-3 group-hover:text-white group-hover:scale-110 transition-transform" />
              <div className="font-bold text-white mb-1">{p.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-500">{p.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Automation Projects Section (4. Projects) ---
const AutomationProjects = () => {
  const automationProjects = [
    {
      title: "Community Incident Reporting System",
      desc: "End-to-end incident management system. Automates submission, storage, and approval workflows.",
      tags: ["SharePoint", "Power Automate", "Power BI"],
      icon: Database,
      id: "SYS-01"
    },
    {
      title: "CertiFlow Automation",
      desc: "Automated certificate generation and email distribution system for large-scale events.",
      tags: ["Outlook", "Power Automate", "Word"],
      icon: Send,
      id: "SYS-02"
    },
    {
      title: "Restaurant AI Chatbot",
      desc: "No-code chatbot using n8n to automate customer interactions and menu handling.",
      tags: ["n8n", "AI Agents", "HTTP"],
      icon: Smartphone,
      id: "SYS-03"
    },
    {
      title: "SmartSync – Self-Healing Ops",
      desc: "Operations system that detects failures and triggers corrective agents automatically.",
      tags: ["Power Automate", "Excel", "Logs"],
      icon: Bot,
      id: "SYS-04"
    },
    {
      title: "Attendance Approval System",
      desc: "Multi-level workflow for attendance management with transparent record keeping.",
      tags: ["SharePoint", "Approvals", "Teams"],
      icon: CheckCircle,
      id: "SYS-05"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader title="System" subtitle="Architecture" label="CASE_STUDIES" />
        <h3 className="text-xl font-mono text-emerald-400 mb-8 flex items-center gap-2">
          <Workflow size={20} />
                                // AUTOMATION_PROTOCOLS
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationProjects.map((p, i) => (
            <div key={i} className="group rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 overflow-hidden flex flex-col h-full transition-all hover:-translate-y-1">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-emerald-500/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <p.icon size={24} />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-600 px-2 py-1 rounded bg-white/5">{p.id}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-emerald-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono text-neutral-500 px-2 py-1 rounded bg-white/5 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Dashboard Projects Section (5. Dashboards) ---
const AnalyticsDashboards = () => {
  const analyticsProjects = [
    {
      title: "Incident Analytics Dashboard",
      desc: "Visualizes incidents by category, resolution time, and location heatmaps.",
      tags: ["Power BI", "Data Viz"],
      icon: BarChart3,
      id: "DASH-01"
    }
  ];

  return (
    <section id="dashboards" className="py-24 relative bg-neutral-900/10">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-cyan-500/50"></div>
            <span className="mono-label text-cyan-500/80">INTELLIGENCE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Dashboards</span>
          </h2>
        </div>


        <h3 className="text-xl font-mono text-cyan-400 mb-8 flex items-center gap-2">
          <BarChart3 size={20} />
                                        // DATA_VISUALIZATION
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsProjects.map((p, i) => (
            <div key={i} className="group rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-cyan-500/30 overflow-hidden flex flex-col h-full transition-all hover:-translate-y-1">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-cyan-500/5 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-white transition-colors">
                    <p.icon size={24} />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-600 px-2 py-1 rounded bg-white/5">{p.id}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono text-neutral-500 px-2 py-1 rounded bg-white/5 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Contact ---
const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none"></div>

    <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
        Ready to <span className="gradient-text">Collaborate?</span>
      </h2>
      <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
        I am currently open to internship opportunities and projects. If you need a data-driven solution or an automated workflow, let's connect.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:mohanmanishankar01@gmail.com" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-500 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <Mail size={18} />
          mohanmanishankar01@gmail.com
        </a>
        <a href="https://linkedin.com/in/mohan-mani-shankar-834970283/" target="_blank" className="px-8 py-4 bg-neutral-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-white/10">
          <Linkedin size={18} />
          LinkedIn Profile
        </a>
        <a href="https://github.com/manishankar0922" target="_blank" className="px-8 py-4 bg-neutral-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2 border border-white/10">
          <Github size={18} />
          GitHub
        </a>
      </div>
    </div>
  </section>
);

const BackgroundAnimation = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-500/20 rounded-full"
        initial={{
          x: Math.random() * 100 + "vw",
          y: Math.random() * 100 + "vh",
          opacity: Math.random() * 0.5
        }}
        animate={{
          y: ["-10vh", "110vh"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          delay: Math.random() * 20,
          ease: "linear"
        }}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 animate-pulse"></div>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="fixed inset-0 bg-[#030304] flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
        <div className="font-mono text-emerald-500 text-sm animate-pulse">INITIALIZING SYSTEM...</div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#030304] min-h-screen text-neutral-200 selection:bg-emerald-500/30 selection:text-white font-sans relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <AboutMe />
      <TechnicalArsenal />
      <AutomationProjects />
      <AnalyticsDashboards />
      <Certifications />
      <Badges />
      <ExperienceLeadership />
      <CodingProfiles />
      <Contact />

      <footer className="py-8 text-center border-t border-white/5 bg-black">
        <p className="font-mono text-xs text-neutral-600 uppercase tracking-widest">
          © 2025 MOHAN.DATA // SYSTEM STATUS: NOMINAL
        </p>
      </footer>
    </div>
  );
}
