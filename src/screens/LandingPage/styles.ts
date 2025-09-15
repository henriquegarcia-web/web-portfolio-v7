import styled from 'styled-components'

export const LandingPage = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(120, 119, 198, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(circle at 80% 20%, rgba(30, 7, 20, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(13, 23, 30, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`
