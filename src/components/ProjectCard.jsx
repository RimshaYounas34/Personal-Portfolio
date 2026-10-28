// ProjectCard.jsx - ek project ka card
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './SocialIcons.jsx'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        {/* Screenshot ho to dikhao, warna placeholder jise baad mein replace kar sakti hain */}
        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} />
        ) : (
          <div className="placeholder" role="img" aria-label={`Placeholder image for ${project.title}`}>
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <span className="project-badge">{project.year}</span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-text">{project.description}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-footer">
          {/* Link ho to asli link, warna disabled text */}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
              Live Demo <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="live-link inactive">Live Demo (link needed)</span>
          )}

          {project.codeUrl ? (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`View code for ${project.title}`}>
              <GithubIcon />
            </a>
          ) : (
            <span className="icon-btn inactive" title="Code link needed" aria-label="Code link needed"><GithubIcon /></span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
