const loginState = {
    isLoggedin:false,
    token:undefined
}
const loggedReducer = (state=loginState, action) =>{
    switch(action.type){
        case "sign_in":
            return {...state,
                isLoggedin:true,
            }
            case "default":
                return {
                    ...state,
                    isLoggedin: false,
                };

        default:
            return state;
    }
};

export default loggedReducer;