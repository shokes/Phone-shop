import React, { useState } from "react";
import "./App.css";
import "./index.css";
import phones from "./data";

function App() {
  const [phone, setPhone] = useState(phones);

  const [value, setValue] = useState(0);

  const { id, name, price, img, specs, desc } = phone[value];

  return (
    <main className="container">
      <h3>phone village</h3>
      <div className="flex">
        {phone.map((item, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => {
                setValue(index);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <section>
        <div>
          <img src={img} alt={name} />
        </div>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div className="specs">{specs}</div>

        <p>{desc}</p>
      </section>
    </main>
  );
}

export default App;
