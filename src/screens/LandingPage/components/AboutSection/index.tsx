import React from 'react'

import { IPersonalInfo } from '@/utils/types'
import {
  Container,
  Content,
  Description,
  Highlight,
  SectionTitle,
  Stats,
  StatItem,
  Text,
} from './styles'

interface AboutSectionProps {
  data: IPersonalInfo
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const stats = [
    { label: 'Anos de Experiência', value: '5+' },
    { label: 'Projetos Completos', value: '20+' },
    { label: 'Tecnologias', value: '30+' },
    { label: 'Clientes Satisfeitos', value: '15+' },
  ]

  return (
    <Container id="about">
      <SectionTitle>
        <span>About Me</span>
        <div className="underline" />
      </SectionTitle>

      <Content>
        <Description>
          <Text>
            Sou um <Highlight>Desenvolvedor Full-Stack</Highlight> com mais de 5 anos de
            experiência, especializado em projetos web e mobile com foco em front-end
            moderno.
          </Text>

          <Text>
            Tenho domínio sólido de <Highlight>React</Highlight>,{' '}
            <Highlight>Next.js</Highlight> e <Highlight>TypeScript</Highlight>, atuando em
            todas as etapas do ciclo de desenvolvimento — da arquitetura à entrega em
            produção.
          </Text>

          <Text>
            Já criei mais de 20 sistemas completos, incluindo <Highlight>SaaS</Highlight>,{' '}
            <Highlight>plataformas administrativas</Highlight>,{' '}
            <Highlight>produtos digitais</Highlight> e{' '}
            <Highlight>integração com gateways de pagamento</Highlight>.
          </Text>

          <Text>
            Forte experiência com autenticação, dashboards dinâmicos, formulários
            complexos, <Highlight>SEO técnico</Highlight>, otimizações de performance,{' '}
            <Highlight>CI/CD</Highlight> e <Highlight>testes automatizados</Highlight>.
          </Text>
        </Description>

        <Stats>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <div className="value">{stat.value}</div>
              <div className="label">{stat.label}</div>
            </StatItem>
          ))}
        </Stats>
      </Content>
    </Container>
  )
}

export default AboutSection
