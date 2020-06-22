const createReducers = (options = {}) => {
  window.appStoreReducers = {
    ...options.reducers,
  };
};

export const updateStore = (action) => {
  for (let [reducerName, reducerMethod] of Object.entries(window.appStoreReducers)) {
    window.appStore[reducerName] = reducerMethod(window.appStore[reducerName], action);
  }
}

export const initStore = (options = {}) => {
  window.appStore = {};
  createReducers(options);
  updateStore();
};

export const getStore = () => {
  return window.appStore;
};

export const dispatch = (action) => {
  updateStore(action);
};