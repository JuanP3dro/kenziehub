import styled from "styled-components";

export const StyledMain = styled.main`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

div{
    width: 80%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.goLogin {
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