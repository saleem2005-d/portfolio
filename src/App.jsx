import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Terminal,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  ChevronRight,
  Search,
  Command,
  ShieldAlert,
  GitBranch,
  BrainCircuit,
  GraduationCap,
  Award,
  Zap,
  Play,
  RotateCcw,
  FileText,
  Volume2,
  VolumeX,
  X,
  ArrowUpRight
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
    </svg>
  );
}

const ACCENT_THEMES = {
  cyan: {
    id: 'cyan',
    name: 'Electric Cyan',
    primary: '#00f2fe',
    glow: 'rgba(0, 242, 254, 0.4)',
    border: 'border-cyan-500/40',
    borderGlow: 'hover:border-cyan-400/80',
    bgBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    textGlow: 'text-cyan-400'
  },
  purple: {
    id: 'purple',
    name: 'Neon Violet',
    primary: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.4)',
    border: 'border-purple-500/40',
    borderGlow: 'hover:border-purple-400/80',
    bgBadge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    textGlow: 'text-purple-400'
  },
  emerald: {
    id: 'emerald',
    name: 'Cyber Emerald',
    primary: '#10b981',
    glow: 'rgba(16, 185, 129, 0.4)',
    border: 'border-emerald-500/40',
    borderGlow: 'hover:border-emerald-400/80',
    bgBadge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    textGlow: 'text-emerald-400'
  },
  amber: {
    id: 'amber',
    name: 'Solar Amber',
    primary: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    border: 'border-amber-500/40',
    borderGlow: 'hover:border-amber-400/80',
    bgBadge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    textGlow: 'text-amber-400'
  }
};

const PROJECTS_DATA = [
  {
    id: 'tracegraph',
    title: 'TraceGraph',
    tagline: 'Autonomous Mule Account & Fraud Network Discovery Graph',
    category: 'AI & Graph Systems',
    badge: 'Smart India Hackathon 2026',
    overview: 'Engineered graph traversal algorithms to uncover cyclic smurfing operations and mule account clusters in complex financial transaction networks (SIH Problem Statement SIH26184).',
    techStack: ['Python', 'NetworkX', 'FastAPI', 'Graph Theory', 'React', 'Tailwind CSS'],
    highlights: [
      'Implemented strongly connected cycle detection for identifying multi-hop laundering chains.',
      'Constructed modular FastAPI endpoints to stream dynamic graph schemas to the frontend.',
      'Designed interactive node-link visualization allowing investigation teams to inspect transaction velocity.'
    ],
    demoType: 'graph',
    githubUrl: 'https://github.com/saleem2005-d',
    liveUrl: 'https://github.com/saleem2005-d'
  },
  {
    id: 'sentinel-ai',
    title: 'SentinelAI',
    tagline: 'Real-time Payment Webhook Risk & Heuristic Scoring Engine',
    category: 'FinTech & Security',
    badge: 'Razorpay AI Buildathon 2026',
    overview: 'Built a high-performance verification daemon designed to authenticate merchant payment webhooks, score payload entropy, and detect replay vulnerabilities before database persistence.',
    techStack: ['FastAPI', 'Python', 'React', 'TypeScript', 'HMAC Verifier', 'Tailwind CSS'],
    highlights: [
      'Developed real-time HMAC signature verification ensuring sub-50ms deterministic execution.',
      'Architected payload entropy scoring to detect anomalous batch transaction calls.',
      'Implemented an intuitive administrative dashboard with live telemetry indicators.'
    ],
    demoType: 'sentinel',
    githubUrl: 'https://github.com/saleem2005-d',
    liveUrl: 'https://github.com/saleem2005-d'
  },
  {
    id: 'careerpilot',
    title: 'CareerPilot AI',
    tagline: 'Intelligent Skill Gap & Autonomous Career Navigation Engine',
    category: 'AI & EdTech',
    badge: 'ALTS Ideathon & RAMP ESDP',
    overview: 'Full-stack AI guidance platform evaluating developer profiles against technical job requisitions to compute skill deltas and generate structured competency roadmaps.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Tailwind CSS'],
    highlights: [
      'Architected prompt chains to parse resume text against targeted engineering domains.',
      'Generated custom progressive milestones spanning 30, 60, and 90-day learning schedules.',
      'Recognized finalist submission in both ALTS Ideathon and RAMP programs.'
    ],
    demoType: 'career',
    githubUrl: 'https://github.com/saleem2005-d',
    liveUrl: 'https://github.com/saleem2005-d'
  },
  {
    id: 'campusconnect',
    title: 'CampusConnect',
    tagline: 'Unified Student Operations & Academic Ecosystem',
    category: 'Full Stack',
    badge: 'Deployed Production System',
    overview: 'Complete web application unifying campus schedules, academic credentials, and event notifications into a unified, authenticated student dashboard.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Render'],
    highlights: [
      'Structured relational schema in PostgreSQL ensuring query isolation and role permissioning.',
      'Automated deployment pipeline on Render backed by declarative environment management scripts.',
      'Delivered clean reactive UI supporting smooth client transitions across campus resources.'
    ],
    demoType: 'campus',
    githubUrl: 'https://github.com/saleem2005-d',
    liveUrl: 'https://github.com/saleem2005-d'
  }
];

