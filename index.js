// JAVASCRIPT

//#region - PRELOADER

const fadeOut = () => {
const loaderWrapper=
document.querySelector(".wrapper");
loaderWrapper.classList.add("fade");
}
window.addEventListener("load", fadeOut);

//#endregion

//#region - HEADER
document.addEventListener("DOMContentLoaded", function () {
       const navLinks = document.querySelectorAll(".nav-links li a");
       const sections = document.querySelectorAll("section");
       const headerHeight = document.querySelector("#header").offsetHeight; // Dobij visinu header-a

       // Funkcija za uklanjanje aktivne klase sa svih linkova
       function removeActiveClass() {
           navLinks.forEach(link => link.classList.remove("active"));
       }

       // Funkcija za postavljanje aktivne klase na osnovu vidljive sekcije
       function setActiveSection() {
           if (window.scrollY <= 50) {
               removeActiveClass();
               const homeLink = document.querySelector('.nav-links li a[href="#hero"]');
               if (homeLink) {
                   homeLink.classList.add("active");
               }
               return;
           }

           let currentSection = null;
           sections.forEach(section => {
               const rect = section.getBoundingClientRect();
               if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                   currentSection = section.getAttribute("id");
               }
           });

           if (currentSection) {
               removeActiveClass();
               const activeLink = document.querySelector(`.nav-links li a[href="#${currentSection}"]`);
               if (activeLink) {
                   activeLink.classList.add("active");
               }
           }
       }

       // Dodaj pomeraj pri kliku na linkove
       navLinks.forEach(link => {
           link.addEventListener("click", function (e) {
               e.preventDefault(); // Spreči podrazumevano skrolovanje
               const targetId = this.getAttribute("href");
               const targetSection = document.querySelector(targetId);
               if (targetSection) {
                   const scrollPosition = targetSection.offsetTop - headerHeight; // Oduzmi visinu header-a
                   window.scrollTo({
                       top: scrollPosition,
                       behavior: "smooth" // Glatko skrolovanje
                   });
                   removeActiveClass();
                   this.classList.add("active");
               }
           });
       });

       // Postavi aktivnu klasu na osnovu trenutne sekcije pri učitavanju stranice
       const currentHash = window.location.hash || "#hero";
       const activeLink = document.querySelector(`.nav-links li a[href="${currentHash}"]`);
       if (activeLink) {
           removeActiveClass();
           activeLink.classList.add("active");
       }

       // Pratite skrolovanje
       window.addEventListener("scroll", setActiveSection);

       // Pratite promene u hash-u
       window.addEventListener("hashchange", function () {
           const currentHash = window.location.hash || "#hero";
           const activeLink = document.querySelector(`.nav-links li a[href="${currentHash}"]`);
           if (activeLink) {
               removeActiveClass();
               activeLink.classList.add("active");
           }
       });
   });
//#endregion

//#region - API POENI
function otvoriModal() {
  document.getElementById("modal").style.display = "flex";
}
function zatvoriModal() {
  document.getElementById("modal").style.display = "none";
}

function proveriPoene(){
	var username = document.getElementById("username").value;

	getAmount(username);
}

function getAmount(username) {
    fetch(`https://tikfinity.zerody.one/api/rest/channeluser?channelId=75618&username=${username}`, { method: 'GET' })
    .then(response => response.json())
    .then(response => response.channelusers[0].totalAmount)
	
    .then(amount => {
        const p = document.getElementById('rezultat');
        p.innerHTML = "Imate " + amount + " poena";
    })
    .catch(() => {
		const p = document.getElementById('rezultat');
        p.innerHTML = "Nazalost, nemate poena";
	});
}

//#endregion

//#region - BACK TO TOP

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
scrollFunction();
};
function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	){
	    mybutton.style.display = "block";
	}else{
	    mybutton.style.display = "none";
	}
	}
	mybutton.addEventListener("click", backToTop);
	function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//#endregion

//#region - FAQ

if (window.location.href.includes("/")) {
const buttons = document.querySelectorAll('button');
buttons.forEach( button =>{
button.addEventListener('click',()=>{
	const faq = button.nextElementSibling;
	const icon = button.children[1];
	faq.classList.toggle('show');
	icon.classList.toggle('rotate');
	})
})
}	

//#endregion
