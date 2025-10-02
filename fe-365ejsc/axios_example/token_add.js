const token = localStorage.getItem("token");

api.get("/user/profile", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
