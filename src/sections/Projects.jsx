// Projects.jsx - Featured Projects (data.js ke projects array se cards banate hain)
import { projects } from '../data.js'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle label="Selected Work" title="Featured Projects" subtitle="Some of the websites and applications I have built." />

        <div className="grid grid-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
