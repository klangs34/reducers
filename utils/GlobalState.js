import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const Reducer = (state, action) => {
    switch (action.type) {
        case 'increment': 
            return {...state, count: state.count + 1};
        default:
            return state
    }

}
//set global state
const GlobalProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(Reducer, { count: 0 });
    return <Provider value={[state, dispatch]} {...props} />;
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext }