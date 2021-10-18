import React from 'react';

export default function LoginComponent({user, handleLogIn, handleLogOut}) {
  if (user) {
    return (
      <button 
      onClick={() => handleLogOut()}
    >
      Me déco
  </button>
    )
  } else {
    return (
      <button 
        onClick={() => handleLogIn({ 
          avatar_url: "https://avatars.githubusercontent.com/u/7339794",
          full_name: "nicolaslechenic"
        })}
      >
        Me co avec Github
      </button>
    )
  }
};


