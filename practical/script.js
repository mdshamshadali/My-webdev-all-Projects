console.log ("shamshad");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "pink";
// boxes[3].style.backgroundColor = "aqua";
// boxes[4].style.backgroundColor = "red";
// boxes[1].style.backgroundColor = "blue";

// document.getElementById("sham").style.backgroundColor = "pink";
// document.querySelector(".box").style.backgroundColor = "blue"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";
})