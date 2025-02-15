export async function request(method, url, data) {
  try {
    const token = localStorage.getItem("accessToken");
    const options = {
      method,
      headers: {},
    };

    if (token != null) {
      options.headers["X-Authorization"] = token;
    }

    if (data != undefined) {
      options.headers["content-type"] = "application/json";
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    let res;

    if (response.status != 204) {
      res = await response.json();
    }

    if (response.ok == false) {
      if (response.status == 403) {
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        localStorage.removeItem("accessToken");
      }
      const error = res;
      throw error;
    }

    return res;
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
