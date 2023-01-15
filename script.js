let bar = document.getElementById("bar")
let close = document.getElementById("close")

let ul = document.querySelector("#header ul")

bar.onclick = function () {
    ul.style.right = "0"
}

close.onclick = function () {
    ul.style.right = "-300px"
}

// page pro
//  تغير صور المنتج 
let Img_All = document.querySelectorAll(".small-img-col img");
let img_big = document.getElementById("MainImg");

Img_All.forEach(img => {
    img.onclick = () => img_big.src = img.src;
});
// 

let proes = document.querySelectorAll(".pro");

proes.forEach( pro => pro.onclick =  () => window.location.href = 'sproduct.html');

// 

// Emailjs

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let text = document.getElementById("text");
let but_email = document.querySelector(".but_email");

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        text: document.getElementById("text").value,
    }
    const serviceID = "service_nkwc1qk";
    const templateID = "template_fzx515m";
    emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("name").value =  "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("text").value = "";
        console.log(res);
        alert("Your message sent successfully")
    }).catch((err) => console.log(err));
}

