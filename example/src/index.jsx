import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

import useAssignmentState from 'use-assignment-state';

const App = () => {
  const obj1 = useAssignmentState({
    a: 1,
    b: 2,
    c: [1, 2, 3, 4],
    d: {
      eita: 'hmm',
      mais: {
        fundo: 'kkk',
      },
    },
  });
  const obj2 = useAssignmentState({ a: 1, c: 3 });

  const sum1 = useMemo(() => {
    console.log('sum1');
    return (obj1.a + obj1.b);
  }, [obj1.a, obj1.b]);

  const sum2 = useMemo(() => {
    console.log('sum2');
    return (obj2.a + obj2.c);
  }, [obj2.a, obj2.c]);

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(obj1, undefined, 2)}
        </code>
      </pre>
      <div>
        obj1 sum:
        {' '}
        {sum1}
      </div>

      <button onClick={() => { obj1.a += 1; }} type="button">
        {obj1.a}
      </button>
      <button onClick={() => { obj1.b += 1; }} type="button">
        {obj1.b}
      </button>
      <button onClick={() => { obj1.c[0] += 1; }} type="button">
        {obj1.c.map(val => val)}
      </button>
      <button onClick={() => { obj1.c.reverse(); }} type="button">
        {obj1.c.map(val => val)}
      </button>
      <button onClick={() => { obj1.c = ['outro', 'array']; }} type="button">
        {obj1.c.map(val => val)}
      </button>
      <button onClick={() => { obj1.d.eita = 'eita'; }} type="button">
        {obj1.d.eita}
      </button>
      <button onClick={() => { obj1.d.mais.fundo += 'k'; }} type="button">
        {obj1.d.mais.fundo}
      </button>
      <button onClick={() => { obj1.d.mais = { outro: 'vix' }; }} type="button">
        {obj1.d.mais.fundo}
      </button>
      <button onClick={() => { obj1.e = [1, 2]; }} type="button">
        {obj1.e}
      </button>

      <br />

      <div>
        obj2 sum:
        {' '}
        {sum2}
      </div>

      <button onClick={() => { obj2.a += 1; }} type="button">
        {obj2.a}
      </button>
      <button onClick={() => { obj2.c += 1; }} type="button">
        {obj2.c}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
