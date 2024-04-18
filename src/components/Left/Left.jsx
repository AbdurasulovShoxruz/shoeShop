import "./Left.scss";

function Left({ inputHandler }) {
  

  return (
    <div className="left">
      <div className="left__category">
        <h2>Categories</h2>
        <div className="left__category--categories">
          <div>
            <input
              id="all"
              onChange={inputHandler}
              name="category"
              type="radio"
              value="all"
            />
            <label htmlFor="all">
              All
            </label>
          </div>
          <div>
            <input
              id="running"
              onChange={inputHandler}
              name="category"
              type="radio"
              value="running"
            />
            <label htmlFor="running">
              Running Shoes
            </label>
          </div>
          <div>
            <input
              id="outdoor"
              onChange={inputHandler}
              name="category"
              type="radio"
              value="outdoor"
            />
            <label htmlFor="outdoor">
              Outdoor Shoes
            </label>
          </div>
          <div>
            <input
              id="gym"
              onChange={inputHandler}
              name="category"
              type="radio"
              value="gym"
            />
            <label htmlFor="gym">
              Gym Shoes
            </label>
          </div>
          <div>
            <input
              id="tennis"
              onChange={inputHandler}
              name="category"
              type="radio"
              value="tennis"
            />
            <label htmlFor="tennis">
              Tennis Shoes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
