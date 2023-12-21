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


    
window.addEventListener("scroll", function () {
    var icon = document.getElementById("scrollToTopButton");
    if (window.pageYOffset > 500) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });
  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }