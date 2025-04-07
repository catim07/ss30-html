let phone = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 34990000,
        quantity: 50,
        company: "Apple",
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 32990000,
        quantity: 40,
        company: "Samsung",
    }
]
let check = 1, dai = phone.length, cart = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hàng
        9. Thoát chương trình
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let loai = prompt("mời bạn nhập hãng:");
            if (!isNaN(loai)) {
                alert("không hợp lệ")
                break
            }
            let index = phone.filter(s => s.company.toLowerCase().includes(loai.toLowerCase()))
            if (index.length < 1) {
                alert("không có thể loại bạn nhập")
            } else {
                alert(index.map(s => `id: ${s.id} - name: ${s.name} - giá: ${s.price} - số lượng: ${s.quantity} - hãng: ${s.company}`))
            }
            break;
        case 2:
            {
                let name = prompt("mời bạn nhập tên: ");
                let price = prompt("mời bạn nhập giá: ");
                let quantity = prompt("mời bạn nhập số lượng: ");
                let company = prompt("mời bạn nhập hãng: ")
                dai += 1;
                let temp = {
                    id: dai,
                    name: name,
                    price: price,
                    quantity: quantity,
                    company: company,
                }
                phone.push(temp);
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
                    let index = phone.filter(s => s.name.toLowerCase().includes(ten.toLowerCase()))
                    if (index.length < 1) {
                        alert("không tìm thấy")
                    }
                    alert(index.map(s => `id: ${s.id} - name: ${s.name} - giá: ${s.price} - số lượng: ${s.quantity} - hãng: ${s.company}`))
                } else if (chon == 2) {
                    let id = +prompt("mời bạn nhập id để tìm")
                    if (isNaN(id)) {
                        alert("không hợp lệ")
                    }
                    let indexx = phone.filter(s => s.id === id)
                    if (indexx === 0) {
                        alert("không tìm thấy")
                    }
                    alert(indexx.map(s => `id: ${s.id} - name: ${s.name} - giá: ${s.price} - số lượng: ${s.quantity} - hãng: ${s.company }`))
                } else (
                    alert("không hợp lệ")
                )
            }
            break;
        case 4:
            {
                let id = +prompt("mời bạn nhập id: ");
                let index = phone.findIndex(s => s.id === id);
                if (index === -1) {
                    alert("không tìm thấy")
                } else {
                    let mua = +prompt("mời bạn nhập số lượng mua: ");
                    if (isNaN(mua) || !mua) {
                        alert("không hợp lệ")
                    } else {
                        if (phone[index].quantity < mua) {
                            alert("số lượng không đủ")
                        } else {
                            let temp = {
                                id: phone[index].id,
                                name: phone[index].name,
                                price: phone[index].price,
                                category: phone[index].category,
                                quantity: mua,
                            }
                            cart.push(temp)
                            phone[index].quantity -= mua;
                            alert("mua thành công")
                        }
                    }
                }
                break
            }
        case 5:
            {
                cart.splice(0, phone.length);
                alert(`thanh toán thành công`)
                break;
            }
        case 6:
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
                                for(let i=0;i<phone.length-1;i++){
                                    for(let j=0;j<phone.length-1-i;j++){
                                        if(phone[j].price>phone[j+1].price){
                                            let temp =phone[j];
                                            phone[j]=phone[j+1]
                                            phone[j+1]=temp;
                                        }
                                    }
                                }
                                case 2:
                                    for(let i=0;i<phone.length-1;i++){
                                        for(let j=0;j<phone.length-1-i;j++){
                                            if(phone[j].price<phone[j+1].price){
                                                let temp =phone[j];
                                                phone[j]=phone[j+1]
                                                phone[j+1]=temp;
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
        case 7:
            {
                let total=phone.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
                alert(` tổng tiền các điện thoại trong kho là: ${total} VNĐ`)
                break;
            }
        case 8:
            {
                alert(phone.map(s => `${s.company} - ${s.quantity}`).join("\n"))
                break;
            }
        case 9:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
