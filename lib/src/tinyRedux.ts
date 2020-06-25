import {
  Parts,
  Action,
  Reducers,
  Options,
} from './model';

declare global {
  interface Window {
    appStore: {
      [key:string]: Parts;
    };
    appStoreReducers: Reducers;
  }
}

const createReducers = (options: Options) => {
  window.appStoreReducers = {
    ...options.reducers,
  };
};

export const updateStore = (action?: Action) => {
  for (let [reducerName, reducerMethod] of Object.entries(window.appStoreReducers)) {
    window.appStore[reducerName] = reducerMethod(window.appStore[reducerName], action);
  }
}

export const initStore = (options: Options) => {
  window.appStore = {};
  createReducers(options);
  updateStore();
};

export const getStore = () => {
  return window.appStore;
};

export const dispatch = (action: Action) => {
  updateStore(action);
};
