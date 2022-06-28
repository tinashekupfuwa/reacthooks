import React, { useState } from "react";

function Clicked() {
  const [clicked, setClicked] = useState(0);

  function increment() {
    setClicked(clicked + 1);
  }
  function decrement() {
    setClicked(clicked - 1);
  }
  return (
    <div className="container clicked_container">
      <h1 className="counter_header">{clicked}</h1>
      <div class="state_buttons">
        <button onClick={increment}>add +1 </button>
        <button onClick={decrement}>subtract -1 </button>
      </div>
    </div>
  );
}

export default Clicked;
