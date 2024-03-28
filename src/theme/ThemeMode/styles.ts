import styled from "styled-components";
import FontAndSpacing from "../FontAndSpacing";

export const Container = styled.div`
    
    padding: ${FontAndSpacing.spacing["2xl"]};
`

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: right;
`

export const IconContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
`