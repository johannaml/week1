const profileImage = document.querySelector("#profileImage");
const FirstnameSpan = document.querySelector("#Firstname");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const BtnUpdateProfile = document.querySelector("#updateBtn");

const isWizard = confirm("Are you a wizard?");
//console.log(typeof isWizard);

if(isWizard === true){
    console.log("Welcome to Hogwarts!");
}
else {
    profileImage.src = "images/image2.jpg";
    FirstnameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = "12";
    statusSpan.innerHTML = "Muggle";
}

BtnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.jpg";
    FirstnameSpan.innerHTML = "Lara Croft";
    ageSpan.innerHTML = "25";
    statusSpan.innerHTML = "Tomb Raider";
});