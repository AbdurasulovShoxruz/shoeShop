import './Left.scss';
import { useState } from 'react';

function Left({ inputHandler }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (category) => {
    setActiveLink(category);
  };


  return (
    <div className="left">
      <div className="left__category">
        <h2>Categories</h2>
        <div className="left__category--categories">
          <div>
            <input id='all' onChange={inputHandler} name="category" type="radio" value="all" />
            <label className={activeLink === 'all' ? 'active' : ''} htmlFor="all" onClick={handleClick}>All</label>
          </div>
          <div >
            <input id='running' onChange={inputHandler} name="category" type="radio" value="running" />
            <label className={activeLink === 'all' ? 'active' : ''} htmlFor="running" onClick={handleClick}>Running Shoes</label>
          </div>
          <div>
            <input id='outdoor' onChange={inputHandler} name="category" type="radio" value="outdoor" />
            <label className={activeLink === 'all' ? 'active' : ''} htmlFor="outdoor" onClick={handleClick}>Outdoor Shoes</label>
          </div>
          <div>
            <input id='gym' onChange={inputHandler} name="category" type="radio" value="gym" />
            <label className={activeLink === 'all' ? 'active' : ''} htmlFor="gym" onClick={handleClick}>Gym Shoes</label>
          </div>
          <div>
            <input id='tennis' onChange={inputHandler} name="category" type="radio" value="tennis" />
            <label className={activeLink === 'all' ? 'active' : ''} htmlFor="tennis" onClick={handleClick}>Tennis Shoes</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
