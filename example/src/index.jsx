import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

import useAssignmentState from 'use-assignment-state';

const App = () => {
  const obj = useAssignmentState({
    a: 1,
    b: 2,

    c: [1, 2, 3, 4],
    d: [
      {
        id: 1,
        name: 'Jhon',
      },
      {
        id: 2,
        name: 'Paul',
      },
      {
        id: 3,
        name: 'Annie',
      },
    ],

    e: {
      key: 'val',

      nested: {
        key: 'val',
      },
    },
  });

  const sum = useMemo(() => (obj.a + obj.b), [obj.a, obj.b]);

  return (
    <div>
      <h1>State Object</h1>
      <pre>
        <code>
          {JSON.stringify(obj, undefined, 2)}
        </code>
      </pre>

      <br />

      {/* keys */}
      <section>
        <h2>Simple keys</h2>

        <div>
          sum (with
          {' '}
          <code>useMemo</code>
          ):
          {' '}
          {sum}
        </div>

        <button onClick={() => { obj.a += 1; }} type="button">
          {obj.a}
        </button>
        <button onClick={() => { obj.b += 1; }} type="button">
          {obj.b}
        </button>
      </section>

      {/* arrays */}
      <section>
        <h2>Array</h2>

        <div>
          number array:
          {' '}
          {obj.c}
          {obj.c.map((v, i) => (
            <div>
              {i}
              :
              {' '}
              {v}
              <button onClick={() => { obj.c[i] += 1; }} type="button">
                add 1
              </button>
            </div>
          ))}
        </div>

        <br />

        <div>
          object array:
          {obj.d.map(({ name, id }, i) => (
            <div key={id}>
              name:
              {' '}
              {name}
              <br />
              <input value={name} onChange={(e) => { obj.d[i].name = e.target.value; }} />
            </div>
          ))}
        </div>
      </section>

      {/* nested objects */}
      <section>
        <h2>nested objects</h2>

        <input value={obj.e.nested.key} onChange={(e) => { obj.e.nested.key = e.target.value; }} />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
