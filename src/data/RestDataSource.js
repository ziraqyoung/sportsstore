import Axios from "axios";

import { RestUrl } from "./Urls";

export class RestDataSource {
  GetData = (dataType) => this.SendRequest("get", RestUrl[dataType]);

  SendRequest = (method, url) => Axios.request({ method, url });
}
