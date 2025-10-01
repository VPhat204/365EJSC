const fetchData = async () => {
    try {
        const data = await fetchDataFromAPI();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};