const SKILLS_DATA = [
  {
    category: 'Core Programming',
    icon: '💻',
    skills: [
      { name: 'Python', role: 'FastAPI, Data Pipelines, Algorithmic Analysis' },
      { name: 'TypeScript / JS', role: 'Full-Stack Web, Modern ESNext, Node.js' },
      { name: 'C / C++', role: 'Data Structures, Core Algorithms, Memory Foundations' },
      { name: 'Java', role: 'Object-Oriented Design, Enterprise Software Architecture' }
    ]
  },
  {
    category: 'Web & Systems Architecture',
    icon: '⚡',
    skills: [
      { name: 'React & Vite', role: 'Custom State Architecture, Component Systems, SPA' },
      { name: 'FastAPI', role: 'Asynchronous REST APIs, Pydantic Models, Security Tokens' },
      { name: 'Tailwind CSS', role: 'Design Systems, Fluid Layouts, Modern Cyber UIs' },
      { name: 'PostgreSQL', role: 'Relational Database Schema Design, Query Optimization' }
    ]
  },
  {
    category: 'DevOps & Tooling',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', role: 'Version Control, Branch Strategies, Actions Workflows' },
      { name: 'Cloud Deployment', role: 'Vercel, Render, Railway Microservice Hosting' },
      { name: 'PowerShell / Bash', role: 'Automated Build Scaffolding & System Configuration' },
      { name: 'LaTeX & Overleaf', role: 'Technical Documentation & Academic Specification' }
    ]
  }
];

const MILESTONES_DATA = [
  {
    year: '2026',
    title: 'Smart India Hackathon (SIH 2026)',
    role: 'Lead Architect — Team "404 The Optimists"',
    description: 'Constructed TraceGraph to solve mule account identification (Problem Statement SIH26184) using cycle discovery in financial graphs.',
    tag: 'National Hackathon'
  },
  {
    year: '2026',
    title: 'Razorpay AI Buildathon',
    role: 'Backend & Risk Gateway Architect',
    description: 'Engineered SentinelAI for Track 2, validating payment webhooks against malicious entropy spikes and replay threats with sub-50ms execution.',
    tag: 'FinTech Buildathon'
  },
  {
    year: '2026',
    title: 'ALTS Ideathon & RAMP ESDP',
    role: 'Project Creator & Lead Developer',
    description: 'Conceptualized and deployed CareerPilot AI, presenting an automated roadmap platform to bridge the engineering education-to-industry gap.',
    tag: 'Ideathon Finalist'
  },
  {
    year: '2025 - 2029',
    title: 'B.Tech in Computer Science & Engineering',
    role: 'Autonomous Engineering Institution',
    description: 'Pursuing undergraduate CSE coursework focused on algorithms, distributed computing, database management, and autonomous systems.',
    tag: 'Academic Track'
  }
];

