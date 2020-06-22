import Part from './Part';

export default interface Store {
  parts: {
    items: Part[];
  };
};
