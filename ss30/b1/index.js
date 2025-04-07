let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];
let check = 1, dai = products.length, cart = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            alert(products.map(s => `id: ${s.id} - tên: ${s.name} - giá: ${s.price} - mô tả: ${s.category}`).join("\n"))
            break;
        case 2:
            {
                let id = +prompt("mời bạn nhập id: ");
                let index = products.findIndex(s => s.id === id);
                if (index === -1) {
                    alert("không tìm thấy")
                } else {
                    let mua = +prompt("mời bạn nhập số lượng mua: ");
                    if (isNaN(mua) || !mua) {
                        alert("không hợp lệ")
                    } else {
                        if (products[index].quantity < mua) {
                            alert("số lượng không đủ")
                        } else {
                            let temp = {
                                id: products[index].id,
                                name: products[index].name,
                                price: products[index].price,
                                category: products[index].category,
                                quantity: mua,
                            }
                            cart.push(temp)
                            products[index].quantity-=mua;
                            alert("mua thành công")
                        }
                    }
                }
                break
            }
        case 3:
            {
                let check=1;
                do{
                    let chose = +prompt(`
                        ============== MENU ===========
                        1. Tăng dần.
                        2. Giảm dần.
                        3. Thoát.
                        ===============================
                        Lựa chọn của bạn: `);
                        switch(chose){
                            case 1:
                                for(let i=0;i<products.length-1;i++){
                                    for(let j=0;j<products.length-1-i;j++){
                                        if(products[j].price>products[j+1].price){
                                            let temp =products[j];
                                            products[j]=products[j+1]
                                            products[j+1]=temp;
                                        }
                                    }
                                }
                                case 2:
                                    for(let i=0;i<products.length-1;i++){
                                        for(let j=0;j<products.length-1-i;j++){
                                            if(products[j].price<products[j+1].price){
                                                let temp =products[j];
                                                products[j]=products[j+1]
                                                products[j+1]=temp;
                                            }
                                        }
                                    }
                                case 3:
                                    check=0;
                                    break
                                
                        }
                }while(check!=0)
            }
            break;
        case 4:
            {
                let total=cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
                alert(` tổng tiền là: ${total} VNĐ`)
                break;
            }
        case 5:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