const playTone = (freq = 440, type = 'sine', duration = 0.05, enabled = false) => {
  if (!enabled || typeof window === 'undefined') return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may be restricted by autoplay policy
  }
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('cyan');
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeNav, setActiveNav] = useState('home');
  const [copyFeedback, setCopyFeedback] = useState('');
  
  const roles = [
    'Full-Stack Developer',
    'AI & Graph Systems Builder',
    'FastAPI & React Specialist',
    'Computer Science Undergraduate'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const theme = ACCENT_THEMES[currentTheme];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
        playTone(600, 'triangle', 0.08, audioEnabled);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [audioEnabled]);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(label);
    playTone(800, 'sine', 0.05, audioEnabled);
    setTimeout(() => setCopyFeedback(''), 2500);
  };

  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      playTone(520, 'sine', 0.04, audioEnabled);
    }
  };

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200 relative overflow-x-hidden">
      
      {/* Background radial glow */}
      <div 
        className="fixed top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ background: theme.primary }}
      />
      <div 
        className="fixed bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] pointer-events-none opacity-15 transition-all duration-700"
        style={{ background: '#7928ca' }}
      />
      
      {/* Background Cyber Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#090b10]/80 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-white shadow-lg transition-transform group-hover:scale-105 border border-white/20"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, #4f46e5)` }}
            >
              SD
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                SALEEM<span style={{ color: theme.primary }}>.DEV</span>
              </span>
              <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Software Engineer
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Stack' },
              { id: 'terminal', label: 'Terminal' },
              { id: 'milestones', label: 'Milestones' },
              { id: 'contact', label: 'Contact' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeNav === nav.id
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors"
              title="Quick Command Bar (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Jump</span>
              <kbd className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-white/10 text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => {
                const next = !audioEnabled;
                setAudioEnabled(next);
                if (next) playTone(700, 'sine', 0.08, true);
              }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
              title={audioEnabled ? 'Mute Sound FX' : 'Enable Cyber Sound FX'}
            >
              {audioEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-lg">
              {Object.keys(ACCENT_THEMES).map((thKey) => (
                <button
                  key={thKey}
                  onClick={() => {
                    setCurrentTheme(thKey);
                    playTone(650, 'sine', 0.04, audioEnabled);
                  }}
                  className={`w-4 h-4 rounded-full transition-transform ${
                    currentTheme === thKey ? 'scale-125 ring-2 ring-white/50' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ background: ACCENT_THEMES[thKey].primary }}
                  title={ACCENT_THEMES[thKey].name}
                />
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white border transition-all"
              style={{
                borderColor: theme.primary,
                backgroundColor: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      {commandPaletteOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-xl bg-[#0c1017] border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-3"
            style={{ boxShadow: `0 0 30px ${theme.glow}` }}
          >
            <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10">
              <Command className="w-4 h-4 text-cyan-400" />
              <input
                type="text"
                autoFocus
                placeholder="Jump to section (e.g. 'projects', 'stack', 'contact', 'terminal')..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const val = e.currentTarget.value.toLowerCase();
                    if (val.includes('proj')) scrollToSection('projects');
                    else if (val.includes('term')) scrollToSection('terminal');
                    else if (val.includes('stack') || val.includes('skill')) scrollToSection('skills');
                    else if (val.includes('milestone')) scrollToSection('milestones');
                    else if (val.includes('contact')) scrollToSection('contact');
                    else scrollToSection('home');
                    setCommandPaletteOpen(false);
                  }
                }}
              />
              <button 
                onClick={() => setCommandPaletteOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-2 text-xs font-mono text-slate-400">
              <div className="px-3 py-1.5 uppercase tracking-wider text-[10px] text-slate-500 font-semibold">
                Direct Navigation
              </div>
              {[
                { label: 'Featured Systems & Project Deep Dives', target: 'projects' },
                { label: 'Technical Stack & Engineering Tools', target: 'skills' },
                { label: 'Interactive Developer Terminal Console', target: 'terminal' },
                { label: 'Hackathons & Project Milestones', target: 'milestones' },
                { label: 'Direct Email & Collaboration Form', target: 'contact' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    scrollToSection(item.target);
                    setCommandPaletteOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </div>
              ))}
            </div>

            <div className="px-3 py-2 border-t border-white/10 flex justify-between items-center text-[11px] text-slate-500">
              <span>Press <kbd className="px-1 bg-white/10 rounded">ESC</kbd> to close</span>
              <span className="text-cyan-400">Saleem.dev Command Palette</span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]" />
            <span className="text-xs font-mono font-medium text-cyan-300">
              Saleem Dudekula • B.Tech CSE (2025 - 2029)
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Building High-Performance{' '}
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(90deg, ${theme.primary}, #818cf8, #c084fc)` }}
            >
              Web Systems &amp; AI Engines
            </span>
          </h1>

          <div className="h-8 mb-8 flex items-center justify-center font-mono text-lg sm:text-2xl text-slate-300">
            <span className="text-slate-500 mr-2">&gt;</span>
            <span className="font-semibold text-white">{displayedText}</span>
            <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block align-middle" />
          </div>

          <p className="max-w-2xl text-slate-400 text-sm sm:text-base mb-10 leading-relaxed">
            Specializing in resilient web applications, real-time verification gateways, and graph analysis pipelines. Finalist at the Smart India Hackathon 2026 and Razorpay AI Buildathon 2026.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: theme.primary,
                boxShadow: `0 0 20px ${theme.glow}`
              }}
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>View Systems &amp; Code</span>
            </button>

            <button
              onClick={() => scrollToSection('terminal')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Open Terminal Console</span>
            </button>

            <a
              href="https://github.com/saleem2005-d"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/5 border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Genuine Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            {[
              { title: 'National Hackathons', desc: 'SIH 2026 & Razorpay Buildathon Finalist', icon: Award },
              { title: 'Full-Stack Architecture', desc: 'FastAPI, React, TypeScript & PostgreSQL', icon: Code2 },
              { title: 'Domain Specialization', desc: 'Fraud Mitigation, Graph Traversal & Anomaly Scoring', icon: ShieldAlert }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <stat.icon className="w-6 h-6 mb-2" style={{ color: theme.primary }} />
                <span className="text-base font-bold text-white mb-1">{stat.title}</span>
                <span className="text-xs text-slate-400 font-medium">{stat.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              <Layers className="w-4 h-4" style={{ color: theme.primary }} />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Flagship Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-xl">
            {['All', 'AI & Graph Systems', 'FinTech & Security', 'AI & EdTech', 'Full Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  playTone(480, 'sine', 0.03, audioEnabled);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-white/15 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0c1017]/90 border border-white/10 hover:border-white/20 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${theme.bgBadge}`}>
                    {project.badge}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 flex items-center gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                {project.demoType === 'sentinel' && (
                  <SentinelSimulator audioEnabled={audioEnabled} theme={theme} />
                )}
                {project.demoType === 'graph' && (
                  <TraceGraphSimulator audioEnabled={audioEnabled} theme={theme} />
                )}
                {project.demoType === 'career' && (
                  <CareerPilotPreview />
                )}
                {project.demoType === 'campus' && (
                  <CampusConnectPreview />
                )}

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-xs font-medium">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>System Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => copyToClipboard(`git clone ${project.githubUrl}`, 'Clone command copied')}
                      className="text-slate-400 hover:text-white flex items-center gap-1"
                      title="Copy clone command"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Clone</span>
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal Inspector */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0e131d] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${theme.bgBadge}`}>
                {activeModalProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {activeModalProject.title} — Architectural Breakdown
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {activeModalProject.tagline}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Key Engineering Contributions
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Tooling &amp; Dependencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
              >
                <span>Browse Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack Matrix */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
            <Cpu className="w-4 h-4" style={{ color: theme.primary }} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Core Engineering Stack
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Practical development across backend services, algorithmic evaluation, frontend interfaces, and containerized deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 rounded-2xl bg-[#0c1017]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-lg">{group.icon}</span>
                  <span>{group.category}</span>
                </h3>

                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-sm font-semibold text-slate-200">
                        {skill.name}
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        {skill.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive CLI Terminal */}
      <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Developer Sandbox</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Saleem Dudekula CLI Console
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto mt-2">
            Type <span className="text-cyan-300 font-mono">help</span>, <span className="text-cyan-300 font-mono">projects</span>, <span className="text-cyan-300 font-mono">skills</span>, <span className="text-cyan-300 font-mono">contact</span>, or <span className="text-cyan-300 font-mono">clear</span>.
          </p>
        </div>

        <InteractiveTerminal audioEnabled={audioEnabled} theme={theme} />
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
            <Award className="w-4 h-4" style={{ color: theme.primary }} />
            <span>Experience &amp; Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Hackathons &amp; Academic Timeline
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-28 space-y-12">
          {MILESTONES_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              <div className="hidden sm:block absolute -left-28 top-0.5 text-xs font-mono font-bold text-slate-400 text-right w-20">
                {item.year}
              </div>

              <div 
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[#090b10] bg-slate-600 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: theme.primary }}
              />

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme.bgBadge}`}>
                    {item.tag}
                  </span>
                </div>
                <div className="text-xs font-mono text-cyan-400 mb-2">
                  {item.role}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mt-2">
            Interested in hiring, collaborating on an engineering project, or discussing hackathon systems? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="p-5 rounded-2xl bg-[#0c1017] border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Verified Socials &amp; Mail
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => copyToClipboard('saleemdudekula655@gmail.com', 'Email copied to clipboard!')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-left group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">saleemdudekula655@gmail.com</div>
                      <div className="text-[10px] text-slate-400">Click to copy email address</div>
                    </div>
                  </div>
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </button>

                <a
                  href="https://www.linkedin.com/in/saleem-dudekula-648677325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-left group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">Saleem Dudekula</div>
                      <div className="text-[10px] text-slate-400">linkedin.com/in/saleem-dudekula-648677325</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>

                <a
                  href="https://github.com/saleem2005-d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-left group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">saleem2005-d</div>
                      <div className="text-[10px] text-slate-400">github.com/saleem2005-d</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {copyFeedback && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>{copyFeedback}</span>
              </div>
            )}
          </div>

          <div className="md:col-span-3">
            <ContactForm
              theme={theme}
              audioEnabled={audioEnabled}
            />
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Engineered with React, Vite &amp; Tailwind CSS.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Gateway Online</span>
          </span>
          <span>© 2026 Saleem Dudekula. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}

