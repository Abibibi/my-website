import React from 'react';

import './header.scss';
import picture from 'src/styles/assets/images/abeba_ngwe.png';

const Header = () => (
  <div className="header">
    <div className="header-text">
      <p className="header-text-name">Abeba Ngwe</p>
      <p className="header-text-subtitle">Je suis développeuse Node.js, React et Vue.js. Pour voir mon portfolio, suivez mon regard.</p>
    </div>
    <div className="header-picture">
      <img className="header-picture-content" src={picture} alt="portrait où Abeba Ngwe regarde vers le bas en souriant, donnant l'impression d'observer la section suivante du site qui se trouve justement plus bas." />
    </div>
  </div>
);


export default Header;
