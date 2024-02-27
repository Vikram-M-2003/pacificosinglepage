// timercountdown

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let endTimer = new Date("May 18 2024 00:00:00")
setInterval(() => {
    let startTimer = new Date();
    let diff = endTimer - startTimer;
    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor(diff/1000/60/60) % 24;
    let m = Math.floor(diff/1000/60) % 60;
    let s = Math.floor(diff/1000) % 60;
    
    days.innerHTML = d<10?"0"+d:d;
    hours.innerHTML = h<10?"0"+h:h;
    minutes.innerHTML = m<10?"0"+m:m;
    seconds.innerHTML = s<10?"0"+s:s;

}, 1000);

// crudform


let fname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let send = document.getElementById("send");
let datasave = document.getElementById("datasave");

send.addEventListener("click",()=>{
    console.log(fname.value);
    let newdiv = document.createElement("div");
    datasave.appendChild(newdiv);
    newdiv.classList.add("newdiv")

    let inputforname = document.createElement("input");
    inputforname.value = fname.value;
    newdiv.appendChild(inputforname);
    inputforname.classList.add("custominput")
    inputforname.setAttribute("readonly","readonly");

    let inputforemail = document.createElement("input");
    inputforemail.value = email.value;
    newdiv.appendChild(inputforemail);
    inputforemail.classList.add("custominput")
    inputforemail.setAttribute("readonly","readonly");

    let inputforphone = document.createElement("input");
    inputforphone.value = phone.value;
    newdiv.appendChild(inputforphone);
    inputforphone.classList.add("custominput")
    inputforphone.setAttribute("readonly","readonly");

    let inputformessage = document.createElement("textarea");
    inputformessage.value = message.value;
    newdiv.appendChild(inputformessage);
    inputformessage.classList.add("customtextarea")
    inputformessage.setAttribute("readonly","readonly");


    let editbutton = document.createElement("button");
    editbutton.innerHTML ="EDIT";
    newdiv.appendChild(editbutton);
    editbutton.classList.add("custombutton");
    editbutton.addEventListener("click",function(){
        inputforname.removeAttribute("readonly","readonly");
        inputforemail.removeAttribute("readonly","readonly");
        inputforphone.removeAttribute("readonly","readonly");
        inputformessage.removeAttribute("readonly","readonly");
    })

    let savebutton = document.createElement("button");
    savebutton.innerHTML ="SAVE";
    newdiv.appendChild(savebutton);
    savebutton.classList.add("custombutton");
    savebutton.addEventListener("click",function(){
        inputforname.setAttribute("readonly","readonly");
        inputforemail.setAttribute("readonly","readonly");
        inputforphone.setAttribute("readonly","readonly");
        inputformessage.setAttribute("readonly","readonly");
    })

    let deletebutton = document.createElement("button");
    deletebutton.innerHTML ="DELETE";
    newdiv.appendChild(deletebutton);
    deletebutton.classList.add("custombutton");
    deletebutton.addEventListener("click",function(){
        newdiv.style.display = "none";
    })

    setInterval(() => {
        newdiv.remove();
    }, 10000);

})
// Detect if a link's href goes to the current page
function getSamePageAnchor (link) {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
      return false;
    }
  
    return link.hash;
  }
  
  // Scroll to a given hash, preventing the event given if there is one
  function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if(elem) {
      if(e) e.preventDefault();
      gsap.to(window, {scrollTo: elem});
    }
  }
  
  // If a link's href is within the current page, scroll to it instead
  document.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', e => {
      scrollToHash(getSamePageAnchor(a), e);
    });
  });
  
  // Scroll to the element in the URL's hash on load
  scrollToHash(window.location.hash);

  var roundLogEl = document.querySelector('#count1');
  var roundLogEl2 = document.querySelector('#count2');
  var roundLogEl3 = document.querySelector('#count3');
  var roundLogEl4 = document.querySelector('#count4');
  var roundLogEl5 = document.querySelector('#count5');



let section9 = document.getElementById("sectionnine").addEventListener("mouseenter",()=>{
  anime({
    targets: roundLogEl,
    innerHTML: [0, 3000+"+"],
    easing: 'linear',
    round: 10 // Will round the animated value to 1 decimal
  });
  anime({
      targets: roundLogEl2,
      innerHTML: [0, 300+"k"],
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal
  });anime({
      targets: roundLogEl3,
      innerHTML: [0, 1500],
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal
  });
  anime({
      targets: roundLogEl4,
      innerHTML: [0, 2500],
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal
  });
  anime({
      targets: roundLogEl5,
      innerHTML: [0, 24+"/7"],
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal
  });
})

// api integartion

const accesskey = "hAaQ1hNCsn-hDee3D0PObwKzrZb3YoH07qg60vg4E0s"


const searchapi = document.querySelector("#searchapi")
const searchresults = document.querySelector(".apiimageresult")
const apisearchbutton = document.querySelector("#apisearchbutton")

let inputdata = ""
let page = 1;

async function searchimage() {
    inputdata = searchapi.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}` ;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
   

    if (page === 1){
        searchresults.innerHTML = "";
    }

    results.map((result) => {
         
        const imagewrapper = document.createElement('div')
        imagewrapper.classList.add("apiimages")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description

        imagewrapper.appendChild(image);
        searchresults.appendChild(imagewrapper);
    })

    page++;
    if(page > 1){
        viewmore.style.display = "block"
    }
}

apisearchbutton.addEventListener("click", (event) =>{
    event.preventDefault()
    page = 1;
    searchimage();
});

// viewmore.addEventListener("click", () =>{
   
//     searchimage();
// });