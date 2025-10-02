axios.get('https://api.example.com/data')
  .then(function (response) {
    // Xử lý phản hồi thành công
  })
  .catch(function (error) {
    if (error.response) {
      // Lỗi HTTP, ví dụ: error.response.status
      console.log('Lỗi HTTP:', error.response.status);
    } else if (error.request) {
      // Yêu cầu đã được gửi nhưng không nhận được phản hồi
      console.log('Yêu cầu không được phản hồi:', error.request);
    } else {
      // Lỗi khác
      console.log('Lỗi:', error.message);
    }
  });