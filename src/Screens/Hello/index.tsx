import React from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const handleNavigateToProjects = () => {
        navigate("/projects");
        window.scrollTo(0, 0);
    };

    return (
        <Container>
            <ContentContainer>
                <HeaderContainer>
                    <TextContainer>
                        <h1>Olá, somos a SoftCode Sistemas,</h1>
                        <img src="./Images/SCS.png" alt="Dev" className="Dev2" />
                        <h2>Iremos te ajudar a desenvolver seu site</h2>
                        <p className="paragraph">
                            Quer destacar sua marca e atrair mais clientes? Um site profissional é a sua vitrine digital, essencial para conquistar presença online e alcançar futuros. Transforme ideias em realidade e posicione-se no mercado de forma estratégica e inovadora. Vamos criar juntos sua plataforma ideal!
                        </p>
                    </TextContainer>
                    <ImageContainer>
                        <img src="./Images/dev.jpg" alt="Dev" className="Dev" />
                    </ImageContainer>
                </HeaderContainer>
                <ProjectContainer >
                    <h3 onClick={handleNavigateToProjects}>Acesse templates prontos!</h3>
                    <PanToolAltIcon className="toolIcon" style={{ fontSize: 40 }} />
                </ProjectContainer>
            </ContentContainer>
        </Container>
    ) 
}

export default Hello;