const delayBeforeHearts = 3000; 

setTimeout(() => {
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random()*100+"vw";
    heart.style.animationDuration = (Math.random()*2+2)+"s";

    document.querySelector(".block").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}
setInterval(createHeart,200);
}, delayBeforeHearts);