import { useNavigate, useParams } from 'react-router-dom';
import { shoesData } from '../../shoes';
import './Shoe.scss';
import { useState } from 'react';

const sizeFunctions = [
  {
    size: 39,
    id: 1
  },
  {
    size: 40,
    id: 2
  },
  {
    size: 41,
    id: 3
  },
  {
    size: 42,
    id: 4
  },
  {
    size: 43,
    id: 5
  },
];

function Shoe() {
  const [cartItem, setCartItem] = useState([]);
  const { shoeId } = useParams();

  const navigate = useNavigate();

  const addToCartHandler = (shoe) => {
    const existCart = cartItem.find((item) => item.id === shoe.id);

    if (existCart) {
      const newItem = cartItem.map((item) =>
        item.id === shoe.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItem(newItem);
    } else {
      setCartItem((prev) => {
        return [...prev, { ...shoe, qty: 1 }];
      });
    }
  };

  const shoe = shoesData.find((sh) => sh.id === +shoeId);

  return (
    <div className="shoePage">
      <button onClick={() => navigate('/')} className="close">
        X
      </button>
      <div className="shoePage__image">
        <img src={shoe?.image} alt="" />
      </div>

      <div className="shoePage__mid">
        <div className="shoePage__mid--title">
          <h1>{shoe?.name}</h1>
          <div className="shoePage__mid--title--price">
            <h2>${shoe?.price}</h2>
            <div className="shoeLine"></div>
            <h2 className="prev">${shoe.previousPrice}</h2>
          </div>
        </div>
        <div className="shoePage__mid--title--function">
          <h3>Size</h3>
          <div className="line"></div>
          {
            sizeFunctions.map((size) => (
              <div key={size.id}>
                <input name='size' id='size' type="radio" />
                <label htmlFor="size">{size.size}</label>
              </div>
            ))
          }
        </div>
        <p className='desc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          excepturi rem, dolores, ipsam architecto iste eum nihil repellat, ut
          nisi accusantium consequatur itaque quae animi aut obcaecati porro
          doloribus vel.
        </p>
      </div>
      <div className="shoePage__cart">
        <button onClick={() => addToCartHandler(burger)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Shoe;
