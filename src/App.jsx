import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nav from "./navbar";
import React, { useState } from "react";
import Product from "./product";
import Bottom from "./bottom";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (data) => {
    setCart([...cart, data]);
    setTotal(total + data.price);
  };

  let removeFromCart = (data) => {
    const newCart = cart.filter((item) => item.id !== data.id);
    setCart(newCart);
    setTotal(total - data.price);
  };

  let products = [
    { proName: "Fancy Product", price: 40.0,id:1 },
    { proName: "Special Item", price: 18.0, id:2},
    { proName: "Sale Item", price: 25.0, id:3 },
    { proName: "Popular Item", price: 40.0, id:4 },
    { proName: "Sale Item", price: 25.0,id:5 },
    { proName: "Fancy Product", price: 120.0,id:6},
    { proName: "Special Item", price: 18.0, id:7},
    { proName: "Popular Item", price: 40.0,  id:8},
  ];
  
  return (
    <> <div>
             <Nav addToCart={addToCart} cart={cart}  removeFromCart={removeFromCart} total={total}/>
      </div>
      <div className="container px-4 px-lg-5 ">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((data, index) => {
            return <Product data={data} key={index} addToCart={addToCart}  cart={cart}/>;
          })}
        </div>
      </div>
      <div>
        <Bottom/>
      </div>
    </>
  );
}

export default App;
