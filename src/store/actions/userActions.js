import actionTypes from './actionTypes';
import {getAllCodeServices,createNewMedicine} from "../../services/userService"

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

export const fetchRoleSuccess=(Roledata)=>({
    type: actionTypes.FETCH_ROLR_SUCCESS,
    data:Roledata
})

export const fetchRoleFail=()=>({
    type: actionTypes.FETCH_ROLE_FAIL
})

export const fetchRoleStart=()=>{
    return async (dispatch, getstate)=>{
        try{
            let res = await getAllCodeServices('ROLE');
            if(res && res.errCode === 0){
                dispatch(fetchRoleSuccess(res.data)) 
            }else{
                dispatch(fetchRoleFail());
            }
        }catch(e){{
            dispatch(fetchRoleFail());
            console.log(e);
        }}
    }  
}


export const MEDICINESuccess=(Roledata)=>({
    type: actionTypes.SAVE_MEDICINE_SUCCESS,
    data:Roledata
})

export const MEDICINEFail=()=>({
    type: actionTypes.FETCH_ROLE_FAIL
})

export const MEDICINEStart=(data)=>{
    return async (dispatch, getstate)=>{
        try{
            let res = await createNewMedicine(data);
            if(res && res.errCode === 0){
                dispatch(MEDICINESuccess()) 
            }else{
                dispatch(MEDICINEFail());
            }
        }catch(e){{
            dispatch(MEDICINEFail());
        }}
    }  
}