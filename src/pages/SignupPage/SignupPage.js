import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FooterBarIcon from '../../svgs/footer-bar.svg';
import { goToPostsPage } from '../../routes/coordinator';
import { BASE_URL, TOKEN_NAME } from '../../constants/constants';
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import { FormSection, HeaderSection, SignupPageContainer, TermsBox } from './styled';

export default function SignupPage (){
    const navigate = useNavigate()
    const [nickname, setNickaname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState (false)

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (token) {
            goToPostsPage(navigate)
        }
    }, [])

    const signup = (e) => {
        e.preventDefault()

        const body = {
            nickname: nickname,
            email: email,
            password: password
        }

        axios.post(BASE_URL + "/users/signup", body)
            .then(res => {
                window.localStorage.setItem(TOKEN_NAME, res.data.token)
                goToPostsPage(navigate)
            }).catch(err => console.log(err))
    }

    return (

        <SignupPageContainer>
            <HeaderBar />

            <HeaderSection>
                <h1> Olá, bem vindo(a) ao LabEddit ;) </h1>
            </HeaderSection>

            <FormSection>
                <form onSubmit={signup}>
                    <input
                        placeholder="Apelido"
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickaname(e.target.value)}
                        required
                    />

                    <input
                        placeholder="E-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        placeholder="Password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />


                    <TermsBox>
                        <h2> Ao continuar, você concorda com o nosso
                            <span>{" "}Contrato de usuário</span> e nossa
                            <span>{"  "}Política de Privacidade.</span>
                        </h2>
                        <section>
                            <input
                                className="checkbox"
                                type="checkbox"
                                name="termsAndConditions"
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                                required
                            />
                            <label htmlFor="termsAndConditions">
                                Eu concordo em receber e-mails sobre novidades do LabEddit.
                            </label>
                        </section>
                    </TermsBox>


                <button className="primary" type="submit">
                    Cadastrar
                </button>

                </form>
            </FormSection>

        <img id="footer-bar" src={FooterBarIcon} alt="Barra horizontal de rodapé" />
        </SignupPageContainer>
    )
}