import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function PillExample(props) {
    const Content = props.content;
  return (
    <Stack direction="horizontal" gap={2}>
      {/* <Badge pill bg="primary">
        {Content}
      </Badge> */}
      {/* <Badge pill bg="secondary">
        Secondary
      </Badge>
      <Badge pill bg="success">
        Success
      </Badge>
      <Badge pill bg="danger">
        Danger
      </Badge>
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>

      <Badge pill bg="light" text="dark">
        Light
      </Badge>
      <Badge pill bg="dark">
        Dark
      </Badge> */}

      <Badge pill bg="info">
        {Content}
      </Badge>
    </Stack>
  );
}

export default PillExample;