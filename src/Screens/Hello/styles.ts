import styled, { keyframes } from "styled-components";
import FontAndSpacing from "../../theme/FontAndSpacing";
import media from "styled-media-query";

export const Container = styled.div`

`

export const ImageContainer = styled.div`

    padding: 50px;
    display: flex;
    justify-content: center;

    ${media.lessThan("large")`
            display: none;
        `}

    .Dev {

        width: 500px;
        height: 500px;

        ${media.lessThan("huge")`
        max-width: 500px;
        max-height: 500px;
        `}
    }
`

export const TextContainer = styled.div`

    justify-content: center;

    h1 {
        font-size: ${FontAndSpacing.fontSize["4xl"]};

        ${media.lessThan("large")`
            text-align: center;
        `}

        ${media.lessThan("medium")`

            font-size: ${FontAndSpacing.fontSize["3xl"]};
        `}

        ${media.lessThan("small")`

            font-size: ${FontAndSpacing.fontSize["2xl"]};
        `}
    }

h2 {
    font-size: 65px;
    background-image: linear-gradient(to right, #552583, #FDB927);
    background-size: 100%; /* Faz o gradiente se estender pela largura do texto */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

        ${media.lessThan("medium")`

            font-size: ${FontAndSpacing.fontSize["4xl"]};
        `}

        ${media.lessThan("small")`

            font-size: ${FontAndSpacing.fontSize["2xl"]};
        `}
    }

    .Dev2 {

        display: none;
        border-radius: 360px;
        align-items: center;
        margin: auto;

        ${media.lessThan("large")`
            display:flex ;
            width: 400px;
            height: 400px;
        `}

        ${media.lessThan("large")`
            width: 300px;
            height: 300px;
        `}
    }



    .paragraph {
        font-size: ${FontAndSpacing.fontSize.lg};

        ${media.lessThan("medium")`
            text-align: justify;

            font-size: ${FontAndSpacing.fontSize.md};
        `}
    }
`

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 ${FontAndSpacing.spacing.xl};
`;

export const ProjectContainer = styled.div`

    margin: 0 ${FontAndSpacing.spacing["3xl"]};
    font-size: ${FontAndSpacing.fontSize.xl};
    text-align: center;

    .toolIcon {
        animation: ${pulseAnimation} 1.5s infinite;
    }

    h3 {

        cursor: pointer;
        &:hover {
        color: #552583;
        }

        &:active {
            color: #FDB927;
        }
    }
`
export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: auto;

    
`