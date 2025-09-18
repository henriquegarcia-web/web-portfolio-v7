import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as S from './styles'
import { SectionHeader, SkillCard, Button } from '@/components'
import { ISkill } from '@/utils/types'
import { useSmoothScroll, useScrollAnimation, useStaggerAnimation } from '@/hooks'
import { fadeInUp, staggerContainer, staggerItem, hoverScale } from '@/utils/constants'

interface SkillsSectionProps {
  data: ISkill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const { scrollToElement } = useSmoothScroll({ duration: 10 })
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: skillsRef, isInView: skillsInView } = useStaggerAnimation({
    threshold: 0.1,
  })

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
    <S.SkillsSection id="skills" ref={ref}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
      >
        <SectionHeader
          mainTitle="Skills"
          backgroundText="Expertise"
          subtitle="Tecnologias que domino e ferramentas que uso para dar vida às ideias"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.4 }}
      >
        <S.FilterContainer>
          <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
            <S.FilterButton
              onClick={() => setActiveFilter('all')}
              $isActive={activeFilter === 'all'}
            >
              Todos
            </S.FilterButton>
          </motion.div>
          {data.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={hoverScale}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <S.FilterButton
                onClick={() => setActiveFilter(skill.category)}
                $isActive={activeFilter === skill.category}
              >
                {skill.category}
              </S.FilterButton>
            </motion.div>
          ))}
        </S.FilterContainer>
      </motion.div>

      <motion.div
        ref={skillsRef}
        variants={staggerContainer}
        initial="hidden"
        animate={skillsInView ? 'visible' : 'hidden'}
      >
        <S.Content $isFiltered={activeFilter !== 'all'}>
          <AnimatePresence mode="wait">
            {filteredData.map((skill) => (
              <motion.div
                key={`${skill.category}-${activeFilter}`}
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
              >
                <S.SkillCategoryCard>
                  <S.CategoryHeader>
                    <S.CategoryTitle>{skill.category}</S.CategoryTitle>
                  </S.CategoryHeader>
                  <S.TechnologiesGrid $isFiltered={activeFilter !== 'all'}>
                    {skill.technologies
                      .slice(0, activeFilter === 'all' ? 3 : skill.technologies.length)
                      .map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          variants={staggerItem}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <SkillCard technology={tech} />
                        </motion.div>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </S.Content>
      </motion.div>
    </S.SkillsSection>
  )
}

export default SkillsSection
