export const selectIsLoggedIn = state => (state.auth.token ? true : false);
export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.username;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectToken = state => state.auth.token;
export const selectAuthError = state => state.auth.error;
