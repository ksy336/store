// import React, {useEffect, useState} from "react";
// import {IProduct} from "@/components/Cards/Cards-types";
//
// const Context = React.createContext();
//
// function ContextProvider({children}: any) {
//     const [cartItems, setCartItems] = useState([]);
//     useEffect(() => {
//         const cartItemsData = JSON.parse(localStorage.getItem("cartItems") as string);
//
//         if(cartItemsData) {
//             setCartItems(cartItemsData);
//         }
//     },[])
//     useEffect(() => {
//         localStorage.setItem("cartItems", JSON.stringify(cartItems))
//     })
//     function addToCart(newItem: IProduct) {
//         // @ts-ignore
//         setCartItems((prev:any) => [...prev, newItem])
//     }
//     function removeFromCart(id: number) {
//         setCartItems((prev: any) => prev.filter((item: any) => item.id !== id))
//     }
//     function addToFavorites() {
//
//     }
//     return (
//             <Context.Provider value={{cartItems, addToCart, removeFromCart}}>
//                 {children}
//             </Context.Provider>
//             )
// }
// export {ContextProvider, Context};