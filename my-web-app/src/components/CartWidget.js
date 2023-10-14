import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="notification">3</span> {/* Número hardcodeado */}
    </div>
  );
}

export default CartWidget;

