import React from "react";
import "./MediaCartModal.scss";

function MediaCartModal({
  toggleHandler,
  addToCartHandler,
  cartItem,
  removeHandler,
  totalQuantity,
  totalPrice,
}) {
  return (
    <div className="mediaCartModal">
        <button onClick={toggleHandler} className="closeIcon">X</button>
      {cartItem.length === 0 ? (
        <p>Empty</p>
      ) : (
        cartItem.map((shoe) => (
          <div key={shoe.id} className="mediaCartModal__shoe">
            <div className="mediaCartModal__shoe--image">
              <img src={shoe.image} alt="shoe Image" />
            </div>
            <div className="mediaCartModal__shoe--title">
              <h1>{shoe.name}</h1>
              <p>${shoe.price}</p>
            </div>
            <div className="mediaCartModal__shoe--buttons">
              <button onClick={() => removeHandler(shoe)}>-</button>
              <span>{shoe.qty}</span>
              <button onClick={() => addToCartHandler(shoe)}>+</button>
            </div>
          </div>
        ))
      )}
      <div className="mediaCartModal__calc">
        <div>
            <h1>Total Quantity</h1>
            <p>{totalQuantity}</p>
        </div>
        <div>
            <h1>Delivery Fee</h1>
            <p>$10.0</p>
        </div>
        <div>
            <h1>Sales Tax</h1>
            <p>$5.0</p>
        </div>
        <div>
            <h1>Total Price</h1>
            <p>${totalPrice.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default MediaCartModal;
