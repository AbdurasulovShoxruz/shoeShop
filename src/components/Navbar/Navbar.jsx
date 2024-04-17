import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar({ toggleHandler, inputHandler }) {
  return (
    <div className="navbar">
      <h1>Shokhruz</h1>
      <div className="navbar__features">
        <div className="navbar__features--search">
          <input
            onChange={inputHandler}
            name="search"
            type="text"
            placeholder="Search names of shoes"
          />
          <SearchIcon />
        </div>
        <div className="line"></div>
        <div className="navbar__features--category">
          <input
            id="allGender"
            onChange={inputHandler}
            name="gender"
            type="radio"
            value={"all"}
          />
          <label htmlFor="allGender">All</label>
        </div>
        <div  className="navbar__features--category">
          <input
            id="male"
            onChange={inputHandler}
            name="gender"
            type="radio"
            value={"Man"}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div  className="navbar__features--category">
          <input
            id="female"
            onChange={inputHandler}
            name="gender"
            type="radio"
            value={"Woman"}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="line"></div>
        <ul>
          <a href="">Home</a>
          <a href="">Location</a>
          <a href="">Contact Us</a>
        </ul>
      </div>
      <div className="navbar__login">
        <button>Sign In</button>
        <button>Sign Up</button>
        <ShoppingCartIcon onClick={toggleHandler} className="cart" />
      </div>
    </div>
  );
}

export default Navbar;
