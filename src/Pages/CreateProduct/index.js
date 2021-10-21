import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom'
import PostForm from '../../components/ProductForm';
import api from '../../Assets/lib/api';
import './styles.scss'

const CreatePost = (props) => {

    const [post, setPost] = useState({likes: 0, comments: []}) 
    const history = useHistory()

    const inputHandler = event =>{
       const {name, value} = event.target
       setPost({...post, [name]: value})
    }

    const buttonHandler = async() =>{
        const result = await api.makePost(post)
        history.push('./')
        window.location.reload()
    }

  return (
    <div className='container-fluid'>
       <div className='container post-creation'>
          <h2 className='text-white'>Create a Post</h2>
          <PostForm
          inputHandler={inputHandler}
          buttonHandler={buttonHandler}
          />
      </div>
    </div>
   
      );
    }
    
    export default CreatePost;