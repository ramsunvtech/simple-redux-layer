export default interface Part {
  name: string;
  id: number;
  status: boolean;
};

export interface Store {
  parts: {
    items: Part[];
  };
};

export type Action = {
  type?: string;
  partItem?: number;
};

export type Parts = {
  items: Part[];
};

export type ReducerMethod = (state: Parts, action: Action) => Parts;

export interface Reducers {
  parts?: Function;
};

export interface Options {
  reducers?: Reducers;
};