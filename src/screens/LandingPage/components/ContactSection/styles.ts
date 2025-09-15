import styled from 'styled-components'

export const Container = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  span {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    display: block;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .underline {
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #64ffda, #ff6b6b);
    border-radius: 2px;
    margin: 0 auto 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #a0a0a0;
    margin: 0;
  }
`

export const CTAContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`

export const CTAText = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #a0a0a0;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #64ffda, #ff6b6b);
  color: #000000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`

export const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 0 auto;
`

export const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
`

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`

export const ContactItem = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(100, 255, 218, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);
    }

    .icon {
      font-size: 1.5rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(100, 255, 218, 0.1);
      border-radius: 50%;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      .label {
        font-size: 0.9rem;
        color: #a0a0a0;
        font-weight: 500;
      }

      .value {
        font-size: 1rem;
        color: #ffffff;
        font-weight: 600;
      }
    }
  }
`

export const SocialLinks = styled.div`
  text-align: center;

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: #ffffff;
      text-decoration: none;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        background: rgba(100, 255, 218, 0.2);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(100, 255, 218, 0.3);
      }
    }
  }
`
