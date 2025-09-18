import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as S from './styles'
import {
  ProjectCard as ProjectCardComponent,
  SectionHeader,
  Button,
  ProjectModal,
} from '@/components'
import { IProject } from '@/utils/types'
import { useSmoothScroll, useScrollAnimation, useStaggerAnimation } from '@/hooks'
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverLift,
} from '@/utils/constants'

interface ProjectsSectionProps {
  data: IProject[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollToElement } = useSmoothScroll({ duration: 10 })
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: projectsRef, isInView: projectsInView } = useStaggerAnimation({
    threshold: 0.1,
  })

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

  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <S.ProjectsSection id="projects" ref={ref}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
      >
        <SectionHeader
          mainTitle="Projetos"
          backgroundText="Projetos"
          subtitle="Alguns dos meus trabalhos recentes"
        />
      </motion.div>

      <motion.div
        ref={projectsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={projectsInView ? 'visible' : 'hidden'}
      >
        <S.ProjectsGrid>
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${showAll}`}
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover="hover"
                whileTap="tap"
              >
                <S.ProjectCardWrapper onClick={() => handleProjectClick(project)}>
                  <motion.div variants={hoverLift} whileHover="hover">
                    <ProjectCardComponent project={project} />
                  </motion.div>
                </S.ProjectCardWrapper>
              </motion.div>
            ))}
          </AnimatePresence>
        </S.ProjectsGrid>
      </motion.div>

      {data.length > 6 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.8 }}
        >
          <S.ViewAllContainer>
            <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
              <Button onClick={handleToggleView} variant="link" size="medium">
                {showAll ? 'Ver menos' : 'Ver todos'}
              </Button>
            </motion.div>
          </S.ViewAllContainer>
        </motion.div>
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
