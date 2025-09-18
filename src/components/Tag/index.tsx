import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import { hoverScale } from '@/utils/constants'

interface TagProps {
  children: React.ReactNode
  color?: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const Tag: React.FC<TagProps> = ({
  children,
  color = '#64ffda',
  size = 'medium',
  className,
}) => {
  return (
    <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
      <S.Tag color={color} size={size} className={className}>
        {children}
      </S.Tag>
    </motion.div>
  )
}

export default Tag
