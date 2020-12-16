import * as actionConstants from "./actionConstants";

export const initialState = {
  mobileMenuOpen: false,
  authUser: null,
  tab: actionConstants.tabs.f,
  unsubscribeUserFromDB: () => {},
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
    case actionConstants.setTab:
      return {
        ...state,
        tab: action.payload,
      };
    case actionConstants.setUnsubscribeUserFromDB:
      return {
        ...state,
        unsubscribeUserFromDB: action.payload,
      };
    default:
      return state;
  }
};
