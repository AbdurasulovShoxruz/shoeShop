import { useParams } from "react-router-dom";
import { shoesData } from "../../shoes";
import "./Shoe.scss";

function Shoe() {
  const { shoeId } = useParams();

  const shoe = shoesData.find((sh) => sh.id === +shoeId);

  return (
    <div className="shoePage">
      <div className="shoePage__image">
        <img src={shoe.image} alt="" />
      </div>
      <div className="shoePage__title">
        <h1>{shoe?.name}</h1>
        <h2>${shoe?.price}</h2>
      </div>
      <div className="shoePage__function">
        <div>
            <label htmlFor="">39</label>
            <input type="radio" />
        </div>
      </div>
    </div>
  );
}

export default Shoe;
