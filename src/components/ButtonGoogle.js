import React from 'react';

const ButtonGoogle = ({onGoogleSignIn
 }) => (
  
  <div className="container">{console.log()}
    <div className="row">
      <div className="col s12 center-align">
        <input type="button" value="Login with Google" onClick={onGoogleSignIn} />
      </div>
    </div>
  </div>  
)

export default ButtonGoogle;