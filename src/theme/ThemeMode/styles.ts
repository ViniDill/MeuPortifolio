import styled  from "styled-components";
import FontAndSpacing from "../FontAndSpacing";
import media from "styled-media-query";

export const Container = styled.div`
`

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    padding: ${FontAndSpacing.spacing.s} ${FontAndSpacing.spacing.xl};


    ${media.lessThan("small")`
        justify-content: center;
        width: 100%;
        `}
`

export const IconContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    margin-right: 20px;
    cursor: pointer;

    .IconButton {
    margin-left: 50px;
    }

    .WhatsApp, .Phone, .Email  {
        
        &:hover {
            background-color: rgba( 127.5, 127.5, 127.5, 0.2 );
            border-radius: 50%;
            box-shadow: 0 0 0 10px rgba( 127.5, 127.5, 127.5, 0.2 );
        }  
    }


`