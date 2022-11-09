import axios from '../axios';


const hendleLoginApi =(TaiKhoan, MatKhau) =>{
    return axios.post('/api/login', {TaiKhoan,MatKhau});
}

const hendlegetUser =(id) =>{
    return axios.get(`/api/getUser?id=${id}`);
}

export {hendleLoginApi,hendlegetUser}