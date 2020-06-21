export const createStore = () => {
  const initialState = {
    items: [
      { name: 'first part', id: 124, status: 'Checked In' },
      { name: 'second part', id: 244, status: 'Checked Out' },
      { name: 'third part', id: 244, status: 'Checked In' },
      { name: 'fourth part', id: 244, status: 'Checked Out' }
    ],
  };

  window.appStore = {
    parts: initialState,
  };
}

export const getStore = () => {
  return window.appStore;
};

export const updateStore = (reducer) => {
  return window.appStore = {
    ...reducer,
  };
};