const add = (a, b) => a + b;
console.log(add(5, 10)); //  15
//Không có binding this

function ES5Example() {
    this.name = "JavaScript";
    setTimeout(function() {
        console.log(this.name); //  undefined (this tham chiếu đến global)
    }, 1000);
}

const ES6Example = () => {
    this.name = "JavaScript";
    setTimeout(() => {
        console.log(this.name); //  "JavaScript" (this giữ nguyên context)
    }, 1000);
};