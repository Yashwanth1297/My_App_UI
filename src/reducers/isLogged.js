const loginState = {
    isLoggedin:false,
    token:undefined
}
const loggedReducer = (state=loginState, action) =>{
    switch(action.type){
        case "sign_in":
            return {...state,
                isLoggedin:true,
                token: action.token
            }
            case "default":
                return {
                    ...state,
                    isLoggedin: false,
                    token: undefined
                };

        default:
            return state;
    }
};

export default loggedReducer;