const article = document.querySelector(".memberOverflow");
const articleNew = document.getElementById("rwdmember");
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firtform = document.getElementById("form1");
const secondform = document.getElementById("form2");
const container = document.querySelector(".container-member")

signInBtn.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active")   
})

signUpBtn.addEventListener("click", ()=>{
    container.classList.add("right-panel-active")   
})
document.getElementById("memberLog").addEventListener("click", function() {
article.style.display = "grid";

});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".container-member") && event.target == article) {
        article.style.display = "none";
    }
});

document.addEventListener("click", (event) => {
    const rwdmemberElement = document.getElementById("rwdmember");
    
    if (event.target === articleElement) {
        rwdmemberElement.style.display = "none";
    }
});