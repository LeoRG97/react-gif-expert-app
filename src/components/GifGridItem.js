import React from 'react';

const GifGridItem = ({ id, url, title }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="card__image" src={url} alt="title" />
      <p className="card__title">{title}</p>
    </div>
  );
};

export default GifGridItem;
