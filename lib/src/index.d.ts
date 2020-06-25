import React from 'react';
import { Options } from './model';

declare module 'tiny-redux' {
  export function tinyConnect(mapStateToProps: Function, mapDispatchToProps: Function): React.ReactElement;
  export function updateStore(options: Options): void;
  export function initStore(options: Options): void;
  export function getStore(): void;
  export function dispatch(options: Options): void;
}
