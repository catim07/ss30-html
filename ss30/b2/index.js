let book = [
    {
        id: 1,
        name: "rùa và thỏ",
        price: 200000,
        quantity: 20,
        category: "thiếu nhi",
    },
    {
        id: 2,
        name: "lập trình javaScrip",
        price: 900000,
        quantity: 2,
        category: "tài liệu",
    },
]
let check = 1, dai = book.length, cart = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Hiển thị danh sách sách theo thể loại.
        2. Thêm sách mới vào kho.
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách.
        5. Sắp xếp sách theo giá
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let loai = prompt("mời bạn nhập thể loại muốn xem:");
            if (!isNaN(loai)) {
                alert("không hợp lệ")
                break
            }
            let index = book.filter(s => s.category.toLowerCase().includes(loai.toLowerCase()))
            if (index.length < 1) {
                alert("không có thể loại bạn nhập")
            } else {
                alert(index.map(s => `id: ${s.id} - name: ${s.name} - giá: ${s.price} - số lượng: ${s.price} - thể loại: ${s.category}`))
            }
            break;
        case 2:
            {
                let name = prompt("mời bạn nhập tên: ");
                let price = prompt("mời bạn nhập giá: ");
                let quantity = prompt("mời bạn nhập số lượng: ");
                let category = prompt("mời bạn nhập thể loại: ")
                dai += 1;
                let temp = {
                    id: dai,
                    name: name,
                    price: price,
                    category: category,
                    quantity: quantity,
                }
                book.push(temp);
                alert("thêm thành công")
                break
            }
        case 3:
            {
                let chon = +prompt("mời bạn nhập( số 1 là kiếm theo tên/số 2 là kiếm theo id): ")
                if (isNaN(chon) || !chon) {
                    alert("không hợp lệ");
                } else if (chon === 1) {
                    let ten = prompt("mời bạn nhập tên để tìm")
                    if (!isNaN(ten)) {
                        alert("không hợp lệ")
                    }
                    let index = book.filter(s => s.name.toLowerCase().includes(ten.toLowerCase()))
                    if (index.length < 1) {
                        alert("không tìm thấy")
                    }
                    alert(index.map(s => `id: ${s.id} - name: ${s.name} - giá: ${s.price} - số lượng: ${s.price} - thể loại: ${s.category}`))
                } else if (chon == 2) {
                    let id = +prompt("mời bạn nhập id để tìm")
                    if (isNaN(id)) {
                        alert("không hợp lệ")
                    }
                    let indexx = book.filter(s => s.id === id)
                    if (indexx === 0) {
                        alert("không tìm thấy")
                    }
                    alert(indexx.map(s => `id: ${s.id} - name: ${s.name} - giá: ${s.price} - số lượng: ${s.price} - thể loại: ${s.category}`))
                } else (
                    alert("không hợp lệ")
                )
            }
            break;
        case 4:
            {
                let id = +prompt("mời bạn nhập id: ");
                let index = book.findIndex(s => s.id === id);
                if (index === -1) {
                    alert("không tìm thấy")
                } else {
                    let mua = +prompt("mời bạn nhập số lượng mua: ");
                    if (isNaN(mua) || !mua) {
                        alert("không hợp lệ")
                    } else {
                        if (book[index].quantity < mua) {
                            alert("số lượng không đủ")
                        } else {
                            let temp = {
                                id: book[index].id,
                                name: book[index].name,
                                price: book[index].price,
                                category: book[index].category,
                                quantity: mua,
                            }
                            cart.push(temp)
                            book[index].quantity -= mua;
                            alert("mua thành công")
                        }
                    }
                }
                break
            }
        case 5:
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
                                for(let i=0;i<book.length-1;i++){
                                    for(let j=0;j<book.length-1-i;j++){
                                        if(book[j].price>book[j+1].price){
                                            let temp =book[j];
                                            book[j]=book[j+1]
                                            book[j+1]=temp;
                                        }
                                    }
                                }
                                case 2:
                                    for(let i=0;i<book.length-1;i++){
                                        for(let j=0;j<book.length-1-i;j++){
                                            if(book[j].price<book[j+1].price){
                                                let temp =book[j];
                                                book[j]=book[j+1]
                                                book[j+1]=temp;
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
        case 6:
            {
                let total=cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
                alert(` tổng tiền là: ${total} VNĐ`)
                break;
            }
        case 7:
            {
                let total=book.reduce((acc,curr)=>acc+curr.quantity,0)
                alert(` tổng sách trong kho là: ${total} sách`)
                break;
            }
        case 8:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
