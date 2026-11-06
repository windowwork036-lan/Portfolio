let links=document.querySelectorAll("#nav-left a");
function updateActivelink(){
let url=window.location.hash;
links.forEach(function(link){
if(link.getAttribute("href")===url){
    link.classList.add("active");
}else{
    link.classList.remove("active");
}
});
}
updateActivelink();
window.addEventListener("hashchange", updateActivelink);
let contactBtn=document.getElementById("hero-contact");
contactBtn.addEventListener("click", function(){
    let section=document.getElementById("Contact");
    section.scrollIntoView({behavior:"smooth"});
});
let user=document.getElementById("name");
let email=document.getElementById("email");
let mess=document.getElementById("message");

let form=document.getElementById("contact-form");
form.addEventListener("submit",function(e){
 let savedMess=`${user.value}${email.value}${mess.value}`;
e.preventDefault();
console.log(savedMess);
});
let toggle=document.getElementById("menu-toggle");
let navLeft=document.getElementById("nav-left");
toggle.addEventListener("click", function(){
navLeft.classList.toggle("show");
});
links.forEach(function(link){
link.addEventListener("click", function(){
navLeft.classList.remove("show");
});
});
let section=document.querySelectorAll("section");
let observer= new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
    links.forEach(function(link){
     if(link.getAttribute("href").slice(1)===entry.target.id){
      link.classList.remove("active");
     }else{
        link.classList.add("active");
     }
    });
}
});
});
