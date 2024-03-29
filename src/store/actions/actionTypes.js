const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGR: "CHANGE_LANGUAGR",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  //admin
  FETCH_GENDER_START: "FETCH_GENDER_START",
  FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
  FETCH_GENDER_FAIL: "FETCH_GENDER_FAIL",

  FETCH_ROLR_SUCCESS: "FETCH_ROLR_SUCCESS",
  FETCH_ROLE_FAIL: "FETCH_ROLE_FAIL",

  SAVE_MEDICINE_SUCCESS: "SAVE_MEDICINE_SUCCESS",
  SAVE_MEDICINE_FAIL: "SAVE_MEDICINE_FAIL",

  GET_MEDICINE_SUCCESS: "GET_MEDICINE_SUCCESS",
  GET_MEDICINE_FAIL: "GET_MEDICINE_FAIL",

  SAVE_DETAIL_MEDICINE_SUCCESS: "SAVE_DETAIL_MEDICINE_SUCCESS",
  SAVE_DETAIL_MEDICINE_FAIL: "SAVE_DETAIL_MEDICINE_FAIL",

  SAVE_ALL_THUOC_SUCCESS: "SAVE_ALL_THUOC_SUCCESS",
  SAVE_ALL_THUOC_FAIL: "SAVE_ALL_THUOC_FAIL",

  //cart
  GET_ALL_PRODUCT: "GET_ALL_PRODUCT",
  GET_NUMBER_CART: "GET_NUMBER_CART",
  ADD_CART: "ADD_CART",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DELETE_CART: "DELETE_CART",
});

export default actionTypes;
