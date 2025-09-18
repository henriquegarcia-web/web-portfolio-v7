import React from 'react'

import * as S from './styles'

import { ProductImageViewer, Tag } from '@/components'
import { IProject } from '@/utils/types'

interface ProjectModalProps {
  project: IProject | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <S.Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalContainer>
        <S.ImageSection>
          <ProductImageViewer images={project.images || []} />
        </S.ImageSection>

        <S.ContentSection>
          <S.ProjectHeader>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
          </S.ProjectHeader>

          <S.FeaturesSection>
            <S.SectionTitle>Funcionalidades</S.SectionTitle>
            <S.FeaturesList>
              {project.features.map((feature, index) => (
                <S.FeatureItem key={index}>
                  <S.CheckIcon>✓</S.CheckIcon>
                  <span>{feature}</span>
                </S.FeatureItem>
              ))}
            </S.FeaturesList>
          </S.FeaturesSection>

          <S.TechnologiesSection>
            <S.SectionTitle>Tecnologias</S.SectionTitle>
            <S.TechnologiesContainer>
              {project.technologies.map((tech, index) => (
                <Tag key={index} color="#64ffda" size="small">
                  {tech}
                </Tag>
              ))}
            </S.TechnologiesContainer>
          </S.TechnologiesSection>

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
    </S.Modal>
  )
}

export default ProjectModal
