import axios from '../axios';


const hendleLoginApi =(TaiKhoan, MatKhau) =>{
    return axios.post('/api/login', {TaiKhoan,MatKhau});
}

const hendlegetUser =(id) =>{
    return axios.get(`/api/getUser?id=${id}`);
}

const createNewUser = (data)=>{
    return axios.post('/api/postUser',data)
}

const DeleteUser = (id)=>{
    // return axios.delete('/api/deleteUser',{id})
    return axios.delete('/api/deleteUser',{
        data: {
            id: id
        }
    });
}

export {hendleLoginApi,hendlegetUser,createNewUser,DeleteUser}