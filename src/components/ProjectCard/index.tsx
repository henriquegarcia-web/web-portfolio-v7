import React, { useState } from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import { Tag, ImageCarousel } from '@/components'
import { IProject } from '@/utils/types'
import { hoverLift, fadeInUp, staggerItem } from '@/utils/constants'

interface ProjectCardProps {
  project: IProject
  className?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={hoverLift}
      whileHover="hover"
      whileTap="tap"
      initial="hidden"
      animate="visible"
    >
      <S.ProjectCard
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
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
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <S.CardHeader>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </S.CardHeader>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <S.FeaturesList>
              {project.features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <S.FeatureItem>
                    <S.CheckIcon>✓</S.CheckIcon>
                    <span>{feature}</span>
                  </S.FeatureItem>
                </motion.div>
              ))}
            </S.FeaturesList>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <S.TechnologiesContainer>
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover="hover"
                  whileTap="tap"
                >
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
      </S.ProjectCard>
    </motion.div>
  )
}

export default ProjectCard
