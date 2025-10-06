// Không nên
let data: any = "hello";
data = 42;

// Nên dùng
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
