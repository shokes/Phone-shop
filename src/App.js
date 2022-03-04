import React, { useState } from "react";
import "./App.css";
import "./index.css";
import phones from "./data";

function App() {
  const [phone, setPhone] = useState(phones);

  const [value, setValue] = useState(0);

  const { id, name, price, img, released, desc } = phone[value];

  return (
    <main>
      <h3>phone shop</h3>

      {phone.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setValue(index);
            }}
          >
            {item.name}
          </button>
        );
      })}
      <section>
        <div>{name}</div>
        <div>{price}</div>
        <div>{released}</div>

        <div>
          <img src={img} alt={name} />
        </div>
        <p>{desc}</p>
      </section>
    </main>
  );
}

export default App;
