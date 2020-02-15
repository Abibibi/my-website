import React from 'react';

import './header.scss';
import picture from 'src/styles/assets/images/abeba_ngwe.png';

const Header = () => (
  <div className="header">
    <div className="header-text">
      <p className="header-text-name">Abeba Ngwe</p>
      <p className="header-text-subtitle">Mon nom est Abeba Ngwe et je suis <strong className="header-text-subtitle-profession">développeuse Node.js</strong><strong className="header-text-subtitle-profession">, React</strong> et <strong className="header-text-subtitle-profession">Vue.js</strong>. Pour voir mon portfolio, suivez mon regard.</p>
    </div>
    <div className="header-picture">
      <img className="header-picture-content" src={picture} alt="portrait où Abeba Ngwe regarde vers le bas en souriant, donnant l'impression d'observer la section suivante du site qui se trouve justement plus bas." />
    </div>
  </div>
);


export default Header;
