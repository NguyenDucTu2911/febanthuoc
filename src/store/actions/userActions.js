import actionTypes from './actionTypes';
import {getAllCodeServices,createNewMedicine,hendlegetAllThuoc, SaveDeteil} from "../../services/userService"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


export const GETMEDICIN=()=>{
    return async (dispatch, getstate)=>{
        try{
            let res = await hendlegetAllThuoc();
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.GET_MEDICINE_SUCCESS,
                    data: res.data
                }) 
            }else{
                dispatch({
                    type: actionTypes.GET_MEDICINE_FAIL
                });
            }
        }catch(e){{
            dispatch({
                type: actionTypes.GET_MEDICINE_FAIL
            });
        }}
    }  
}


export const SAVEMEDICIN=(data)=>{
    return async (dispatch, getstate)=>{
        try{
            let res = await SaveDeteil(data);
            if(res && res.errCode === 0){
                toast.success("Lưu Thành Công", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                dispatch({
                    type: actionTypes.SAVE_DETAIL_MEDICINE_SUCCESS,
                    data: res.data
                }) 
            }else{
                toast.error("Thất Bại", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                dispatch({
                    type: actionTypes.SAVE_DETAIL_MEDICINE_FAIL
                });
            }
        }catch(e){{
            dispatch({  
                type: actionTypes.SAVE_DETAIL_MEDICINE_FAIL
            });
        }}
    }  
}

