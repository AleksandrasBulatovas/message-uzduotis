import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useGlobalContext } from "../../context/MsgsContext";


const AddMessage = () => {
    const {addMessage, openForm} = useGlobalContext()
    const [newMessage, setNewMessage] = useState({
        title:'',
        msg:'',
        photo:''
    })

    const handleChange = (e)=>{
        setNewMessage({
            ...newMessage,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        addMessage(newMessage)
        openForm()
    }

    return ( 
        <Card>
          <Card.Header>Create Message</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler} >
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={newMessage.title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  name="msg"
                  onChange={handleChange}
                  value={newMessage.msg}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  type="text"
                  name="photo"
                  onChange={handleChange}
                  value={newMessage.photo}
                />
              </Form.Group>
              <Button type="submit">Save</Button>
            </Form>
          </Card.Body>
        </Card>
     );
}
 
export default AddMessage;