export const selectIsLoggedIn = (state) => !!state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
