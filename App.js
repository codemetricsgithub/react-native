import React from 'react';
import Scrollviews from './src/pages/Scrollviews';
import StylesheetCompose from './src/stylesheets/StylesheetCompose';
import StylesheetFlatten from './src/stylesheets/StylesheetFlatten';

const App = () => {
  return (
    <>
      <Scrollviews />
      <StylesheetCompose />
      <StylesheetFlatten />
    </>
  );
};

export default App;
