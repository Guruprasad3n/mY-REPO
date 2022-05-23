var arr =JSON.parse(localStorage.getItem("products")) || [];
gettingdata(arr)

function gettingdata(arr){
    arr.forEach(function(ele){
        var dv = document.createElement("div")
        var image = document.createElement("img");
            image.src = ele.image;
        var type = document.createElement("h4");
            type.innerText = ele.type;
        var desc = document.createElement("p");
            desc.innerText = ele.desc;
        var price = document.createElement("h3")
            price.innerText = ele.price;
        var btn = document.createElement("button")
            btn.innerText="Remove Product"
        
        dv.append(image, type, desc, price, btn)
        document.querySelector("#all_products").append(dv)
    })
}
function removeItem(){

}