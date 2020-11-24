import Axios from "axios";

import { RestUrl } from "./Urls";

export class RestDataSource {
  GetData = async (dataType, params) => this.SendRequest("get", RestUrl[dataType], params);

  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}
