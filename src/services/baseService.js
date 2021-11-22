import axios from "axios";

export class baseService {
  post = (url, model) => {
    return axios({
      url: `${url}`,
      method: "POST",
      body: JSON.stringify({
        model,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  put = (url, model) => {
    return axios({
      url: `${url}`,
      method: "PUT",
      body: JSON.stringify({
        model,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  get = (url) => {
    return axios({
      url: `${url}`,
      method: "GET",
    });
  };

  delete = (url) => {
    return axios({
      url: `${url}`,
      method: "DELETE",
    });
  };
}
