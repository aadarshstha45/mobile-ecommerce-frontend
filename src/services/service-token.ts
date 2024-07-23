export interface TokenDetails {
  token: string;
}

function setToken(token: TokenDetails) {
  try {
    localStorage.setItem("token", token.token);
  } catch (e) {
    console.error("Error storing token", e);
  }
}

function getToken() {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      return {
        token: localStorage.getItem("token") ?? "",
      };
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

function getTokenDetails() {
  try {
    const token = getToken();
    // if (token) {
    //   return token ? JSON.parse(window.atob(token.token.split(".")[1])) : null;
    // }
    return token ?? null;
  } catch (e) {
    return null;
  }
}

function isAuthenticated() {
  const tokenDetails = getTokenDetails();
  if (tokenDetails) {
    return true;
  } else {
    return false;
  }
}

function clearToken() {
  localStorage.removeItem("token");
}

const TokenService = {
  clearToken,
  getToken,
  getTokenDetails,
  isAuthenticated,
  setToken,
};

export default TokenService;
