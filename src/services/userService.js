import axios from '../axios';


const hendleLoginApi =(TaiKhoan, MatKhau) =>{
    return axios.post('/api/login', {TaiKhoan,MatKhau});
}

export {hendleLoginApi}