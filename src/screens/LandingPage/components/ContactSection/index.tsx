import React, { useRef } from 'react'

import * as S from './styles'
import { FaRegClone, FaCheck, FaRegEnvelope, FaPhone, FaMapPin } from 'react-icons/fa6'

import { useInView } from 'framer-motion'

import { IPersonalInfo } from '@/utils/types'
import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'
import { useCopyToClipboard } from '@/hooks'

interface ContactSectionProps {
  data: IPersonalInfo
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { copiedItem, copyToClipboard } = useCopyToClipboard()

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

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
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

  const contactItemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const getWhatsAppUrl = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '')
    return `https://wa.me/${cleanPhone}`
  }

  const handleCopyClick = (value: string) => {
    copyToClipboard(value)
  }

  return (
    <S.ContactSection
      id="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <SectionHeader
        mainTitle="Contato"
        backgroundText="Fale Comigo"
        subtitle="Pronto para dar vida às suas ideias?"
      />

      <S.ContactCard variants={cardVariants}>
        <S.ContactInfo>
          {contactInfo.map((info, index) => (
            <S.ContactItem
              key={index}
              variants={contactItemVariants}
              color={info.color}
              onClick={() => handleCopyClick(info.value)}
              $isCopied={copiedItem === info.value}
            >
              <div className="icon-container">{info.icon}</div>
              <div className="content">
                <span className="label">{info.label}</span>
                <S.ContactValue $isCopied={copiedItem === info.value}>
                  {info.value}
                </S.ContactValue>
              </div>
              <S.CopyIcon $isCopied={copiedItem === info.value}>
                {copiedItem === info.value ? <FaCheck /> : <FaRegClone />}
              </S.CopyIcon>
            </S.ContactItem>
          ))}
        </S.ContactInfo>

        <S.SocialButtonsContainer variants={buttonVariants}>
          <Button href={getWhatsAppUrl(data.phone)} variant="primary" icon="whatsapp">
            WhatsApp
          </Button>

          <Button href={data.socialLinks?.linkedin} variant="secondary" icon="linkedin">
            LinkedIn
          </Button>
        </S.SocialButtonsContainer>
      </S.ContactCard>
    </S.ContactSection>
  )
}

export default ContactSection
