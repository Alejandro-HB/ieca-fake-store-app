import {Link} from "react-router-dom"
import { useCartContext } from "../provider/CartProvider";



const NavBar=()=>{
    const {
        state:{totalItems},
    }=useCartContext();

    return(
        <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
            <Link to="/"><span>FakeStore</span></Link>
            <Link to="/carrito">
                <div className="flex flex-row gap-1">
                    <div className="w-6 bg-orange-700 rounded-full gap-4 text-center">
                        <span>{totalItems}</span>
                    </div>
                    <span>Carrito</span>
                </div>
            </Link>
        </nav>
    );
}

export default NavBar;