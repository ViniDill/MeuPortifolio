import styled, { keyframes } from "styled-components";
import FontAndSpacing from "../../theme/FontAndSpacing";

export const Container = styled.div`

    padding-top: ${FontAndSpacing.spacing["2xl"]};
`

export const ImageContainer = styled.div`

    padding: 50px;
    display: flex;
    justify-content: center;

    .Dev {

        width: 700px;
        height: 700px;
        border-radius: 360px;

    }
`

export const TextContainer = styled.div`

    padding: ${FontAndSpacing.spacing["2xl"]};
    justify-content: center;

    h1 {
        font-size: ${FontAndSpacing.fontSize["5xl"]};
    }

    h2 {
        font-size: 75px;
        background-image: linear-gradient(to right, #552583, #FDB927);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }


    .paragraph {
        font-size: ${FontAndSpacing.fontSize.xl};
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
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;

export const ProjectContainer = styled.div`

    margin: ${FontAndSpacing.spacing["3xl"]};
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
    width: 70%;
    margin: auto;
`