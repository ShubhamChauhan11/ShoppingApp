import { ListGroup, Button } from "react-bootstrap";

function Section1(props) {
  return (
    <ListGroup>
      {props.products.map((product) => {
        return (
          <ListGroup.Item
            key={product.name}
            onClick={() => {
              props.setSelectedProduct(product);
              props.setShowImage(false);
            }}
          >
            {product.name}

            <Button variant="danger" className="ml-3">
              Delete
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Section1;
