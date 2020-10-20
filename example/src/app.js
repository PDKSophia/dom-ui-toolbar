import React from 'react';
import { render } from 'react-dom';
import Main from '../../src';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};
render(<App />, document.getElementById('root'));
