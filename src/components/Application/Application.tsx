import * as React from 'react';

import lennaImageUrl from './lenna.png';
import './styles.css';

export const Application = () => {
  return (
    <>
      <h1>Hello!</h1>

      <section>
        <p>Loading images via "file-loader" in the JSX:</p>
        <img src={lennaImageUrl} alt="Lenna test image" />
      </section>

      <section>
        <p>Loading images via "file-loader" in the CSS:</p>
        <div className="lenna"></div>
      </section>
    </>
  );
};
