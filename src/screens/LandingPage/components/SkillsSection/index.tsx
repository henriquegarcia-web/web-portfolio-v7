import React from 'react'

import { ISkill } from '@/utils/types'
import {
  Container,
  SectionTitle,
  SkillCard,
  SkillCategory,
  SkillGrid,
  SkillItem,
  SkillName,
  SkillsContainer,
} from './styles'

interface SkillsSectionProps {
  data: ISkill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  const getSkillIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Front-End': '⚛️',
      'Back-End': '🔧',
      'Banco de Dados': '🗄️',
      'DevOps & Infraestrutura': '☁️',
      Testes: '🧪',
      'Ferramentas & Outros': '🛠️',
    }
    return icons[category] || '💻'
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Front-End': '#64ffda',
      'Back-End': '#ff6b6b',
      'Banco de Dados': '#ffd93d',
      'DevOps & Infraestrutura': '#ff9ff3',
      Testes: '#54a0ff',
      'Ferramentas & Outros': '#5f27cd',
    }
    return colors[category] || '#64ffda'
  }

  return (
    <Container id="skills">
      <SectionTitle>
        <span>Skills & Expertise</span>
        <div className="underline" />
        <p>Technologies I've mastered and tools I use to bring ideas to life</p>
      </SectionTitle>

      <SkillsContainer>
        {data.map((skill, index) => (
          <SkillCard key={index} color={getCategoryColor(skill.category)}>
            <SkillCategory>
              <span className="icon">{getSkillIcon(skill.category)}</span>
              <span className="name">{skill.category}</span>
            </SkillCategory>

            <SkillGrid>
              {skill.technologies.map((tech, techIndex) => (
                <SkillItem key={techIndex}>
                  <SkillName>{tech}</SkillName>
                </SkillItem>
              ))}
            </SkillGrid>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Container>
  )
}

export default SkillsSection
