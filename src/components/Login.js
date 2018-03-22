import React from 'react'
import { connect} from 'react-redux';


import { authActions } from '../actions';
import * as firebase from 'firebase';

/* const Login= ({onGoogleSignIn})=>(
  <div className="container">{console.log(onGoogleSignIn)}
  <div className="row">
    <div className="col s12 center-align">
      <input type="button" value="Login with Google" onClick={onGoogleSignIn} />
    </div>
  </div>
</div> 

); */
const Login =()=>{
  const handleAuthGoogle =()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  };
 return (
  <div className="container">
  <div className="row">
    <div className="col s12 center-align">
      <input type="button" value="Login with Google" onClick={this.handleAuthGoogle} />
    </div>
  </div>
</div> 

)
}

/* const mapStateToProps=({state})=>({
  authenticated:true,
});

const mapDispatchToProps = (dispatch) =>({
  onGoogleSignIn:() => { 
    dispatch({ type: authActions.SIGN_IN})
  },
}); 


export default connect(null,mapStateToProps)(Login); */

export default Login;