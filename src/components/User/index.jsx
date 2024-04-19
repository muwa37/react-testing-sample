import React from 'react';

const User = ({ user, onDeleteHandler }) => {
  return (
    <div>
      {user.name}
      <button id='user-delete' onClick={() => onDeleteHandler(user.id)}>
        delete
      </button>
    </div>
  );
};

export default User;
