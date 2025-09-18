import React, { useState } from 'react'

import * as S from './styles'
import { ProjectCard as ProjectCardComponent, SectionHeader, Button } from '@/components'
import { IProject } from '@/utils/types'
import { useSmoothScroll } from '@/hooks'

interface ProjectsSectionProps {
  data: IProject[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const [showAll, setShowAll] = useState(false)
  const { scrollToElement } = useSmoothScroll({ duration: 10 })

  const displayedProjects = showAll ? data : data.slice(0, 6)

  const handleToggleView = () => {
    setShowAll(!showAll)

    // Se estiver mudando para "Ver menos", fazer scroll para o topo da seção
    if (showAll) {
      setTimeout(() => {
        scrollToElement('projects')
      }, 0)
    }
  }
  return (
    <S.ProjectsSection id="projects">
      <SectionHeader
        mainTitle="Projetos"
        backgroundText="Projetos"
        subtitle="Alguns dos meus trabalhos recentes"
      />

      <S.ProjectsGrid>
        {displayedProjects.map((project) => (
          <ProjectCardComponent key={project.id} project={project} />
        ))}
      </S.ProjectsGrid>

      {data.length > 6 && (
        <S.ViewAllContainer>
          <Button onClick={handleToggleView} variant="link" size="medium">
            {showAll ? 'Ver menos' : 'Ver todos'}
          </Button>
        </S.ViewAllContainer>
      )}
    </S.ProjectsSection>
  )
}

export default ProjectsSection
