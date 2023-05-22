import React from 'react';

function Card({ title, content }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
      <h2>{content}</h2>
    </div>
  );
}

export default Card;
