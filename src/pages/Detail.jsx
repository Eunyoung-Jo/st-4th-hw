import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default Detail;
