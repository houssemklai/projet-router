import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MovieCard({el}){
    return(
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to= {`/Gosomewhere/${el.id}`}>  <Button variant="primary">Gosomewhere</Button> </Link>
  </Card.Body>
</Card>
    

        </div>
    )
    }
    export default MovieCard;