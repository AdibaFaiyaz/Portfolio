import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 12px 20px;
    background: rgba(96, 165, 250, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.3);
    color: ${({ theme }) => theme.text_primary};
    font-size: 14px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        background: rgba(96, 165, 250, 0.3);
        border-color: rgba(96, 165, 250, 0.5);
        transform: translateY(-2px);
    }
`

const Card = styled.div`
    width: 350px;
    height: 235px;
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(96, 165, 250, 0.2);
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent);
    }
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        border-color: rgba(96, 165, 250, 0.4);
        background: rgba(26, 26, 26, 0.85);
        box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(96, 165, 250, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    &:hover ${Button} {
        display: block;
        animation: fadeInUp 0.3s ease-out forwards;
    }
    
    @media (max-width: 768px) {
        width: 300px;
        height: 220px;
        padding: 20px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 16px;
    object-fit: cover;
    background: rgba(96, 165, 250, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: rgba(96, 165, 250, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.2);
    padding: 4px 12px;
    border-radius: 20px;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(96, 165, 250, 0.2);
        border-color: rgba(96, 165, 250, 0.3);    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    flex: 1;
`

const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.4;
    margin-bottom: 8px;
`

const Date = styled.div`
    font-size: 0.85rem;
    color: ${({ theme }) => theme.text_secondary};    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 4px;
    
    @media only screen and (max-width: 768px){
        font-size: 0.8rem;
    }
`

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.5;
    opacity: 0.9;
    font-size: 0.9rem;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 12px;
`

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: -8px;
    background: rgba(96, 165, 250, 0.1);
    border: 2px solid rgba(96, 165, 250, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
        border-color: rgba(96, 165, 250, 0.5);
    }
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            {/* <Image src={project.image}/> */}
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            {/* <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members> */}
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards