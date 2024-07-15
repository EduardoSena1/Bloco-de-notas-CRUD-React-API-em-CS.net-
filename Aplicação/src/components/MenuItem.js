import React from 'react';


const MenuItem = ({ id, icon, text, active }) => (
  <li className={`item-menu ${active ? 'ativado' : 'desativado'}`}>
    <a href="#" id={id} className={active ? 'ativado' : ''}>
      <span className="icon"><i className={`bi ${icon}`}></i></span>
      <span className="txt-link">{text}</span>
    </a>
  </li>
);

export default MenuItem;
