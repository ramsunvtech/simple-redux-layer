export const createStore = () => {
  const parts = {
    items: [
      { name: 'first part', id: 124, status: 'Checked In' },
      { name: 'second part', id: 244, status: 'Checked Out' },
      { name: 'third part', id: 244, status: 'Checked In' },
      { name: 'fourth part', id: 244, status: 'Checked Out' }
    ],
  };

  window.sessionStorage.setItem('parts', JSON.stringify(parts));
}