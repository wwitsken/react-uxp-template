import React, { useState } from 'react';
import Spectrum from 'react-uxp-spectrum';
import { app } from 'indesign';

import './Panel1.css';

export default function Panel1() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="panel">
      <div className="element">
        <Spectrum.Heading size="L">UXP Firebase React Template</Spectrum.Heading>
      </div>
      <Spectrum.Divider size="medium" className="element" />
      <Spectrum.Body size="M" className="element">
        Counter: {counter}
      </Spectrum.Body>
      <div className="flex-col element">
        <Spectrum.Button variant="primary" className="flex-item" onClick={() => app.documents.add()}>
          Create Doc
        </Spectrum.Button>
        <Spectrum.Button variant="primary" className="flex-item" onClick={() => setCounter(counter + 1)}>
          Increment
        </Spectrum.Button>
      </div>
    </div>
  );
}
