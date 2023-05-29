// Tạo 1 mảng products chứa các tên sản phẩm sau: mercedes, audi, ford, lamborghini


// viết 1 hàm showProduct thực hiện chức năng hiển thị ra tất cả các sản phẩm trong mảng
// kiểm tra xem mảng product có phải là mảng rỗng hay không (2 điểm)
// nếu là mảng rỗng log ra "không có sản phẩm để hiển thị"
// nếu mảng có dữ liệu thì log ra tất cả tên sản phẩm trong mảng

// viết 1 hàm addProduct để thực hiện việc thêm sản phẩm  ( 2 điểm )
// tên sản phẩm nhập vào từ bàn phím
// kiểm tra nếu tên sản phẩm nhỏ hơn 5 ký tự thì bắt nhập lại 
// nếu dữ liệu nhập vào hợp lệ thì cho phép thêm vào mảng products

// viết 1 hàm removeProduct để thực hiện việc xóa sản phẩm ( 2 điểm )
// nhập tên sản phẩm cần xóa từ bàn phím
// nếu tìm thấy tên sản phẩm cần xóa thì thực hiện việc xóa tên sản phẩm đó khỏi mảng
// nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần xóa"
// hiển thị lại dữ liệu trong mảng sau khi đã xóa sản phẩm thành công





const products = [
    "mercedes",
    "audi",
    "ford",
    "lamborghini",
];

const showProduct = () => {
    if(products.length == 0){
        console.log("Khong co san pham de hien thi");
    } else {
        console.log(products);
    }
}
// showProduct();

const addProduct = () => {
    const nameProduct = prompt("Nhap ten sp: ");
        if (nameProduct.length < 5) {
            const nameProduct = prompt("Nhap ten sp: ");
        } else {
         const count = products.push(nameProduct);
        }
    console.log(products);
}
// addProduct(); 

const removeProduct = () => {
    for(var i = 0; i < products.length; i++){
        if (products[i] === nameRemove) {
            const nameRemove = prompt("Nhap ten sp can xoa: ");
            products.splice(i, 1);
        } else {
            console.log("không tìm thấy sản phẩm cần xóa");
        }
    }
    console.log(products);
}
// removeProduct();

const updateProduct = () => {
    const nameUpdate = prompt("Nhap ten sp can cap nhat: ");
    const index = products.findIndex((product) => product === nameUpdate);  
    if (index === -1) {
      console.log("Khong tim thay sp can cap nhat ");
    } else {
      const newProduct = prompt("Cap nhat ten sp la: ");
      products[index] = newProduct;  
      console.log(products);
    }
  };
// updateProduct();

const removeAllProduct = () => {
    products.splice(0, products.length); // Xóa toàn bộ phần tử trong mảng product
    showProduct(); // Gọi lại hàm showProduct
  };

removeAllProduct();
  