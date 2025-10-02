axios.get('https://api.example.com/data')
  .then(function (response) {
    // Xử lý phản hồi thành công
  })
  .catch(function (error) {
    if (error.code === 'ECONNABORTED') {
      // Lỗi timeout, ví dụ: yêu cầu mất quá nhiều thời gian để hoàn thành
      console.log('Timeout:', error.message);
    } else {
      // Lỗi mạng khác
      console.log('Lỗi mạng:', error.message);
    }
  });
