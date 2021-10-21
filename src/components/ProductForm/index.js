import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row} from 'reactstrap';
import './styles.scss'

const PostForm = (props) => {

    const {inputHandler, buttonHandler} = props

  return (
    <div className='post-form'>
      <Form>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" name="title" onChange={inputHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={inputHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="text" name="image"onChange={inputHandler} placeholder='Pega aqui la direccion de tu imagen'/>
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input type="textarea" name="content" onChange={inputHandler}/>
        </FormGroup>
      </Form>
      <Button className="mt-3 tongue" onClick={buttonHandler} >Publish</Button>
    </div>
  )
}


export default PostForm;