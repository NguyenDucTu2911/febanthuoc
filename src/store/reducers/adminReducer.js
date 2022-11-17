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
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copystate = {...state};
            copystate.GioiTinhs = action.data
            return {
                 ...copystate,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state, 
            }

        case actionTypes.FETCH_ROLR_SUCCESS:
            let copyROLE = {...state};
            copyROLE.ROLL = action.data
            return {
                    ...copyROLE,
            }

        case actionTypes.FETCH_ROLE_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;