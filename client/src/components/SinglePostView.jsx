import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {GetOnePost, DeletePost } from '../store/actions/PostAction'
import CommentSection from '../components/CommentSection'


const mapStateToProps = ({postState}) => {
  return {postState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (id) => dispatch(GetOnePost(id)),
    destroyPost: (id) => dispatch(DeletePost(id))
  }
}

const SinglePostView = (props) => {
  const postDetail = props.postState.postDetails
  const id = props.match.params.id


  useEffect(() => {
    props.getDetails(id)
     //eslint-disable-next-line
  }, [])

  const handleSubmit = (e) => {
    props.destroyPost(id)
    props.history.push(`/`) 
  }

    return (
        <div>
            <button onClick={(e)=>handleSubmit(e)}>Delete Post</button>
            <h1>post details</h1>
            <h2>{postDetail.username}</h2>
            <img src={postDetail.image} width="100em" alt="memes"></img>
            <p>{postDetail.caption} </p>

            <CommentSection comments={postDetail.comments} />

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (SinglePostView)