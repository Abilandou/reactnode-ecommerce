import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (productId, size) => {

        if(!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);
        if(cartData[productId]){
            if(cartData[productId][size]) {
                cartData[productId][size] += 1;
            }
            else {
                cartData[productId][size] = 1;
            }
        }
        else{
            cartData[productId] = {};
            cartData[productId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const products in cartItems) {
            for(const product in cartItems[products]){
                try{

                    if(cartItems[products][product] > 0){
                        totalCount += cartItems[products][product];
                    }

                }catch(error){
                    console.log(error);
                }
            }
        }
        return totalCount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;





