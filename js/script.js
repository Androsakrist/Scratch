/*navbar transition color*/
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.navbar').addClass("top");
        }else{
            $('.navbar').removeClass("top");
        }
    })
})

// SHOW MENU
function dropdownMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
                nav.classList.toggle('dropdown-menu');
            });
    }
}

dropdownMenu('toggle-nav', 'menu')

const linkMenu = document.querySelectorAll('.link-menu')

function closeMenu(){
    const navList = document.getElementById('menu')
    navList.classList.remove('dropdown-menu')
}
linkMenu.forEach((n) => n.addEventListener('click', closeMenu)) 

const sections = document.querySelectorAll("section[id]")

function scrollActive(){
    const scrollVert = window.pageYOffset

    sections.forEach(current => {
        const sectionH = current.offsetH
        const sectionT = current.offsetT - 50
        sectionId = current.getAttribute('id')

        if(scrollVert > sectionT && scrollVert <= sectionT + sectionH){
            document.querySelector('.menu-nav a[href*=' + sectionId + ']').classList.add('active-scroll')
        }else{
            document.querySelector('.menu-nav a[href*=' + sectionId + ']').classList.remove('active-scroll')
        }
    })
}
window.addEventListener('scroll', scrollActive)
scrollActive('menu-nav')
