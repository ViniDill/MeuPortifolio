import React from "react";
import { Container, ContainerContent, ProjectContainer, HeaderContainer } from "./styles";

const Projects: React.FC = () => {


    const handleProjectClick = (url: string) => {
        window.open(url, "_blank");
    };


    return (
        <Container>
                <section id="projects">
                <h2>Meus Projetos:</h2>

                <ContainerContent>
                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 className="Desktop" onClick={() => handleProjectClick("https://vinidill.github.io/pizza/")}>Projeto: Pizzaria (Desktop)</h3>
                        </HeaderContainer>
                        <iframe src="https://vinidill.github.io/pizza/" className="IframeDesktop" ></iframe>
                    </ProjectContainer>

                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 onClick={() => handleProjectClick("https://vinidill.github.io/pizza/")}>Projeto: Pizzaria (Mobile)</h3>
                        </HeaderContainer>
                        <iframe src="https://vinidill.github.io/pizza/" className="IframeMobile" ></iframe>
                    </ProjectContainer>
                </ContainerContent>
                <ContainerContent>
                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 className="Desktop" onClick={() => handleProjectClick("https://otaldoxis.netlify.app/")}>Projeto: O tal do Xis (Desktop)</h3>
                        </HeaderContainer>
                        <iframe src="https://otaldoxis.netlify.app/" className="IframeDesktop" ></iframe>
                    </ProjectContainer>

                    <ProjectContainer className="project-preview">
                        <HeaderContainer>
                            <h3 onClick={() => handleProjectClick("https://otaldoxis.netlify.app/")}>Projeto: O tal do Xis (Mobile)</h3>
                        </HeaderContainer>
                        <iframe src="https://otaldoxis.netlify.app/" className="IframeMobile" ></iframe>
                    </ProjectContainer>
                </ContainerContent>

            </section>
        </Container>
    )
}

export default Projects;