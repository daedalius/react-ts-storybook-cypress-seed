/* eslint-disable react/no-unescaped-entities */
import React, { useCallback } from 'react';

import lennaImageUrl from './images/lenna.png';
import rgbMixUrl, { ReactComponent as RgbMix } from './images/rgb-mix.svg'
import './styles.css';

export const Application = () : JSX.Element => {
  const handleUnitTestButtonClick = useCallback(() => {
    console.log('called only during unit-tests');
  }, [])
  const handleComponentTestButtonClick = useCallback(() => {
    console.log('called only during cypress component tests');
  }, [])
  const handleE2EButtonClick = useCallback(() => {
    console.log('called only during e2e-tests');
  }, [])
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={handleUnitTestButtonClick}>Jest will click me</button>
      <button onClick={handleComponentTestButtonClick}>Cypress component test will click me</button>
      <button onClick={handleE2EButtonClick}>Cypress E2E will click me</button>

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
