// JAVASCRIPT
const trackingUrl = 'https://script.google.com/macros/s/AKfycbxWxD8H6VAZenxdl3jvwMjbtqyf9VXZACOZiIuVTafBkUylkjKLtROvelMH1zgdjY8Q/exec';

links.forEach(link => {
    link.addEventListener('click', () => {
        fetch(trackingUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ link: link.href })
        });
    });
});


//#region - PRELOADER

const fadeOut = () => {
const loaderWrapper=
document.querySelector(".wrapper");
loaderWrapper.classList.add("fade");
}
window.addEventListener("load", fadeOut);

//#endregion

//#region - OFF F12

document.onkeydown = function (e) {

  if (e.key === 'F12') {
      return false;
  }
  
  if (e.ctrlKey && e.shiftKey && e.key === 'i') {
      return false;
  }
  
  if (e.ctrlKey && e.shiftKey && e.key === 'j') {
      return false;
  }
  
  if (e.ctrlKey && e.key === 'u') {
      return false;
  }
}

//#endregion

//#region - API POENI

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

//#region - MOBILNI MENI
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        document.body.classList.add('no-scroll');
        document.addEventListener('touchmove', preventScroll, { passive: false });
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.removeEventListener('touchmove', preventScroll);
    });
}

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !bar.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.removeEventListener('touchmove', preventScroll);
    }
});

function preventScroll(e) {
    e.preventDefault();
}
//#endregion

//#region - TRANSLATE

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

//#endregion

//#region - VIDEO

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pusten video";
  } else {
    video.pause();
    btn.innerHTML = "Pauziran video";
  }
}

//#endregion

//#region - FAQ

if (window.location.href.includes("faq")) {
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

//#region - POPOUT

function myFunkcija() {
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}

//#endregion

//#region - PORUDZBINA

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("take")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.closest(".shopbox"));
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
}

// Hide popup when click outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".naziv").innerHTML;
  document.querySelector(".pp-header p").innerHTML = portfolioItem.querySelector(".poeni").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
};

//#endregion
