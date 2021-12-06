const getIsLoggedIn = state => state.auth.isLoggedIn;

const getEmail = state => state.auth.user.email;

const getName = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getToken = state => state.auth.token;

export const authSelectors = {
  getIsLoggedIn,
  getEmail,
  getName,
  getIsFetchingCurrent,
  getToken,
};
