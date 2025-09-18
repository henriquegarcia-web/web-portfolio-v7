import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as S from './styles'

import { ProductImageViewer, Tag } from '@/components'
import { IProject } from '@/utils/types'
import {
  modalBackdrop,
  modalContent,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '@/utils/constants'

interface ProjectModalProps {
  project: IProject | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Modal isOpen={isOpen} onClose={onClose}>
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <S.ModalContainer>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <S.ImageSection>
                    <ProductImageViewer images={project.images || []} />
                  </S.ImageSection>
                </motion.div>

                <S.ContentSection>
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                    <S.ProjectHeader>
                      <S.ProjectTitle>{project.title}</S.ProjectTitle>
                      <S.ProjectDescription>{project.description}</S.ProjectDescription>
                    </S.ProjectHeader>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                  >
                    <S.FeaturesSection>
                      <S.SectionTitle>Funcionalidades</S.SectionTitle>
                      <S.FeaturesList>
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            variants={staggerItem}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <S.FeatureItem>
                              <S.CheckIcon>✓</S.CheckIcon>
                              <span>{feature}</span>
                            </S.FeatureItem>
                          </motion.div>
                        ))}
                      </S.FeaturesList>
                    </S.FeaturesSection>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                  >
                    <S.TechnologiesSection>
                      <S.SectionTitle>Tecnologias</S.SectionTitle>
                      <S.TechnologiesContainer>
                        {project.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            variants={staggerItem}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.7 + index * 0.05 }}
                          >
                            <Tag color="#64ffda" size="small">
                              {tech}
                            </Tag>
                          </motion.div>
                        ))}
                      </S.TechnologiesContainer>
                    </S.TechnologiesSection>
                  </motion.div>

                  {/* <S.LinksSection>
                    {project.liveUrl && (
                      <Button href={project.liveUrl} variant="primary" size="medium" icon="arrow">
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        variant="secondary"
                        size="medium"
                        icon="github"
                      >
                        GitHub
                      </Button>
                    )}
                  </S.LinksSection> */}
                </S.ContentSection>
              </S.ModalContainer>
            </motion.div>
          </motion.div>
        </S.Modal>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
