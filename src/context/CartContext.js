import { createContext, useEffect, useReducer } from "react";


export const CartContext = createContext();


export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            const productExists = state.cart.some(product => product.id === action.payload.id);
            if (!productExists) {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
            return state;
            case "ADD_QTE":
                const qteFound = state.cart.some(product => product.id === action.payload.id);
                if (!qteFound) {
                    // If the product doesn't exist, add it with default quantity and weight.
                    return {
                        ...state,
                        cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    };
                } else {
                    // If the product exists, update the weightInKg (or any other logic you want).
                    return {
                        ...state,
                        cart: state.cart.map(product =>
                            product.id === action.payload.id
                                ? { ...product, weightInKg: action.payload.weightInKg } // Update weightInKg with the payload's value
                                : product
                        ),
                    };
                }
            
        case "SET_CART":
                return {
                ...state,
                cart: [action.payload],
        }

        case "REMOVE_PRODUCT":
            // Remove the product with the given ID from the cart
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
            };

        case "INCREASE_QUANTITY":
            // Increase the quantity of the specified product
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };
        

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
                        : product
                ),
            };

        default:
            return state;
    }
};





export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, { cart: JSON.parse(localStorage.getItem("cart")) || [] }); 

    console.log("Cart context:", state.cart); 
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
