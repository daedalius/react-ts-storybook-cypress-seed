/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import lennaImageUrl from './images/lenna.png';
import rgbMixUrl, { ReactComponent as RgbMix } from './images/rgb-mix.svg'
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
      
      <section>
        <p>Loading SVG via <b>SVGR</b> as a React Component:</p>
        <RgbMix width="256" />
      </section>

      <section>
        <p>Loading SVG via <b>SVGR</b> by a reference:</p>
        <img src={rgbMixUrl} alt="star" width="128" />
      </section>
    </>
  );
} ;
