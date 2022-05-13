import React from 'react';

import error404 from '../assets/svg/setting.svg';
import './error404.css';

export const Error404 = () => {
  return (
    <div className="error404__container">
      <div className="error404__content">
        <img src={error404} alt="error404" loading="eager" />
        <h2>Idade te Informa</h2>
        <small>Lo sentimos nuestra pagina se esta actualizando</small>
      </div>
    </div>
  );
};
