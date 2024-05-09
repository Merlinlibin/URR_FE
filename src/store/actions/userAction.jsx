export const LoginUser = (user) => ({ type: "USER_LOGGED_IN", payload: user });

export const logOutUser = () => ({ type: "USER_LOGGED_OUT" });

export const getUser = (user) => ({ type: "USER_ABOUT", payload: user });

