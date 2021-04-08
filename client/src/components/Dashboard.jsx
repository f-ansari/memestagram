import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {GetMapPost} from '../store/actions/PostAction'


const mapStateToProps = ({postState}) => {
  return {postState}
}

const mapDispatchToProps = (dispatch) => {
    return{
      getAllPosts: () => dispatch(GetMapPost())

    }
}


const AllPosts = (props) => {

useEffect(() => {
  props.getAllPosts()
}, [])

  return (
    <div>
      <h1>All Posts</h1>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (AllPosts)