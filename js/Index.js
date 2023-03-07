// hide elements 

let SliderDesktop = document.querySelectorAll(".SliderDesktop li");

for(let i = 0; i<SliderDesktop.length; i++) {
    if(i!=0){
        SliderDesktop[i].style.display = "none";
    }
}

let navItemMobile = document.querySelectorAll(".SliderMobile li");

for(let i = 0; i<navItemMobile.length; i++) {
    if(i!=0){
        navItemMobile[i].style.display = "none";
    }
}

let SliderTextItems = document.querySelectorAll("#SliderText li");

for(let i = 0; i<SliderTextItems.length; i++) {
    if(i!=0){
        SliderTextItems[i].style.display = "none";
    }
}

// navbar 

let open, close, Navbar, NavHeader, nav, navShadow, body;
open = document.querySelector(".open");
close = document.querySelector(".close");
Navbar = document.querySelector("#Navbar");
NavHeader = document.querySelector(".NavHeader");
nav = document.querySelector("nav");
navShadow = document.querySelector("#navShadow");
body = document.querySelector("body");


open.addEventListener("click",()=>{
    NavHeader.classList.add("navHidden");
    Navbar.classList.add("navActive");
    nav.classList.add("navA");
    navShadow.style.display = "block";
    navShadow.classList.add("navShadow");
    body.style.overflow = "hidden";
});

close.addEventListener("click",()=>{
    NavHeader.classList.remove("navHidden");
    Navbar.classList.remove("navActive");
    nav.classList.remove("navA");
    navShadow.removeAttribute("style");
    navShadow.classList.remove("navShadow");
    body.removeAttribute("style");
});


// slider 

let DesktopButton, slideIndex;

DesktopButton = document.querySelectorAll("#DesktopButton img");
MobileButtons = document.querySelectorAll("#MobileButtons img");
SliderDesktop = document.querySelectorAll(".SliderDesktop li");
slideIndex = 1;
// prev desktop

DesktopButton[0].addEventListener("click",()=>{
    eksi(1);
});

// next desktop

DesktopButton[1].addEventListener("click",()=>{
    arti(1);
});

// prev mobile

MobileButtons[0].addEventListener("click",()=>{
    eksi(1);
});

// next mobile

MobileButtons[1].addEventListener("click",()=>{
    arti(1);
});


function eksi (i) {
    showSlides(slideIndex-i,"l");
}

function arti(i) {
    showSlides(slideIndex+i,"r");
}

function showSlides(n,y) {
    if (n < 1) {
      slideIndex = SliderDesktop.length;
    } else if (n > SliderDesktop.length) {
      slideIndex = 1;
    } else {
      slideIndex = n;
    }

    imgsShow(SliderDesktop,i,y);
    imgsShow(navItemMobile,i,y);

    for (var i = 0; i < SliderTextItems.length; i++) {
        SliderTextItems[i].classList.remove("textShow");
        SliderTextItems[i].style.display = "none";
      }
      SliderTextItems[slideIndex - 1].style.display = "flex";
      SliderTextItems[slideIndex - 1].classList.add("textShow");
    
  }

  function imgsShow(e,i,y) {
    for (var i = 0; i < e.length; i++) {
        e[i].classList.remove("slideShow");
        e[i].style.display = "none";
        e[i].style.animationName = "";
      }
      e[slideIndex - 1].classList.add("slideShow");
      e[slideIndex - 1].style.display = "block";
      if(y=="l"){
          e[slideIndex - 1].style.animationName = "slideShowL";
      }else {
          e[slideIndex - 1].style.animationName = "slideShowR";
      }
  }


//   button style 

function btnStyle (btnele) {
    btnele.forEach(e=>{
        e.addEventListener("mouseup",(e)=>{
            up(e);
        });
        e.addEventListener("mousedown",(e)=>{
            down(e);
        });
        e.addEventListener("mouseleave",(e)=>{
            leave(e);
        });
    });
}

btnStyle(DesktopButton);
btnStyle(MobileButtons);

function up(e) {
    e.target.style.background = "hsl(0, 0%, 0%)";
}

function down(e) {
    e.target.style.background = " hsl(0, 0%, 27%)";
}

function leave(e) {
    e.target.removeAttribute("style");
}


// page size change detect 

function onWindowResize() {
    var screenWidth = window.innerWidth;
    if (screenWidth > 990) {
        navShadow.removeAttribute("style");
        navShadow.removeAttribute("class");
        nav.classList.remove("navA");
        Navbar.classList.remove("navActive");
        NavHeader.classList.remove("navHidden");
    }

}

window.addEventListener("resize", onWindowResize);
onWindowResize();