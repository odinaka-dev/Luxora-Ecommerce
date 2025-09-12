import { setCookies, deleteCookies, getCookies } from "./cookies";

let tokenMatch: string | null = null;

// saving the token
export const saveTokens = (token: string) => {
  tokenMatch = token;
  localStorage.setItem("token", token);
  setCookies("token", token);
};
