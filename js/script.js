// menu bar !!!
var menuItems=document.getElementById("MenuItems");
            
MenuItems.style.maxHeight="0px";
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight="200px";
    }
    else{
        MenuItems.style.maxHeight="0px";
    }
}

// products details
// var productImg=document.getElementById("productImg");
// var smallImg=document.getElementsByClassName("small-img");

// smallImg[0].onclick=function(){
//     productImg.src=smallImg[0].src;
// }
//  smallImg[1].onclick=function(){
//     productImg.src=smallImg[1].src;
// }
//   smallImg[2].onclick=function(){
//     productImg.src=smallImg[2].src;
// }
//    smallImg[3].onclick=function(){
//     productImg.src=smallImg[3].src;
// }

var products = document.querySelectorAll(".prodd");
var details = document.querySelectorAll(".det_")
console.log(products);



var image = document.querySelector("#lol");

image.src = "images/test pics/charging station/main.jpg"
// console.log(products[0].querySelector('h1').innerText) 



// for (var i = 0; i < products.length; i++) {
//   products[i].addEventListener("click", function () {
//     const clickedTitle = this.querySelector("h4").innerText;
//     const clickedPrice = this.querySelector("p").innerText;
//     const clickedImage = this.querySelector("img").src;

//     document.querySelector("#productName").innerText = clickedTitle;
//     document.querySelector("#productPrice").innerText = clickedPrice;
//     document.querySelector("#productImg").src = cli  ckedImage;
//   });
// }



