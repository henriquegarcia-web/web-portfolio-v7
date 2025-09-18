import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import * as S from './styles'
import { Tag, ImageCarousel } from '@/components'
import { IProject } from '@/utils/types'

interface ProjectCardProps {
  project: IProject
  className?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [isHovered, setIsHovered] = useState(false)

  // Variantes de animação para elementos internos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const tagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  return (
    <S.ProjectCard
      ref={ref}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={imageVariants}>
          <S.ImageContainer>
            {project.images && project.images.length > 0 ? (
              <ImageCarousel
                images={project.images}
                interval={2000}
                isActive={isHovered}
              />
            ) : (
              <S.PlaceholderImage>
                <S.PlaceholderIcon>📱</S.PlaceholderIcon>
                <S.PlaceholderText>Sem imagem</S.PlaceholderText>
              </S.PlaceholderImage>
            )}
          </S.ImageContainer>
        </motion.div>

        <S.CardContent>
          <motion.div variants={textVariants}>
            <S.CardHeader>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </S.CardHeader>
          </motion.div>

          <motion.div variants={itemVariants}>
            <S.FeaturesList>
              {project.features.slice(0, 3).map((feature, index) => (
                <S.FeatureItem key={index}>
                  <S.CheckIcon>✓</S.CheckIcon>
                  <span>{feature}</span>
                </S.FeatureItem>
              ))}
            </S.FeaturesList>
          </motion.div>

          <motion.div variants={itemVariants}>
            <S.TechnologiesContainer>
              {project.technologies.map((tech, index) => (
                <motion.div key={index} variants={tagVariants} custom={index}>
                  <Tag color="#64ffda" size="small">
                    {tech}
                  </Tag>
                </motion.div>
              ))}
            </S.TechnologiesContainer>
          </motion.div>

          {/* <S.LinksContainer>
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="small" icon="arrow">
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                size="small"
                icon="github"
              >
                GitHub
              </Button>
            )}
          </S.LinksContainer> */}
        </S.CardContent>
      </motion.div>
    </S.ProjectCard>
  )
}

export default ProjectCard
