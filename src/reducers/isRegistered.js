const regState = {
    isRegistered:false
}
const registeredReducer = (state = regState,action) =>{
    switch(action.type){
        case "sign_up":
            return {...state,
                isRegistered:true
            }
        default:
            return state;
    }
}

export default registeredReducer;