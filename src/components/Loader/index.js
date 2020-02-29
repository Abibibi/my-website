import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader-spinner">
      <div className="loader-spinner-container">
        <div className="loader-spinner-container-hex0" />
        <div className="loader-spinner-container-hex120" />
        <div className="loader-spinner-container-hex240" />
        <div className="loader-spinner">
          <div className="loader-spinner-container">
            <div className="loader-spinner-container-hex0" />
            <div className="loader-spinner-container-hex120" />
            <div className="loader-spinner-container-hex240" />
            <div className="loader-spinner">
              <div className="loader-spinner-container">
                <div className="loader-spinner-container-hex0" />
                <div className="loader-spinner-container-hex120" />
                <div className="loader-spinner-container-hex240" />
                <div className="loader-spinner">
                  <div className="loader-spinner-container">
                    <div className="loader-spinner-container-hex0" />
                    <div className="loader-spinner-container-hex120" />
                    <div className="loader-spinner-container-hex240" />
                    <div className="loader-spinner">
                      <div className="loader-spinner-container">
                        <div className="loader-spinner-container-hex0" />
                        <div className="loader-spinner-container-hex120" />
                        <div className="loader-spinner-container-hex240" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
