// var home = document.getElementById('Home');
// var profile = document.getElementById('Profile');

// // const homecontainer = document.getElementsByClassName('home');
// const homecontainer = document.querySelector('#cont-home');


// home.addEventListener('click', () =>{
//     home.classList.toggle('active');
// });

// profile.addEventListener('click', () =>{
//     profile.classList.toggle('active');
//     homecontainer.style;
// });




var home = document.getElementById('Home');
var profile = document.getElementById('Profile');
var coleague = document.getElementById('Coleagues');
var doc = document.getElementById('Documents');
var sal = document.getElementById('Salary');
var note = document.getElementById('Notices');

const homecontainer = document.querySelector('#cont-home');
const profilecontainer = document.querySelector('#cont-profile');
const coleaguescontainer = document.querySelector('#cont-coleagues');
const doccontainer = document.querySelector('#cont-document');
const salarycontainer = document.querySelector('#cont-salary');
const noticescontainer = document.querySelector('#cont-notices');

window.onload = () =>{
    homecontainer.style.display = "block";
    home.classList.toggle('active');
    profilecontainer.style.display = "none";
    coleaguescontainer.style.display ="none";
    doccontainer.style.display ="none";
    salarycontainer.style.display ="none";
    noticescontainer.style.display ="none";

}

home.addEventListener('click', () => {
    homecontainer.style.display = "block";
    home.classList.toggle('active');
    profilecontainer.style.display = "none";
    coleaguescontainer.style.display ="none";
    doccontainer.style.display ="none";
    salarycontainer.style.display ="none";
    noticescontainer.style.display ="none";
});

profile.addEventListener('click', () => {
    profilecontainer.style.display = "block";
    profile.classList.toggle('active');
    homecontainer.style.display = "none";
    coleaguescontainer.style.display ="none";
    doccontainer.style.display ="none";
    salarycontainer.style.display ="none";
    noticescontainer.style.display ="none";
});

coleague.addEventListener('click', () => {
    home.classList.remove('active');
    profile.classList.remove('active');
    coleaguescontainer.style.display = "block";
    coleague.classList.toggle('active');
    homecontainer.style.display = "none";
    profilecontainer.style.display ="none";
    doccontainer.style.display ="none";
    salarycontainer.style.display ="none";
    noticescontainer.style.display ="none";
});

// doc.addEventListener('click', () => {
//     profile.classList.toggle('active');
//     homecontainer.style.display = "none";
// });
// sal.addEventListener('click', () => {
//     profile.classList.toggle('active');
//     homecontainer.style.display = "none";
// });
// note.addEventListener('click', () => {
//     profile.classList.toggle('active');
//     homecontainer.style.display = "none";
// });