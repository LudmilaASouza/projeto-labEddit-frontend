import styled from 'styled-components';

export const PostCardContainer = styled.article`
    background-color: #fbfbfb;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 0.5rem;
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
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
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
    .comment-info {
        margin-left: 24px;
        display: flex;
        align-items: center;
        span {
            margin-left: 1rem;
        }
    }
`