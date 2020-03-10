import React, { useState, useEffect } from 'react';

import './header.scss';
import Loader from 'src/components/Loader';
// no longer using picture stored in repo,
// since it takes too long to load when
// site is deployed
/* import picture from 'src/styles/assets/images/abeba/abeba_ngwe.jpg'; */
import hideMobileMenu from 'src/utils/hideMobileMenu';

const Header = () => {
  const [loading, setLoading] = useState(true);

  const loaded = () => setLoading(false);

  useEffect(() => {
    document.querySelector('img').addEventListener('load', () => {
      loaded();
    });
  });

  return (
    <div className="header" onClick={hideMobileMenu}>
      {loading && <Loader />}
      {!loading && (
      <div className="header-text">
        <p className="header-text-subtitle fade">Mon nom est Abeba Ngwe et je suis <strong className="header-text-subtitle-profession">développeuse Node.js</strong><strong className="header-text-subtitle-profession">, React</strong> et <strong className="header-text-subtitle-profession">Vue.js</strong>. Pour voir mon portfolio, suivez mon regard.</p>
      </div>
      )}
      {!loading && (
      <div className="header-picture">
        <img
          className="header-picture-content fade"
          src="https://www.cjoint.com/doc/20_02/JBDcwuQLDnA_abeba-ngwe.jpg"
          alt="Portrait où Abeba Ngwe regarde vers le bas en souriant, donnant l'impression d'observer la section suivante du site qui se trouve justement plus bas."
        />
      </div>
      )}
    </div>
  );
}


export default Header;
