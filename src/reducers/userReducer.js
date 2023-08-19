const initialState ={
    loading:false,
    data: null,
    error:null
}

export const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'FETCH_USER_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
