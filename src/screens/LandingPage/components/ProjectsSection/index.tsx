import React from 'react'

import { IProject } from '@/utils/types'
import {
  Container,
  ProjectCard,
  ProjectDescription,
  ProjectFeatures,
  ProjectImage,
  ProjectLinks,
  ProjectTechnologies,
  ProjectTitle,
  SectionTitle,
  ProjectsGrid,
} from './styles'

interface ProjectsSectionProps {
  data: IProject[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const getProjectColor = (index: number) => {
    const colors = ['#64ffda', '#ff6b6b', '#ffd93d', '#ff9ff3', '#54a0ff', '#5f27cd']
    return colors[index % colors.length]
  }

  return (
    <Container id="projects">
      <SectionTitle>
        <span>Featured Projects</span>
        <div className="underline" />
        <p>Some of my recent work and side projects</p>
      </SectionTitle>

      <ProjectsGrid>
        {data.map((project, index) => (
          <ProjectCard key={project.id} color={getProjectColor(index)}>
            <ProjectImage>
              <div className="browser-header">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-url">{project.liveUrl || 'localhost:3000'}</div>
              </div>
              <div className="browser-content">
                <div className="project-preview">
                  <div className="preview-header">
                    <h3>{project.title}</h3>
                    <div className="status-badge">
                      {project.status === 'completed' ? '✅' : '🚧'}
                    </div>
                  </div>
                  <div className="preview-content">
                    <p>{project.description}</p>
                    <div className="tech-preview">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ProjectImage>

            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>

            <ProjectFeatures>
              {project.features.slice(0, 3).map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ProjectFeatures>

            <ProjectTechnologies>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </ProjectTechnologies>

            <ProjectLinks>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  )
}

export default ProjectsSection
