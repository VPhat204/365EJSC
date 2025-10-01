function test() {
    var a;
    let b;
    const c = 30; // const bắt buộc phải gán giá trị ngay

    if (true) {
        a = 10;
        b = 20;
        // c = 40; không được gán lại
    }

    console.log("a =", a); 
    console.log("b =", b); 
    console.log("c =", c); 
}
test();
