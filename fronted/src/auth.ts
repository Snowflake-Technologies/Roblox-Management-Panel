export function isLoggedIn() {
  return !!localStorage.getItem("user");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user") || "null");
}

export function logout() {
  localStorage.removeItem("user");
}