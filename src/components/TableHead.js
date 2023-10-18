import React from 'react';

function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.head.map((item) => {
          // console.log(item);
          return <th key={item}>{item}</th>;
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
