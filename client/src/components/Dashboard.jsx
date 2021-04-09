import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {GetMapPost} from '../store/actions/PostAction'


const mapStateToProps = ({ postState }) => {
  console.log(postState)
  return { postState }

}

const mapDispatchToProps = (dispatch) => {
    return{
      getAllPosts: () => dispatch(GetMapPost()),
      // setCreatePost: (formName, formValue) => dispatch(CreateNewPost(formName, formValue)),
      // setAddPost: (formData) => dispatch(AddPost(formData))
    }
}


const AllPosts = (props) => {

useEffect(() => {
  props.getAllPosts()
}, [])

// const handleChange = (e) => {
//   props.setCreatePost(e.target.name, e.target.value)
// }

// const handleSubmit = (e) => {
//   props.setAddPost(props.postState.createPost)
// }


  return (
    <div>
      <h1>All Posts</h1>
        <div className="container">
        {props.postState.mapPost.length ?  (
          props.postState.mapPost.map((post, i) => (
          <div key={i}> 
            <img src={post.image} width="100em"></img>
            <h3>{post.username}</h3>
            <p>{post.caption}</p>
          </div> 
          ))
        ): <h3>Loading</h3> }
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)