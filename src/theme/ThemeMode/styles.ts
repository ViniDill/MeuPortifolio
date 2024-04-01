import styled  from "styled-components";
import FontAndSpacing from "../FontAndSpacing";
import media from "styled-media-query";

export const Container = styled.div`
    
    padding: ${FontAndSpacing.spacing["2xl"]};
`

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;


    ${media.lessThan("small")`
        justify-content: center;
        width: 100%;
        `}
`

export const IconContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    margin-left: 20px;
    cursor: pointer;

    .LinkedIn, .GitHub  {
        
        &:hover {
            background-color: rgba( 127.5, 127.5, 127.5, 0.2 );
            border-radius: 50%;
            box-shadow: 0 0 0 10px rgba( 127.5, 127.5, 127.5, 0.2 );
        }  
    }


`