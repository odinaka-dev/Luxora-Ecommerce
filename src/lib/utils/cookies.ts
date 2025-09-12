import Cookies from "js-cookie";
import { cookiesDomain, cookiesPath } from "@/config";

// remove a cookie
export function setCookies(name: string, value: string) {
  Cookies.set(name, value, {
    domain: cookiesDomain,
    path: String(cookiesPath),
    expires: 60 * 60 * 24, // Expires in 1 day.
  });
}

// delete cookies function
export function deleteCookies(name: string) {
  Cookies.remove(name, {
    domain: cookiesDomain,
    path: String(cookiesPath),
  });
}

export function getCookies(name: string) {
  Cookies.get(name);
}
