import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    const CardTitile = props.cardTitle;
    const Content = props.content;
    const Imageurl = props.imageUrl; 
  return (
    <Card className='mb-3' style={{  }}>
      <Card.Img variant="top" src={Imageurl} />
      <Card.Body style={{minHeight: ''}}>
        <Card.Title>{CardTitile}</Card.Title>
        <Card.Text>
          {Content}
        </Card.Text>
        <Button variant="primary">Explore...</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;