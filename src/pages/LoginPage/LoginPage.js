import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToPostsPage, goToSignupPage } from '../../routes/coordinator';
import { FormSection, HeaderSection, LoginPageContainer } from "./styled";
import { BASE_URL, TOKEN_NAME } from "../../constants/constants";
import FooterBarIcon from "../../svgs/footer-bar.svg";
import LoginLogoIcon from "../../svgs/logo-login.svg";
import HorizontalLine from "../../components/HorizontalLine"



export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (token) {
            goToPostsPage(navigate)
        }
    }, [])

    const login = (e) => {
        e.preventDefault()

        const body = {
            email: email,
            password: password
        }

        axios.post(BASE_URL + "/users/login", body)
            .then(res => {
                window.localStorage.setItem(TOKEN_NAME, res.data.token)
                goToPostsPage(navigate)
            })
            .catch(err => 
                alert("E-mail ou senha incorreto."))
    }

    return (
        <LoginPageContainer>
            <HeaderSection>
                <img id="logo" src={LoginLogoIcon} alt="Logo da Labenu" />
                <h1> O projeto de rede social da Labenu </h1>
            </HeaderSection>

            <FormSection>
                <form onSubmit={login}>
                    <input 
                        placeholder="E-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /> 
                    
                    <input 
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /> 

                    <button className="primary" type="submit"> Continuar </button>
                </form>

                <HorizontalLine />

                <button className="secondary" onClick={() => goToSignupPage(navigate)}> 
                    Crie uma conta! </button>
            </FormSection>

            <img id="footer-bar" src={FooterBarIcon} alt="Barra Horizontal de rodapé" />
        </LoginPageContainer>
    );
}