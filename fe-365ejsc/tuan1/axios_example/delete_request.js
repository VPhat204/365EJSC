api.delete("/products/1")
  .then(res => console.log("Đã xóa:", res.data))
  .catch(err => console.error("Lỗi:", err));
