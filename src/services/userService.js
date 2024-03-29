import axios from "../axios";

const hendleLoginApi = (TaiKhoan, MatKhau) => {
  return axios.post("/api/login", { TaiKhoan, MatKhau });
};

const hendlegetUser = (id) => {
  return axios.get(`/api/getUser?id=${id}`);
};

const createNewUser = (data) => {
  return axios.post("/api/postUser", data);
};

const editUsersv = (data) => {
  return axios.put("/api/putUser", data);
};

const DeleteUser = (id) => {
  return axios.delete("/api/deleteUser", {
    data: {
      id: id,
    },
  });
};
const getAllCodeServices = (inputdata) => {
  return axios.get(`/api/getAllcode?type=${inputdata}`);
};

const createNewMedicine = (data) => {
  return axios.post("/api/postMedicine", data);
};

const hendlegetThuoc = (id) => {
  return axios.get(`/api/getMedicine?id=${id}`);
};

const hendlegetAllThuoc = () => {
  return axios.get(`api/getAllMedicine`);
};

const editThuocsv = (data) => {
  return axios.put("/api/UpdateMedicine", data);
};

const DeleteThuoc = (id) => {
  return axios.delete("/api/deleteMedicine", {
    data: {
      id: id,
    },
  });
};

const SaveDeteil = (data) => {
  return axios.post("/api/SaveMedicine", data);
};

const getDetailMec = (id) => {
  return axios.get(`/api/getDetailMedicine?id=${id}`);
};

const portCart = (data) => {
  return axios.post("/api/portMuaHang", data);
};

const report = (data) => {
  return axios.get(`/api/get-list-giohang?id=${data.id}`);
};

const GetAllthuocId = (data) => {
  return axios.get("/api/GetAllthuocId", data);
};

const hendleALLKhachHang = (id) => {
  return axios.get(`/api/GetAllKhachHang?id=${id}`);
};

export {
  hendleLoginApi,
  hendlegetUser,
  createNewUser,
  DeleteUser,
  editUsersv,
  getAllCodeServices,
  createNewMedicine,
  hendlegetThuoc,
  hendlegetAllThuoc,
  editThuocsv,
  DeleteThuoc,
  SaveDeteil,
  getDetailMec,
  portCart,
  report,
  GetAllthuocId,
  hendleALLKhachHang,
};
