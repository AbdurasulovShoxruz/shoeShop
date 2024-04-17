import { useEffect, useState } from "react";
import "./App.scss";
import Left from "./components/Left/Left";
import Navbar from "./components/Navbar/Navbar";
import Right from "./components/Right/Right";
import Modal from "./components/Modal/Modal";
import { shoesData } from "./shoes";

function App() {
  const [toggle, setToggle] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [inputData, setInputData] = useState({
    originalData: [...shoesData],
    sortedData: [...shoesData],
    category: "all",
    gender: "all",
    search: "",
  });
  console.log(inputData.sortedData);

  useEffect(() => {
    filterData();
  }, [inputData.category, inputData.gender, inputData.search]);

  const totalQuantity = cartItem.reduce((total, item) => total + item.qty, 0)

  const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.qty) + 10 + 5, 0)

  const filterData = () => {
    let tempData = [...inputData.originalData];
    tempData = tempData.filter((shoe) => 
      shoe.name.toLowerCase().includes(inputData.search)
    );
    if(inputData.category !== "all"){
      tempData = tempData.filter((shoe) => shoe.category === inputData.category);
    }
    if(inputData.gender !== 'all'){
      tempData = tempData.filter((shoe) => shoe.gender === inputData.gender);
    }
  
    setInputData((prev) => {
      return { ...prev, sortedData: tempData };
    });
  }
  

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

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

  const removeHandler = (shoe) => {
    const removeCart = cartItem.find((item) => item.id === shoe.id);

    if (removeCart.qty === 1) {
      setCartItem((prev) => {
        return prev.filter((item) => item.id !== shoe.id);
      });
    } else {
      setCartItem((prev) => {
        return prev.map((item) =>
          item.id === shoe.id ? { ...item, qty: item.qty - 1 } : item
        );
      });
    }
  };

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="app">
        <Navbar
          className="navbar"
          toggleHandler={toggleHandler}
          inputHandler={inputHandler}
        />
        <div className="main">
          <Left category={inputData.category} inputHandler={inputHandler} />
          <Right
            cartItem={cartItem}
            addToCartHandler={addToCartHandler}
            burgers={inputData.sortedData}
          />
        </div>
        {toggle && (
          <Modal
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
            toggleHandler={toggleHandler}
            burgers={inputData.sortedData}
            addToCartHandler={addToCartHandler}
            cartItem={cartItem}
            removeHandler={removeHandler}
          />
        )}
      </div>
    </>
  );
}

export default App;