import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { AddComment, CreateNewComment, SetPostId} from '../store/actions/CommentAction'

const mapStateToProps = ({ postState , commentState}) => {
    console.log(commentState)
    return { postState , commentState}
  
  }
  
  const mapDispatchToProps = (dispatch) => {
      return{
        setCreateComment: (formName, formValue) => dispatch(CreateNewComment(formName, formValue)),
        setAddComment: (formData) => dispatch(AddComment(formData)),
        setId: (id) => dispatch(SetPostId(id))
      }
  }

const PostForm = (props) => {

    const handleChange = (e) => {
        props.setCreateComment(e.target.name, e.target.value)
      }
      
      const handleSubmit = (e) => {
        e.preventDefault()
        props.setAddComment(props.commentState)
        // props.history.push(`/`) 
      }

      // const handleNewPost = () => {
      //   props.setId(props.id)
      // }

      useEffect(() => {
        props.setId(props.id)
      }, [props.id])
      
    return (
        <div>
          <div className="form-container">
          <h1>Add a Comment</h1>
            <form type="submit" onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={props.commentState.username}
                onChange={handleChange}
                className="input-feild"
                />
                <br></br>
                <input
                type="text"
                name="comment"
                placeholder="Insert Comment"
                value={props.commentState.comment}
                onChange={handleChange}
                className="input-feild"
                />
                <input
                type="hidden"
                name="post_id"
                value={props.commentState.post_id}
                // onChange={handleChange}
                />
                <br></br>
                <button className="post">Create a Post!</button>
            </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)