import React from 'react'
import { motion } from 'framer-motion'

import * as S from './styles'
import { FaRegClone, FaCheck, FaRegEnvelope, FaPhone, FaMapPin } from 'react-icons/fa6'

import { IPersonalInfo } from '@/utils/types'
import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'
import { useCopyToClipboard, useScrollAnimation, useStaggerAnimation } from '@/hooks'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  hoverScale,
} from '@/utils/constants'

interface ContactSectionProps {
  data: IPersonalInfo
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { copiedItem, copyToClipboard } = useCopyToClipboard()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: contactRef, isInView: contactInView } = useStaggerAnimation({
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <FaRegEnvelope />,
      label: 'Email',
      value: data.email,
      color: '#64ffda',
    },
    {
      icon: <FaPhone />,
      label: 'Telefone',
      value: data.phone,
      color: '#ff6b6b',
    },
    {
      icon: <FaMapPin />,
      label: 'Localização',
      value: data.location,
      color: '#ffa726',
    },
  ]

  const getWhatsAppUrl = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '')
    return `https://wa.me/${cleanPhone}`
  }

  const handleCopyClick = (value: string) => {
    copyToClipboard(value)
  }

  return (
    <S.ContactSection id="contact" ref={ref}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
      >
        <SectionHeader
          mainTitle="Contato"
          backgroundText="Fale Comigo"
          subtitle="Pronto para dar vida às suas ideias?"
        />
      </motion.div>

      <motion.div
        ref={contactRef}
        variants={staggerContainer}
        initial="hidden"
        animate={contactInView ? 'visible' : 'hidden'}
      >
        <S.ContactCard>
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.4 }}
          >
            <S.ContactInfo>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <S.ContactItem
                    color={info.color}
                    onClick={() => handleCopyClick(info.value)}
                    isCopied={copiedItem === info.value}
                  >
                    <div className="icon-container">{info.icon}</div>
                    <div className="content">
                      <span className="label">{info.label}</span>
                      <S.ContactValue isCopied={copiedItem === info.value}>
                        {info.value}
                      </S.ContactValue>
                    </div>
                    <S.CopyIcon isCopied={copiedItem === info.value}>
                      {copiedItem === info.value ? <FaCheck /> : <FaRegClone />}
                    </S.CopyIcon>
                  </S.ContactItem>
                </motion.div>
              ))}
            </S.ContactInfo>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.6 }}
          >
            <S.SocialButtonsContainer>
              <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
                <Button
                  href={getWhatsAppUrl(data.phone)}
                  variant="primary"
                  icon="whatsapp"
                >
                  WhatsApp
                </Button>
              </motion.div>

              <motion.div variants={hoverScale} whileHover="hover" whileTap="tap">
                <Button
                  href={data.socialLinks?.linkedin}
                  variant="secondary"
                  icon="linkedin"
                >
                  LinkedIn
                </Button>
              </motion.div>
            </S.SocialButtonsContainer>
          </motion.div>
        </S.ContactCard>
      </motion.div>
    </S.ContactSection>
  )
}

export default ContactSection
