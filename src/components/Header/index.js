import React, { useState, useEffect } from "react";

import "./header.scss";
import Loader from "src/components/Loader";
// no longer using picture stored in repo,
// since it takes too long to load when
// site is deployed
/* import picture from 'src/styles/assets/images/abeba/abeba_ngwe.jpg'; */
import hideMobileMenu from "src/utils/hideMobileMenu";

const Header = () => {
  const [loading, setLoading] = useState(true);

  const loaded = () => setLoading(false);

  useEffect(() => {
    /* document.querySelector("img").addEventListener("load", () => {
      loaded();
    }); */
  });

  return (
    <div className="header" onClick={hideMobileMenu}>
      {/* {loading && <Loader />} */}
      {
        <div className="header-text">
          <p className="header-text-subtitle fade">
            Mon nom est Abeba NGWE et je suis{" "}
            <strong className="header-text-subtitle-profession">
              développeuse front-end
            </strong>
            . <br></br>Pour voir mon portfolio, suivez mon regard.
          </p>
        </div>
      }
      {
        <div className="header-picture">
          <img
            className="header-picture-content fade"
            src="https://ik.imagekit.io/x4pzls7uj/abeba_ngwe_qpkGjbnsXN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653512879663"
            alt="Portrait où Abeba NGWE regarde vers le bas, où se trouvent les projets."
          />
        </div>
      }
    </div>
  );
};

export default Header;
