import axios from 'axios';
export const api = 'https://aarka-backend-aoaoz4oxtq-el.a.run.app/api-v1/';
export const apicaller = (uri, data = null, method, Token) => {
  console.log('plmokmo', data);
  return new Promise((resolve, reject) => {
    var config = {
      method: method,
      url: `http://15.207.26.74:8000/api/${uri}`,
      headers: {
        Authorization: Token,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('api caller', JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log('api caller', error.message);
        reject(error);
      });
  });
};
