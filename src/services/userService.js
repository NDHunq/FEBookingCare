import axios from "../axios";
const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
const deleteUserService = (userId) => {
  return axios.delete(`/api/delete-user`, { data: { id: userId } });
};
const editUserService = (data) => {
  return axios.put("/api/edit-user", data);
};
const getAllCodeServices = (inputData) => {
  return axios.get(`/api/allcode?type=${inputData}`);
};
const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};
const getAllDoctors = () => {
  return axios.get(`/api/get-all-doctors`);
};
const saveDetailDoctor = (data) => {
  return axios.post(`/api/save-infor-doctors`, data);
};
const getDetailInforDoctor = (inputId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
};
const saveBulkScheduleDoctor = (data) => {
  return axios.post(`/api/bulk-create-schedule`, data);
};
const getScheduleDoctorByDate = (doctorId, date) => {
  return axios.get(
    `/api/get-schedule-doctor-by-date?doctorID=${doctorId}&date=${date}`
  );
};
const getExtraInforDoctorById = (doctorId) => {
  return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`);
};
const getProfileDoctorById = (doctorId) => {
  return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
};
const postPatientBookAppointment = (data) => {
  return axios.post(`/api/patient-book-appointment`, data);
};
const postVerifyBookAppointment = (data) => {
  return axios.post(`/api/verify-book-appointment`, data);
};
const createNewSpecialty = (data) => {
  return axios.post(`/api/create-new-specialty`, data);
};
const getAllSpecialty = () => {
  return axios.get(`/api/get-specialty`);
};
const getAllDetailSpecialtyById = (data) => {
  return axios.get(
    `/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`
  );
};
const createNewClinic = (data) => {
  return axios.post(`/api/create-new-clinic`, data);
};
const getAllClinic = () => {
  return axios.get(`/api/get-clinic`);
};
const getAllDetailClinicById = (data) => {
  return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
};
const getAllPatientForDoctor = (data) => {
  return axios.get(
    `/api/get-all-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`
  );
};
const postSendRemedy = (data) => {
  return axios.post(`/api/send-remedy`, data);
};
export {
  handleLoginAPI,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeServices,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctor,
  getDetailInforDoctor,
  saveBulkScheduleDoctor,
  getScheduleDoctorByDate,
  getExtraInforDoctorById,
  getProfileDoctorById,
  postPatientBookAppointment,
  postVerifyBookAppointment,
  createNewSpecialty,
  getAllSpecialty,
  getAllDetailSpecialtyById,
  createNewClinic,
  getAllClinic,
  getAllDetailClinicById,
  getAllPatientForDoctor,
  postSendRemedy,
};
