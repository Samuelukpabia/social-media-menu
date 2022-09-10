const menueEl = document.querySelector(".menue");
const menueTextEl = document.querySelector(".menue p");
const socialListEL = document.querySelector(".social-list");
const liELs = document.querySelectorAll(".social-list li");

console.log(liELs);
menueEl.addEventListener("click", ()=>{
    socialListEL.classList.toggle("hide");
    menueEl.classList.toggle("rotate");
});

liELs.forEach((liEL) => {
    liEL.addEventListener("click", ()=>{
        menueTextEl.innerHTML = liEL.innerHTML
        socialListEL.classList.add("hide");
        menueEl.classList.toggle("rotate");
    })
});
