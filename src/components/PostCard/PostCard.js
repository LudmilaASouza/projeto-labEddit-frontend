import axios from 'axios';
import { goToCommentsPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, TOKEN_NAME } from '../../constants/constants';
import ArrowUpIcon from '../../svgs/up.svg';
import ArrowDownIcon from '../../svgs/down-up.svg';
import CommentIcon from '../../svgs/comment-icon.svg';
import { PostCardContainer, CardFooter }  from './styled';


export default function PostCard(props) {
    const navigate = useNavigate()

    const { post, fetchUpdate } = props
    const { id, creator, content, votesCount, commentsCount } = post

    const votePost = (e, vote) => {
        e.stopPropagation()

        const body = {
            postId: id,
            vote: vote
        }

        const axiosConfig = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }

        axios.put(BASE_URL + `/posts/${id}/vote`, body, axiosConfig)
            .then(res => {
                fetchUpdate()
            }).catch(err => console.log(err))
    }

    return (
        <PostCardContainer onClick={() => goToCommentsPage(navigate, id)}>
            <p>Enviado por: {creator.nickname}</p>
            
            <h1>{content}</h1>

            <CardFooter>
                <section className="vote-info">
                    <button onClick={(e) => votePost(e, true)}>
                        <img className="vote-icon" src={ArrowUpIcon} alt="Vote up" />
                    </button>

                    <span>{votesCount}</span>

                    <button onClick={(e) => votePost (e, false)}>
                        <img className="vote-icon" src={ArrowDownIcon} alt="Vote down" />
                    </button>
                </section>

                <section className="comment-info">
                    <img className="comment-icon" src={CommentIcon} alt="Icone de comentários" />
                    <span>{commentsCount}</span>
                </section>

            </CardFooter>
        </PostCardContainer>
    )
}