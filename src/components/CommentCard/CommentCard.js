import axios from 'axios';
import { BASE_URL, TOKEN_NAME } from '../../constants/constants';
import ArrowUp from '../../svgs/up.svg';
import ArrowDown from '../../svgs/down-up.svg';
import { CommentCardContainer, CardFooter } from './styled';


export default function CommentCard (props) {
    
    const { comment, fetchComments } = props
    const { id, postId, creator, content, votesCount } = comment
    
    const voteComment = (e, vote) => {
        e.stopPropagation()
        
        const body = {
            commentId: id,
            vote: vote
        }

        const axiosConfig = {
            headers: { 
                Authorization: window.localStorage.getItem(TOKEN_NAME) 
            }
        }

        axios.put(BASE_URL + `/posts/${postId}/comments/${id}/vote`, body, axiosConfig)
            .then(res => {
                fetchComments()
            }).catch(err => console.log(err))
    }

    return (
        <CommentCardContainer>
            <p>Enviado por: {creator.nickname}</p>

            <h1>{content}</h1>

            <CardFooter>
                <section className="vote-info">
                    <button onClick={(e) => voteComment(e, true)}>
                        <img className="vote-icon" src={ArrowUp} alt="Vote up" />
                    </button>

                    <span>{votesCount}</span>

                    <button onClick={(e) => voteComment(e, false)}>
                        <img className="vote-icon" src={ArrowDown} alt="Vote down" />
                    </button>                    
                </section>
            </CardFooter>
        </CommentCardContainer>
    )
}