api.put("/products/1", {
  name: "Sản phẩm mới",
  price: 120000
})
.then(res => console.log("Đã cập nhật:", res.data))
.catch(err => console.error("Lỗi:", err));
