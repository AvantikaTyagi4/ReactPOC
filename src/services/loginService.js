export async function login(email, password) {
  return fetch("http://localhost:9000/onboard/auth/authenticate", {
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
