import { SERVICE_URL } from "../constants/configuration";

export async function login(email, password) {
  var url = SERVICE_URL +'/auth/authenticate';
  
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}
