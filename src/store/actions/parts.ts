import * as actionTypes from './actionTypes';

export const createPart = (part) => {
  return {
    type: actionTypes.CREATE_PART,
    part,
  };
};

export const loadPartList = (partList) => {
  return {
    type: actionTypes.LOAD_PARTS,
    partList,
  }
};
