//store the products array in localstorage as "products"
function proData(t, d, p, i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function myFun(eve){
    eve.preventDefault()
    var type = products.type.value;
    var desc = products.desc.value;
    var price = products.price.value;
    var image = products.image.value;

    var pD = new proData(type, desc, price, image)

    // console.log(pD)
    var arr =JSON.parse(localStorage.getItem("products")) || [];
    arr.push(pD)

    localStorage.setItem("products", JSON.stringify(arr))
}