import styled, { keyframes } from "styled-components";
import FontAndSpacing from "../../theme/FontAndSpacing";
import media from "styled-media-query";

export const Container = styled.div`

`

export const ImageContainer = styled.div`

    padding: 50px;
    display: flex;
    justify-content: center;

    ${media.lessThan("medium")`
            display: none;
        `}

    .Dev {

        width: 700px;
        height: 700px;
        border-radius: 360px;

        ${media.lessThan("large")`
        width: 350px;
        height: 350px;
        `}

    }
`

export const TextContainer = styled.div`

    justify-content: center;

    h1 {
        font-size: ${FontAndSpacing.fontSize["5xl"]};

        ${media.lessThan("medium")`
            text-align: center;

            font-size: ${FontAndSpacing.fontSize["3xl"]};
        `}

        ${media.lessThan("small")`
            text-align: center;

            font-size: ${FontAndSpacing.fontSize["2xl"]};
        `}
    }

    h2 {
        font-size: 75px;
        background-image: linear-gradient(to right, #552583, #FDB927);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        ${media.lessThan("medium")`
            text-align: center;

            font-size: ${FontAndSpacing.fontSize["4xl"]};
        `}

        ${media.lessThan("small")`
            text-align: center;

            font-size: ${FontAndSpacing.fontSize["2xl"]};
        `}
    }

    .Dev2 {

        display: none;
        border-radius: 360px;
        align-items: center;
        margin: auto;

        ${media.lessThan("medium")`
            display:flex ;
            width: 300px;
            height: 300px;
        `}
    }



    .paragraph {
        font-size: ${FontAndSpacing.fontSize.xl};

        ${media.lessThan("medium")`
            text-align: center;

            font-size: ${FontAndSpacing.fontSize.lg};
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