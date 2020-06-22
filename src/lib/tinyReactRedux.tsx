import React from 'react';
import { getStore, updateStore, dispatch } from './tinyRedux';

export const tinyConnect = <DefaultProps extends {}>(
  mapStateToProps: Function, mapDispatchToProps: Function
): InferableHOC<DefaultProps> => <TProps extends {}>(
  Component: React.ComponentType<TProps & DefaultProps>
) => {
  return class ComponentWithStore extends React.Component<TProps> {
    render() {
      const mappedStateProps = mapStateToProps && mapStateToProps(getStore());
      const mappedDispatchProps = mapDispatchToProps && mapDispatchToProps(dispatch);

      return (
        <div>
          <Component {...this.props} {...mappedStateProps} {...mappedDispatchProps} />
        </div>
      );
    }
  };
};