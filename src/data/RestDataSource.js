import Axios from "axios";

import { RestUrl } from "./Urls";

export class RestDataSource {
  constructor(err_handler) {
    this.err_handler = err_handler || ( () => {} )
  }

  GetData = (dataType, params) => this.SendRequest("get", RestUrl[dataType], params);

  StoreData = (dataType, data) => this.SendRequest('post', RestUrl[dataType], {}, data)

  SendRequest = (method, url, params, data) => Axios.request({ method, url, params, data });
}
