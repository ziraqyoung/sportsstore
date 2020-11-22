import { ActionTypes } from "./Types";
// import { data as phData } from "./placeholderData";
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType) => ({
  type: ActionTypes.LOAD_PATH,
  payload: dataSource.GetData(dataType).then((response) => ({
    dataType,
    data: response.data,
  })),
});
