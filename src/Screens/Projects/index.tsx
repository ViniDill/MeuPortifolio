import React from "react";
import { Container, ReturnContainer, ContainerContent, ProjectContainer, HeaderContainer } from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleProjectClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <Container>
            <ReturnContainer onClick={handleGoBack}>
                <ArrowBackIcon className="Arrow" />
            </ReturnContainer>
            <section id="projects">
                <h2>Nossos Templates:</h2>

                <ContainerContent>
                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 className="Desktop" onClick={() => handleProjectClick("https://vinidill.github.io/pizza/")}>
                                Projeto: Pizzaria (Desktop)
                            </h3>
                        </HeaderContainer>
                        <iframe src="https://vinidill.github.io/pizza/" className="IframeDesktop"></iframe>
                    </ProjectContainer>

                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 onClick={() => handleProjectClick("https://vinidill.github.io/pizza/")}>
                                Projeto: Pizzaria (Mobile)
                            </h3>
                        </HeaderContainer>
                        <iframe src="https://vinidill.github.io/pizza/" className="IframeMobile"></iframe>
                    </ProjectContainer>
                </ContainerContent>

                <ContainerContent>
                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 className="Desktop" onClick={() => handleProjectClick("https://otaldoxis.netlify.app/")}>
                                Projeto: O tal do Xis (Desktop)
                            </h3>
                        </HeaderContainer>
                        <iframe src="https://otaldoxis.netlify.app/" className="IframeDesktop"></iframe>
                    </ProjectContainer>

                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 onClick={() => handleProjectClick("https://otaldoxis.netlify.app/")}>
                                Projeto: O tal do Xis (Mobile)
                            </h3>
                        </HeaderContainer>
                        <iframe src="https://otaldoxis.netlify.app/" className="IframeMobile"></iframe>
                    </ProjectContainer>
                </ContainerContent>

                <ContainerContent>
                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 className="Desktop" onClick={() => handleProjectClick("https://delivery.softcodesistemas.com.br/")}>
                                Projeto: Delivery (Desktop)
                            </h3>
                        </HeaderContainer>
                        <iframe src="https://delivery.softcodesistemas.com.br/" className="IframeDesktop"></iframe>
                    </ProjectContainer>

                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 onClick={() => handleProjectClick("https://delivery.softcodesistemas.com.br/")}>
                                Projeto: Delivery (Mobile)
                            </h3>
                        </HeaderContainer>
                        <iframe src="https://delivery.softcodesistemas.com.br/" className="IframeMobile"></iframe>
                    </ProjectContainer>
                </ContainerContent>
            </section>
        </Container>
    );
};

export default Projects;