function InteractiveTerminal({ audioEnabled, theme }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Saleem Dudekula OS Terminal [v3.4.0]' },
    { type: 'output', text: 'Type "help" to view available developer commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim();
      const lower = cmd.toLowerCase();
      playTone(550, 'square', 0.04, audioEnabled);

      const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

      switch (lower) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available commands:\n  help        - Display command manifest\n  skills      - Enumerate technical competencies\n  projects    - List active flagship projects\n  whoami      - Print developer identity\n  status      - Current academic & development status\n  contact     - Display official communication channels\n  sudo hire-me- Fast-track direct outreach\n  clear       - Clear screen history`
          });
          break;
        case 'whoami':
          newHistory.push({
            type: 'output',
            text: 'Saleem Dudekula | B.Tech CSE (2025-2029)\nFull-Stack Engineer & AI Systems Developer specializing in real-time fraud mitigation and scalable web architectures.'
          });
          break;
        case 'status':
          newHistory.push({
            type: 'output',
            text: 'STATUS: ACTIVE\nFocus: Software Engineering, Graph Algorithms, Microservice APIs\nLocation: Andhra Pradesh, India.'
          });
          break;
        case 'projects':
          newHistory.push({
            type: 'output',
            text: '1. TraceGraph    - Autonomous mule account identification for Smart India Hackathon\n2. SentinelAI    - Real-time payment webhook risk engine for Razorpay AI Buildathon\n3. CareerPilotAI - Context-aware career curriculum generator\n4. CampusConnect - Unified campus academic sync portal'
          });
          break;
        case 'skills':
          newHistory.push({
            type: 'output',
            text: 'Languages: Python, TypeScript, JavaScript, C, C++, Java, SQL\nFrameworks: FastAPI, React, Node.js, Express, Tailwind CSS\nDatabases & Tools: PostgreSQL, Git, GitHub, Docker, Render, Vercel'
          });
          break;
        case 'contact':
          newHistory.push({
            type: 'output',
            text: 'Email: saleemdudekula655@gmail.com\nLinkedIn: https://www.linkedin.com/in/saleem-dudekula-648677325\nGitHub: https://github.com/saleem2005-d'
          });
          break;
        case 'sudo hire-me':
          newHistory.push({
            type: 'output',
            text: '[ACCESS GRANTED] Priority connection open! Send an email directly to saleemdudekula655@gmail.com to start the conversation.'
          });
          break;
        case 'clear':
          setHistory([]);
          setInputVal('');
          return;
        case '':
          break;
        default:
          newHistory.push({
            type: 'output',
            text: `Command not recognized: "${cmd}". Type "help" to view valid commands.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal('');
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full rounded-2xl bg-[#090b10] border border-white/20 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      <div className="px-4 py-3 bg-[#0f141f] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-mono">saleem@terminal: ~ (zsh)</span>
        </div>
        <button
          onClick={() => setHistory([])}
          className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-white/5"
        >
          Clear
        </button>
      </div>

      <div className="p-4 sm:p-6 h-72 sm:h-80 overflow-y-auto space-y-2.5 text-slate-300">
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap leading-relaxed">
            {line.type === 'input' ? (
              <span className="text-cyan-400 font-semibold">{line.text}</span>
            ) : (
              <span className="text-slate-300">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <div className="p-3 bg-[#0a0d14] border-t border-white/10 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="type a command (e.g. 'help', 'projects', 'contact')..."
          className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-slate-600"
        />
      </div>
    </div>
  );
}

function SentinelSimulator({ audioEnabled, theme }) {
  const [testing, setTesting] = useState(false);
  const [score, setScore] = useState(null);

  const runSimulation = () => {
    setTesting(true);
    playTone(500, 'triangle', 0.05, audioEnabled);

    setTimeout(() => {
      const generatedRisk = (Math.random() * 0.15 + 0.02).toFixed(2);
      setScore(generatedRisk);
      setTesting(false);
      playTone(750, 'sine', 0.08, audioEnabled);
    }, 800);
  };

  return (
    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
          <span>Webhook HMAC Verifier</span>
        </span>
        <button
          onClick={runSimulation}
          disabled={testing}
          className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
        >
          {testing ? <RotateCcw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
          <span>{testing ? 'Verifying...' : 'Fire Test Payload'}</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px] bg-white/[0.02] p-2 rounded border border-white/5">
        <div>
          <span className="text-slate-500">Latency: </span>
          <span className="text-emerald-400 font-bold">{testing ? '...' : '34ms'}</span>
        </div>
        <div>
          <span className="text-slate-500">Risk Score: </span>
          <span className="text-cyan-300 font-bold">{score !== null ? `${score} / 1.00` : 'Ready'}</span>
        </div>
      </div>
    </div>
  );
}

function TraceGraphSimulator({ audioEnabled }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [hopsFound, setHopsFound] = useState(4);

  const scanGraph = () => {
    setAnalyzing(true);
    playTone(420, 'sine', 0.05, audioEnabled);
    setTimeout(() => {
      setHopsFound(Math.floor(Math.random() * 3) + 3);
      setAnalyzing(false);
      playTone(680, 'sine', 0.06, audioEnabled);
    }, 850);
  };

  return (
    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 flex items-center gap-1.5">
          <GitBranch className="w-3.5 h-3.5 text-purple-400" />
          <span>Graph Cycle Smurf Tracer</span>
        </span>
        <button
          onClick={scanGraph}
          disabled={analyzing}
          className="px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
        >
          {analyzing ? <RotateCcw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
          <span>{analyzing ? 'Traversing...' : 'Trace Cycle Chains'}</span>
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] bg-white/[0.02] p-2 rounded border border-white/5">
        <span className="text-slate-400">Smurfing Chain Depth:</span>
        <span className="text-purple-300 font-bold">{analyzing ? 'Traversing...' : `${hopsFound} Layers Identified`}</span>
      </div>
    </div>
  );
}

function CareerPilotPreview() {
  return (
    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between text-slate-400 mb-1">
        <span className="flex items-center gap-1.5">
          <BrainCircuit className="w-3.5 h-3.5 text-emerald-400" />
          <span>Skill Gap Engine</span>
        </span>
        <span className="text-emerald-400 font-bold">Analysis Complete</span>
      </div>
      <div className="text-[11px] text-slate-500">
        Roadmap generated: +FastAPI Async Concurrency, +Graph Schemas
      </div>
    </div>
  );
}

function CampusConnectPreview() {
  return (
    <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between text-slate-400 mb-1">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Database &amp; Profile Sync</span>
        </span>
        <span className="text-cyan-300 font-bold">Online (Render)</span>
      </div>
      <div className="text-[11px] text-slate-500">
        Full CRUD integration with PostgreSQL and automated environment setup.
      </div>
    </div>
  );
}

function ContactForm({ theme, audioEnabled }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setError(false);
    playTone(600, 'sine', 0.05, audioEnabled);

    try {
      // Direct Web3Forms submission routing straight to your email
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a268a735-a48d-4cb0-a88a-cf889b7b7a69',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'saleemdudekula655@gmail.com',
          subject: `Portfolio Contact from ${formData.name}`
        })
      });

      if (response.ok) {
        setSent(true);
        playTone(900, 'sine', 0.1, audioEnabled);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 6000);
      } else {
        // Fallback open mail client directly
        window.location.href = `mailto:saleemdudekula655@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      }
    } catch (err) {
      window.location.href = `mailto:saleemdudekula655@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[#0c1017] border border-white/10 space-y-4">
      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1">Your Name / Organization</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Alex Morgan or Tech Solutions"
          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1">Message / Inquiry</label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Hi Saleem, we'd like to discuss an engineering role / collaboration..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full py-3 rounded-xl font-bold text-sm text-black shadow-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-98"
        style={{
          backgroundColor: theme.primary,
          boxShadow: `0 0 15px ${theme.glow}`
        }}
      >
        {sending ? (
          <>
            <RotateCcw className="w-4 h-4 animate-spin text-black" />
            <span>Sending Message...</span>
          </>
        ) : sent ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>Message Dispatched to Saleem's Inbox!</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-black" />
            <span>Send Direct Message</span>
          </>
        )}
      </button>
    </form>
  );
}
