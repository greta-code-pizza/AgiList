import React from 'react';

export function HeaderLayout(props) {
  return (
    <header>
      <h1>Todolist++</h1>
      <img src={props.user.avatar_url} />
      <p>{props.user.full_name}</p>
    </header>
  )
};
