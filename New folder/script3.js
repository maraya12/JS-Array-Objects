//1. Create a predefined objects in an array (10 objects) and display it on HTML

let products = [
    {
        pname:"Anello Backpack Purple with Pink",
        price:"₱ 2,000.00",
        pcode:"ANLBKPK001",
        description:"",
        manufacturer:"Anello Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32841688638.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1YKAXa3fN8KJjSZFIq6A0UFXaL/School-Backpacks-For-Teenage-gilrs-and-boys-anello-school-Backpack-College-Bag-people-Lightweight-Ring-Backpack.jpg_640x640.jpg"
    },
    {
        pname:"Anello Backpack Black",
        price:"₱ 2,500.00",
        pcode:"ANLBKPK002",
        description:"",
        manufacturer:"Anello Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32841688638.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1Kh3NdNTI8KJjSspiq6zM4FXag/School-Backpacks-For-Teenage-gilrs-and-boys-anello-school-Backpack-College-Bag-people-Lightweight-Ring-Backpack.jpg_640x640.jpg"
    },
    {
        pname:"Anello Backpack Skyblue",
        price:"₱ 2,500.00",
        pcode:"ANLBKPK003",
        description:"",
        manufacturer:"Anello Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32841688638.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1da.7dL2H8KJjy1zkq6xr7pXaw/School-Backpacks-For-Teenage-gilrs-and-boys-anello-school-Backpack-College-Bag-people-Lightweight-Ring-Backpack.jpg_640x640.jpg"
    },
    {
        pname:"Anello Backpack Red",
        price:"₱ 2,000.00",
        pcode:"ANLBKPK004",
        description:"",
        manufacturer:"Anello Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32841688638.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1vojJa0LO8KJjSZPcq6yV0FXaJ/School-Backpacks-For-Teenage-gilrs-and-boys-anello-school-Backpack-College-Bag-people-Lightweight-Ring-Backpack.jpg_640x640.jpg"
    },
    {
        pname:"Doughnut Backpack White with Blue",
        price:"₱ 3,500.00",
        pcode:"DNTBKPK001",
        description:"",
        manufacturer:"Doughnut Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32978197785.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1jk8SJCzqK1RjSZFLq6An2XXa1/Doughnut-Backpack-School-Bag-for-Teenagers-College-Nylon-Student-backpack-Laptop-women-bags.jpg_640x640.jpg"
    },
    {
        pname:"Doughnut Backpack Blue with Pink",
        price:"₱ 3,500.00",
        pcode:"DNTBKPK002",
        description:"",
        manufacturer:"Doughnut Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32978197785.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1ysd6JsfpK1RjSZFOq6y6nFXaB/Doughnut-Backpack-School-Bag-for-Teenagers-College-Nylon-Student-backpack-Laptop-women-bags.jpg"
    },
    {
        pname:"Doughnut Backpack White with Orange",
        price:"₱ 3,500.00",
        pcode:"DNTBKPK003",
        description:"",
        manufacturer:"Doughnut Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32978197785.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1DrOiJxjaK1RjSZKzq6xVwXXa1/Doughnut-Backpack-School-Bag-for-Teenagers-College-Nylon-Student-backpack-Laptop-women-bags.jpg_640x640.jpg",

    },
    {
        pname:"Doughnut Backpack Purple with Pink",
        price:"₱ 3,500.00",
        pcode:"DNTBKPK004",
        description:"",
        manufacturer:"Doughnut Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32978197785.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1K90TJrvpK1RjSZPiq6zmwXXaN/Doughnut-Backpack-School-Bag-for-Teenagers-College-Nylon-Student-backpack-Laptop-women-bags.jpg_640x640.jpg"
    },
    {
        pname:"Anello Mini Edition Pink",
        price:"₱ 1,500.00",
        pcode:"ANLMINI001",
        description:"",
        manufacturer:"Anello Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32938389556.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1K5.rfAPoK1RjSZKbq6x1IXXaI/800D-Oxford-cloth-waterproof-Children-s-backpack-Lightweight-Ring-school-bag-kindergarten-mini-bag-snack-bag.jpg_640x640.jpg"
    },
    {
        pname:"Anello Mini Edition Purple",
        price:"₱ 1,500.00",
        pcode:"ANLMINI001",
        description:"",
        manufacturer:"Anello Philippines",
        stocks:"In stock",
        supplier:"Philippine Outfit Destination",
        url:"https://www.aliexpress.com/item/32938389556.html",
        imgurl:"https://ae01.alicdn.com/kf/HTB1PI7rXe6sK1RjSsrbq6xbDXXan/800D-Oxford-cloth-waterproof-Children-s-backpack-Lightweight-Ring-school-bag-kindergarten-mini-bag-snack-bag.jpg_640x640.jpg"

    }
]

let output = "";

products.forEach(function(item){

    if (item.imgurl == undefined)

    {

        item.imgurl = "https://via.placeholder.com/300"

    }

    output += `<div class='item'>
    <img style="width:300px; display:inline" src = ${item.imgurl}>

    <a href = "${item.url}"> ${item.pname} </a>
    </div>
    `

})

document.getElementById('container').innerHTML = output