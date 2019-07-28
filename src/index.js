import { useMemo, useReducer } from 'react';

const handler = setState => ({
  get: (target, prop) => {
    if (typeof target[prop] === 'object' && target[prop] !== null) {
      return new Proxy(target[prop], handler(setState));
    }

    return target[prop];
  },
  set: (obj, prop, value) => {
    if (obj[prop] !== value) {
      setState({ [prop]: value });
      /* eslint-disable-next-line no-param-reassign */
      obj[prop] = value;
    }

    return true;
  },
});

const useAssignmentState = (initialValue) => {
  const reducer = (state, newState) => ({ ...state, ...newState });
  /* eslint-disable-next-line no-unused-vars */
  const [state, setState] = useReducer(
    reducer,
    initialValue,
  );

  const object = useMemo(() => new Proxy(initialValue, handler(setState)), []);

  return object;
};

export default useAssignmentState;
