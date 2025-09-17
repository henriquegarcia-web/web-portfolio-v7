import React, { useState } from 'react'

import * as S from './styles'
import { SectionHeader, SkillCard } from '@/components'
import { ISkill } from '@/utils/types'
import { useSmoothScroll } from '@/hooks'

interface SkillsSectionProps {
  data: ISkill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const { scrollToElement } = useSmoothScroll({ duration: 10 })

  // Filtrar dados baseado no filtro ativo
  const filteredData =
    activeFilter === 'all'
      ? data
      : data.filter((skill) => skill.category === activeFilter)

  // Função para expandir uma categoria específica
  const handleExpandCategory = (category: string) => {
    setActiveFilter(category)
    // Scroll suave para o topo da seção skills
    setTimeout(() => {
      scrollToElement('skills')
    }, 0)
  }

  return (
    <S.SkillsSection id="skills">
      <SectionHeader
        mainTitle="Skills"
        backgroundText="Skills & Expertise"
        subtitle="Tecnologias que domino e ferramentas que uso para dar vida às ideias"
      />

      <S.FilterContainer>
        <S.FilterButton
          onClick={() => setActiveFilter('all')}
          $isActive={activeFilter === 'all'}
        >
          Todos
        </S.FilterButton>
        {data.map((skill) => (
          <S.FilterButton
            key={skill.category}
            onClick={() => setActiveFilter(skill.category)}
            $isActive={activeFilter === skill.category}
          >
            {skill.category}
          </S.FilterButton>
        ))}
      </S.FilterContainer>

      <S.Content $isFiltered={activeFilter !== 'all'}>
        {filteredData.map((skill, index) => (
          <S.SkillCategoryCard key={index}>
            <S.CategoryHeader>
              <S.CategoryTitle>{skill.category}</S.CategoryTitle>
            </S.CategoryHeader>
            <S.TechnologiesGrid $isFiltered={activeFilter !== 'all'}>
              {skill.technologies
                .slice(0, activeFilter === 'all' ? 3 : skill.technologies.length)
                .map((tech, techIndex) => (
                  <SkillCard key={techIndex} technology={tech} />
                ))}
            </S.TechnologiesGrid>
            {activeFilter === 'all' && skill.technologies.length > 3 && (
              <S.ViewAllLink onClick={() => handleExpandCategory(skill.category)}>
                Ver todos
              </S.ViewAllLink>
            )}
          </S.SkillCategoryCard>
        ))}
      </S.Content>
    </S.SkillsSection>
  )
}

export default SkillsSection
