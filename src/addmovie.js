import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap'

function Addmovie (   { moviedata, setmoviedata} ){
    const [Title, setTitle] = useState('');
    const [Photo, setPhoto] = useState('');
    const [Description, setDescription] = useState('');
    const [Rating, SetRating] = useState('');
    const newMovie=()=>{setmoviedata(   [...moviedata, {title: Title,posterUrl:Photo ,rate:Rating ,description:Description }]   )}
   
      const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
    return(

        <div>

    <Button variant="primary" onClick={handleShow}>
Add new movie    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
         <label> title </label> <input type = 'text' onChange ={(event)=> setTitle(event.target.value)}></input>
         <label> Description </label> <input type = 'text' onChange={(event) =>setDescription(event.target.value)}></input>
         <label> Photo </label> <input type = 'text' onChange={(event) =>setPhoto(event.target.value)}></input>
         <label> rating </label>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={newMovie}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

        </div>
    )
}
export default Addmovie