import actionTypes from './actionTypes';
import {getAllCodeServices} from "../../services/userService"

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const userLoginSuccess = (userInfo) =>({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

// export const fetchGenderStart=()=>({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart=()=>{
    return async (dispatch, getstate)=>{
        try{
            let res = await getAllCodeServices('GioiTinh');
            if(res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data)) 
            }else{
                dispatch(fetchGenderFail());
            }
        }catch(e){{
            dispatch(fetchGenderFail());
            console.log(e);
        }}
    }
   
    
}

export const fetchGenderSuccess=(GioiTinhdata)=>({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:GioiTinhdata
})

export const fetchGenderFail=()=>({
    type: actionTypes.FETCH_GENDER_FAIL
})

