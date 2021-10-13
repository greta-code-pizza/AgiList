import React from 'react';

export default function LoginComponent(props) {
  return (
    <button 
      onClick={() => props.supabase.auth.signIn({ provider: 'github' })}
    >
      Me co avec Github
    </button>
  )
};


