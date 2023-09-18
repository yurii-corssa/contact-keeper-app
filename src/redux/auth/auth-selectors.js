export const selectIsLoggedIn = state => (state.auth.token ? true : false);

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => {
  console.log('token');
  return state.auth.token;
};
