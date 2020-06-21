import React from 'react';
import { getStore, updateStore } from './customRedux';

export const tinyConnect = <DefaultProps extends {}>(
  mapStateToProps: Function, mapDispatchToProps: Function
): InferableHOC<DefaultProps> => <TProps extends {}>(
  Component: React.ComponentType<TProps & DefaultProps>
) => {
  return class ComponentWithStore extends React.Component<TProps> {
    render() {
      function reducer(action) {
        switch (action.type) {
          case 'CREATE_PARTS':
            return {
              items: [
                ...getStore().parts.items,
                action.part
              ]
            };
          default:
            return state
        }
      }

      function dispatch(action) {
        const parts = {
          parts: reducer(action),
        };

        updateStore(parts);
      }

      const mappedStateProps = mapStateToProps(getStore());
      const mappedDispatchProps = mapDispatchToProps && mapDispatchToProps(dispatch);

      return (
        <div>
          <Component {...this.props} {...mappedStateProps} {...mappedDispatchProps} />
        </div>
      );
    }
  };
};