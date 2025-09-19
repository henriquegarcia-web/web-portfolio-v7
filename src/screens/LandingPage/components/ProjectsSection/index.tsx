import React, { useState, useRef } from 'react'

import * as S from './styles'

import { useInView } from 'framer-motion'

import {
  ProjectCard as ProjectCardComponent,
  SectionHeader,
  Button,
  ProjectModal,
} from '@/components'
import { IProject } from '@/utils/types'
import { useSmoothScroll } from '@/hooks'

interface ProjectsSectionProps {
  data: IProject[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollToElement } = useSmoothScroll({ duration: 10 })

  const displayedProjects = showAll ? data : data.slice(0, 6)

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const handleToggleView = () => {
    setShowAll(!showAll)

    // Se estiver mudando para "Ver menos", fazer scroll para o topo da seção
    if (showAll) {
      setTimeout(() => {
        scrollToElement('projects')
      }, 0)
    }
  }

  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <S.ProjectsSection
      id="projects"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <SectionHeader
        mainTitle="Projetos"
        backgroundText="Projetos"
        subtitle="Alguns dos meus trabalhos recentes"
      />

      <S.ProjectsGrid variants={itemVariants}>
        {displayedProjects.map((project, index) => (
          <S.ProjectCardWrapper
            variants={cardVariants}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectCardComponent project={project} />
          </S.ProjectCardWrapper>
        ))}
      </S.ProjectsGrid>

      {data.length > 6 && (
        <S.ViewAllContainer variants={buttonVariants}>
          <Button onClick={handleToggleView} variant="link" size="medium">
            {showAll ? 'Ver menos' : 'Ver todos'}
          </Button>
        </S.ViewAllContainer>
      )}

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </S.ProjectsSection>
  )
}

export default ProjectsSection
