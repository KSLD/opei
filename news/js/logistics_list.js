document.querySelector('input').oninput = function (e) {
    create(search(e.target.value))
}
let create = arr => {
    document.querySelector('.list').innerHTML = '';
    arr.forEach(value => {
        let content = `
                <a href="tel:${value.phone ? value.phone[0] : '114'}"></a>
                <div class="con">
                <span class="county">${value.county}</span>
                <span class="address">${value.address ? value.address : '暂无地址'}</span>
                </div>
              `
        sortingData('li', 'shippingAddress', content, '.address-list .list');
    })
}


let search = function (val) {
    return database.filter(k => {
            let total = k.name + k.city + k.county + k.address + (k.phone && k.phone.join(' '));
            return total.indexOf(val) != -1
        }
    )
}
create(database);
