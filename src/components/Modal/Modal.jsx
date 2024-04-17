import "./Modal.scss";

function Modal({ toggleHandler, addToCartHandler, cartItem, removeHandler, totalQuantity, totalPrice }) {
  console.log(cartItem);

  return (
    <div className="modal">
      <buttonbutton className="modal__close" onClick={toggleHandler}>
        x
      </buttonbutton>
      {cartItem.length === 0 ? (
        <p>Empty</p>
      ) : (
        cartItem.map((burger) => (
          <div className="modal__cartShoes--burger">
            <div key={burger.id} className="modal__cartShoes--burger">
              <div className="modal__cartShoes--burger--image">
                <img src={burger.image} alt="" />
              </div>
              <div className="modal__cartShoes--burger--title">
                <h1>{burger.name}</h1>
                <p>${burger.price}</p>
              </div>
              <div className="modal__cartShoes--burger--buttons">
                <button onClick={() => removeHandler(burger)}>-</button>
                <span>{burger.qty}</span>
                <button onClick={() => addToCartHandler(burger)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="modal__calc">
        <div>
          <h2>Total Quantity</h2>
          <p>{totalQuantity}</p>
        </div>
        <div>
          <h2>Delivery Fee</h2>
          <p>$10.0</p>
        </div>
        <div>
          <h2>Sales Tax</h2>
          <p>$5.0</p>
        </div>
        <div>
          <h2>Total Price</h2>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
