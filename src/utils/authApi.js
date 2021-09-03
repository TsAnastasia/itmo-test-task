const BASE_URL = "https://auth.nomoreparties.co";

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  });
};
