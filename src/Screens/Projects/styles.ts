import styled from "styled-components";
import media from "styled-media-query";

import FontAndSpacing from "../../theme/FontAndSpacing";

export const Container = styled.div`
    padding: 0 ${FontAndSpacing.spacing.xl};

    h2 {
        font-size: ${FontAndSpacing.fontSize["2xl"]};
    }

    h3 {
        font-size: ${FontAndSpacing.fontSize["xl"]};
        cursor: pointer;

        &:hover {
            color: #552583;
        }

        &:active {
            color: #FDB927;
        }
    }
`;

export const ContainerContent = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    

    padding: 0 30px;

    .IframeDesktop {
        width: 950px;
        height: 600px;

    border-radius: 20px;
    }

    .IframeMobile {
        width: 320px;
        height: 568px;

        border-radius: 10px;
    }

    ${media.lessThan("large")`
        flex-direction: column;

        justify-content: center;

        align-items: center;
        .IframeDesktop {
            width: 800px;
            height: 600px;
    }
    `}

    ${media.lessThan("medium")`

        .Desktop {
            display: none;
        }


        .IframeDesktop {
           display: none;
    }
    `}

    ${media.lessThan("small")`
    `}

`;

export const ProjectContainer = styled.div`
    width: 100%;
    margin: 20px;

    ${media.lessThan("medium")`

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    `}
`

export const HeaderContainer = styled.div`
    width: 100%;
`