import { useEffect, useState } from 'react';
import { TOKEN_NAME } from '../../constants/constants';
import { goToLoginPage, goToPostsPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import LoginLogoIcon from '../../svgs/logo-login.svg';
import { PostsPageContainer, HeaderSection, MessageSection  } from './styled';

export default function NotFoundPage() {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    if (countdown <= 0) {
        if (window.localStorage.getItem(TOKEN_NAME)) {
            goToPostsPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }

    return (
        <PostsPageContainer>
            <HeaderSection>
                <img id="logo" src={LoginLogoIcon} alt="Logo da Labenu" />
            </HeaderSection>
            <MessageSection>
                <h1>Página não encontrada</h1>
            </MessageSection>
        </PostsPageContainer>
    )
}