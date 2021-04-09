import React from 'react'
import {connect} from 'react-redux'
import {CreateNewPost, AddPost} from '../store/actions/PostAction'

const mapStateToProps = ({ postState }) => {
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
        // e.preventDefault()
        props.setAddPost(props.postState.createPost)
        props.history.push(`/`) 
      }
      
    return (
        <div>
          <div className="form-container">
          <h1>Add a Meme</h1>
            <form type="submit" onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={props.postState.createPost.username}
                onChange={handleChange}
                className="input-feild"
                />
                <br></br>
                <input
                type="url"
                name="image"
                placeholder="Upload a Meme"
                value={props.postState.createPost.image}
                onChange={handleChange}
                className="input-feild"
                />
                <br></br>
                <input
                type="text"
                name="caption"
                placeholder="Insert Caption"
                value={props.postState.createPost.caption}
                onChange={handleChange}
                className="input-feild"
                />
                <br></br>
                <input
                type="file"
                accept="image/*"
                name="image"
                className="image-uploader"
                />
                <br></br>
                <button className="post">Create a Post!</button>
            </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)