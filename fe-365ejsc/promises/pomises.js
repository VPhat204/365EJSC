const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Dữ liệu đã tải!"), 2000);
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));