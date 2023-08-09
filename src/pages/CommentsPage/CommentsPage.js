import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, TOKEN_NAME } from '../../constants/constants';
import { goToLoginPage } from '../../routes/coordinator';
import { CommentsPageContainer, CommentsSection, FormSection, PostSection } from './styled';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import PostCard from '../../components/PostCard/PostCard';
import HorizontalLine from '../../components/HorizontalLine';
import CommentCard from '../../components/CommentCard/CommentCard';

export default function CommentsPage() {
    const navigate = useNavigate()
    const params = useParams()

    const [ post, setPost ] = useState(null)
    const [ comments, setComments ] = useState([])
    const [ content, setContent ] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if(!token) {
            goToLoginPage(navigate)
        } else {
            fetchPost()
            fetchComments()
        }
    }, [])

    const fetchPost = () => {
        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.get(BASE_URL + `/posts/${params.id}`, axiosConfig)
            .then(res => {
                setPost(res.data)
            }).catch(err => console.log(err))
    }

    const fetchComments = () => {
        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.get(BASE_URL + `/posts/${params.id}/comments`, axiosConfig)
            .then(res => {
                setComments(res.data)
            }).catch(err => console.log(err))
    }

    const createComment = (e) => {
        e.preventDefault()

        const body = {
            content: content
        }

        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.post(BASE_URL + `/posts/${params.id}/comments`, body, axiosConfig)
            .then(res => {
                fetchPost()
                fetchComments()
                setContent("")
            }).catch(err => console.log(err))
    }

    return (
        <CommentsPageContainer>
            <HeaderBar />

            <PostSection>
                {post && <PostCard post={post} fetchUpdate={fetchPost} />}
            </PostSection>

            <FormSection>
                <form onSubmit={createComment}>
                    <textarea
                        placeholder="Adicionar comentário"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <button className="primary" type="submit"> Comentar </button>
                </form>
            </FormSection>

            <HorizontalLine />

            <CommentsSection>
                {comments.map(comment => (
                    <CommentCard
                        comment={comment}
                        fetchComments={fetchComments}
                        key={comment.id}
                    />
                ))}
            </CommentsSection>
        </CommentsPageContainer>
    )
}