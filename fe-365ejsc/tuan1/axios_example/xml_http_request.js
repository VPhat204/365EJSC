// Import thư viện axios
import axios from 'axios';

// Tạo một yêu cầu GET đến một URL cụ thể
axios.get('https://api.example.com/data')
  .then(function(response) {
    // Xử lý phản hồi từ máy chủ
    console.log(response.data);
  })
  .catch(function(error) {
    // Xử lý lỗi
    console.error(error);
  });
