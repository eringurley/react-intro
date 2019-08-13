import React from 'react';

export default function Color() {
  const name = 'red';
  const rgb = {
    r: 255, 
    g: 0, 
    b: 0
  };
  const hex = '#FF0000';

  const styles = {
    backgroundColor: hex,
    width: '0.8rem',
    height: '0.8rem', 
    display: 'inline-block'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name} <div style={styles}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red - {rgb.r}</p>
        <p>Red - {rgb.g}</p>
        <p>Red - {rgb.b}</p>
      </dd>
    </dl>
  );
}
