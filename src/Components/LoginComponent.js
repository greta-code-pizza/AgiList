import React from 'react';

export default function LoginComponent(props) {
  return (
    <button 
      onClick={() => props.handleAddUser()}
    >
      Me co avec Github
    </button>
  )
};


