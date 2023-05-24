import { AUTH_STORAGE_KEY } from "../consts/consts";

export default function isAuth() {
  try {
    const auth = Boolean(
      JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "")
    );
    return auth;
  } catch {
    return false;
  }
}
