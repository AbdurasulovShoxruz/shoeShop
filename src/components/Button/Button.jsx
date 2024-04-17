import React from "react";

function Button({addToCartHandler, burger}) {
  return (
    <div className="button">
      <button>-</button>
      <span>2</span>
      <button >+</button>
    </div>
  );
}

export default Button;
