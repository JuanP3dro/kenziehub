import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 400px;
    padding-left: 22px;
    padding: 42px 17px 42px 22px;

    h2 {
        color: var(--grey-0);
        text-align: center;
    }
    label {
        color: var(--grey-0);
        text-align: left;
        width: 100%;
        margin-top: 25px;
    }
    input {
        width: 100%;
        height: 50px;
        background-color: var(--grey-2);
        border-radius: 4px;
        margin-top: 20px;
        color: var(--grey-0);
        padding-left: 10px;
    }
    input:focus {
        outline: 2px solid var(--grey-0);
    }
    .goHome {
        width: 100%;
        height: 50px;
        background-color: var(--color-primary);
        border-radius: 4px;
        color: white;
        margin-top: 25px;
    }
    .goHome:hover {
        background-color: var(--color-primary-focus);
    }
    p{
        color: var(--grey-1);
        margin-top: 35px;
        margin-bottom: 22px;
    }
    .goRegister {
        width: 100%;
        height: 50px;
        border-radius: 4px;
        background-color: var(--grey-1);
        color: var(--grey-0);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto 0;
    }
    .goRegister:hover {
        background-color: var(--grey-2);
    }
`