import roshaniImg from "../assets/roshani.jpg";
import sswImg from "../assets/ssw.png";
import ipodImg from "../assets/Screenshot 2025-08-17 192803.png";
import ppf from "../assets/pf.png";

export const profile = {
  name: "Roshani Gaund",
  role: "Full‑Stack Developer",
  summary:
    "I’m a dedicated, quick‑learning developer specializing in building elegant, accessible web experiences. I love node.js, React, Node, and clean UI.",
  location: "India",
  avatar: roshaniImg,
  mail: "roshanigaund0586@gmail.com",
  phone: "+91 8303914196",
  socials: [
    { label: "GitHub", href: "https://github.com/roshani-gaund" },
    { label: "LinkedIn", href: "https://linkedin.com/in/roshani-gaund-0a8152306" }
    
  ]
};

export const skills = [
  "HTML5", "CSS3", "JavaScript",  "React", "Redux",
  "Node.js", "Express", "MongoDB", "Tailwind CSS", "Bootstrap", "Git",  
];



export const projects = [
  {
    title: "Sweet shop web application",
    summary: "A full-stack web app for managing a sweet shop with user authentication, CRUD operations,and responsive design.",
    image: sswImg,
    tags: ["React", "Node", "MongoDB", "Express", "JWT"],
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "#" }
    ]
  },
  {
    title: "IPod UI application",
    summary: "Built a responsive iPod UI React Project ,featuring dynamic navigation ,audio playback and interactive menus .",
    image: ipodImg,
    tags: ["React", "Express", "MongoDB","css"],
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "#" }
    ]
  },
  {
    title: "Portfolio website",
    summary: "A dynamic portfolio website using react ",
    image: ppf,
    tags: ["React", "CSS", "JavaScript","Tailwind CSS"],
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "#" }
    ]
  },
  
];

export const education = [
  {
    school: "MCRP University",
    degree: "BCA (Web Development)",
    period: "2022 — 2025",
    details: ["completed my BCA WITH 8.67 CGPA" ,

    ]
  },
  {
    school: "Maharana pratap polytechnic",
    degree: "Diploma in electrical enginnering",
    period: "2019 — 2021",
    details: ["Scored 80% in diploma with 8.67 CGPA"]
  },
  {
    school: "Modern Academy Senior Secondary School",
    degree: "high school",
    period: "2019",
    details: ["Scored 85.5% "]
  }
];

export const certifications = [
  { name: "Full‑Stack Web Development — MCRP", year: "2024" }
  
];


