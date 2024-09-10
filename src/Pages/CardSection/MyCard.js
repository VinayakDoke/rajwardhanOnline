import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <Card style={{ width: '18rem' }} className='custom-card'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflgyRGKBIWj2eOqDdn3L2-b_sjx1R0_BiAiK40iA10Xxu2lfv0Q2PtxuoS-y2J4O0fJU&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;