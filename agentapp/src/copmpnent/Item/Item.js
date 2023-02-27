import { useContext, useState } from "react";
import "./item.css";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ModalDialog from "../Modal/Modal";
// import { Store } from "../store";
// import Rating from "./Rating";

export default function Item(props) {
  const { item } = props;
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;

  const addToCartHandler = () => {
    // const existItem = cart.cartItem.find((x) => x.id === item.id);
    // const quantity = existItem ? existItem.qun + 1 : 1;
    // dispatch({ type: "ADD", payload: { ...item, qun: quantity } });
    // // navigate("/cart")
  };
  const handleClick = (e) => {
    setModalShow(true);
  };
  return (
    <>
      <Card key={item.id} className="item">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          onClick={handleClick}
        ></img>

        <Card.Body>
          <Card.Title onClick={handleClick}>{item.name}</Card.Title>

          <Card.Text>{item.price}</Card.Text>
          {props.descShow?<Card.Text>{item.description}</Card.Text>:null}

          <Button className="btn-add" onClick={() => addToCartHandler(item)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
      {modalShow && (
        <ModalDialog
          show={modalShow}
          onHide={() => setModalShow(false)}
          item={item}
        />
      )}
    </>
  );
}
