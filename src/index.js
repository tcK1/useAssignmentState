import { useState } from 'react';

const useMyHook = () => {
  const [a, setA] = useState(1);

  return [a, setA];
};

export default useMyHook;
