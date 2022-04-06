import { Card, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context/MsgsContext";
import AddMessage from "../addMessage/AddMessage";
import Message from "../message/Message";



const Messages = () => {

    const {messages, openForm, open } = useGlobalContext()

    return ( 
        <>
            {(open) && <AddMessage />}
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Messages</Card.Title>
                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                        <Button variant="primary" onClick={openForm}>New message</Button>
                    </div>
                    {(messages) && messages.map((msg, i) => <Message
                        key={i}
                        title={msg.title}
                        message={msg.msg}
                        photo={msg.photo}
                    />)}
                </Card.Body>
            </Card>
            </>
     );
}
 
export default Messages;