// action types
export const ADD_ORDER = "ADD_ORDER"

// Action Creators
export const addorder = (data)=>{
    return {
        type:ADD_ORDER,
        payload:data,
    }
}
