import * as actionConstants from "./actionConstants";

export const initialState = {
  mobileMenuOpen: false,
  authUser: true,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionConstants.openMobileMenu:
      return {
        ...state,
        mobileMenuOpen: action.payload,
      };
    case actionConstants.setAuthUser:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};
