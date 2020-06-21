import React from 'react';

// export const tinyConnect = (statesToPropsCallback, dispatchCallback) => {
//   const store = window.appStore;
//   const { parts = {} } = store || {};
//   const { items = [] } = parts;

//   return () => {
//     return (
//       <h1>hello</h1>
//     );
//   };
// };

export const tinyConnect = (Comp) => {
  const store = window.appStore;
  const { parts = {} } = store || {};
  const { items = [] } = parts;

  return (
    <Comp parts={items} />
  );
};
