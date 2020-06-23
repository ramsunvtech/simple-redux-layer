import { initStore, getStore, dispatch } from '../lib/tinyRedux';

// Reducers.
import { parts } from './reducers';

// `Models`.
import { Options } from '../models/Store';

const initializeStore = () => {
  const store: Options = {
    reducers: {
      parts,
    },
  };

  initStore(store);
};

export default {
  initializeStore,
  getStore,
  dispatch
};
