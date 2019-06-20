/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var notification = document.querySelector('.notification');
var like = document.getElementById("likeButton");
var dislike = document.getElementById("dislikeButton");
var h1 = document.getElementsByTagName('h1')[0];
var div = document.querySelector('.slide');
var controls = document.querySelector(".controls");

h1.innerHTML = "Begin met swipen en match met mensen";


//If class 'notificationactive' is toggled, reveal the class
//With setTimeout the class notificationactive will be shown after 300ms
var reveal = function () {
    setTimeout(function () {
        notification.classList.toggle('notificationactive');
    }, 300);
};

//If class 'notificationgone' is toggled, unreveal the class
//With setTimeout the class notificationgone will be shown after 300ms
var unreveal = function () {
    setTimeout(function () {
        notification.classList.toggle('notificationgone');
    }, 300);
};

//If the dislike button is clicked, The text will be red after 300ms
dislike.onclick = function () {
    setTimeout(function () {
        div.style.color = "red";
    }, 300);

};

//If the like button is clicked, The text will be green after 300ms
like.onclick = function () {
    setTimeout(function () {
        div.style.color = "green";
    }, 300);

};


//Adds an event to the dislike button. What kind of action does it have
dislike.addEventListener('click', unreveal);
//Adds an event to the like button. What kind of action does it have
like.addEventListener('click', reveal);

