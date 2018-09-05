import React from 'react';

import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>These are the details: {props.info} </p>
    </div>
)

// higher order component :  a function which takes a component as input and return the another component


const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
            {props.isAdmin && <p>Hello Admin. These are the admin details. Please don't reveal.</p>}
            <WrappedComponent {...props} />
        </div>
        )
    }
        
    
}

const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {!props.isAuthenticated && <p> Please login to see details.</p> }
                {props.isAuthenticated && <WrappedComponent {...props} />}
            </div>
        );
    }
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info="hello vardan" />, document.getElementById('app'));