import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PATH:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data
      };
    default:
      return storeData || {};
  }
}
