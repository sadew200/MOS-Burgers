let orderArID=JSON.parse(localStorage.getItem("orderIdAr"));
let orderArItems=JSON.parse(localStorage.getItem("orderItemsAr"));
let orderArPrice=JSON.parse(localStorage.getItem("orderPriceAr"));

for(let i=0; i<orderArID.length; i++){
    document.getElementById("contain").innerHTML+=
    `<pre>
    Order ID    : ${orderArID[i]}
    Order Items : ${orderArItems[i]}
    Order Price : ${orderArPrice[i]}

    </pre>`
}