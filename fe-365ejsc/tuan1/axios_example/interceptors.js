import axios from 'axios';

// Tạo một instance Axios
const instance = axios.create({
  baseURL: 'https://api.example.com', // Thay thế bằng URL cụ thể của bạn
});

// Request Interceptor: Trước khi yêu cầu được gửi đi
instance.interceptors.request.use(function (config) {
  // Thực hiện các tác vụ trước khi gửi yêu cầu
  // Ví dụ: Thêm tiêu đề xác thực vào yêu cầu
  config.headers.Authorization = 'Bearer token123';
  return config;
}, function (error) {
  // Xử lý lỗi request
  return Promise.reject(error);
});

// Response Interceptor: Sau khi nhận phản hồi
instance.interceptors.response.use(function (response) {
  // Thực hiện các tác vụ sau khi nhận phản hồi
  // Ví dụ: Xử lý dữ liệu phản hồi
  return response;
}, function (error) {
  // Xử lý lỗi response
  return Promise.reject(error);
});

// Sử dụng instance Axios đã tạo
instance.get('/data')
  .then(function (response) {
    // Xử lý dữ liệu phản hồi
    console.log(response.data);
  })
  .catch(function (error) {
    // Xử lý lỗi
    console.error('Lỗi:', error);
  });
