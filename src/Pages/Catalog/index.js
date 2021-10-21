import React, {useState, useEffect} from 'react';
import {
 Col,
 Row
} from 'reactstrap';
import ProductCard from '../../components/ProductCard';
import api from '../../Assets/lib/api';

const PostCatalog = (props) => {
    
    const [posts, setPosts] = useState({})
    

    useEffect( async () => {

        const result = await api.getAllPosts()
        console.log(result)
        setPosts(result)
    
      },[])

  return (
      <div className='container-fluid'>
          <div className='container'>
            <h2 className='text-white'>Dog Posts</h2>
            <Row>{ Object.keys(posts).map((item) => {
                return ( <ProductCard
                postKey = {item}
                cardData = {posts[item]} // se esta accediento al objeto posts con key 'item' 
                    />
                )
            })}    
            </Row>
          </div>  
      </div>
    
  );
};

export default PostCatalog;