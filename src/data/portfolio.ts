import { Mail, Code, Brain, BookOpen, Target, Palette, Music, Users, HeartHandshake, Lightbulb, Sparkles, ArrowRight, ExternalLink, Download } from "lucide-react";

export const socialLinks = {
  github: "https://github.com/tanu234234",
  linkedin: "https://www.linkedin.com/in/tanushree-k-a-609966359/",
  email: "mailto:tanushree9663@gmail.com",
};

export const navItems = ["Home", "About", "Journey", "Skills", "Projects", "Education", "Certificates", "Contact"];

export const typingTexts = ["Java Learner", "DSA Enthusiast", "Continuous Learner", "Problem Solver"];

export const currentLearning = ["Java", "Data Structures & Algorithms", "SQL", "JavaScript"];
export const currentBuilding = [
  { name: "NextGen Bankruptcy Prediction", desc: "A Machine Learning-based bankruptcy prediction system" },
  { name: "Swaram Music Streaming Web Application", desc: "Multilingual music streaming platform" },
];

export const aboutParagraph = "I am a Computer Science and Business Systems undergraduate passionate about Java, Data Structures & Algorithms, and Web Development. I enjoy solving real-world problems through technology while continuously improving my technical skills by building practical projects.";
export const drives = ["Continuous Learning", "Problem Solving", "Curiosity", "Growth Mindset", "Communication"];
export const belief = "\"I believe growth comes from consistency, curiosity, and the willingness to keep learning—both in technology and in life.\"";

export const journeySteps = [
  "Learning Java",
  "Strengthening DSA",
  "Learning SQL",
  "Learning JavaScript",
  "Backend Development",
  "Placement Preparation",
];

export const skills = [
  { category: "Programming", items: ["Java"], icon: Code },
  { category: "Frontend", items: ["HTML", "CSS"], icon: Palette },
  { category: "Learning", items: ["JavaScript", "SQL"], icon: BookOpen },
  { category: "Backend", items: ["Currently Exploring"], icon: Brain },
  { category: "Tools", items: ["GitHub", "Git", "VS Code", "Eclipse", "Canva"], icon: Sparkles },
];

export const strengths = [
  { name: "Communication", icon: Users },
  { name: "Quick Learner", icon: Brain },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Curiosity", icon: Target },
  { name: "Creativity", icon: Palette },
  { name: "Adaptability", icon: Sparkles },
  { name: "Team Collaboration", icon: Users },
  { name: "Continuous Learning", icon: BookOpen },
];

export const projects = [
  {
    title: "NextGen Bankruptcy Prediction",
    status: "Ongoing",
    description: "A Machine Learning-based bankruptcy prediction system that estimates the probability of future company bankruptcy using financial indicators while providing meaningful business insights.",
    problem: "Traditional bankruptcy prediction methods lack accuracy and fail to provide actionable business insights from financial data.",
    solution: "Developed a machine learning model that analyzes financial indicators to estimate bankruptcy probability with higher accuracy.",
    techStack: ["Machine Learning", "Python", "Financial Analytics"],
    features: ["Bankruptcy probability estimation", "Financial indicator analysis", "Business insight generation", "Real-time prediction"],
    github: socialLinks.github,
    live: "#",
    future: ["Deep learning integration", "Real-time financial data feeds", "Industry-specific models"],
  },
  {
    title: "Swaram",
    subtitle: "Multilingual Music Streaming Web Application",
    description: "Supports multilingual music playback, playlists, lyrics, and regional language experiences.",
    problem: "Lack of accessible music streaming platforms that cater to multilingual and regional language audiences.",
    solution: "Built a web application that supports multiple languages with regional music content and an intuitive interface.",
    techStack: ["Web Development", "JavaScript", "APIs"],
    features: ["Multilingual music playback", "Playlist management", "Lyrics display", "Regional language support"],
    github: socialLinks.github,
    live: "#",
    future: ["Offline playback", "AI-based recommendations", "Social features"],
  },
  {
    title: "HealBee",
    subtitle: "AI-assisted Healthcare Application Prototype",
    description: "AI-assisted healthcare application prototype focused on accessibility and user experience.",
    problem: "Healthcare applications often lack accessibility features and intuitive user experiences for diverse users.",
    solution: "Created an AI-assisted healthcare prototype emphasizing accessibility and seamless user experience design.",
    techStack: ["UI/UX Design", "Prototyping", "AI Integration"],
    features: ["AI-assisted health insights", "Accessibility-first design", "User-friendly interface", "Prototype testing"],
    github: socialLinks.github,
    live: "#",
    future: ["Full development", "Medical professional integration", "Mobile app version"],
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  branch: "Computer Science and Business Systems",
  college: "K S School of Engineering and Management",
  affiliation: "VTU Affiliated",
  cgpa: "8.65 / 10",
  cgpaNote: "(Up to 6th Semester)",
  graduation: "2027",
  journey: "My academic journey began in the PCMB stream, where I developed strong analytical and logical thinking skills.",
  journeyMore: "As I explored technology, I discovered my passion for Computer Science and Business Systems. Since then, I have focused on learning Java, Data Structures & Algorithms, Web Development, and building practical software projects.",
  timeline: [
    { label: "10th Standard", value: "86.7%" },
    { label: "Pre-University (PCMB)", value: "86.66%" },
    { label: "Bachelor of Engineering", value: "CGPA 8.65 (Expected 2027)" },
  ],
};

export const certificates = [
  { name: "Microsoft AI Skills Fest", issuer: "Microsoft" },
  { name: "CODTECH IT Solutions", subtitle: "4 Week Internship" },
  { name: "Be10X AI Workshop" },
  { name: "Innovathon" },
  { name: "National Financial Literacy Quiz 2026", subtitle: "NISM & SEBI" },
];

export const beyondScreen = [
  { title: "Painting & Sketching", desc: "Expressing creativity through visual art", icon: Palette },
  { title: "Reading Novels", desc: "Getting lost in stories and imagination", icon: BookOpen },
  { title: "Singing & Dancing", desc: "Finding joy in music and movement", icon: Music },
  { title: "Mentoring Siblings", desc: "Helping with homework and learning together", icon: Users },
];

export const iconMap = { Code, Brain, BookOpen, Target, Palette, Music, Users, HeartHandshake, Lightbulb, Sparkles, ArrowRight, ExternalLink, Download, Mail };
