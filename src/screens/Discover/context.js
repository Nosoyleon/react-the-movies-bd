import { createContext } from 'react';

const DiscoverContext = createContext({
  rate: { min: 0, max: 0 },
  setRate: () => {}
});

export default DiscoverContext;
