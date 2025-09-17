import React from 'react'

import * as S from './styles'
import { Tag, ImageCarousel, Button } from '@/components'
import { IProject } from '@/utils/types'

interface ProjectCardProps {
  project: IProject
  className?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <S.ProjectCard className={className}>
      <S.ImageContainer>
        {project.images && project.images.length > 0 ? (
          <ImageCarousel images={project.images} interval={2000} />
        ) : (
          <S.PlaceholderImage>
            <S.PlaceholderIcon>📱</S.PlaceholderIcon>
            <S.PlaceholderText>Sem imagem</S.PlaceholderText>
          </S.PlaceholderImage>
        )}
      </S.ImageContainer>

      <S.CardContent>
        <S.CardHeader>
          <S.ProjectTitle>{project.title}</S.ProjectTitle>
          <S.ProjectDescription>{project.description}</S.ProjectDescription>
        </S.CardHeader>

        <S.FeaturesList>
          {project.features.slice(0, 3).map((feature, index) => (
            <S.FeatureItem key={index}>
              <S.CheckIcon>✓</S.CheckIcon>
              <span>{feature}</span>
            </S.FeatureItem>
          ))}
        </S.FeaturesList>

        <S.TechnologiesContainer>
          {project.technologies.map((tech, index) => (
            <Tag key={index} variant="primary" size="small">
              {tech}
            </Tag>
          ))}
        </S.TechnologiesContainer>

        <S.LinksContainer>
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
        </S.LinksContainer>
      </S.CardContent>
    </S.ProjectCard>
  )
}

export default ProjectCard
