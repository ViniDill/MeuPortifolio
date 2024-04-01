import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
`;

export const ContainerContent = styled.div`

    display: flex;
    justify-content: space-evenly;

    padding: 0 30px;

    .IframeDesktop {
        width: 950px;
        height: 600px;

    border-radius: 10px;
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