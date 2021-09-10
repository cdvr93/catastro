import { ADD_PREDIO, ADD_PREDIO_ERR, ADD_PREDIO_SUC } from "../types";



const initialState = {
    predios: [],
    error:null,
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {  
        case ADD_PREDIO:
            return{
                ...state,
                loading: action.payload
            }
        case ADD_PREDIO_SUC:
            return{
               ...state,
               loading: false,
               predios: [...state.predios,action.payload] 
            }
        case ADD_PREDIO_ERR:
            return{
                ...state,
                loading:false,
                error:action.payload                
            }
        default:
            return state;
    }
    
}