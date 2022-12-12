import styled from "styled-components";
import Add from './add.png'

export const StyledMainHome = styled.main `
width: 100vw;
height: 100vh;
background-color: var(--grey-4);
display: flex;
flex-direction: column;
align-items: center;

section {
    width: 90%;
    max-width: 1200px;
    padding-top: 35px;
    /* h3 {
        color: var(--grey-0);
    }
    p{
        color: white;
        margin-top: 20px;
    } */
    .tech {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .addImg {
        background-color: var(--grey-3);
        background-image: url(${Add});
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
    h2 {
        color: var(--grey-0);        
    }
}
ul {
    width: 100%;
    background-color: var(--grey-3);
    padding: 25px;
    width: 90%;
    max-width: 1200px;
    margin-top: 20px;
    border-radius: 4px;
}
/* li {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-4);
    padding: 0px 20px;
    h3 {
        color: white;
    }
    p{
        color: var(--grey-1);
    }
} */
.divCard {
    display: flex;
    gap: 25px;
}
`