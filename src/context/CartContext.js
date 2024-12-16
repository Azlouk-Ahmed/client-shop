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
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.map(product =>
                        product.id === action.payload.id
                            ? { ...product, weightInKg: action.payload.weightInKg }
                            : product
                    ),
                };
            }

            case "ADD_GIFT":
                // Check if there's an existing gift in the cart
                const existingGift = state.cart.some(product => product.isGift);
            
                // If a gift exists, replace it; otherwise, add the new gift to the cart
                return {
                    ...state,
                    cart: existingGift
                        ? state.cart.map(product =>
                            product.isGift
                                ? { ...product, ...action.payload } // Replace the existing gift with the new one
                                : product
                        )
                        : [...state.cart, { ...action.payload, isGift: true }] // Add the new gift to the cart if no gift exists
                };
            
        case "SET_CART":
            return {
                ...state,
                cart: [action.payload],
            };

        case "REMOVE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
            };

        case "INCREASE_QUANTITY":
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
