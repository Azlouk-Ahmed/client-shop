import { createContext, useReducer } from "react";

export const HoneyContext = createContext();

export const HoneyReducer = (state, action) => {
    switch (action.type) {
        case "SET-HONEY":
            return { ...state, selectedHoney: action.payload };
        default:
            return state;
    }
};

export const HoneyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(HoneyReducer, { selectedHoney: "عسل البرسيم" });
    console.log("Honey context : ",state.selectedHoney);

    return (
        <HoneyContext.Provider value={{ ...state, dispatch }}>
            {children}
        </HoneyContext.Provider>
    );
};
