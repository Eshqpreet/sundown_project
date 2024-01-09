const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var eleC = document.querySelector(".elem-container")
var eled = document.querySelector(".fixed-image")

eleC.addEventListener("mouseenter", () => {
    eled.style.display = "block";
})

eleC.addEventListener("mouseleave", () => {
    eled.style.display = "none";
})

var elems = document.querySelectorAll(".ele")
elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        var image = e.getAttribute("data-image")
        eled.style.backgroundImage = `url(${image})`
    })
})

// var ele1 = document.querySelector(".ele")
// ele1.addEventListener("mouseenter", () => {
//     var image = ele1.getAttribute("data-image")
//     // console.log(image);
//     eled.style.backgroundImage = `url(${image})`
// })

