import React from "react";
import { Container, ContainerContent } from "./styles";

const Projects: React.FC = () => {
    return (
        <Container>
                <section id="projects">
                <h2>Meus Projetos</h2>

                <ContainerContent>
                    <div className="project-preview">
                        <h3 className="Desktop">Projeto: Pizzaria (Desktop)</h3>
                        <iframe src="https://vinidill.github.io/pizza/" className="IframeDesktop" ></iframe>
                    </div>

                    <div className="project-preview">
                        <h3>Projeto: Pizzaria (Mobile)</h3>
                        <iframe src="https://vinidill.github.io/pizza/" className="IframeMobile" ></iframe>
                    </div>
                </ContainerContent>
                <ContainerContent>
                    <div className="project-preview">
                        <h3 className="Desktop">Projeto: Formulário (Desktop)</h3>
                        <iframe src="https://vinidill.github.io/Formulario/" className="IframeDesktop" ></iframe>
                    </div>

                    <div className="project-preview">
                        <h3>Projeto: Formulário (Mobile)</h3>
                        <iframe src="https://vinidill.github.io/Formulario/" className="IframeMobile" ></iframe>
                    </div>
                </ContainerContent>

            </section>
        </Container>
    )
}

export default Projects;