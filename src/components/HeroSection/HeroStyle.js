import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.bg} 0%, rgba(96, 165, 250, 0.05) 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px 80px;
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 960px) {
    padding: 100px 16px 60px;
    min-height: 90vh;
  }
  @media (max-width: 640px) {
    padding: 80px 16px 40px;
    min-height: 85vh;
  }
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.6;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
    opacity: 0.4;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 3rem;
  }

  @media (max-width: 640px) {
    font-size: 2.5rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 2rem;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  margin-bottom: 1.5rem;
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 1.8rem;
  }
  @media (max-width: 640px) {
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 1.1rem;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

export const ResumeButton = styled.a`
    appearance: button;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;
    color: white;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, #8b5cf6 100%);
    border: none;
    box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
        transition: left 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(96, 165, 250, 0.4);
        
        &:before {
            left: 0;
        }
    }
    
    &:active {
        transform: translateY(0);
    }
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
