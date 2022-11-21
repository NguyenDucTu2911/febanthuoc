import actionTypes from '../actions/actionTypes';

const initialState = {
  GioiTinhs: [],
  ROLL: [],
  // isLoggedIn: false,
  // userInfo: null
  allThuoc: [],
  Detail: [],
  numberCart: 0,
  Carts: [],
  _products: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_GENDER_START:
        return {
          ...state,
        };
      case actionTypes.FETCH_GENDER_SUCCESS:
        let copystate = { ...state };
        copystate.GioiTinhs = action.data;
        return {
          ...copystate,
        };
      case actionTypes.FETCH_GENDER_FAIL:
        return {
          ...state,
        };

      case actionTypes.FETCH_ROLR_SUCCESS:
        let copyROLE = { ...state };
        copyROLE.ROLL = action.data;
        return {
          ...copyROLE,
        };

      case actionTypes.FETCH_ROLE_FAIL:
        return {
          ...state,
        };
      case actionTypes.GET_MEDICINE_FAIL:
        state.allThuoc = [];
        return {
          ...state,
        };
      case actionTypes.GET_MEDICINE_SUCCESS:
        state.allThuoc = action.data;
        return {
          ...state,
        };

      case actionTypes.SAVE_DETAIL_MEDICINE_FAIL:
        state.Detail = [];
        return {
          ...state,
        };
      case actionTypes.SAVE_DETAIL_MEDICINE_SUCCESS:
        state.Detail = action.data;
        return {
          ...state,
        };

      case actionTypes.GET_ALL_PRODUCT:
        return {
          ...state,
          _products: action.payload,
        };
      case actionTypes.GET_NUMBER_CART:
        return {
          ...state,
        };
      case actionTypes.ADD_CART:
        if (state.numberCart == 0) {
          let cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.Carts.push(cart);
        } else {
          let check = false;
          state.Carts.map((item, key) => {
            if (item.id == action.payload.id) {
              state.Carts[key].quantity++;
              check = true;
            }
          });
          if (!check) {
            let _cart = {
              id: action.payload.id,
              quantity: 1,
              name: action.payload.name,
              image: action.payload.image,
              price: action.payload.price,
            };
            state.Carts.push(_cart);
          }
        }
        return {
          ...state,
          numberCart: state.numberCart + 1,
        };
      case actionTypes.INCREASE_QUANTITY:
        state.numberCart++;
        state.Carts[action.payload].quantity++;

        return {
          ...state,
        };
      case actionTypes.DECREASE_QUANTITY:
        let quantity = state.Carts[action.payload].quantity;
        if (quantity > 1) {
          state.numberCart--;
          state.Carts[action.payload].quantity--;
        }

        return {
          ...state,
        };
      case actionTypes.DELETE_CART:
        let quantity_ = state.Carts[action.payload].quantity;
        return {
          ...state,
          numberCart: state.numberCart - quantity_,
          Carts: state.Carts.filter((item) => {
            return item.id != state.Carts[action.payload].id;
          }),
        };
      default:
        return state;
    }
}

export default adminReducer;