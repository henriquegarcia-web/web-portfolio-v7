import React from 'react'

import * as S from './styles'
import { ProjectCard as ProjectCardComponent, SectionHeader } from '@/components'
import { IProject } from '@/utils/types'

interface ProjectsSectionProps {
  data: IProject[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  return (
    <S.ProjectsSection id="projects">
      <SectionHeader
        mainTitle="Projetos"
        backgroundText="Projetos"
        subtitle="Alguns dos meus trabalhos recentes"
      />

      <S.ProjectsGrid>
        {data.map((project) => (
          <ProjectCardComponent key={project.id} project={project} />
        ))}
      </S.ProjectsGrid>
    </S.ProjectsSection>
  )
}

export default ProjectsSection
