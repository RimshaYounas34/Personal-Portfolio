
import {
  Code2,
  Server,
  Database,
  Wrench,
  Briefcase,
  Search,
  MessagesSquare,
  ClipboardList,
  Puzzle,
  BookOpen,
} from 'lucide-react'

// ---------- Personal Information ----------
export const personal = {
  name: 'Rimsha Younas',
  title: 'MERN Stack Developer | Business Developer',
  email: 'rimshayounas186@gmail.com',
  phone: '0311-1734194',
  phoneLink: '+923111734194',
  whatsapp: '923111734194',
  location: 'Samundri, Faisalabad, Pakistan',

  linkedin: 'https://linkedin.com/in/rimsha-younas',
  github: 'https://github.com/RimshaYounas34',

  resume: '/Rimsha_Younas_Resume.pdf',
  photo: '/rimsha.jpg',
  portrait: '/rimsha-portrait.jpg',
}

// ---------- Navigation Links ----------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Business', href: '#business' },
  { label: 'Contact', href: '#contact' },
]

// ---------- Education ----------
export const education = {
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  institution:
    'Government Graduate College Samundri, Sub Campus GCUF',
  duration: '2021 – 2025',
  cgpa: '3.42',
}

// ---------- Experience ----------
export const experiences = [
  {
    role: 'Web Developer (Remote Intern)',
    company: 'Tech Kam Software House, Faisalabad',
    duration: 'March 2026 – Present',
    points: [
      'Working remotely as a Web Developer.',
      'Developing and maintaining websites using MERN stack technologies.',
      'Creating responsive website interfaces and working on practical web development projects.',
    ],
  },
  {
    role: 'CM IT Internship Program 2026',
    company: 'Peak Solutions, Balash Camp, Faisalabad',
    duration: 'May 2026 – Present',
    points: [
      'Working across business development and web development.',
      'Learning about business opportunities, market research, and client requirements.',
      'Contributing to practical projects and professional tasks.',
      'Developing technical, communication, and business-related skills.',
    ],
  },
]

// ---------- Projects ----------
// All project images are stored in public/projects/
// Use the exact image filename and extension.
// Example: public/projects/techkaam.png
// Its public URL will be: /projects/techkaam.png

export const projects = [
  // 1. TechKaam Website
  {
    title: 'TechKaam Website',
    year: '2026',
    description:
      'A responsive business website for TechKaam Software Solutions, showcasing software services and providing a professional online presence.',
    tags: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Vercel',
      'GitHub',
    ],
    liveUrl: 'https://techkaam-website.vercel.app/',
    codeUrl: 'https://github.com/RimshaYounas34/Techkaam-website',
    image: '/projects/techkaam.png',
  },

  // 2. Adeeka Fabrics Website
  {
    title: 'Adeeka Fabrics Website',
    year: '2026',
    description:
      'An e-commerce website for a clothing brand, featuring a responsive interface, product-focused presentation, and online shopping functionality.',
    tags: [
      'MERN Stack',
      'React.js',
      'E-commerce',
      'Responsive Design',
      'Product Management',
    ],
    liveUrl: 'https://adeeka-fabrics.vercel.app/',
    codeUrl: 'https://github.com/RimshaYounas34/adeeka-fabrics',
    image: '/projects/adeeka-fabrics.png',
  },

  // 3. Shopify Store
  {
    title: 'Shopify Store',
    year: '2026',
    description:
      'An online store created using Shopify, featuring product listings, collections, and a customized storefront for an improved shopping experience.',
    tags: [
      'Shopify',
      'E-commerce',
      'Product Listings',
      'Store Customization',
    ],
    liveUrl: 'https://shopora-seven-tau.vercel.app/',
    codeUrl: 'https://github.com/RimshaYounas34/shopora',
    image: '/projects/shopify-store.png',
  },

  // 4. Blogging Website - Final Year Project
  {
    title: 'Blogging Website',
    year: '2025',
    description:
      'A full-stack blogging platform developed as my final-year project, featuring user authentication, CRUD operations, category management, and comments.',
    tags: [
      'MERN Stack',
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Authentication',
      'CRUD Operations',
    ],
    liveUrl: '',
    codeUrl: 'https://github.com/RimshaYounas34/Blogging-Website',
    image: '/projects/blogging-website.png',
  },

  // 5. Global IT Assets Website
  {
    title: 'Global IT Assets Website',
    year: '2026',
    description:
      'A responsive business website developed to showcase IT assets and services, with a professional interface and an email-enabled contact form.',
    tags: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'EmailJS',
      'Responsive Design',
    ],
    liveUrl: 'https://globaltail-it-asset-solutions.vercel.app/',
    codeUrl: 'https://github.com/RimshaYounas34/Globaltail-IT-Asset-Solutions',
    image: '/projects/global-it-assets.png',
  },

  // 6. AI-Powered Dream House Planner
  {
    title: 'AI-Powered Dream House Planner',
    year: '2026',
    description:
      'An AI-powered house planning application that helps users create floor plans, explore multi-floor layouts, work with 2D and 3D house designs, use design templates, and receive AI-assisted planning guidance.',
    tags: [
      'MERN Stack',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AI Integration',
      '2D Floor Planning',
      '3D Visualization',
    ],
    liveUrl: 'https://dream-house-lilac.vercel.app/',
    codeUrl: 'https://github.com/RimshaYounas34/Dream-House',
    image: '/projects/dream-house-planner.png',
  },
]

// ---------- Skills ----------
export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6)',
      'React.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'Supabase'],
  },
  {
    title: 'Tools and Technologies',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Railway',
      'VS Code',
      'Postman',
      'Responsive Web Design',
    ],
  },
]

// ---------- Business Development Areas ----------
export const businessAreas = [
  {
    icon: Briefcase,
    title: 'Business Development',
    text: 'Learning how businesses identify growth opportunities and develop effective strategies through my internship experience at Peak Solutions.',
  },
  {
    icon: Search,
    title: 'Market Research',
    text: 'Understanding market trends, competitors, and audience needs to help identify opportunities for digital solutions.',
  },
  {
    icon: MessagesSquare,
    title: 'Client Communication',
    text: 'Understanding client requirements and communicating ideas clearly and professionally.',
  },
  {
    icon: ClipboardList,
    title: 'Requirements Analysis',
    text: 'Understanding business needs and translating them into clear website features and project requirements.',
  },
  {
    icon: Puzzle,
    title: 'Digital Solutions',
    text: 'Building websites and online stores that address business needs and support a professional online presence.',
  },
  {
    icon: BookOpen,
    title: 'Problem-Solving and Learning',
    text: 'Continuously improving technical skills, learning new technologies, and exploring effective business strategies.',
  },
]
