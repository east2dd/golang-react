import React from 'react';

const User = (props) => {
    let user = props.user.login;
    return (
        <div className="user_container">
          <div><span>Email:</span> {user.email}</div>
        </div>
    );
};

export default User;