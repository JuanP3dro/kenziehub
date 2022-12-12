import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100vw;
height: 130px;
background-color: var(--grey-4);
display: flex;
justify-content: center;
border-bottom: 2px solid var(--grey-3);

div {
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}
h2{
    color: var(--grey-0);
    text-align: left;
}
p {
    color: var(--grey-1);
    text-align: left;
}

@media (min-width: 768px) {
    div {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
`