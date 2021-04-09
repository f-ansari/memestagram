import React from 'react'
import {CreateNewPost, AddPost} from '../store/actions/PostAction'

const mapStateToProps = ({ postState }) => {
    console.log(postState)
    return { postState }
  
  }
  
  const mapDispatchToProps = (dispatch) => {
      return{
        setCreatePost: (formName, formValue) => dispatch(CreateNewPost(formName, formValue)),
        setAddPost: (formData) => dispatch(AddPost(formData))
      }
  }

const PostForm = (props) => {

    const handleChange = (e) => {
        props.setCreatePost(e.target.name, e.target.value)
      }
      
      const handleSubmit = (e) => {
        props.setAddPost(props.postState.createPost)
      }
      
    return (
        <div>
            <h1>I am a form...</h1>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)