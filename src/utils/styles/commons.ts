import styled from 'styled-components'
import { motion } from 'framer-motion'

// ===================================================== SCREEN

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`

export const ScreenFixed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Section = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 0;
`
