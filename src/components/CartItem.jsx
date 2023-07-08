import { useCartContext } from "../provider/CartProvider";

const CartItem=({product})=>{
    const {dispatch}=useCartContext();

    return(
        <div className="flex border-gray-300 shadow-sm rounded-xl gap-4 p-4 m-4 max-w-[500px]">
            <img src={product.image} alt={product.title} 
                className="h-28 object-cover self-center p-4"/>

            <div className="flex flex-col gap-4">
                <h2 className="font-bold">
                    {product.title}
                </h2>
                <span>${product.price}</span>
                </div>
                <button className="text-red-500"
                onClick={()=>{
                    dispatch({type:"REMOVE_FROM_CART", payload: product});
                }}
                >
                    Eliminar
                </button>
        </div>)
}

export default CartItem;