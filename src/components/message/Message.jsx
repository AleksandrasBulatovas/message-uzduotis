
import { useGlobalContext } from "../../context/MsgsContext";

const Message = (props) => {   

    const {counter, likeButton} = useGlobalContext()
    return (
       
        <div className="row">
            <div className="col-3">
                <div className="card mt-5">
                    <img src={props.photo} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.message}</p>
                        <p className="card-text">
                            <span style={{fontSize:'20px', marginRight:'10px'}}>{counter} </span>
                            <button type="button" class="btn btn-primary" onClick={likeButton}>Like</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    );
}
 
export default Message;