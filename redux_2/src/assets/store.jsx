import { createStore } from "redux";
const initialstate={
    counter : 0
}

const reducer=(state=initialstate,action)=>{
    switch (action.type){
        case "inr":
            return{counter:state.counter+action.value}

            case "dcr":
            return{counter:state.counter-action.value}

            case "zero":
            return{counter : 0 }
            default:
                return state
            
    }
}

export const Store=createStore(reducer) 
                //Store is an object which contain reducer function , This store object is created by using store function.