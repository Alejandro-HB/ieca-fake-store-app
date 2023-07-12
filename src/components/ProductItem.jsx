import React, { useState } from "react";
import { useCartContext } from "../provider/CartProvider";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useCartContext();
  const [inCart, setInCart] = useState(state.cart[product.id] || false);

  const handleClick = () => {
    //Condicional para darle uno u otro funcionamiento al boton
    if (inCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
      alert("Producto eliminado del carrito");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
      alert("Producto añadido al carrito");
    }
    setInCart(!inCart);
  };
//Texto que lleva el boton
  const buttonText = inCart ? "Eliminar del carrito" : "Añadir al carrito";

  return (
    <div className="flex flex-col border-gray-300 shadow-sm rounded-xl">
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center p-4"
      />
      <h2 className="font-bold">{product.title}</h2>
      <span>${product.price}</span>
      <button
        className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductItem;
