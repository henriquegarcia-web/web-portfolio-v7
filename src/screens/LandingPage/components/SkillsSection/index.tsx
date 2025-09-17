import React from 'react'

import * as S from './styles'
import { SectionHeader, SkillCard } from '@/components'
import { ISkill } from '@/utils/types'

interface SkillsSectionProps {
  data: ISkill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
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

  const getCategoryIcon = (category: string) => {
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

  return (
    <S.SkillsSection id="skills">
      <SectionHeader
        mainTitle="Skills"
        backgroundText="Skills & Expertise"
        subtitle="Tecnologias que domino e ferramentas que uso para dar vida às ideias"
      />

      <S.Content>
        <S.LeftColumn>
          <S.SkillsGrid>
            {data.slice(0, 3).map((skill, index) => (
              <S.SkillCategoryCard key={index}>
                <S.CategoryHeader>
                  {/* <S.CategoryIcon color={getCategoryColor(skill.category)}>
                    {getCategoryIcon(skill.category)}
                  </S.CategoryIcon> */}
                  <S.CategoryTitle>{skill.category}</S.CategoryTitle>
                </S.CategoryHeader>
                <S.TechnologiesGrid>
                  {skill.technologies.slice(0, 4).map((tech, techIndex) => (
                    <SkillCard key={techIndex} technology={tech} />
                  ))}
                </S.TechnologiesGrid>
              </S.SkillCategoryCard>
            ))}
          </S.SkillsGrid>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ToolsGrid>
            {data.slice(3).map((skill, index) => (
              <S.SkillCategoryCard key={index}>
                <S.CategoryHeader>
                  {/* <S.CategoryIcon color={getCategoryColor(skill.category)}>
                    {getCategoryIcon(skill.category)}
                  </S.CategoryIcon> */}
                  <S.CategoryTitle>{skill.category}</S.CategoryTitle>
                </S.CategoryHeader>
                <S.TechnologiesGrid>
                  {skill.technologies.slice(0, 4).map((tech, techIndex) => (
                    <SkillCard key={techIndex} technology={tech} />
                  ))}
                </S.TechnologiesGrid>
              </S.SkillCategoryCard>
            ))}
          </S.ToolsGrid>
        </S.RightColumn>
      </S.Content>
    </S.SkillsSection>
  )
}

export default SkillsSection
