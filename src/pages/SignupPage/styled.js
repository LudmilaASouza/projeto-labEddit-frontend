import styled from "styled-components";

export const SignupPageContainer = styled.main`
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

export const HeaderSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #logo {
        width: 152px;
    }

    h1 {
        font-size: 33px;
        margin: 0.5rem 0;
    }
`

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    
        input {
            color: #323941;
            width: 100%;
            max-width: 365px;
            height: 58px;
            margin: 0.5rem 0;
            padding: 10px;
            border: 1px solid lightgray;
        }
    }

    button {
        width: 100%;
        max-width: 365px;
        height: 50px;
        border-radius: 25px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        border: none;
    }

    button.primary {
        background-color: #fc8b6b;
        color: white;
        margin-top: 3rem;
    }
    
    .hr-line {
        margin: 1rem 0;
    }
`

export const TermsBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    section {
        display: flex;
        align-items: center;
        justify-content: center;
    
        .checkbox {
            width: 18px;
        }
    
        label {
            margin-left: 0.5rem;
        }
    }

    h2, label {
        font-size: 14px;
        font-weight: 400;
    }

    span {
        color: #4088cb;
    }
`
