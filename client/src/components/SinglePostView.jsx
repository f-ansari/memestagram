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
        <div className="form-container">
            <button className="delete-btn" onClick={(e)=>handleSubmit(e)}>Delete Post</button>
            <br></br>
            <img width="75%" src={postDetail.image} alt="memes"></img>
            <h2>@{postDetail.username}</h2>
            <p>{postDetail.caption} </p>

            <CommentSection comments={postDetail.comments} id={props.match.params.id} />

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (SinglePostView)