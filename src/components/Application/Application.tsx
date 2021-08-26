/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import lennaImageUrl from './lenna.png';
import './styles.css';

export const Application = () : JSX.Element => {
  return (
    <>
      <h1>Hello!</h1>

      <section>
        <p>Loading images via <b>file-loader</b> in the JSX:</p>
        <img src={lennaImageUrl} alt="Lenna test image" />
      </section>

      <section>
        <p>Loading images via <b>file-loader</b> in the CSS:</p>
        <div className="lenna"></div>
      </section>

      <section>
        <p>Loading images from the <b>public folder</b>:</p>
        <img src="/public/lennaNegative.png" alt="Lenna test image" />
      </section>
    </>
  );
} ;
