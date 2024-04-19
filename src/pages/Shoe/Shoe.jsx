import { useNavigate, useParams } from 'react-router-dom';
import { shoesData } from '../../shoes';
import './Shoe.scss';

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
  {
    size: 44,
    id: 6
  },
];

function Shoe() {
  const { shoeId } = useParams();

  const navigate = useNavigate();

  const shoe = shoesData.find((sh) => sh.id === +shoeId);

  return (
    <div className="shoePage">
      <button onClick={() => navigate('/')} className="close">
        X
      </button>
      <div className="shoePage__image">
        <img src={shoe.image} alt="" />
      </div>

      <div className="shoePage__mid">
        <div className="shoePage__mid--title">
          <h1>{shoe?.name}</h1>
          <div className="shoePage__mid--title--price">
            <h2>${shoe?.price}</h2>
            <div className="line"></div>
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
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Shoe;
