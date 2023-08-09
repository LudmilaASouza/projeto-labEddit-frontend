import styled from 'styled-components';

export const PostsPageContainer = styled.main`
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const HeaderSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8vh;
    #logo {
        width: 152px;
    }
`

export const MessageSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    h1 {
        background-color: #ededed;
        color: #323941;
        width: 100%;
        height: 130px;
        margin: 0.5rem 0;
        padding: 10px;
        font-size: 18px;
    }
`

export const PostsSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`