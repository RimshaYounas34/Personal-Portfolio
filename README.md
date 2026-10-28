# Rimsha Younas - Portfolio (React + Vite)

## Run karne ke commands
```
npm install
npm run dev
```
Browser mein `http://localhost:5173` kholein. Build check ke liye: `npm run build`.

## Folder structure
```
public/            -> Rimsha_Younas_Resume.pdf, rimsha.jpg (photo), projects/ (screenshots)
src/
  data.js          -> SAB personal info, projects, skills, experience yahan hai
  index.css        -> poora design (colors upar :root mein)
  App.jsx          -> sections ki list
  components/      -> Navbar, Footer, ProjectCard, SectionTitle, SocialIcons
  sections/        -> Hero, About, Education, Skills, Projects, Experience, Business, Contact
```

## Kya kahan badalna hai
- Email, phone, links, title: `src/data.js` -> `personal`
- Project links: `src/data.js` -> `projects` (liveUrl / codeUrl khali hon to disabled button dikhta hai)
- Project screenshot: image `public/projects/` mein rakhein, phir `image: '/projects/naam.png'` likhein
- Photo: `public/rimsha.jpg` ko apni behtar quality ki photo se replace karein (same naam)
- Resume: `public/Rimsha_Younas_Resume.pdf` ko replace karein (same naam)
- Colors: `src/index.css` ke shuru mein `:root`
- Hero ka text: `src/sections/Hero.jsx`

## Contact form
Form sirf validation karta hai. Koi email service connected nahi hai, is liye message send nahi hota;
valid hone par "Open in email app" button aata hai. Asli sending ke liye EmailJS ya Formspree jaisi service baad mein jod sakti hain.

## Vercel par deploy
1. Project GitHub par push karein.
2. vercel.com par "Add New Project" -> apni repo select karein.
3. Framework "Vite" khud detect hoga (Build: `npm run build`, Output: `dist`). "Deploy" dabayein.
4. Aage har `git push` par site khud update ho jayegi.

## Design notes
- Dark/light toggle: `src/App.jsx` (isDark) aur colors `src/index.css` ke `:root` / `[data-theme='dark']`
- Shuru ka intro screen: `src/components/Intro.jsx` (ESC se skip). Hatana ho to App.jsx se `<Intro />` hata dein.
- Hero ke chhote stats (4 Projects, 2 Internships, CGPA): `src/sections/Hero.jsx` mein `stats`
