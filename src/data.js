// data.js - Apni saari information aap yahin change kar sakti hain.
// Baaki components is file se data le kar screen par dikhate hain.
import { Code2, Server, Database, Wrench, Briefcase, Search, MessagesSquare, ClipboardList, Puzzle, BookOpen } from 'lucide-react'

// ---------- Personal information ----------
export const personal = {
  name: 'Rimsha Younas',
  title: 'MERN Stack Developer | Business Developer',
  email: 'rimshayounas186@gmail.com',
  phone: '0311-1734194',
  phoneLink: '+923111734194', // phone link ke liye (country code ke saath)
  whatsapp: '923111734194', // WhatsApp number: country code ke saath, + aur dash ke baghair
  location: 'Samundri, Faisalabad, Pakistan',
  linkedin: 'https://linkedin.com/in/rimsha-younas',
  github: 'https://github.com/RimshaYounas34',
  resume: '/Rimsha_Younas_Resume.pdf', // file public/ folder mein hai
  photo: '/rimsha.jpg', // chhoti gol photo (navbar/footer) - public/ folder mein
  portrait: '/rimsha-portrait.jpg', // hero ki badi photo
}

// ---------- Navigation links ----------
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
  institution: 'Government Graduate College Samundri, Sub Campus GCUF',
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
      'Working on responsive website interfaces and practical web development tasks.',
    ],
  },
  {
    role: 'CM IT Internship Program 2026',
    company: 'Peak Solutions, Balash Camp, Faisalabad',
    duration: 'May 2026 – Present',
    points: [
      'Domains: Business Development and Web Development.',
      'Learning and contributing across business development and web development.',
      'Gaining practical experience in real-world projects.',
      'Developing professional, technical, and business-related skills.',
    ],
  },
]

// ---------- Projects ----------
// liveUrl ya codeUrl khali ('') ho to button disabled "Add link" ban jata hai.
// Link mil jaye to bas yahan paste kar dein.
// image: screenshot ka path, jaise '/projects/techkam.png' (file public/projects/ mein rakhein).
export const projects = [
  {
    title: 'TechKam Website',
    year: '2026',
    description:
      'A responsive business website for Tech Kam Software House, showcasing software services and providing a professional online presence.',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Vercel', 'GitHub'],
    liveUrl: 'https://techkaam-website.vercel.app/',
    codeUrl: 'https://github.com/RimshaYounas34', // abhi sirf GitHub profile hai; repo ka link mile to badal dein
    image: '',
  },
  {
    title: 'Adeeka Fabrics Website',
    year: '2026',
    description:
      'An e-commerce website for a clothing brand with a responsive design, product-focused presentation, and product management and contact features.',
    tags: ['E-commerce', 'Responsive Design'], // jo technologies use ki hain wo yahan add karein
    liveUrl: '', // public live link mile to yahan paste karein
    codeUrl: '',
    image: '',
  },
  {
    title: 'Shopify Store',
    year: '2026',
    description:
      'An e-commerce store created using Shopify, featuring product listings, collections, and store customization.',
    tags: ['Shopify', 'E-commerce', 'Store Customization'],
    liveUrl: '', // store ka link yahan paste karein
    codeUrl: '', // Shopify store ka code repo nahi hota, khali rehne dein
    image: '',
  },
  {
    title: 'Blogging Website (Final Year Project)',
    year: '2025',
    description:
      'A full-stack blogging platform created as my eighth-semester final-year project, with user authentication, CRUD operations, category management, and comments.',
    tags: ['MERN Stack', 'Authentication', 'CRUD', 'Railway'],
    liveUrl: '', // Railway ka link yahan paste karein
    codeUrl: '', // GitHub repo ka link yahan paste karein
    image: '',
  },
]

// ---------- Skills ----------
export const skillGroups = [
  { title: 'Frontend Development', icon: Code2, skills: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend Development', icon: Server, skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'] },
  { title: 'Database', icon: Database, skills: ['MongoDB'] },
  { title: 'Tools and Technologies', icon: Wrench, skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'VS Code', 'Postman', 'Responsive Web Design'] },
]

// ---------- Business development areas ----------
export const businessAreas = [
  { icon: Briefcase, title: 'Business Development', text: 'Learning how businesses find opportunities and grow, through my internship at Peak Solutions.' },
  { icon: Search, title: 'Market Research', text: 'Understanding the market and the audience before deciding what a website should offer.' },
  { icon: MessagesSquare, title: 'Client Communication', text: 'Listening carefully and explaining technical work in simple, clear words.' },
  { icon: ClipboardList, title: 'Understanding Requirements', text: 'Turning business needs into clear web features before writing any code.' },
  { icon: Puzzle, title: 'Digital Solutions', text: 'Building websites and online stores that solve a real business need.' },
  { icon: BookOpen, title: 'Problem-Solving and Learning', text: 'Continuously learning web development and business strategies.' },
]
