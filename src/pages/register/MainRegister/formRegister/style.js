import styled from "styled-components";

export const StyledFormRegister = styled.form`
    background-color: var(--grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 400px;
    padding-left: 22px;
    padding: 10px 17px 10px 22px;
    height: 90%;
    justify-content: space-around;

    h2 {
        color: var(--grey-0);
    }
    p {
        color: var(--grey-1);
    }
    label {
        color: var(--grey-0);
        width: 100%;
        text-align: left;
    }
    input, select {
        height: 40px;
        width: 100%;
        background-color: var(--grey-2);
        border-radius: 3px;
        color: white;
        padding-left: 10px;
    }
    .registerBtn{
        height: 38px;
        width: 100%;
        background-color: var(--color-primary);
        border-radius: 4px;
        color: var(--grey-0);
    }
    .registerBtn:hover {
        background-color: var(--color-primary-focus);
    }
    .error {
        margin-top: 0;
        color: var(--grey-0);
    }
`