import { useLocation, useNavigate } from 'react-router-dom';
import { goToLoginPage, goToPostsPage } from '../../routes/coordinator';
import { TOKEN_NAME } from '../../constants/constants';
import CloseIcon from '../svgs/x-close-header.svg';
import HeaderLogo from '../svgs/logo-header.svg';
import { HeaderBarContainer } from './styled'

export default function HeaderBar() {
    const location = useLocation()
    const navigate = useNavigate()
    const deslogar = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }
    const renderCorrectButtons = () => {
        switch (location.pathname) {
            case "/signup":
                return <button onClick={() => goToLoginPage(navigate)}>Entrar</button>
            case "/":
                return <button onClick={deslogar}>Sair</button>
            default:
                return (
                    <>
                        <button onClick={() => goToPostsPage(navigate)}>
                            <img className="close-icon" src={CloseIcon} alt="Voltar para posts" />
                        </button>
                        <button className="logout-btn" onClick={deslogar}>Sair</button>
                    </>
                )
        }
    }

    return (
        <HeaderBarContainer>
            <img id="header-bar-logo" src={HeaderLogo} alt="LabEddit mini logo" />
            {renderCorrectButtons()}
        </HeaderBarContainer>
    )
};