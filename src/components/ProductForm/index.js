import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import noImage from '../../Assets/lib/img/sinimagen.png'
import { FiImage } from 'react-icons/fi'
import './styles.scss'

const PostForm = (props) => {

    const {inputHandler, buttonHandler, imagePath, inputFileHandler} = props
    

  return (
    <div className='post-form'>
      <Form >
        <FormGroup>
           <Input
             type="text" 
             name='title'
             onChange={inputHandler} 
             placeholder='Title'
             />
        </FormGroup>
        <FormGroup>
            <Input 
             type="text" 
             name='name'
             onChange={inputHandler} 
             placeholder='Name'
             />
        </FormGroup>
        <FormGroup>
        <Input
             type="textarea" 
             name='content'
             onChange={inputHandler} 
             placeholder='Write your content'
             />
        </FormGroup>
        <Button 
           className="mt-3 tongue" 
           onClick={buttonHandler}
           >Publish</Button>
      </Form>
      <div className='storage-container'>
          <div className="image-container">  
            <img className="image-preview" src= {`${imagePath ?  imagePath : noImage }`}/>                                            
          </div>
          <div className="image-div"  >
              <Button className="d-flex justify-content-center add-image" >
                 
                      <label for="dogImage">Image <FiImage/></label>
                      <input 
                      id="dogImage"
                      type="file" 
                      accept="image/*"
                      name='dogImage' 
                      className='file-input d-none'
                      onChange={inputFileHandler}
                      />
                 
              </Button>
          </div>
      </div> 
    </div>
  )
}


export default PostForm;