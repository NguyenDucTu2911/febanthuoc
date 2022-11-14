import actionTypes from '../actions/actionTypes';

const initialState = {
    GioiTinhs: [],
    ROLL:[],
    // isLoggedIn: false,
    // userInfo: null
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
                // isLoggedIn: true,
                // userInfo: action.userInfo
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copystate = {...state};
            copystate.GioiTinhs = action.data
                console.log(copystate)
            return {
                 ...copystate,
                // isLoggedIn: false,
                // userInfo: null
            }
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state,
                // isLoggedIn: false,
                // userInfo: null
            }
        default:
            return state;
    }
}

export default adminReducer;