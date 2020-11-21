import { ActionTypes } from './Types';
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
  type: ActionTypes.LOAD_PATH,
  payload: {
    dataType: dataType,
    data: phData[dataType]
  }
})

