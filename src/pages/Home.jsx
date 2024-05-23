import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail/1">Go to Detail with ID 1</Link>
      <br />
      <Link to="/detail/2">Go to Detail with ID 2</Link>
    </div>
  );
}

export default Home;