import React from 'react';
// import Header from './Header';
import Dog from './Dog';
// import Color from './Color';
import Header from './Header';

// im port Color fKrom './Color';


export default function App() {
  return (
    <>
    <Header />
    <Dog name="spot" age={5} weight="25 lbs" />
    </>
  )
}

