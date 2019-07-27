import React from 'react';
import ReactDOM from 'react-dom';

import useMyHook from 'use-assignment-state';

const App = () => {
  const [a, setA] = useMyHook();

  return (
    <button onClick={() => setA(a + 1)} type="button">
      {a}
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
