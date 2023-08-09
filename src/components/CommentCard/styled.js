import styled from 'styled-components';

export const CommentCardContainer = styled.article`
    background-color: #fbfbfb;
    border: 1px solid lightgray;   
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
    h1 {
        font-size: 18px;
        font-weight: 400;
        padding: 1rem 0;
    }
    p {
        color: #6f6f6f;
        font-size: 12px;
    }
`

export const CardFooter = styled.footer`
    display: flex;
    color: #6f6f6f;
    button {
        border: none;
        &:hover {
            cursor: pointer;
        }
    }
    .vote-info {
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
    }
`