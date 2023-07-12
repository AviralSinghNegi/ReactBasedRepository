import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function DefaultExample() {
  return (
    <div style={{width: '80%', margin: 'auto', fontFamily: 'Berkshire Swash. cursive'}}>
    <ListGroup as="ol" numbered >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action variant="info"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Camping</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          * * * * *
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action variant="light"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Trekking</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          * * * * * 
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action variant="info"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Accommodation</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action variant="light"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Bonfire</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action variant="info"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Home Stay</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action variant="light"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Snow Adventure</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>

    </ListGroup>
    </div>
  );
}

export default DefaultExample;