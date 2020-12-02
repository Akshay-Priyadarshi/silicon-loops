import * as actionConstants from "./actionConstants";

export const initialState = {
  mobileMenuOpen: false,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionConstants.openMobileMenu:
      return {
        ...state,
        mobileMenuOpen: action.payload,
      };
    default:
      return state;
  }
};
