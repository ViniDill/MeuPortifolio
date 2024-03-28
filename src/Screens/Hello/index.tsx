import React from "react";
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import { 
    Container, 
    ImageContainer, 
    TextContainer, 
    ContentContainer, 
    ProjectContainer,
    HeaderContainer,
 } from "./styles";

const Hello: React.FC = () => {
    return (
        <Container>
            <ContentContainer>
                <HeaderContainer>
                    <TextContainer>
                        <h1>Olá, eu sou Vinícius,</h1>
                        <h2>Desenvolvedor Web Front-End</h2>
                        <p className="paragraph" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis saepe tenetur impedit atque enim blanditiis officia unde, praesentium molestias amet consequuntur ut neque at libero cupiditate omnis provident?
                        </p>
                    </TextContainer>
                    <ImageContainer>
                        <img src="./Images/dev.jpg" alt="Dev" className="Dev" />
                    </ImageContainer>
                </HeaderContainer>
                <ProjectContainer >
                    <h3 onClick={() => window.location.href = "https://www.linkedin.com/in/vinidill/"}>Acesse meus Projetos aqui!</h3>
                    <PanToolAltIcon className="toolIcon" style={{ fontSize: 40 }} />
                </ProjectContainer>
            </ContentContainer>
        </Container>
    ) 
}

export default Hello;