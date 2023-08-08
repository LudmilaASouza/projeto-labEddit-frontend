import styled from "styled-components";


export const LoginPageContainer = styled.main `
    height: 100%;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    #logo {
        width: 152px;
    }

    h1 {
        font-size: 16px;
    }
`

export const HeaderSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 8vh;

    #log {
        width: 152px;
    }

    h1 {
        font-size: 16px;
        font-weight: 200;
        margin: 0.5rem 0;
    }
`

export const FormSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    form {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        input {
            color: #323941;
            width: 100%;
            max-width: 365px;
            height: 60px;
            margin: 0.5rem 0;
            padding: 10px;
            border: 1px solid lightgray;
        }
    }

    button {
        width: 100%;
        max-width: 365px;
        height: 51px;
        border-radius: 25px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        border: none;
    }

    button.primary {
        background-color: #FC8B6B;
        color: white;
        margin-top: 3rem;
    }

    button.secondary {
        border: 1px solid #fe7e02;
        color: #fe7e02;
    }  

`