import axios from "axios";


const ROOT_URL = process.env.REACT_APP_SERVICE_AUTH_URL;

export function addOne(url, params) {
      return axios
            .post(`${ROOT_URL}/${url}`, params)
            .then(data => {
                  return data;
            })
            .catch(err => {
                  return err;
            })       
}

export function getAll(url) {
      return axios
            .get(`${ROOT_URL}/${url}`)
            .then(data => {
                  return data;
            })
            .catch(err => {
                  return err;
            })       
}

// export function getOne(url) {
//       return axios
//             .get(`${ROOT_URL}/${url}`)
//             .then((data) => {
//                   return data;
//             })
//             .catch(err => {
//                   console.log(err);
//                   return err;
//             })       
// }



