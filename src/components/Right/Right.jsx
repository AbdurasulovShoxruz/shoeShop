import Shoe from "../../pages/Shoe/Shoe";
import Button from "../Button/Button";
import "./Right.scss";

function Right({ burgers, addToCartHandler, cartItem , handleNavigate}) {
  const existingCart = cartItem.find((item) => item.id === burgers.id);

  return (
    <div className="right">
      <div className="right__shoes">
        {burgers.map((burger) => (
          <div key={burger.id} className="right__shoes--shoe">
            <img onClick={() => handleNavigate(burger.id)} src={burger.image} alt="" />
            <h1 className="right__shoes--shoe--name">{burger.name}</h1>
            <div className="right__shoes--shoe--price">
              <p className="newPrice">${burger.price}</p>
              <div className="shoeLine"></div>
              <p className="prevPrice">${burger.previousPrice}</p>
            </div>
            {existingCart ? (
              <Button
                addToCartHandler={addToCartHandler}
                existingCart={existingCart}
                burger={burger}
              />
            ) : (
              <button
                onClick={() => addToCartHandler(burger)}
                className="right__shoes--shoe--addCart"
              >
                Add Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right;
