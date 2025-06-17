import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title className="animate-slideInLeft stagger-1">
                            Hi, I am <br /> 
                            <span className="gradient-text-animated">{Bio.name}</span>
                        </Title>
                        <TextLoop className="animate-slideInLeft stagger-2">
                            I am a
                            <Span className="typewriter-glow">
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                        deleteSpeed: 50,
                                        cursor: '|',
                                        cursorClassName: 'typewriter-cursor'
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle className="animate-fadeInLeft stagger-3">
                            {Bio.description}
                        </SubTitle>
                        <ResumeButton 
                            className="animate-bounceIn stagger-4"
                            href={Bio.resume} 
                            target='display'
                        >
                            Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right" className="animate-slideInRight stagger-5">
                        {/* <Img src={HeroImg} alt="hero-image" /> */}
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection