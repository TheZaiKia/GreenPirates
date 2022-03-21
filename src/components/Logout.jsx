import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '117544908001-7f5kmi4cov63hdfugrhitc7prub2nrer.apps.googleusercontent.com' ;

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully!');
    };
    
    return(
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;