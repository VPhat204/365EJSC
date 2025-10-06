axios.get('https://api.example.com/data')
  .then(function (response) {
    // Xử lý phản hồi thành công
  })
  .catch(function (error) {
    if (error.message === 'CustomError') {
      // Xử lý lỗi tự định nghĩa
      console.log('Lỗi tự định nghĩa');
    } else {
      // Xử lý các loại lỗi khác
      console.log('Lỗi:', error.message);
    }
  });
