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
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '50%',
        }}
      >
        <h1>State Object</h1>
        <pre>
          <code>
            {JSON.stringify(obj, undefined, 2)}
          </code>
        </pre>
      </div>

      <div>
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
            {obj.c.map((v, i) => (
              <div key={v}>
                {i}
                :
                {' '}
                {v}
                {' '}
                <button onClick={() => { obj.c[i] += Math.random(); }} type="button">
                  add + random!
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

          <input
            value={obj.e.nested.key}
            onChange={(e) => { obj.e.nested.key = e.target.value; }}
          />
        </section>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
