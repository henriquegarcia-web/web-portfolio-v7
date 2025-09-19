import React, { useState, useRef } from 'react'

import * as S from './styles'

import { useInView } from 'framer-motion'

import { SectionHeader, SkillCard, Button } from '@/components'
import { ISkill } from '@/utils/types'
import { useSmoothScroll } from '@/hooks'

interface SkillsSectionProps {
  data: ISkill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const filterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <S.SkillsSection
      id="skills"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <SectionHeader
        mainTitle="Skills"
        backgroundText="Expertise"
        subtitle="Tecnologias que domino e ferramentas que uso para dar vida às ideias"
      />

      <S.FilterContainer variants={filterVariants}>
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

      <S.Content $isFiltered={activeFilter !== 'all'} variants={itemVariants}>
        {filteredData.map((skill, index) => (
          <S.SkillCategoryCard
            key={`${skill.category}-${activeFilter}`}
            variants={cardVariants}
          >
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
              <S.ViewAllButtonContainer>
                <Button
                  onClick={() => handleExpandCategory(skill.category)}
                  variant="link"
                  size="small"
                >
                  Ver todos
                </Button>
              </S.ViewAllButtonContainer>
            )}
          </S.SkillCategoryCard>
        ))}
      </S.Content>
    </S.SkillsSection>
  )
}

export default SkillsSection
