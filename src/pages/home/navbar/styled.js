import styled from "styled-components";

export const StyledNavBar = styled.nav`
width: 100vw;
height: 70px;
background-color: var(--grey-4);
display: flex;
justify-content: center;
border-bottom: 2px solid var(--grey-3);
div {
    width: 90%;
    max-width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.logoutBtn{
    width: 67px;
    height: 40px;
    background: var(--grey-3);
    border-radius: 4px;
    color: var(--grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
}
`