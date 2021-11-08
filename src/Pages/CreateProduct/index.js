import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom'
import PostForm from '../../components/ProductForm';
import api from '../../Assets/lib/api';
import firebase from '../../Assets/lib/firebase/index'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useForm } from 'react-hook-form'

import './styles.scss'

const CreatePost = () => {

    let [post, setPost] = useState({likes: 0, comments: []}) 
    const [imagePath, setImagePath] = useState(null)
    const [postImg, setPostImg] = useState()
    const { register, errors, handleSubmit } = useForm()


    
    const storage = getStorage(firebase)
    const history = useHistory()

    const inputHandler = event =>{
       const {name, value} = event.target
       console.log(event.target)
       setPost({...post, [name]: value})
    }

    const inputFileHandler = event => {
      if (event.target.files[0]) { 
      const pathObj = URL.createObjectURL(event.target.files[0])
      setImagePath(pathObj)
      setPostImg(event.target.files[0])
      }      
    }

    const uploadFile = async () => {
      const file = postImg
      console.log('image', file)
      const storageRef = ref(storage, 'img/' + file.name)
      const snapshot = await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(snapshot.ref)
      return downloadURL
    }

    const buttonHandler = async() =>{
        
        if (postImg){
          let imageUrl = await uploadFile()
          post.imageUrl = imageUrl
        }
        const result = await api.makePost(post)
        history.push('./')
        window.location.reload()
    }

  return (
    <div className='container-fluid'>
       <div className='container post-creation mb-4'>
          <h2 className='text-white'>Create a Post</h2>
          <PostForm
          imagePath={imagePath}
          inputHandler={inputHandler}
          inputFileHandler={inputFileHandler}
          buttonHandler={buttonHandler}
          />
      </div>
    </div>
   
      );
    }
    
    export default CreatePost;