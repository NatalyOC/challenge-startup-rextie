//import {GET_USER} from './actions';
import { authActions } from './actions';

 const reducer= (state={
  authenticated:false,
  user:null,
  }, action)=> {
  switch (action.type) {
    case authActions.SIGN_IN:
    const {payload}=action;
      return {
        ...state,
        authenticated:true,  
        user:payload,
      }
    default:
      return state;
  }

} 


export default reducer;