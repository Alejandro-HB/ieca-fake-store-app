import { useEffect } from "react";
import { useCartContext } from "../provider/CartProvider";

const ProductItem=({product})=>{
    const {dispatch}=useCartContext();
        //console.log(localStorage.getItem("state"))
        //console.log(product.id)
        /*const boton=useEffect(()=>{
            console.log(JSON.parse(localStorage.getItem('state')).cart[product.id].title)
            if (JSON.parse(localStorage.getItem('state')).cart[product.id].title){
                return(
                    <button 
                    className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" 
                        onClick={()=>{
                            dispatch({type:"REMOVE_FROM_CART",payload:product});
                            alert("Producto eliminado del carrito");
                        }
                    }>
                        Eliminar
                    </button>
                )
            }
            else{
                return(
                    
                    <button 
                    className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" 
                        onClick={()=>{
                            dispatch({type:"ADD_TO_CART",payload:product});
                            alert("Producto añadido al carrito");
                        }
                    }>
                        Añadir al carrito
                    </button>
                )
            }
        },[]);
        
    console.log('boton:'+boton)
    */
    return(
        <div className="flex flex-col border-gray-300 shadow-sm rounded-xl">
            <img src={product.image} alt={product.title} 
                className="h-28 object-cover self-center p-4"/>
            <h2 className="font-bold">
                {product.title}
            </h2>
            <span>${product.price}</span>
                <button 
                className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" 
                    onClick={()=>{
                        dispatch({type:"ADD_TO_CART",payload:product});
                        alert("Producto añadido al carrito");
                    }
                }>
                    Añadir al carrito
                </button>
        </div>)
}

export default ProductItem;