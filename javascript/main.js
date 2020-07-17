// nav menu
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId)
    nav=document.getElementById(navId)

    if(toggle&&nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//active and remove

const navLink=document.querySelectorAll('.nav_link');
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction));


window.addEventListener('scroll',event =>{
    let navi=document.querySelector('nav');
    (window.scrollY >= 100)?navi.classList.add('scroll'):navi.classList.remove('scroll');
});




window.addEventListener('scroll',event =>{
    let navlinkk=document.querySelectorAll('nav ul li a');
    let fromTop=window.scrollY;

    navlinkk.forEach(navik=>{
        let sec=document.querySelector(navik.hash);
        if(
            sec.offsetTop <= fromTop && 
            sec.offsetTop + sec.offsetHeight> fromTop
            
        ) {
            navik.classList.add('active');
        }
        else{
            navik.classList.remove('active');
        }
    });

});


// ScrollReveal

const srl=ScrollReveal({
    origin:'bottom',
    distance:'80px',
    duration:2000,
    reset:true
})


//ScrollHOME
srl.reveal('.home_title',{})
srl.reveal('.home_button',{delay:100})
srl.reveal('.home_img',{delay:400})
srl.reveal('.home_social-icon',{interval:200})

//ScrollABOUT
srl.reveal('.about_img',{})
srl.reveal('.about_subtitle',{})
srl.reveal('.about_text',{delay:200})
srl.reveal('.resume_button',{delay:200})

//ScrollSKILLS
srl.reveal('.skills_subtitle',{delay:200})
srl.reveal('.skills_img',{delay:700})
srl.reveal('.skills_text',{delay:200})
srl.reveal('.skills_data',{interval:200})

//ScrollWORK
srl.reveal('.work_img',{interval:200})

//ScrollContact
srl.reveal('.contact_list',{interval:200})



//StyleSwitcher
const links=document.querySelectorAll(".alternate-color"),
    totalLinks=links.length;
function setActiveStyle(color){
    for(let i=0;i<totalLinks;i++){
        if(color===links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}
// bodyskin
const bodySkin=document.querySelectorAll(".body-skin"),
    totalBodySkin=bodySkin.length;
    for(let i=0;i<totalBodySkin;i++){
        bodySkin[i].addEventListener("change",function(){
            // console.log(this.value)
            if(this.value==="dark"){
                document.body.className="dark"
            }
            else{
                document.body.className=""
            }
        })
    }

document.querySelector(".toggle-style_switcher").addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
