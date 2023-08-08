import styled from 'styled-components';

export const HeaderBarContainer = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    #header-bar-logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .close-icon {
        width: 25px;
        color: #a3a3a3;
    }
    button {
        color: #4088cb;
        font-size: 18px;
        font-weight: 500;
        outline: none;
        border: none;
        &:last-child {
            margin-left: auto;
        }
        &:hover {
            cursor: pointer;
        }
    }
`