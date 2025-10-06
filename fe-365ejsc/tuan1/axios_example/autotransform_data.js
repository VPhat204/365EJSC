import axios from 'axios';

// Tạo một instance Axios với cấu hình chuyển đổi dữ liệu
const instance = axios.create({
  baseURL: 'https://api.example.com', // Thay thế bằng URL cụ thể của bạn
  transformResponse: [function (data) {
    // Chuyển đổi dữ liệu từ phản hồi trước khi nó được trả về
    // Ví dụ: Chuyển đổi dữ liệu JSON thành đối tượng JavaScript
    return JSON.parse(data);
  }],
  transformRequest: [function (data) {
    // Chuyển đổi dữ liệu trước khi gửi nó đi
    // Ví dụ: Chuyển đổi đối tượng JavaScript thành dữ liệu JSON
    return JSON.stringify(data);
  }],
});

// Sử dụng instance Axios với cấu hình chuyển đổi dữ liệu
instance.get('/data')
  .then(function (response) {
    // Dữ liệu đã được chuyển đổi từ phản hồi
    console.log(response.data);
  })
  .catch(function (error) {
    console.error('Lỗi:', error);
  });
