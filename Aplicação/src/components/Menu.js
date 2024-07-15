import React, { useState } from 'react';

export function Menu({ onSelectSection }) {
  const [menuRetraido, setMenuRetraido] = useState(false);
  const [activeSection, setActiveSection] = useState('notas');

  const handleMenuClick = (section) => {
    setActiveSection(section);
    onSelectSection(section);
  };

  const toggleMenu = () => {
    setMenuRetraido(!menuRetraido);
  };

  return (
    <aside id="menu" className={menuRetraido ? 'retratil' : ''}>
      <div className="btn-expandir" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>
      <ul>
        <li className={`item-menu ${activeSection === 'notas' ? 'ativado' : 'desativado'}`} onClick={() => handleMenuClick('notas')}>
          <a href="#" id="menu-notas">
            <span className="icon"><i className="bi bi-stickies"></i></span>
            <span className="txt-link">Notas</span>
          </a>
        </li>
        <li className={`item-menu ${activeSection === 'recentes' ? 'ativado' : 'desativado'}`} onClick={() => handleMenuClick('recentes')}>
          <a href="#" id="menu-recentes">
            <span className="icon"><i className="bi bi-clock-history"></i></span>
            <span className="txt-link">Recentes</span>
          </a>
        </li>
        <li className={`item-menu ${activeSection === 'favoritas' ? 'ativado' : 'desativado'}`} onClick={() => handleMenuClick('favoritas')}>
          <a href="#" id="menu-favoritas">
            <span className="icon"><i className="bi bi-star"></i></span>
            <span className="txt-link">Favoritas</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
