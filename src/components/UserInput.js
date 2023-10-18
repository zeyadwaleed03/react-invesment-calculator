import React from 'react';
function UserInput(props) {
  return (
    <p>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        value={props.Value}
        type="number"
        onChange={(e) => {
          props.onChan(e.target.value);
        }}
        id={props.id}
      />
    </p>
  );
}

export default UserInput;
