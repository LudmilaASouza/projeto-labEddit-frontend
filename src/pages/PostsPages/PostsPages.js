import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, TOKEN_NAME } from '../../constants/constants'
import { goToLoginPage } from '../../routes/coordinator'
import { PostsPageContainer, FormSection, PostsSection } from './styled'
import HeaderBar from '../../components/HeaderBar'
import HorizontalLine from '../../components/HorizontalLine'
import PostCard from '../../components/PostCard/PostCard'


export default function PostsPage() {
    const navigate = useNavigate()
    const [ posts, setPosts ] = useState([])
    const [ content, setContent ] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (!token) {
            goToLoginPage(navigate)
        } else {
            fetchPosts()
        }
    }, [])

    const fetchPosts = () => {
        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.get(BASE_URL + "/posts", axiosConfig)
            .then(res => {
                setPosts(res.data)
                setContent("")
            }).catch(err => console.log(err))
    }

    const createPost = (e) => {
        e.preventDefault()

        const body = {
            content: content
        }

        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.post(BASE_URL + "/posts", body, axiosConfig)
            .then(res => {
                fetchPosts()
            }).catch(err => console.log(err))
    }

    return (
        <PostsPageContainer>
            <HeaderBar />

            <FormSection>
                <form onSubmit={createPost}>
                    <textarea
                        placeholder="Escreva seu post..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <button className="primary" type="submit"> Postar </button>   
                </form>
            </FormSection>

            <HorizontalLine />

            <PostsSection>
                {posts.map(post => (
                    <PostCard 
                        post={post}
                        fetchUpdate={fetchPosts}
                        key={post.id}
                    />                    
                ))}
            </PostsSection>
        </PostsPageContainer>
    )
}