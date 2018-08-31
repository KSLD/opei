// let data = [
//     {'city': 'A', 'county': 'A-1'},
//     {'city': 'B', 'county': 'B-1'},
//     {'city': 'B', 'county': 'B-2'},
//     {'city': 'C', 'county': 'C-1'},
// ]

// let o = {
//     'A': {'A-1':{true}},
//     'B': {'B-1':{true}, 'B-2':{true}},
//     'C': {'C-1':{true}}
// }
// let o = {
 //      {'A':['A-1':{true}]},
 //     {'B': [{'B-1':{true}, 'B-2':{true}]},
 //     {'C': [{'C-1':{true}]}
 // }

// for (let key in o) {
//     console.log('市：'+key);
//     o[key].forEach(value => console.log('县：'+value));
// }
let f=(arr) =>{
    let k, v, ob = {};
    arr.forEach(item => {
        k = item.city;
        v = item.county;
        if (!ob[k]) {
            ob[k] = {};
        }
        if (!ob[k][v]) {
            ob[k][v] = true;
        }
    })
    return ob;
}
<!--调用数据 -->
let o = f(database);
<!--定义函数，设置数据列表 -->

<!--遍历数据，调用函数，添加元素 -->
for (let city in o) {
    let countyObj=o[city];
    sortingData('a', 'cityItem', city, '.address .list');
    for(let county in countyObj){
        if (county!='undefined') {
            sortingData('a', 'countyItem', county, '.address .list')
        }
    }
}