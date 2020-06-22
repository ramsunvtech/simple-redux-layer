import { initStore, getStore, dispatch } from '../lib/tinyRedux';

// Reducers.
import { parts } from './reducers';

const initializeStore = () => {
  initStore({
    reducers: {
      parts,
    },
  });
};

export default {
  initializeStore,
  getStore,
  dispatch
};